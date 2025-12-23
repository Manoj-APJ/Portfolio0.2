import React from 'react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Database, Code, Cpu, Terminal, Layers, Globe } from 'lucide-react';

const skillCategories = [
    {
        title: "Languages",
        icon: <Code className="w-6 h-6" />,
        skills: [
            { name: "C++", color: "blue" },
            { name: "Python", color: "green" },
            { name: "Java", color: "orange" },
            { name: "JavaScript", color: "yellow" },
        ]
    },
    {
        title: "Backend & Database",
        icon: <Database className="w-6 h-6" />,
        skills: [
            { name: "Node.js", color: "green" },
            { name: "Express.js", color: "gray" },
            { name: "PostgreSQL", color: "blue" },
            { name: "MongoDB", color: "green" },
            { name: "RESTful API", color: "pink" },
        ]
    },
    {
        title: "AI & NLP Tools",
        icon: <Cpu className="w-6 h-6" />,
        skills: [
            { name: "LLM Integ.", color: "green" },
            { name: "LangChain", color: "blue" },
            { name: "RAG Basics", color: "orange" },
            { name: "Prompts", color: "yellow" },
        ]
    },
    {
        title: "Developer Tools",
        icon: <Terminal className="w-6 h-6" />,
        skills: [
            { name: "Git & GitHub", color: "orange" },
            { name: "Linux", color: "gray" },
            { name: "VS Code", color: "blue" },
        ]
    },
    {
        title: "CS Foundations",
        icon: <Layers className="w-6 h-6" />,
        skills: [
            { name: "DSA", color: "pink" },
            { name: "OOP", color: "blue" },
            { name: "OS", color: "gray" },
            { name: "Networks", color: "green" },
        ]
    }
];

export const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-20 bg-surface border-y-3 border-dark">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Technical Arsenal</h2>
                    <p className="text-xl opacity-70">Tools and technologies I use to bring ideas to life.</p>
                </div>

                {/* Adjusted grid for dynamic number of categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-center">
                    {skillCategories.map((category, idx) => (
                        <Card key={idx} className="bg-white hover:-translate-y-2 transition-transform duration-300 h-full" title={category.title}>
                            <div className="mb-4 p-3 bg-bg border-2 border-dark rounded-lg inline-block shadow-neo-sm">
                                {category.icon}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill: any) => (
                                    <Badge key={skill.name} color={skill.color}>{skill.name}</Badge>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
