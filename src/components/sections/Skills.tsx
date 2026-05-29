import React from 'react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { 
    Database, Code, Cpu, Terminal, Layers,
    Binary, Coffee, Code2, Server, Activity, 
    Leaf, Link, Bot, MessageSquare, GitBranch, 
    Monitor, Network, Box, HardDrive, Globe 
} from 'lucide-react';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: "Languages",
        icon: <Code className="w-6 h-6" />,
        skills: [
            { name: "C++", color: "blue" as const, symbol: <Binary className="w-3.5 h-3.5 text-blue-600/80" /> },
            { name: "Python", color: "green" as const, symbol: <Terminal className="w-3.5 h-3.5 text-emerald-600/80" /> },
            { name: "Java", color: "orange" as const, symbol: <Coffee className="w-3.5 h-3.5 text-amber-600/80" /> },
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


export const Skills: React.FC = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const }
        }
    };

    return (
        <section id="skills" className="py-8">
            <div className="container mx-auto px-6 max-w-7xl">
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

                {/* Refined Balanced Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {skillCategories.map((category, idx) => {
                        const isLast = idx === skillCategories.length - 1;
                        return (
                            <motion.div 
                                key={idx} 
                                variants={itemVariants} 
                                className={`h-full ${isLast ? 'md:col-span-2' : ''}`}
                            >
                                <Card className="h-full bg-white/40 border border-zinc-200/50 hover:border-primary/20 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between">
                                    <div>
                                        {/* Inline Icon + Title Header */}
                                        <div className="flex items-center gap-3 mb-5 border-b border-zinc-100/60 pb-3.5">
                                            <div className="p-2.5 bg-primary/5 text-primary border border-primary/10 rounded-xl shrink-0">
                                                {React.cloneElement(category.icon, { className: "w-5 h-5 text-primary" })}
                                            </div>
                                            <h3 className="text-lg font-heading font-extrabold text-dark tracking-tight leading-none">
                                                {category.title}
                                            </h3>
                                        </div>
                                        
                                        {/* Skills Badges Wrapper */}
                                        <div className="flex flex-wrap gap-2">
                                            {category.skills.map((skill: any) => (
                                                <Badge 
                                                    key={skill.name} 
                                                    color={skill.color}
                                                    className="py-1 px-3 border border-zinc-200/40 hover:border-primary/20 hover:scale-[1.03] shadow-sm hover:shadow-md transition-all duration-200"
                                                >
                                                    {skill.symbol}
                                                    <span className="font-semibold text-xs tracking-wide">{skill.name}</span>
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};
