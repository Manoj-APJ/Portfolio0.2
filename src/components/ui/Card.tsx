import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
}

export const Card: React.FC<CardProps> = ({ children, className, title }) => {
    return (
        <div className={`glass-card rounded-2xl p-6 hover:shadow-lg hover:border-zinc-300/40 hover:-translate-y-0.5 transition-all duration-300 ${className || ''}`}>
            {title && (
                <h3 className="text-lg font-heading font-bold mb-4 border-b border-zinc-100 pb-2.5 text-dark">
                    {title}
                </h3>
            )}
            {children}
        </div>
    );
};
