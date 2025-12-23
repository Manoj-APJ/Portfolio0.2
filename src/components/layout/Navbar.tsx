import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '../ui/Button';
import { Logo } from '../layout/logo';

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Blogs', href: '#blogs' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-sm border-b-3 border-dark py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <Logo />

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="font-bold text-dark hover:text-primary hover:underline decoration-3 underline-offset-4 transition-all"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button
                        variant="accent"
                        size="sm"
                        onClick={() => window.open('/resume.pdf', '_blank')}
                    >
                        <Download className="w-4 h-4" />
                        Resume
                    </Button>

                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 border-3 border-dark rounded-md bg-surface shadow-neo active:shadow-none active:translate-y-1 transition-all"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-surface border-b-3 border-dark p-4 flex flex-col gap-4 shadow-xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="font-bold text-lg text-dark py-2 border-b-2 border-dark/10"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button
                        variant="accent"
                        className="w-full justify-center"
                        onClick={() => {
                            window.open('/resume.pdf', '_blank');
                            setIsOpen(false);
                        }}
                    >
                        <Download className="w-4 h-4" />
                        View Resume
                    </Button>

                </div>
            )}
        </nav>
    );
};
