import React from 'react';
import { Card } from '../ui/Card';
import { ArrowRight } from 'lucide-react';

const blogs = [
    {
        title: "Understanding React Server Components",
        date: "Dec 12, 2024",
        excerpt: "A deep dive into how RSCs change the way we build Next.js applications.",
        readTime: "5 min read",
        link: "/blogs"
    },
    {
        title: "Mastering Tailwind CSS Grid",
        date: "Nov 28, 2024",
        excerpt: "Tips and tricks for building complex layouts with utility classes.",
        readTime: "8 min read",
        link: "/blogs"
    },
    {
        title: "The Future of AI in Web Development",
        date: "Nov 15, 2024",
        excerpt: "How LLMs are assisting developers rather than replacing them.",
        readTime: "6 min read",
        link: "/blogs"
    }
];

export const Blogs: React.FC = () => {
    return (
        <section id="blogs" className="py-8">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-8 text-left">
                    <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-3">Recent Thoughts</h2>
                    <p className="text-base text-dark/70">Articles and developer logs I've written.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {blogs.map((blog, idx) => (
                        <a href={blog.link} key={idx} className="block h-full group">
                            <Card className="p-6 flex flex-col justify-between h-full hover:border-primary/20 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300">
                                <div>
                                    <div className="mb-4 text-[11px] font-semibold text-dark/40 flex justify-between">
                                        <span>{blog.date}</span>
                                        <span>{blog.readTime}</span>
                                    </div>
                                    <h3 className="text-base font-bold font-heading mb-3 group-hover:text-primary transition-colors line-clamp-2 text-dark">{blog.title}</h3>
                                    <p className="text-xs text-dark/65 mb-6 leading-relaxed line-clamp-3 font-medium">{blog.excerpt}</p>
                                </div>
                                <div className="flex items-center gap-1.5 text-xs font-bold text-primary group-hover:underline">
                                    Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Card>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
