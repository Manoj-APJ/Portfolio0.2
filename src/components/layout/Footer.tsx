import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

export const Footer: React.FC = () => {
    const navLinks = [
        { name: 'projects', href: '#projects' },
        { name: 'skills', href: '#skills' },
        { name: 'courses', href: '#courses' },
        { name: 'blogs', href: '#blogs' },
        { name: 'contact', href: '#contact' },
    ]

    return (
        <footer className="bg-[#121214] text-white py-14 relative overflow-hidden mt-16">
            {/* Watermark Background */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none select-none overflow-hidden opacity-10">
                <span className="text-[12rem] md:text-[18rem] font-bold text-zinc-800 font-heading whitespace-nowrap tracking-tighter">
                    MANOJ
                </span>
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Top Navigation */}
                <div className="flex justify-center mb-10">
                    <nav className="flex flex-wrap justify-center gap-8 md:gap-12 text-xs md:text-sm font-semibold tracking-wider text-zinc-400">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="hover:text-secondary transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Main Content */}
                <div className="flex flex-col items-center justify-center text-center mb-12">
                    <p className="text-secondary font-bold tracking-widest uppercase mb-3 text-xs md:text-sm">
                        Open for collaboration
                    </p>
                    <h2 className="font-heading font-black text-3xl md:text-5xl tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 uppercase">
                        Let's create impact together.
                    </h2>
                </div>

                {/* Bottom Bar */}
                <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 pt-8 border-t border-zinc-800/80">
                    {/* Left: Identity */}
                    <div className="text-zinc-500 text-xs text-center md:text-left">
                        Built by <span className="text-zinc-300 font-medium">Manoj</span> · Open to collaboration
                    </div>

                    {/* Center: GitHub Contribution CTA */}
                    <a
                        href="https://github.com/Manoj-APJ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group text-center justify-self-center"
                        aria-label="Contribute on GitHub"
                    >
                        <div className="flex items-center justify-center gap-2 text-zinc-500 group-hover:text-secondary transition-colors">
                            <Github className="w-4 h-4" />
                            <span className="text-xs font-semibold">
                                View Portfolio Code
                            </span>
                        </div>
                    </a>

                    {/* Right: Social Icons */}
                    <div className="flex items-center justify-center md:justify-end gap-5">
                        {/* X */}
                        <a
                            href="https://x.com/example"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-secondary transition-colors duration-200"
                            aria-label="X Profile"
                        >
                            <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-current">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/manoj-mannam/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-secondary transition-colors duration-200"
                            aria-label="LinkedIn Profile"
                        >
                            <Linkedin className="w-4.5 h-4.5" />
                        </a>

                        {/* LeetCode */}
                        <a
                            href="https://leetcode.com/u/manojmannamapj9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-secondary transition-colors duration-200"
                            aria-label="LeetCode Profile"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5">
                                <path d="M16.102 17.93l-2.69 2.6c-.768.74-1.785 1.15-2.866 1.15-1.08 0-2.1-.41-2.866-1.15l-5.69-5.5a4.024 4.024 0 0 1 0-5.72l5.69-5.5c.768-.74 1.785-1.15 2.866-1.15 1.08 0 2.1.41 2.866 1.15l2.69 2.6a1 1 0 0 1-1.398 1.43l-2.69-2.6a1.99 1.99 0 0 0-1.468-.58 1.99 1.99 0 0 0-1.468.58l-5.69 5.5a2.023 2.023 0 0 0 0 2.86l5.69 5.5c.39.38.91.58 1.468.58.558 0 1.078-.2 1.468-.58l2.69-2.6a1 1 0 0 1 1.398 1.43zM22 11h-9a1 1 0 0 0 0 2h9a1 1 0 0 0 0-2z" />
                            </svg>
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:example@example.com"
                            className="text-zinc-400 hover:text-secondary transition-colors duration-200"
                            aria-label="Email"
                        >
                            <Mail className="w-4.5 h-4.5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
