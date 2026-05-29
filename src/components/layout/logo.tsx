import { useEffect, useState } from 'react';

export const Logo = () => {
    const [showStatus, setShowStatus] = useState(false);

    useEffect(() => {
        const hero = document.getElementById('home');

        if (!hero) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowStatus(!entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        observer.observe(hero);

        return () => observer.disconnect();
    }, []);

    return (
        <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 bg-secondary rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-4.5 h-4.5 text-dark"
                >
                    <polyline points="10 17 15 12 10 7" />
                </svg>

                {showStatus && (
                    <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 border border-white rounded-full animate-pulse" />
                )}
            </div>

            <span className="font-heading font-bold text-lg tracking-tight text-dark transition-colors duration-200 group-hover:text-primary">
                manoj.ai
            </span>
        </a>
    );
};
