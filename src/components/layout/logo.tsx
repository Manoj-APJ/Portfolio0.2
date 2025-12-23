import { useEffect, useState } from 'react';
import { Code2 } from 'lucide-react';

export const Logo = () => {
    const [showStatus, setShowStatus] = useState(false);

    useEffect(() => {
        const hero = document.getElementById('home');

        if (!hero) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // show dot when hero is NOT visible
                setShowStatus(!entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        observer.observe(hero);

        return () => observer.disconnect();
    }, []);

    return (
        <a href="#" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 bg-primary border-3 border-dark rounded-lg flex items-center justify-center shadow-neo group-hover:shadow-neo-lg transition-all group-hover:-translate-y-1">
                <Code2 className="w-6 h-6 text-dark" />

                {showStatus && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-dark rounded-full animate-pulse" />
                )}
            </div>

            <span className="font-heading font-bold text-xl tracking-wide">
                Manoj.M
            </span>
        </a>
    );
};
