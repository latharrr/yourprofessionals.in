import { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import text_logo from '../../assets/Logo_text.png';
import image_logo from '../../assets/Logo_image.png';
import { SERVICES } from '../../data/services';
import {
    REGISTRATION_MENU_ITEMS, GOVERNMENT_REGISTRATION_MENU_ITEMS,
    FSSAI_MENU_ITEMS, TRADE_LICENCE_MENU_ITEMS,
    BUSINESS_CERTIFICATES_MENU_ITEMS, BUSINESS_LICENSES_MENU_ITEMS,
    BIS_MENU_ITEMS, NGO_MENU_ITEMS, INTERNATIONAL_MENU_ITEMS,
    LABOR_LAW_MENU_ITEMS, OTHER_SERVICES_MENU_ITEMS,
    COMPANY_COMPLIANCE_MENU_ITEMS, ANNUAL_COMPLIANCE_MENU_ITEMS,
    MCA_SERVICES_MENU_ITEMS, EVENT_COMPLIANCE_MENU_ITEMS,
    CONVERT_BUSINESS_MENU_ITEMS,
    TRADEMARK_MENU_ITEMS, COPYRIGHT_MENU_ITEMS, PATENT_MENU_ITEMS,
    DESIGN_MENU_ITEMS, IP_DISPUTE_MENU_ITEMS,
    INCOME_TAX_MENU_ITEMS, INTERNATIONAL_TAXATION_MENU_ITEMS, GST_MENU_ITEMS,
    LITIGATION_MENU_ITEMS,
    CA_SERVICES_MENU_ITEMS, CS_SERVICES_MENU_ITEMS, CMA_SERVICES_MENU_ITEMS,
    LAWYER_SERVICES_MENU_ITEMS, OTHER_PROFESSIONAL_SERVICES_MENU_ITEMS,
    ENVIRONMENTAL_MENU_ITEMS, AGREEMENTS_MENU_ITEMS,
    TOOLS_MENU_ITEMS, REGULATORY_MENU_ITEMS,
    RESOURCES_MENU_ITEMS, GET_TO_KNOW_US_MENU_ITEMS,
    PARTNERSHIP_MENU_ITEMS,
} from '../../data/services';

type NavMenuKey = 'registrations' | 'compliance' | 'ipr' | 'income-tax' | 'gst' | 'litigation' | 'consultation' | 'more';

interface NavTab {
    key: string;
    label: string;
    items: { label: string; slug: string }[];
}

interface NavMenu {
    key: NavMenuKey;
    label: string;
    tabs: NavTab[];
}

const NAV_MENUS: NavMenu[] = [
    {
        key: 'registrations',
        label: 'Registrations',
        tabs: [
            { key: 'company', label: 'Company Registration', items: REGISTRATION_MENU_ITEMS },
            { key: 'government', label: 'Government Registration', items: GOVERNMENT_REGISTRATION_MENU_ITEMS },
            { key: 'fssai', label: 'FSSAI Registration', items: FSSAI_MENU_ITEMS },
            { key: 'trade', label: 'Trade Licence', items: TRADE_LICENCE_MENU_ITEMS },
            { key: 'certificates', label: 'Business Certificates', items: BUSINESS_CERTIFICATES_MENU_ITEMS },
            { key: 'licenses', label: 'Business Licenses', items: BUSINESS_LICENSES_MENU_ITEMS },
            { key: 'bis', label: 'BIS Registration', items: BIS_MENU_ITEMS },
            { key: 'ngo', label: 'NGO', items: NGO_MENU_ITEMS },
            { key: 'international', label: 'International Business', items: INTERNATIONAL_MENU_ITEMS },
            { key: 'labor', label: 'Labor Law', items: LABOR_LAW_MENU_ITEMS },
            { key: 'other', label: 'Other Services', items: OTHER_SERVICES_MENU_ITEMS },
        ],
    },
    {
        key: 'compliance',
        label: 'Compliance',
        tabs: [
            { key: 'company-compliance', label: 'Company Compliance', items: COMPANY_COMPLIANCE_MENU_ITEMS },
            { key: 'annual-compliance', label: 'Annual Compliance', items: ANNUAL_COMPLIANCE_MENU_ITEMS },
            { key: 'mca-services', label: 'MCA Services', items: MCA_SERVICES_MENU_ITEMS },
            { key: 'event-compliance', label: 'Event Based Compliance', items: EVENT_COMPLIANCE_MENU_ITEMS },
            { key: 'convert-business', label: 'Convert Your Business', items: CONVERT_BUSINESS_MENU_ITEMS },
        ],
    },
    {
        key: 'ipr',
        label: 'IPR',
        tabs: [
            { key: 'trademark', label: 'Trademark Registration', items: TRADEMARK_MENU_ITEMS },
            { key: 'copyright', label: 'Copyright Registration', items: COPYRIGHT_MENU_ITEMS },
            { key: 'patent', label: 'Patent Registration', items: PATENT_MENU_ITEMS },
            { key: 'design', label: 'Design Registration', items: DESIGN_MENU_ITEMS },
            { key: 'ip-dispute', label: 'Intellectual Property Dispute', items: IP_DISPUTE_MENU_ITEMS },
        ],
    },
    {
        key: 'income-tax',
        label: 'Income Tax',
        tabs: [
            { key: 'income-tax', label: 'Income Tax', items: INCOME_TAX_MENU_ITEMS },
            { key: 'international-taxation', label: 'International Taxation', items: INTERNATIONAL_TAXATION_MENU_ITEMS },
        ],
    },
    {
        key: 'gst',
        label: 'GST',
        tabs: [
            { key: 'gst', label: 'GST', items: GST_MENU_ITEMS },
        ],
    },
    {
        key: 'litigation',
        label: 'Litigation',
        tabs: [
            { key: 'litigation', label: 'Litigation', items: LITIGATION_MENU_ITEMS },
        ],
    },
    {
        key: 'consultation',
        label: 'Consultation',
        tabs: [
            { key: 'ca-services', label: 'CA Services', items: CA_SERVICES_MENU_ITEMS },
            { key: 'cs-services', label: 'CS Services', items: CS_SERVICES_MENU_ITEMS },
            { key: 'cma-services', label: 'CMA Services', items: CMA_SERVICES_MENU_ITEMS },
            { key: 'lawyer-services', label: 'Lawyer Services', items: LAWYER_SERVICES_MENU_ITEMS },
            { key: 'other-professional', label: 'Other Professional Services', items: OTHER_PROFESSIONAL_SERVICES_MENU_ITEMS },
        ],
    },
    {
        key: 'more',
        label: 'More',
        tabs: [
            { key: 'environmental', label: 'Environmental', items: ENVIRONMENTAL_MENU_ITEMS },
            { key: 'agreements', label: 'Agreements & Contracts', items: AGREEMENTS_MENU_ITEMS },
            { key: 'tools', label: 'Tools & Calculators', items: TOOLS_MENU_ITEMS },
            { key: 'resources', label: 'Resources', items: RESOURCES_MENU_ITEMS },
            { key: 'regulatory', label: 'Regulatory', items: REGULATORY_MENU_ITEMS },
            { key: 'get-to-know-us', label: 'Get to Know Us', items: GET_TO_KNOW_US_MENU_ITEMS },
            { key: 'partnership', label: 'Partnership', items: PARTNERSHIP_MENU_ITEMS },
        ],
    },
];
export default function Header() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [activeNavMenu, setActiveNavMenu] = useState<NavMenuKey | null>(null);
    const [activeSubTab, setActiveSubTab] = useState<string>('');
    const [mobileOpenSection, setMobileOpenSection] = useState<string | null>(null);
    const [mobileOpenSubSection, setMobileOpenSubSection] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<{ label: string; slug: string }[]>([]);
    const megaMenuTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
    const searchInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        return () => { if (megaMenuTimeout.current) clearTimeout(megaMenuTimeout.current); };
    }, []);

    const handleNavEnter = (menuKey: NavMenuKey) => {
        if (megaMenuTimeout.current) clearTimeout(megaMenuTimeout.current);
        const menu = NAV_MENUS.find(m => m.key === menuKey);
        setActiveNavMenu(menuKey);
        setActiveSubTab(menu?.tabs[0]?.key || '');
    };

    const handleNavLeave = () => {
        megaMenuTimeout.current = setTimeout(() => {
            setActiveNavMenu(null);
            setActiveSubTab('');
        }, 250);
    };

    const handleBladeEnter = () => {
        if (megaMenuTimeout.current) clearTimeout(megaMenuTimeout.current);
    };

    const handleSearch = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            const match = Object.values(SERVICES).find(s =>
                s.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            if (match) {
                navigate(`/${match.slug}`);
            } else if (searchResults.length > 0) {
                navigate(`/${searchResults[0].slug}`);
            }
            setSearchQuery('');
            setSearchResults([]);
            setIsSearchOpen(false);
        }
    };

    // Focus search input when search opens
    useEffect(() => {
        if (isSearchOpen) {
            setActiveNavMenu(null);
            setActiveSubTab('');
            setTimeout(() => searchInputRef.current?.focus(), 100);
        }
    }, [isSearchOpen]);

    // Live search filtering
    const handleSearchChange = useCallback((value: string) => {
        setSearchQuery(value);
        if (value.trim().length < 2) {
            setSearchResults([]);
            return;
        }
        const query = value.toLowerCase();
        const matches = Object.values(SERVICES)
            .filter(s => s.title.toLowerCase().includes(query))
            .slice(0, 8)
            .map(s => ({ label: s.title, slug: s.slug }));
        setSearchResults(matches);
    }, []);

    const activeMenu = NAV_MENUS.find(m => m.key === activeNavMenu);
    const activeTabConfig = activeMenu?.tabs.find(t => t.key === activeSubTab);
    const activeItemsList = activeTabConfig?.items || [];
    const colCount = activeItemsList.length > 12 ? 3 : activeItemsList.length > 4 ? 2 : 1;
    const colSize = Math.ceil(activeItemsList.length / colCount);
    const columns = Array.from({ length: colCount }, (_, i) => activeItemsList.slice(i * colSize, (i + 1) * colSize));

    return (
        <header className="fixed top-4 left-4 right-4 md:left-8 md:right-8 lg:left-1/2 lg:-translate-x-1/2 lg:w-full lg:max-w-[1440px] z-50 rounded-full transition-all duration-300 bg-white/95 backdrop-blur-md border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
            {/* Main Navigation */}
            <div className="px-3 md:px-6 py-3 flex justify-between items-center h-16 relative gap-2">
                {/* Logo */}
                <Link to="/" className={`flex items-center gap-2 md:gap-3 font-bold text-xl transition-opacity duration-300 text-[#090a3d] shrink min-w-0 ${isSearchOpen ? 'opacity-0 md:opacity-100' : 'opacity-100'}`}>
                    {/* <img src={logo} alt="Your Professionals Logo" className="h-8 md:h-10 object-contain -mt-1 transition-all duration-300" /> */}
                    <img src={image_logo} alt="Your Professionals Logo" className="h-7 md:h-10 w-auto object-contain transition-all duration-300 shrink-0" />
                    <img src={text_logo} alt="Your Professionals" className="h-5 md:h-10 w-auto object-contain transition-all duration-300 max-w-[120px] md:max-w-none" />
                    {/* <span className="hidden sm:block">Your Professionals</span> */}
                </Link>

                {/* Desktop Nav - Centered OR Search Bar */}
                <div className="hidden lg:flex flex-1 justify-center items-center px-4 relative">
                    {/* Navigation Links */}
                    <nav className={`flex items-center gap-3 xl:gap-5 font-medium text-sm transition-all duration-300 absolute ${isSearchOpen ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
                        {NAV_MENUS.map(menu => (
                            <div
                                key={menu.key}
                                onMouseEnter={() => handleNavEnter(menu.key)}
                                onMouseLeave={handleNavLeave}
                                className={`transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1 py-2 ${activeNavMenu === menu.key ? 'text-[var(--color-brand-secondary)]' : 'text-gray-700 hover:text-[var(--color-brand-secondary)]'}`}
                            >
                                {menu.label}
                            </div>
                        ))}
                        <Link to="/contact" className="transition-colors whitespace-nowrap text-gray-700 hover:text-[var(--color-brand-secondary)]">Contact Us</Link>
                    </nav>

                    {/* Mega Menu Blade (shared across all nav menus) */}
                    <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 z-50 ${activeNavMenu ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                        onMouseEnter={handleBladeEnter}
                        onMouseLeave={handleNavLeave}
                    >
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-[850px] flex overflow-hidden">
                            {/* Vertical Sidebar Tabs */}
                            <div className="w-[220px] bg-gray-50 border-r border-gray-100 py-2 flex flex-col shrink-0 max-h-[450px] overflow-y-auto">
                                {activeMenu?.tabs.map(tab => (
                                    <button
                                        key={tab.key}
                                        onMouseEnter={() => setActiveSubTab(tab.key)}
                                        className={`text-left px-5 py-2.5 text-sm font-semibold transition-colors relative ${activeSubTab === tab.key ? 'text-[var(--color-brand-secondary)] bg-white' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
                                    >
                                        {activeSubTab === tab.key && (
                                            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 bg-[var(--color-brand-secondary)] rounded-r-full" />
                                        )}
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                            {/* Menu Items Grid */}
                            <div className={`flex-1 p-5 grid gap-4 max-h-[450px] overflow-y-auto ${colCount === 3 ? 'grid-cols-3' : colCount === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                                {columns.map((col, colIdx) => (
                                    <div key={colIdx} className="space-y-1">
                                        {col.map(item => (
                                            <Link key={item.slug} to={`/${item.slug}`} onClick={() => setActiveNavMenu(null)}
                                                className="block px-3 py-2 text-sm text-gray-700 hover:text-[var(--color-brand-secondary)] hover:bg-amber-50 rounded-lg transition-colors">{item.label}</Link>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Search Bar (Replaces Nav Links) */}
                    <div className={`w-full max-w-2xl flex flex-col items-center transition-all duration-300 absolute z-[60] ${isSearchOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'}`}>
                        <form onSubmit={handleSearch} className="relative w-full flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 absolute left-4 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                            <input
                                ref={searchInputRef}
                                type="text"
                                placeholder="Search for services, blogs, etc..."
                                value={searchQuery}
                                onChange={(e) => handleSearchChange(e.target.value)}
                                className="w-full bg-gray-50 border border-gray-200 rounded-full pl-12 pr-10 py-2.5 text-sm focus:outline-none focus:border-[var(--color-brand-secondary)] focus:ring-2 focus:ring-[var(--color-brand-secondary)]/20 transition-all text-gray-800 shadow-sm"
                            />
                            <button type="button" onClick={() => { setIsSearchOpen(false); setSearchQuery(''); setSearchResults([]); }} className="absolute right-3 p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-200 rounded-full transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </form>
                        {/* Search Results Dropdown */}
                        {searchResults.length > 0 && (
                            <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-xl border border-gray-100 max-h-72 overflow-y-auto">
                                {searchResults.map(item => (
                                    <Link key={item.slug} to={`/${item.slug}`}
                                        onClick={() => { setIsSearchOpen(false); setSearchQuery(''); setSearchResults([]); }}
                                        className="block px-4 py-2.5 text-sm text-gray-700 hover:text-[var(--color-brand-secondary)] hover:bg-amber-50 transition-colors border-b border-gray-50 last:border-b-0">
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Action Buttons (Desktop and Mobile) */}
                <div className="flex items-center gap-2 md:gap-4 z-10">
                    <div className={`hidden lg:flex items-center transition-all duration-300 ${isSearchOpen ? 'opacity-0 invisible w-0 -mr-2' : 'opacity-100 visible w-auto'}`}>
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="p-2 rounded-full transition-all duration-300 flex items-center justify-center transform hover:scale-105 text-gray-600 hover:bg-gray-100 hover:text-[var(--color-brand-secondary)]"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </button>
                    </div>

                    <button className="hidden border px-4 py-1.5 rounded-full transition-colors font-semibold text-sm text-[#090a3d] border-gray-200 hover:bg-gray-50">
                        Login
                    </button>

                    <button className="hidden lg:flex justify-center items-center bg-[var(--color-brand-secondary)] text-white py-2 rounded-full hover:bg-[#a17500] transition-all font-semibold shadow-sm hover:shadow-md text-sm w-[150px] group">
                        <span className="group-hover:hidden">Talk to Experts</span>
                        <span className="hidden group-hover:inline">+91-7011936958</span>
                    </button>

                    {/* Mobile toggle button */}
                    <button
                        className="lg:hidden p-2 rounded-full transition-colors text-gray-600 hover:bg-gray-100 hover:text-[var(--color-brand-secondary)]"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Dropdown Panel */}
            <div className={`absolute top-[calc(100%+0.5rem)] right-4 md:right-8 w-80 bg-white/95 backdrop-blur-md rounded-2xl z-50 transform transition-all duration-200 origin-top-right lg:hidden flex flex-col shadow-2xl border border-gray-100 overflow-hidden ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col overflow-y-auto max-h-[70vh]">
                    <div className="px-6 py-4 border-b border-gray-50">
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            if (searchQuery.trim()) {
                                const match = Object.values(SERVICES).find(s =>
                                    s.title.toLowerCase().includes(searchQuery.toLowerCase())
                                );
                                const target = match ?? (searchResults[0] ? SERVICES[searchResults[0].slug] : null);
                                if (target) { navigate(`/${target.slug}`); }
                                setSearchQuery('');
                                setSearchResults([]);
                                setIsMenuOpen(false);
                            }
                        }}>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search services..."
                                    value={searchQuery}
                                    onChange={(e) => handleSearchChange(e.target.value)}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-full px-4 py-2 pr-9 text-sm focus:outline-none focus:border-[var(--color-brand-secondary)]"
                                />
                                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-400 hover:text-[var(--color-brand-secondary)]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                        {searchResults.length > 0 && searchQuery.length >= 2 && (
                            <div className="mt-2 bg-white rounded-xl shadow-lg border border-gray-100 max-h-52 overflow-y-auto">
                                {searchResults.map(item => (
                                    <Link key={item.slug} to={`/${item.slug}`}
                                        onClick={() => { setIsMenuOpen(false); setSearchQuery(''); setSearchResults([]); }}
                                        className="block px-4 py-2.5 text-sm text-gray-700 hover:text-[var(--color-brand-secondary)] hover:bg-amber-50 transition-colors border-b border-gray-50 last:border-b-0">
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                    {/* Nav Sections with nested sub-tabs */}
                    {NAV_MENUS.map(menu => (
                        <div key={menu.key} className="border-b border-gray-50">
                            <button
                                onClick={() => { setMobileOpenSection(mobileOpenSection === menu.key ? null : menu.key); setMobileOpenSubSection(null); }}
                                className="flex justify-between items-center w-full text-sm font-bold text-gray-800 hover:text-[var(--color-brand-secondary)] px-6 py-4 transition-colors"
                            >
                                {menu.label}
                            </button>
                            {mobileOpenSection === menu.key && (
                                <div className="bg-gray-50 pb-2">
                                    {menu.tabs.map(tab => (
                                        <div key={tab.key}>
                                            <button
                                                onClick={() => setMobileOpenSubSection(mobileOpenSubSection === tab.key ? null : tab.key)}
                                                className="flex justify-between items-center w-full text-sm font-medium text-gray-700 hover:text-[var(--color-brand-secondary)] px-8 py-2.5 transition-colors"
                                            >
                                                {tab.label}
                                            </button>
                                            {mobileOpenSubSection === tab.key && (
                                                <div className="px-10 pb-2 max-h-48 overflow-y-auto">
                                                    {tab.items.map(item => (
                                                        <Link key={item.slug} to={`/${item.slug}`}
                                                            onClick={() => { setIsMenuOpen(false); setMobileOpenSection(null); setMobileOpenSubSection(null); }}
                                                            className="block py-1.5 text-sm text-gray-600 hover:text-[var(--color-brand-secondary)] transition-colors">{item.label}</Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    {/* Contact Us link in mobile */}
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}
                        className="flex items-center w-full text-sm font-bold text-gray-800 hover:text-[var(--color-brand-secondary)] px-6 py-4 transition-colors border-b border-gray-50">
                        Contact Us
                    </Link>
                </div>

                <div className="p-4 bg-gray-50 mt-auto">
                    <button className="flex items-center justify-center gap-2 bg-[var(--color-brand-secondary)] text-white px-6 py-3 w-full font-bold shadow-md hover:bg-[#a17500] transition-colors rounded-xl text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                        </svg>
                        Talk to Experts: +91-7011936958
                    </button>
                </div>
            </div>
        </header>
    );
}
