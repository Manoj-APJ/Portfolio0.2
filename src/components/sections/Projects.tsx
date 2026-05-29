import React from 'react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Github, ExternalLink } from 'lucide-react';
import orgExpenseImg from "../../assets/org-expense.png";
import rsvpImg from "../../assets/rsvp.png";
import pdfMarketplaceImg from "../../assets/pdfMarketplaceImg.png";


const projects = [
    {
        title: "Org Income & Expense Tracker",
        description: "Role-based financial tracking system with admin approvals. Handles transaction management, organization-level data isolation, and comprehensive balance tracking.",
        tech: ["Node.js", "PostgreSQL", "React.js", "Express.js"],
        github: "https://github.com/Manoj-APJ/org-expense-tracker/",
        live: "https://org-expense-tracker.vercel.app/",
        featured: true,
        image: orgExpenseImg
    },
    {
        title: "RSVP Event Manager",
        description: "An event management platform that supports event creation and user registration while safely blocking concurrent RSVP requests to prevent overbooking.",
        tech: ["JavaScript", "Node.js", "Express.js", "MongoDB", "React", "JWT"],
        github: "https://github.com/Manoj-APJ/RSVP",
        live: "https://rsvp-omega-ecru.vercel.app/",
        featured: false,
        image: rsvpImg
    },
    {
        title: "Full-Stack PDF Marketplace",
        description: "A secure marketplace for buying and selling PDFs. Features include PDF browsing, search, cart capability, orders, and a secure purchase verification flow using Razorpay.",
        tech: ["JavaScript", "Supabase", "Razorpay", "Netlify"],
        github: "#",
        live: "#",
        featured: false,
        image: pdfMarketplaceImg
    }
    // {
    //     title: "AI Files Organizer",
    //     description: "Intelligent file management tool using LangChain and LLMs. Features smart search, auto-tagging, and content-aware queries. Preferred by 80% of surveyed users.",
    //     tech: ["JavaScript", "LangChain", "Transformers", "Supabase"],
    //     github: "https://github.com/Manoj-APJ/AI_files_org",
    //     live: "https://github.com/Manoj-APJ/AI_files_org",
    //     featured: false
    // }
];

export const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-8">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-3">Featured Projects</h2>
                        <p className="text-base text-dark/70">A selection of things I've built from scratch.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <Card 
                            key={idx} 
                            className={`flex flex-col h-full bg-white/40 border border-zinc-200/50 hover:border-primary/20 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group/card ${
                                project.featured ? 'md:col-span-2 md:flex-row gap-8 p-6 md:p-8' : 'p-6'
                            }`}
                        >
                            {/* Browser Mockup Image Container */}
                            <div className={`border border-zinc-200/50 rounded-xl overflow-hidden shrink-0 flex flex-col bg-zinc-50 shadow-sm group/browser ${
                                project.featured ? 'w-full md:w-1/2 h-64' : 'w-full h-48 mb-5'
                            }`}>
                                {/* Fake browser controls header */}
                                <div className="bg-zinc-100/80 border-b border-zinc-200/40 px-3.5 py-2 flex items-center gap-1.5 shrink-0 select-none">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400/80" />
                                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/80" />
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400/80" />
                                    <div className="h-3.5 bg-white border border-zinc-200/20 rounded mx-auto w-1/2 max-w-[140px] text-[8px] flex items-center justify-center font-bold text-dark/30 tracking-tight">
                                        manoj.ai/{project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                                    </div>
                                </div>
                                <div className="flex-1 overflow-hidden relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover/card:scale-103 transition-transform duration-500"
                                    />
                                    {project.featured && (
                                        <span className="absolute top-2.5 right-2.5 bg-primary text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded shadow-sm z-10">
                                            Featured
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className={`flex flex-col flex-1 ${project.featured ? 'justify-center py-2' : ''}`}>
                                <h3 className="text-xl font-bold font-heading mb-2 text-dark group-hover/card:text-primary transition-colors">{project.title}</h3>
                                <p className="text-xs md:text-sm text-dark/70 mb-4 flex-1 leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {project.tech.map(t => (
                                        <Badge 
                                            key={t} 
                                            color="blue"
                                            className="group-hover/card:bg-primary group-hover/card:text-white group-hover/card:border-primary/20 group-hover/card:scale-105"
                                        >
                                            {t}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="flex gap-4 items-center">
                                    <a 
                                        href={project.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="flex items-center gap-1.5 text-xs font-bold text-dark/80 hover:text-primary transition-colors duration-200"
                                    >
                                        <Github className="w-4 h-4" /> Code
                                    </a>
                                    {project.live !== '#' && (
                                        <a 
                                            href={project.live} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="flex items-center gap-1.5 text-xs font-bold text-dark/80 hover:text-primary transition-colors duration-200"
                                        >
                                            <ExternalLink className="w-4 h-4" /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
