import { StrictMode } from 'react';
import { prerender } from 'react-dom/static';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppContent } from './App';

export { SERVICES } from './data/services';
export { DEFAULT_BLOGS } from './data/blogs';
export { FAQ_DATA } from './data/faq';

export async function render(url: string): Promise<string> {
    const { prelude } = await prerender(
        <StrictMode>
            <HelmetProvider>
                <StaticRouter location={url}>
                    <AppContent />
                </StaticRouter>
            </HelmetProvider>
        </StrictMode>,
    );
    return new Response(prelude).text();
}
