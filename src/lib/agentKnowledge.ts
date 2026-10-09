// Grounded lookup for the site assistant: matches a visitor's question against the
// published FAQ and the service catalogue, so answers only ever say what the site says.

import { FAQ_DATA } from '../data/faq';

export interface ServiceLite {
    slug: string;
    title: string;
    subtitle: string;
}

export type AgentAnswer =
    | { kind: 'services'; matches: ServiceLite[] }
    | { kind: 'faq'; question: string; answer: string }
    | { kind: 'none' };

const STOPWORDS = new Set([
    'the', 'and', 'for', 'are', 'with', 'what', 'how', 'can', 'does', 'did', 'you', 'your', 'our', 'any', 'this',
    'that', 'have', 'has', 'need', 'want', 'get', 'about', 'from', 'into', 'will', 'would', 'should', 'could',
    'please', 'help', 'tell', 'know', 'which', 'when', 'who', 'why', 'there', 'their', 'than', 'then', 'also',
    'india', 'indian', 'service', 'services', 'registration', 'register', 'filing', 'file', 'online',
]);

// Common abbreviations visitors type, mapped to the words the catalogue uses.
const ALIASES: Record<string, string> = {
    pvt: 'private',
    ltd: 'limited',
    opc: 'one person',
    itr: 'income tax',
    tm: 'trademark',
    incorporation: 'company',
    incorporate: 'company',
};

export function tokenize(text: string): string[] {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, ' ')
        .split(/\s+/)
        .flatMap((w) => (ALIASES[w] ? ALIASES[w].split(' ') : [w]))
        .filter((t) => t.length >= 3 && !STOPWORDS.has(t));
}

// Whole-word matching with simple plural tolerance ("trademarks" ~ "trademark").
// Substring matching is deliberately avoided: "do" must not match "Indonesia".
const words = (text: string) => new Set(text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean));
const has = (set: Set<string>, t: string) => set.has(t) || set.has(`${t}s`) || (t.endsWith('s') && set.has(t.slice(0, -1)));

const firstParagraph = (answer: string, max = 420) => {
    const para = answer.split('\n\n')[0].trim();
    if (para.length <= max) return para;
    const cut = para.slice(0, max);
    const lastStop = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('; '));
    return (lastStop > 120 ? cut.slice(0, lastStop + 1) : cut.trimEnd() + '…');
};

export function findAnswer(query: string, services: ServiceLite[]): AgentAnswer {
    const tokens = tokenize(query);
    if (!tokens.length) return { kind: 'none' };

    // 1) Service catalogue: title hits matter most; wording like "register" / "file" nudges
    //    toward registration / filing services. Up to three candidates are returned so an
    //    ambiguous query shows options instead of a single wrong guess.
    const raw = words(query);
    const wantsRegistration = ['register', 'registration', 'incorporation', 'incorporate', 'start', 'open'].some((w) => raw.has(w));
    const wantsFiling = ['filing', 'file', 'return', 'returns'].some((w) => raw.has(w));
    const candidates: { s: ServiceLite; score: number }[] = [];
    for (const s of services) {
        const title = words(s.title);
        const slug = words(s.slug.replace(/-/g, ' '));
        const sub = words(s.subtitle || '');
        let score = 0;
        let titleHits = 0;
        for (const t of tokens) {
            if (has(title, t)) { score += 3; titleHits++; }
            else if (has(slug, t)) score += 2;
            else if (has(sub, t)) score += 1;
        }
        if (titleHits < 1 || titleHits * 3 < tokens.length) continue;
        if (title.has('registration')) score += 0.5; // canonical product page leads for generic queries
        if (wantsRegistration && (title.has('registration') || title.has('incorporation'))) score += 1.5;
        if (wantsFiling && (title.has('filing') || title.has('return') || title.has('returns'))) score += 1.5;
        score -= title.size * 0.01; // ties go to the shorter, more generic title
        candidates.push({ s, score });
    }
    candidates.sort((x, y) => y.score - x.score);
    const bestService = candidates[0] ?? null;

    // 2) FAQ — question hits weigh more than answer hits.
    let bestFaq: { q: string; a: string; score: number } | null = null;
    for (const cat of FAQ_DATA) {
        for (const item of cat.items) {
            const q = words(item.question);
            const a = words(item.answer);
            let score = 0;
            let qHits = 0;
            for (const t of tokens) {
                if (has(q, t)) { score += 3; qHits++; }
                else if (has(a, t)) score += 1;
            }
            if (qHits >= 1 && score >= Math.min(5, tokens.length * 3 - 1) && (!bestFaq || score > bestFaq.score)) {
                bestFaq = { q: item.question, a: item.answer, score };
            }
        }
    }

    // Question-shaped queries ("how much…", "what happens if…") prefer the FAQ when it is a clear win.
    if (bestFaq && (!bestService || bestFaq.score > bestService.score + 2)) {
        return { kind: 'faq', question: bestFaq.q, answer: firstParagraph(bestFaq.a) };
    }
    if (bestService) {
        const seen = new Set<string>();
        const matches = candidates
            .filter((c) => !seen.has(c.s.title) && !!seen.add(c.s.title))
            .slice(0, 3)
            .map((c) => c.s);
        return { kind: 'services', matches };
    }
    if (bestFaq) return { kind: 'faq', question: bestFaq.q, answer: firstParagraph(bestFaq.a) };
    return { kind: 'none' };
}
