import React from 'react';
import { Card } from '../ui/Card';
import { Award, Calendar, CheckCircle2 } from 'lucide-react';

const certifications = [
    {
        title: "Python Foundation Certificate",
        org: "Infosys Springboard",
        date: "2025"
    },
    {
        title: "Certified Web Developer",
        org: "Udemy",
        date: "2026"
    }
];

export const Certifications: React.FC = () => {
    return (
        <section id="certifications" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center">Certifications</h2>

                <div className="max-w-4xl mx-auto space-y-6">
                    {certifications.map((cert, idx) => (
                        <div key={idx} className="flex gap-4 md:gap-8 group">
                            {/* Timeline graphic */}
                            <div className="flex flex-col items-center">
                                <div className="w-10 h-10 bg-primary border-3 border-dark rounded-full flex items-center justify-center shrink-0 z-10 shadow-neo-sm">
                                    <Award className="w-5 h-5 text-dark" />
                                </div>
                                {idx !== certifications.length - 1 && (
                                    <div className="w-1 bg-dark h-full -my-2" />
                                )}
                            </div>

                            <Card className="flex-1 bg-white hover:-translate-y-1 transition-transform mb-4">
                                <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mb-2">
                                    <h3 className="text-xl font-bold font-heading">{cert.title}</h3>
                                    <div className="flex items-center gap-2 text-sm font-bold opacity-60">
                                        <Calendar className="w-4 h-4" /> {cert.date}
                                    </div>
                                </div>
                                <p className="font-bold opacity-80 mb-2">{cert.org}</p>
                                <div className="flex items-center gap-2 text-sm opacity-60">
                                    <CheckCircle2 className="w-4 h-4 text-green-600" /> {cert.id}
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
