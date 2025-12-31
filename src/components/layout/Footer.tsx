import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

export const Footer: React.FC = () => {
    const navLinks = [
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Blogs', href: '#blogs' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <footer className="bg-black text-white py-12 border-t border-zinc-800 mt-20 relative overflow-hidden">
            {/* Watermark Background */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none select-none overflow-hidden">
                <span className="text-[15rem] md:text-[20rem] font-bold text-zinc-900/50 font-heading whitespace-nowrap tracking-tighter">
                    MANOJ
                </span>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Top Navigation */}
                <div className="flex justify-center mb-12">
                    <nav className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm md:text-base font-body tracking-wider uppercase text-zinc-400">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="hover:text-secondary transition-colors duration-300"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Main Content */}
                <div className="flex flex-col items-center justify-center text-center mb-16">
                    <p className="text-secondary font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
                        Your Partner In Digital Innovation
                    </p>
                    <h2 className="font-heading font-black text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
                        BUILDING COOL
                        <br className="md:hidden" />
                        <span className="md:ml-4">THINGS WITH CODE.</span>
                    </h2>
                </div>

                {/* Bottom Bar */}
                <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 pt-8 border-t border-zinc-900/50">
                    {/* Left: Identity / Signal */}
                    <div className="text-zinc-500 text-sm text-center md:text-left">
                        Built by <span className="text-zinc-300 font-medium">Manoj</span> · Open to collaboration
                    </div>

                    {/* Center: GitHub Contribution CTA */}
                    <a
                        href="https://github.com/Manoj-APJ/portfolio0.2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group text-center justify-self-center"
                        aria-label="Contribute on GitHub"
                    >
                        <div className="flex items-center justify-center gap-2 text-zinc-500 group-hover:text-secondary transition-colors">
                            <Github className="w-4 h-4" />
                            <span className="text-sm font-medium">
                                Contribute on GitHub
                            </span>
                        </div>
                        <p className="text-xs text-zinc-600 mt-1 group-hover:text-zinc-400 transition-colors">
                            Issues • Pull Requests • Ideas welcome
                        </p>
                    </a>

                    {/* Right: Social Icons */}
                    <div className="flex items-center justify-center md:justify-end gap-4">
                        <a
                            href="https://github.com/Manoj-APJ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-secondary transition-colors"
                            aria-label="GitHub Profile"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/manoj-mannam/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-secondary transition-colors"
                            aria-label="LinkedIn Profile"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="mailto:manojmannamapj9@gmail.com"
                            className="text-zinc-400 hover:text-secondary transition-colors"
                            aria-label="Email"
                        >
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
