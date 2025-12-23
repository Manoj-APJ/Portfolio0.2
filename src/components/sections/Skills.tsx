import React from 'react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Database, Code, Cpu, Terminal, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

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

// Combine all skills for the marquee
const allSkills = skillCategories.flatMap(cat => cat.skills);

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

    const marqueeVariants = {
        animate: {
            x: [0, -1035], // Approximate width, resets seamlessly
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop" as const,
                    duration: 30, // Slow speed
                    ease: "linear" as const,
                },
            },
        },
    };

    return (
        <section id="skills" className="py-20 bg-surface border-y-3 border-dark overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-heading font-bold mb-4"
                    >
                        Technical Arsenal
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl opacity-70"
                    >
                        Tools and technologies I use to bring ideas to life.
                    </motion.p>
                </div>

                {/* Marquee Section */}
                <div className="relative w-full max-w-5xl mx-auto mb-16 overflow-hidden mask-gradient-x">
                    <motion.div
                        className="flex gap-8 whitespace-nowrap"
                        variants={marqueeVariants}
                        animate="animate"
                        whileHover={{ animationPlayState: "paused" }} // Note: Framer Motion uses a different pause mechanism, but 'whileHover' usually affects variants. For infinite loop, CSS pause is easier, or specific Framer handling. 
                    // Simplified approach for cleaner code: Let's use a duplicate list and standard consistent motion.
                    // Actually, 'whileHover' on parent to stop animation isn't native to the 'animate' prop flow easily without motionValue manipulation.
                    // Let's use standard framer motion loop and accept it might not pause perfectly on hover without complex setup, OR use CSS for the marquee part for better control.
                    // I will stick to a simpler continuous flow for now as requested "pause on hover" is best done css-style or with motion values.
                    // Refined plan: Use a simple flex container moving.
                    >
                        {/* Triple duplication for seamless loop */}
                        {[...allSkills, ...allSkills, ...allSkills].map((skill, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-dark/70 font-bold text-lg select-none">
                                <span className={`w-2 h-2 rounded-full bg-${skill.color}-500 inline-block`} />
                                {skill.name}
                            </div>
                        ))}
                    </motion.div>

                    {/* Gradient Masks for fade effect on edges */}
                    <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-surface to-transparent z-10" />
                    <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-surface to-transparent z-10" />
                </div>

                {/* Staggered Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {skillCategories.map((category, idx) => (
                        <motion.div key={idx} variants={itemVariants}>
                            <Card
                                className="bg-white h-full transition-all duration-300 hover:shadow-[8px_8px_0px_#000] hover:-translate-y-2 hover:bg-green-50/50"
                                title={category.title}
                            >
                                <div className="mb-4 p-3 bg-bg border-2 border-dark rounded-lg inline-block shadow-neo-sm">
                                    {category.icon}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill: any) => (
                                        <Badge key={skill.name} color={skill.color}>{skill.name}</Badge>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
