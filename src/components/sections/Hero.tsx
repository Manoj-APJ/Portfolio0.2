import React from 'react';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
    return (
        <section
            id="home"
            className="glass-card p-5 md:p-6 rounded-2xl flex flex-col gap-4 relative animate-fade-in"
        >
            {/* Header: Avatar and Identity Side-by-Side */}
            <div className="flex items-center gap-4 w-full">
                {/* Avatar with subtle glow */}
                <div className="relative group shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-tr from-secondary/30 to-primary/20 rounded-full blur-xl opacity-60 group-hover:opacity-85 transition-all duration-300 -z-10" />
                    <img
                        src="/avatar.png"
                        alt="Manoj Mannam"
                        className="w-16 h-16 rounded-full border-2 border-white shadow-md object-cover hover:rotate-3 transition-transform duration-300"
                    />
                </div>
                {/* Name & Title */}
                <div className="flex-1 min-w-0">
                    <h1 className="font-heading font-extrabold text-xl md:text-2xl text-dark tracking-tight leading-tight truncate">
                        Manoj Mannam
                    </h1>
                    <p className="text-[9px] font-extrabold text-primary uppercase tracking-widest mt-1 bg-primary/5 px-2 py-0.5 rounded inline-block">
                        Full Stack & AI Engineer
                    </p>
                </div>
            </div>

            {/* Tagline / Subtitle quote */}
            <p className="text-xs font-semibold text-dark/80 italic font-serif leading-snug border-l-2 border-secondary/50 pl-3 py-0.5">
                "Building software & AI systems that <span className="underline decoration-secondary decoration-wavy decoration-1 underline-offset-2">actually</span> work."
            </p>

            {/* Compact Bio Paragraph */}
            <p className="font-body text-xs text-dark/65 leading-relaxed font-medium">
                Passionate about building scalable backend services, high-fidelity user interfaces, and custom AI agent pipelines. Focused on shipping code that scales, iterating fast, and delivering production results.
            </p>

            {/* Social Profiles Row */}
            <div className="w-full pt-3 border-t border-zinc-100 flex items-center justify-between gap-2">
                <span className="text-[9px] font-bold text-dark/30 uppercase tracking-widest">
                    Profiles
                </span>
                <div className="flex items-center gap-2">
                    {/* GitHub */}
                    <a
                        href="https://github.com/manoj-apj"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-zinc-50/50 hover:bg-primary hover:text-white border border-zinc-200/50 hover:border-primary rounded-full transition-all duration-200 hover:scale-110 shadow-sm text-dark/70"
                        title="GitHub"
                    >
                        <Github className="w-3.5 h-3.5" />
                    </a>
                    {/* LinkedIn */}
                    <a
                        href="https://linkedin.com/in/manoj-mannam"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-zinc-50/50 hover:bg-primary hover:text-white border border-zinc-200/50 hover:border-primary rounded-full transition-all duration-200 hover:scale-110 shadow-sm text-dark/70"
                        title="LinkedIn"
                    >
                        <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    {/* X */}
                    <a
                        href="https://x.com/manojm012"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-zinc-50/50 hover:bg-primary hover:text-white border border-zinc-200/50 hover:border-primary rounded-full transition-all duration-200 hover:scale-110 shadow-sm text-dark/70"
                        title="Twitter"
                    >
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </a>
                    {/* LeetCode */}
                    <a
                        href="https://leetcode.com/u/manojmannamapj9/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-zinc-50/50 hover:bg-primary hover:text-white border border-zinc-200/50 hover:border-primary rounded-full transition-all duration-200 hover:scale-110 shadow-sm text-dark/70"
                        title="LeetCode"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                            <path d="M16.102 17.93l-2.69 2.6c-.768.74-1.785 1.15-2.866 1.15-1.08 0-2.1-.41-2.866-1.15l-5.69-5.5a4.024 4.024 0 0 1 0-5.72l5.69-5.5c.768-.74 1.785-1.15 2.866-1.15 1.08 0 2.1.41 2.866 1.15l2.69 2.6a1 1 0 0 1-1.398 1.43l-2.69-2.6a1.99 1.99 0 0 0-1.468-.58 1.99 1.99 0 0 0-1.468.58l-5.69 5.5a2.023 2.023 0 0 0 0 2.86l5.69 5.5c.39.38.91.58 1.468.58.558 0 1.078-.2 1.468-.58l2.69-2.6a1 1 0 0 1 1.398 1.43zM22 11h-9a1 1 0 0 0 0 2h9a1 1 0 0 0 0-2z" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* CTA Action Buttons Inline */}
            <div className="flex gap-2.5 w-full">
                <Button
                    size="sm"
                    variant="primary"
                    onClick={() => window.open('/resume.pdf', '_blank')}
                    className="flex-1 py-2.5 text-xs shadow-sm hover:shadow hover:-translate-y-0.5"
                >
                    <Download className="w-3.5 h-3.5 mr-1" />
                    Resume
                </Button>

                <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="flex-1 py-2.5 text-xs font-bold border border-primary/20 hover:border-primary hover:bg-primary/5"
                >
                    Contact <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
            </div>

            {/* Viewer Counter Badge */}
            <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50/70 border border-emerald-200/60 rounded-full select-none w-fit">
                <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span className="text-[9px] font-bold text-emerald-800 tracking-wider">
                    You are viewer #1,248
                </span>
            </div>
        </section>
    );
};
