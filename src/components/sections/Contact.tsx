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
                <div className="mb-12 text-left">
                    <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-3">Get In Touch</h2>
                    <p className="text-base text-dark/70">Have a project in mind or just want to say hi?</p>
                </div>

                <Card className="p-6 md:p-8">
                    {/* Copy Email */}
                    <div className="flex items-center justify-center gap-3 mb-6 text-sm">
                        <span className="font-bold text-dark/80">{email}</span>
                        <button
                            onClick={copyEmail}
                            type="button"
                            className="flex items-center gap-1.5 px-3 py-1 border border-zinc-200 rounded-full hover:bg-zinc-50 transition text-xs font-semibold text-dark/70"
                        >
                            <Copy className="w-3.5 h-3.5" />
                            {copied ? 'Copied!' : 'Copy'}
                        </button>
                    </div>

                    {submitted ? (
                        <div className="min-h-[220px] flex flex-col items-center justify-center text-center animate-fade-in-up">
                            <div className="w-12 h-12 bg-emerald-500/10 text-emerald-600 rounded-full flex items-center justify-center mb-4 border border-emerald-500/10">
                                <CheckCircle className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">
                                Message Sent!
                            </h3>
                            <p className="text-sm text-dark/60 mb-4">
                                Thanks for reaching out. You can send another message.
                            </p>
                            <Button type="button" onClick={() => setSubmitted(false)}>
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
                                <Button type="submit" size="md" className="w-full md:w-auto px-6 py-2.5 text-sm">
                                    Send Message <Send className="w-4 h-4 ml-1" />
                                </Button>
                            </div>
                        </form>
                    )}
                </Card>
            </div>
        </section>
    );
};
