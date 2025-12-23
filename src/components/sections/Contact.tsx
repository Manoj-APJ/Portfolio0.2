import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Simulate API call
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section id="contact" className="py-20 bg-surface border-t-3 border-dark">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">Get In Touch</h2>
                <p className="text-xl opacity-70 text-center mb-12">Have a project in mind or just want to say hi?</p>

                <Card className="bg-white p-8 md:p-12">
                    {submitted ? (
                        <div className="min-h-[300px] flex flex-col items-center justify-center text-center animate-fade-in-up">
                            <div className="w-20 h-20 bg-green-400 rounded-full border-3 border-dark flex items-center justify-center mb-6 shadow-neo">
                                <CheckCircle className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                            <p className="opacity-70">Thanks for reaching out. I'll get back to you soon.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="font-bold">Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="John Doe"
                                        required
                                        className="neo-input w-full"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="font-bold">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        required
                                        className="neo-input w-full"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="font-bold">Message</label>
                                <textarea
                                    id="message"
                                    placeholder="Tell me about your project..."
                                    required
                                    rows={5}
                                    className="neo-input w-full resize-none"
                                />
                            </div>

                            <div className="flex justify-end pt-4">
                                <Button size="lg" className="w-full md:w-auto">
                                    Send Message <Send className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </form>
                    )}
                </Card>
            </div>
        </section>
    );
};
