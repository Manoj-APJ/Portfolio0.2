import React from 'react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { GraduationCap, ExternalLink, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const courses = [
    {
        title: "Full Stack Web Development & React",
        platform: "Udemy · Chai aur Code",
        instructor: "Hitesh Choudhary",
        date: "2025 - 2026",
        description: "In-depth training on Javascript foundations, modern React architectures (fiber, concurrent rendering), advanced state management (Redux Toolkit, Zustand), custom hook design, and full-stack REST API development.",
        tags: ["React.js", "JavaScript", "Redux", "Tailwind CSS", "REST APIs"],
        link: "https://www.udemy.com/",
        color: "orange" as const
    },
    {
        title: "100xdevs Cohort (Full Stack & DevOps)",
        platform: "100xdevs",
        instructor: "Harkirat Singh",
        date: "2025 - 2026",
        description: "Advanced engineering bootcamp focusing on production-grade systems: scaling Node.js applications, ORMs (Prisma), databases (PostgreSQL, MongoDB), caching with Redis, message queues, Docker containerization, CI/CD pipelines, and WebSockets.",
        tags: ["DevOps", "Next.js", "PostgreSQL", "Docker", "Redis", "Prisma"],
        link: "https://100xdevs.com/",
        color: "blue" as const
    }
];

export const Courses: React.FC = () => {
    return (
        <section id="courses" className="py-8">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-12 text-left">
                    <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-3">Courses Completed</h2>
                    <p className="text-base text-dark/70">Structured learning programs I've finished to hone my development skills.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {courses.map((course, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                        >
                            <Card className="h-full bg-white/40 border border-zinc-200/50 hover:border-primary/20 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col p-6 relative group">
                                <div className="flex justify-between items-start gap-4 mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2.5 rounded-xl border ${
                                            course.color === 'orange' 
                                                ? 'bg-amber-50 border-amber-200/50 text-amber-600' 
                                                : 'bg-blue-50 border-blue-200/50 text-primary'
                                        }`}>
                                            <GraduationCap className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-dark/45 block mb-0.5">
                                                {course.platform}
                                            </span>
                                            <h3 className="text-lg font-bold font-heading text-dark leading-snug group-hover:text-primary transition-colors">
                                                {course.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-dark/40 bg-zinc-100/60 px-2.5 py-1 rounded-full shrink-0">
                                        <Calendar className="w-3 h-3" /> {course.date}
                                    </div>
                                </div>

                                <p className="text-xs font-semibold text-dark/50 mb-3">
                                    Instructor: <span className="text-dark/80 font-bold">{course.instructor}</span>
                                </p>

                                <p className="text-xs md:text-sm text-dark/70 mb-5 flex-1 leading-relaxed">
                                    {course.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5 mb-6">
                                    {course.tags.map(tag => (
                                        <Badge 
                                            key={tag} 
                                            color={course.color}
                                            className="group-hover:bg-primary group-hover:text-white group-hover:border-primary/20"
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
                                    <div className="flex items-center gap-1.5 text-emerald-600 text-xs font-black uppercase tracking-wider">
                                        <Award className="w-4 h-4" /> Syllabus Completed
                                    </div>
                                    <a
                                        href={course.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-xs font-bold text-dark/70 hover:text-primary transition-colors duration-200"
                                    >
                                        Course Details <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
