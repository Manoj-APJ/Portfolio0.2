import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from '../layout/logo';

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('projects');

    const navLinks = [
        { name: 'projects', href: '#projects' },
        { name: 'skills', href: '#skills' },
        { name: 'courses', href: '#courses' },
        { name: 'blogs', href: '#blogs' },
        { name: 'contact', href: '#contact' },
    ];

    React.useEffect(() => {
        const sections = ['projects', 'skills', 'courses', 'blogs', 'contact'];
        
        const handleScroll = () => {
            // If near bottom of the page, contact is active
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
                setActiveSection('contact');
                return;
            }

            const scrollPosition = window.scrollY + 160;

            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial run
        setTimeout(handleScroll, 100);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 flex flex-col items-center pointer-events-none">
            {/* Floating Navigation Capsule */}
            <nav className="w-full max-w-7xl pointer-events-auto bg-gradient-to-r from-blue-50/85 via-white/80 to-amber-50/85 backdrop-blur-md border border-white/50 rounded-full px-6 py-2.5 flex justify-between items-center shadow-neo-lg transition-all duration-300">
                {/* Logo */}
                <div className="flex items-center">
                    <Logo />
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.slice(1);
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`font-heading font-bold text-xs tracking-wide transition-all duration-200 ${
                                    isActive
                                        ? 'text-primary border-b-2 border-primary/45 pb-0.5'
                                        : 'text-dark/60 hover:text-primary pb-0.5'
                                }`}
                            >
                                {link.name}
                            </a>
                        );
                    })}
                </div>

                {/* Desktop Action Pills (Right side) */}
                <div className="hidden md:flex items-center gap-3">
                    <button
                        onClick={() => window.open('/resume.pdf', '_blank')}
                        className="bg-dark text-white hover:bg-primary rounded-full px-5 py-2 transition-all duration-200 text-xs font-heading font-bold tracking-wide shadow-sm cursor-pointer"
                    >
                        resume
                    </button>
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="border border-dark/25 text-dark hover:bg-dark hover:text-white rounded-full px-5 py-2 transition-all duration-200 text-xs font-heading font-bold tracking-wide cursor-pointer"
                    >
                        contact
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 rounded-full hover:bg-zinc-100/50 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-5 h-5 text-dark" /> : <Menu className="w-5 h-5 text-dark" />}
                </button>
            </nav>

            {/* Mobile Nav Dropdown */}
            {isOpen && (
                <div className="md:hidden w-full max-w-sm mt-2 bg-white/95 backdrop-blur-md border border-zinc-200/60 p-5 rounded-2xl flex flex-col gap-4 shadow-xl pointer-events-auto animate-fade-in">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="font-semibold text-sm text-dark/80 py-1.5 border-b border-zinc-100 block"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex gap-3 w-full mt-2">
                        <button
                            className="flex-1 justify-center py-2.5 text-xs rounded-full bg-dark text-white font-bold tracking-wide"
                            onClick={() => {
                                window.open('/resume.pdf', '_blank');
                                setIsOpen(false);
                            }}
                        >
                            resume
                        </button>
                        <button
                            className="flex-1 justify-center py-2.5 text-xs rounded-full border border-dark/25 text-dark font-bold tracking-wide"
                            onClick={() => {
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                setIsOpen(false);
                            }}
                        >
                            contact
                        </button>
                    </div>
                </div>
            )}

            {/* Symmetrical Scroll Flourish below Navbar */}
            <div className="w-full flex justify-center mt-2.5 opacity-60 hidden md:flex pointer-events-none select-none">
                <svg viewBox="0 0 120 15" className="w-24 h-4 fill-current text-primary/30">
                    <path d="M60,7.5 C55,4 51,2 45,2 C35,2 35,11 44,11 C50,11 53,8 55,6 C57,8 60,11 66,11 C75,11 75,2 65,2 C59,2 55,4 60,7.5 Z M44,9 C39,9 38,4 44,4 C48,4 50,6 52,7.5 C50,9 48,9 44,9 Z M66,9 C62,9 60,7.5 58,7.5 C60,6 62,4 66,4 C72,4 71,9 66,9 Z" />
                    <line x1="0" y1="7.5" x2="32" y2="7.5" stroke="currentColor" strokeWidth="0.75" />
                    <line x1="88" y1="7.5" x2="120" y2="7.5" stroke="currentColor" strokeWidth="0.75" />
                </svg>
            </div>
        </div>
    );
};
