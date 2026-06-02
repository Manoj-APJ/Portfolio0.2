import React from 'react';
import { Badge } from '../ui/Badge';
import { 
    Database, Code, Cpu, Terminal, Layers,
    Binary, Code2, Server, Activity, 
    Leaf, Link, Bot, MessageSquare, GitBranch, 
    Monitor, Network, Box, HardDrive, Globe, Flame 
} from 'lucide-react';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: "Languages",
        icon: <Code className="w-6 h-6" />,
        skills: [
            { name: "C++", color: "blue" as const, symbol: <Binary className="w-3.5 h-3.5 text-blue-600/80" /> },
            { name: "Python", color: "green" as const, symbol: <Terminal className="w-3.5 h-3.5 text-emerald-600/80" /> },
            { name: "TypeScript", color: "blue" as const, symbol: <Code className="w-3.5 h-3.5 text-blue-600/80" /> },
            { name: "JavaScript", color: "yellow" as const, symbol: <Code2 className="w-3.5 h-3.5 text-yellow-600/80" /> },
        ]
    },
    {
        title: "Backend & Database",
        icon: <Database className="w-6 h-6" />,
        skills: [
            { name: "Node.js", color: "green" as const, symbol: <Server className="w-3.5 h-3.5 text-emerald-600/80" /> },
            { name: "Express.js", color: "orange" as const, symbol: <Activity className="w-3.5 h-3.5 text-amber-600/80" /> },
            { name: "PostgreSQL", color: "blue" as const, symbol: <Database className="w-3.5 h-3.5 text-blue-600/80" /> },
            { name: "MongoDB", color: "green" as const, symbol: <Leaf className="w-3.5 h-3.5 text-emerald-600/80" /> },
            { name: "RESTful API", color: "pink" as const, symbol: <Link className="w-3.5 h-3.5 text-pink-600/80" /> },
        ]
    },
    {
        title: "AI & NLP Tools",
        icon: <Cpu className="w-6 h-6" />,
        skills: [
            { name: "LLM Integ.", color: "green" as const, symbol: <Bot className="w-3.5 h-3.5 text-emerald-600/80" /> },
            { name: "LangChain", color: "blue" as const, symbol: <Layers className="w-3.5 h-3.5 text-blue-600/80" /> },
            { name: "RAG Basics", color: "orange" as const, symbol: <Cpu className="w-3.5 h-3.5 text-amber-600/80" /> },
            { name: "Prompts", color: "yellow" as const, symbol: <MessageSquare className="w-3.5 h-3.5 text-yellow-600/80" /> },
        ]
    },
    {
        title: "Developer Tools",
        icon: <Terminal className="w-6 h-6" />,
        skills: [
            { name: "Git & GitHub", color: "orange" as const, symbol: <GitBranch className="w-3.5 h-3.5 text-amber-600/80" /> },
            { name: "Linux", color: "green" as const, symbol: <Monitor className="w-3.5 h-3.5 text-emerald-600/80" /> },
            { name: "VS Code", color: "blue" as const, symbol: <Code2 className="w-3.5 h-3.5 text-blue-600/80" /> },
        ]
    },
    {
        title: "CS Foundations",
        icon: <Layers className="w-6 h-6" />,
        skills: [
            { name: "DSA", color: "pink" as const, symbol: <Network className="w-3.5 h-3.5 text-pink-600/80" /> },
            { name: "OOP", color: "blue" as const, symbol: <Box className="w-3.5 h-3.5 text-blue-600/80" /> },
            { name: "OS", color: "orange" as const, symbol: <HardDrive className="w-3.5 h-3.5 text-amber-600/80" /> },
            { name: "Networks", color: "green" as const, symbol: <Globe className="w-3.5 h-3.5 text-emerald-600/80" /> },
        ]
    }
];

const currentFocusItems = [
    { name: "TypeScript", color: "blue" as const, symbol: <Code className="w-3.5 h-3.5 text-blue-600/80" /> },
    { name: "Node.js", color: "green" as const, symbol: <Server className="w-3.5 h-3.5 text-emerald-600/80" /> },
    { name: "PostgreSQL", color: "blue" as const, symbol: <Database className="w-3.5 h-3.5 text-blue-600/80" /> },
    { name: "React", color: "blue" as const, symbol: <Code2 className="w-3.5 h-3.5 text-blue-600/80" /> },
    { name: "AI Integrations", color: "green" as const, symbol: <Bot className="w-3.5 h-3.5 text-emerald-600/80" /> },
    { name: "System Design", color: "orange" as const, symbol: <Layers className="w-3.5 h-3.5 text-amber-600/80" /> }
];

export const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-8">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Section Header */}
                <div className="mb-12 text-left">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-heading font-extrabold mb-3"
                    >
                        Technical Arsenal
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-base text-dark/70"
                    >
                        Tools and technologies I use to build scalable software and integrated AI solutions.
                    </motion.p>
                </div>

                {/* Currently Focusing On */}
                <div className="mb-10 flex flex-col sm:flex-row sm:items-center gap-4 py-4 px-5 bg-white/35 border border-zinc-200/50 rounded-2xl hover:border-primary/15 transition-all duration-300">
                    <div className="flex items-center gap-2 shrink-0 select-none">
                        <Flame className="w-4 h-4 text-orange-500" />
                        <span className="text-[10px] font-black text-dark/50 tracking-widest">
                            Currently focusing on
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {currentFocusItems.map((item) => (
                            <Badge 
                                key={item.name} 
                                color={item.color}
                                className="py-1 px-3 border border-zinc-200/40 hover:border-primary/25 hover:scale-[1.03] shadow-sm hover:shadow-md transition-all duration-200 bg-white/80"
                            >
                                {item.symbol}
                                <span className="font-semibold text-xs tracking-wide">{item.name}</span>
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Skills Category Rows */}
                <div className="space-y-4">
                    {skillCategories.map((category, idx) => (
                        <div 
                            key={idx}
                            className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-4 px-5 rounded-2xl bg-white/35 border border-zinc-200/50 hover:border-primary/10 transition-all duration-300 hover:shadow-neo-sm group"
                        >
                            {/* Category Title Column */}
                            <div className="flex items-center gap-3 md:w-52 shrink-0 select-none">
                                <div className="p-2 bg-primary/5 text-primary border border-primary/10 rounded-lg shrink-0 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                                    {React.cloneElement(category.icon, { className: "w-4 h-4 transition-colors duration-300" })}
                                </div>
                                <h3 className="text-sm font-heading font-extrabold text-dark tracking-tight leading-none">
                                    {category.title}
                                </h3>
                            </div>
                            
                            {/* Skills Badges Column */}
                            <div className="flex flex-wrap gap-2.5">
                                {category.skills.map((skill: any) => (
                                    <Badge 
                                        key={skill.name} 
                                        color={skill.color}
                                        className="py-1 px-3 border border-zinc-200/40 hover:border-primary/20 hover:scale-[1.03] shadow-sm hover:shadow-md transition-all duration-200"
                                    >
                                        {skill.symbol}
                                        <span className="font-semibold text-xs tracking-wide">
                                            {skill.name}
                                        </span>
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
