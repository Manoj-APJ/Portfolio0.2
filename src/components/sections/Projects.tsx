import React from 'react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '../ui/Button';

const projects = [
    {
        title: "Full-Stack PDF Marketplace",
        description: "A secure marketplace for buying and selling PDFs. Features include PDF browsing, search, cart capability, orders, and a secure purchase verification flow using Razorpay.",
        tech: ["JavaScript", "Supabase", "Razorpay", "Netlify"],
        github: "#",
        live: "#",
        featured: true
    },
    {
        title: "AI Files Organizer",
        description: "Intelligent file management tool using LangChain and Transformers. Features smart search, auto-tagging, and content-aware queries. Preferred by 80% of surveyed users.",
        tech: ["JavaScript", "LangChain", "Transformers", "Supabase"],
        github: "#",
        live: "#",
        featured: false
    },
    {
        title: "Org Income & Expense Tracker",
        description: "Role-based financial tracking system with admin approvals. Handles transaction management, organization-level data isolation, and comprehensive balance tracking.",
        tech: ["Node.js", "PostgreSQL", "React.js", "Express.js"],
        github: "#",
        live: "#",
        featured: false
    }
];

export const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Featured Projects</h2>
                        <p className="text-xl opacity-70">A selection of things I've built.</p>
                    </div>
                    {/*<Button variant="outline">View All Archives</Button>*/}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <Card key={idx} className={`flex flex-col h-full bg-white hover:-translate-y-2 transition-transform duration-300 ${project.featured ? 'md:col-span-2 md:flex-row gap-6' : ''}`}>
                            {/* Image placeholder */}
                            <div className={`bg-gray-200 border-2 border-dark rounded-lg flex items-center justify-center shrink-0 ${project.featured ? 'w-full md:w-1/2 h-64' : 'w-full h-48 mb-4'}`}>
                                <span className="opacity-50 font-heading text-lg">Project Preview</span>
                            </div>

                            <div className={`flex flex-col flex-1 ${project.featured ? 'justify-center' : ''}`}>
                                <h3 className="text-2xl font-bold font-heading mb-2">{project.title}</h3>
                                <p className="opacity-70 mb-4 flex-1">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map(t => (
                                        <Badge key={t} color="blue">{t}</Badge>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a href={project.github} className="flex items-center gap-2 font-bold hover:underline decoration-2 underline-offset-2">
                                        <Github className="w-4 h-4" /> Code
                                    </a>
                                    <a href={project.live} className="flex items-center gap-2 font-bold hover:underline decoration-2 underline-offset-2">
                                        <ExternalLink className="w-4 h-4" /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
