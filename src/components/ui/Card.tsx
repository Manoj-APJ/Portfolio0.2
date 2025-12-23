import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
}

export const Card: React.FC<CardProps> = ({ children, className, title }) => {
    return (
        <div className={`neo-card p-6 ${className || ''}`}>
            {title && (
                <h3 className="text-xl font-heading font-bold mb-4 border-b-3 border-dark pb-2 inline-block">
                    {title}
                </h3>
            )}
            {children}
        </div>
    );
};
