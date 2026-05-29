import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Send, CheckCircle, Copy } from 'lucide-react';

export const Contact: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const [copied, setCopied] = useState(false);

    const email = 'manojmannamapj9@gmail.com';

    const copyEmail = async () => {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-8">
            <div className="container mx-auto px-6 max-w-3xl">
                {/* The Closer Title */}
                <div className="mb-10 text-left">
                    <h2 className="text-3xl md:text-4xl font-heading font-black mb-3 tracking-tight">
                        Let's Discuss.
                    </h2>
                    <p className="text-sm md:text-base text-dark/65 leading-relaxed font-medium">
                        Let's build something exceptional together. Drop a message below or copy my direct email.
                    </p>
                </div>

                <Card className="p-6 md:p-8 bg-white/40 border border-zinc-200/50 hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                    {/* Premium Status-Style Email Banner */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6 p-4 bg-primary/5 border border-primary/10 rounded-2xl select-none">
                        <div className="flex items-center gap-2.5">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-[10px] font-heading font-extrabold uppercase tracking-wider text-primary">
                                Direct Connection
                            </span>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <span className="font-mono text-xs font-bold text-dark/85">
                                {email}
                            </span>
                            <button
                                onClick={copyEmail}
                                type="button"
                                className="flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-zinc-50 border border-zinc-200/80 rounded-full transition-all text-[10px] font-extrabold uppercase tracking-wider text-dark/75 shadow-sm active:scale-95 cursor-pointer"
                            >
                                <Copy className="w-3 h-3 text-primary" />
                                {copied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                    </div>

                    {submitted ? (
                        <div className="min-h-[220px] flex flex-col items-center justify-center text-center animate-fade-in">
                            <div className="w-12 h-12 bg-emerald-500/10 text-emerald-600 rounded-full flex items-center justify-center mb-4 border border-emerald-500/10">
                                <CheckCircle className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold mb-2">
                                Message Sent!
                            </h3>
                            <p className="text-xs text-dark/60 mb-5">
                                Thanks for reaching out. I'll get back to you shortly.
                            </p>
                            <Button 
                                type="button" 
                                variant="outline"
                                size="sm"
                                onClick={() => setSubmitted(false)}
                                className="text-[10px] uppercase tracking-wider font-extrabold border-dark/20 text-dark hover:bg-dark hover:text-white"
                            >
                                Send Another
                            </Button>
                        </div>
                    ) : (
                        <form
                            action="https://formspree.io/f/xdanyooa"
                            method="POST"
                            onSubmit={async (e) => {
                                e.preventDefault();
                                const form = e.currentTarget;
                                const formData = new FormData(form);

                                try {
                                    const response = await fetch(form.action, {
                                        method: 'POST',
                                        body: formData,
                                        headers: {
                                            'Accept': 'application/json'
                                        }
                                    });

                                    if (response.ok) {
                                        console.log("Form submission successful");
                                        setSubmitted(true);
                                        form.reset();
                                    } else {
                                        console.error("Form submission failed");
                                        const data = await response.json();
                                        if (Object.hasOwn(data, 'errors')) {
                                            console.error(data["errors"].map((error: any) => error["message"]).join(", "));
                                        } else {
                                            console.error("Oops! There was a problem submitting your form");
                                        }
                                    }
                                } catch (error) {
                                    console.error("Form submission error", error);
                                }
                             }}
                             className="space-y-5 text-left"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-1">
                                    <label htmlFor="name" className="font-semibold text-xs text-dark/70 uppercase tracking-wider">
                                        Name (optional)
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="John Doe"
                                        className="neo-input w-full py-2.5 text-sm"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="email" className="font-semibold text-xs text-dark/70 uppercase tracking-wider">
                                        Email *
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        required
                                        className="neo-input w-full py-2.5 text-sm"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="message" className="font-semibold text-xs text-dark/70 uppercase tracking-wider">
                                    Message (optional)
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell me about your project..."
                                    rows={4}
                                    className="neo-input w-full resize-none text-sm"
                                />
                            </div>

                            <div className="flex justify-end pt-2">
                                <Button 
                                    type="submit" 
                                    variant="primary"
                                    size="md" 
                                    className="w-full md:w-auto px-8 py-3 text-[10px] font-heading font-extrabold tracking-widest uppercase bg-dark hover:bg-primary rounded-full transition-all duration-200"
                                >
                                    Send Message <Send className="w-3.5 h-3.5 ml-1" />
                                </Button>
                            </div>
                        </form>
                    )}
                </Card>
            </div>
        </section>
    );
};
