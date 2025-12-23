import React from 'react';
import { Card } from '../ui/Card';
import { ArrowRight } from 'lucide-react';

const blogs = [
    {
        title: "Understanding React Server Components",
        date: "Dec 12, 2024",
        excerpt: "A deep dive into how RSCs change the way we build Next.js applications.",
        readTime: "5 min read",
        link: "#"
    },
    {
        title: "Mastering Tailwind CSS Grid",
        date: "Nov 28, 2024",
        excerpt: "Tips and tricks for building complex layouts with utility classes.",
        readTime: "8 min read",
        link: "#"
    },
    {
        title: "The Future of AI in Web Development",
        date: "Nov 15, 2024",
        excerpt: "How LLMs are assisting developers rather than replacing them.",
        readTime: "6 min read",
        link: "#"
    }
];

export const Blogs: React.FC = () => {
    return (
        <section id="blogs" className="py-20 bg-surface border-y-3 border-dark">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center">Recent Thoughts</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {blogs.map((blog, idx) => (
                        <Card key={idx} className="bg-white hover:bg-bg transition-colors cursor-pointer group">
                            <div className="mb-4 text-sm font-bold opacity-60 flex justify-between">
                                <span>{blog.date}</span>
                                <span>{blog.readTime}</span>
                            </div>
                            <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">{blog.title}</h3>
                            <p className="opacity-70 mb-6">{blog.excerpt}</p>
                            <div className="flex items-center gap-2 font-bold text-sm">
                                Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
