import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
    return (
        <section
            id="home"
            className="pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col items-start gap-6 relative"
        >
            <div className="group inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-dark rounded-full shadow-neo text-sm font-bold animate-fade-in-up transition-all duration-300 hover:scale-105 cursor-default">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for interesting projects
                <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="max-w-0 overflow-hidden group-hover:max-w-[100px] transition-all duration-500 ease-in-out text-primary hover:text-primary/80 whitespace-nowrap flex items-center"
                >
                    <span className="mx-2 text-dark/30">|</span>
                    Contact Me
                </button>
            </div>

            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                Building <span className="text-primary underline decoration-4 underline-offset-4">Digital</span> <br />
                Experiences that <br />
                <span className="bg-accent px-3 py-1 transform -rotate-1 inline-block border-3 border-dark rounded-lg shadow-neo mt-2">
                    Matter.
                </span>
            </h1>

            <p className="font-body text-lg md:text-xl opacity-80 max-w-2xl mt-4 leading-relaxed">
                Hi, I'm <span className="font-bold">Manoj Mannam</span>. A Full Stack & AI Engineer passionate about building scalable backends and intuitive interfaces.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mt-8">
                <Button
                    size="lg"
                    onClick={() =>
                        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                    }
                >
                    View My Work <ArrowRight className="w-5 h-5" />
                </Button>

                <Button
                    variant="outline"
                    size="lg"
                    onClick={() =>
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                    }
                >
                    <Terminal className="w-5 h-5" />
                    Contact Me
                </Button>
            </div>

            <div className="absolute top-32 right-10 hidden lg:block animate-bounce-slow">
                <div className="w-16 h-16 bg-secondary border-3 border-dark rounded-full shadow-neo flex items-center justify-center">
                    <div className="w-4 h-4 bg-dark rounded-full" />
                </div>
            </div>
        </section>
    );
};
