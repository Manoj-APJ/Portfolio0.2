import React, { useState } from 'react';
import { Menu, X, Download, Github, Linkedin } from 'lucide-react';
import { Button } from '../ui/Button';
import { Logo } from '../layout/logo';

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('projects');

    const navLinks = [
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Courses', href: '#courses' },
        { name: 'Blogs', href: '#blogs' },
        { name: 'Contact', href: '#contact' },
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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur-md border-b border-white/30 py-4 transition-all duration-300">
            <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
                {/* Logo */}
                <Logo />

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.slice(1);
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`font-semibold text-sm tracking-wide transition-all duration-200 ${
                                    isActive
                                        ? 'text-primary font-bold border-b-2 border-primary pb-1'
                                        : 'text-dark/60 hover:text-primary pb-1'
                                }`}
                            >
                                {link.name}
                            </a>
                        );
                    })}
                </div>

                {/* Desktop Action & Socials */}
                <div className="hidden md:flex items-center gap-5">
                    {/* X (Twitter) */}
                    <a
                        href="https://x.com/example"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark/70 hover:text-primary transition-colors duration-200"
                        aria-label="X Profile"
                    >
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://linkedin.com/in/example"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark/70 hover:text-primary transition-colors duration-200"
                        aria-label="LinkedIn Profile"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/example"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark/70 hover:text-primary transition-colors duration-200"
                        aria-label="GitHub Profile"
                    >
                        <Github className="w-5 h-5" />
                    </a>

                    {/* LeetCode */}
                    <a
                        href="https://leetcode.com/example"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark/70 hover:text-primary transition-colors duration-200"
                        aria-label="LeetCode Profile"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M16.102 17.93l-2.69 2.6c-.768.74-1.785 1.15-2.866 1.15-1.08 0-2.1-.41-2.866-1.15l-5.69-5.5a4.024 4.024 0 0 1 0-5.72l5.69-5.5c.768-.74 1.785-1.15 2.866-1.15 1.08 0 2.1.41 2.866 1.15l2.69 2.6a1 1 0 0 1-1.398 1.43l-2.69-2.6a1.99 1.99 0 0 0-1.468-.58 1.99 1.99 0 0 0-1.468.58l-5.69 5.5a2.023 2.023 0 0 0 0 2.86l5.69 5.5c.39.38.91.58 1.468.58.558 0 1.078-.2 1.468-.58l2.69-2.6a1 1 0 0 1 1.398 1.43zM22 11h-9a1 1 0 0 0 0 2h9a1 1 0 0 0 0-2z"/>
                        </svg>
                    </a>

                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open('/resume.pdf', '_blank')}
                        className="border-primary/30 text-primary px-4 py-1.5 text-xs font-semibold"
                    >
                        <Download className="w-3.5 h-3.5" />
                        Resume
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 rounded-full hover:bg-zinc-100 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6 text-dark" /> : <Menu className="w-6 h-6 text-dark" />}
                </button>
            </div>

            {/* Mobile Nav Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-zinc-200 p-6 flex flex-col gap-5 shadow-xl animate-fade-in-down">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="font-semibold text-lg text-dark/80 py-2 border-b border-zinc-100"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex gap-6 py-2 justify-center">
                        <a href="https://x.com/example" target="_blank" rel="noopener noreferrer" className="text-dark/70"><svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
                        <a href="https://linkedin.com/in/example" target="_blank" rel="noopener noreferrer" className="text-dark/70"><Linkedin className="w-6 h-6" /></a>
                        <a href="https://github.com/example" target="_blank" rel="noopener noreferrer" className="text-dark/70"><Github className="w-6 h-6" /></a>
                        <a href="https://leetcode.com/example" target="_blank" rel="noopener noreferrer" className="text-dark/70"><svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M16.102 17.93l-2.69 2.6c-.768.74-1.785 1.15-2.866 1.15-1.08 0-2.1-.41-2.866-1.15l-5.69-5.5a4.024 4.024 0 0 1 0-5.72l5.69-5.5c.768-.74 1.785-1.15 2.866-1.15 1.08 0 2.1.41 2.866 1.15l2.69 2.6a1 1 0 0 1-1.398 1.43l-2.69-2.6a1.99 1.99 0 0 0-1.468-.58 1.99 1.99 0 0 0-1.468.58l-5.69 5.5a2.023 2.023 0 0 0 0 2.86l5.69 5.5c.39.38.91.58 1.468.58.558 0 1.078-.2 1.468-.58l2.69-2.6a1 1 0 0 1 1.398 1.43zM22 11h-9a1 1 0 0 0 0 2h9a1 1 0 0 0 0-2z"/></svg></a>
                    </div>
                    <Button
                        variant="outline"
                        className="w-full justify-center border-primary/30 text-primary py-3"
                        onClick={() => {
                            window.open('/resume.pdf', '_blank');
                            setIsOpen(false);
                        }}
                    >
                        <Download className="w-4 h-4" />
                        Download Resume
                    </Button>
                </div>
            )}
        </nav>
    );
};
