import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { VisitorCounter } from '../ui/VisitorCounter'

export const Footer: React.FC = () => {
    return (
        <footer className="bg-dark text-surface py-12 border-t-3 border-dark mt-20">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Left */}
                <div className="text-center md:text-left">
                    <h2 className="font-heading font-bold text-2xl mb-2">
                        Let's Connect
                    </h2>
                    <p className="opacity-80">
                        Building cool things with code.
                    </p>
                </div>

                {/* Middle: Icons + Star link */}
                <div className="flex flex-col items-center gap-3">
                    <div className="flex gap-4">
                        <a
                            href="https://github.com/Manoj-APJ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-primary border-2 border-surface rounded-full hover:-translate-y-1 transition-transform text-dark"
                            aria-label="GitHub Profile"
                        >
                            <Github className="w-5 h-5" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/manoj-mannam/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-secondary border-2 border-surface rounded-full hover:-translate-y-1 transition-transform text-dark"
                            aria-label="LinkedIn Profile"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>

                        <a
                            href="mailto:manojmannamapj9@gmail.com"
                            className="p-3 bg-white border-2 border-surface rounded-full hover:-translate-y-1 transition-transform text-dark"
                            aria-label="Email"
                        >
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>

                    <a
                        href="https://github.com/Manoj-APJ/portfolio0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm underline opacity-70 hover:opacity-100 transition-opacity"
                    >
                        ⭐ Star this repo on GitHub
                    </a>
                </div>

                {/* Right */}
                <div className="text-sm flex flex-col items-center md:items-end gap-2 text-center md:text-right">
                    <div className="text-white opacity-70">
                        <VisitorCounter />
                    </div>

                    <span className="opacity-60">
                        © {new Date().getFullYear()} Dev Portfolio. All rights reserved.
                    </span>
                </div>

            </div>
        </footer>
    )
}
