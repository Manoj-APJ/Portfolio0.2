import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    color?: 'pink' | 'blue' | 'orange' | 'yellow' | 'green';
    className?: string;
}

const colorMap = {
    pink: 'bg-pink-50 text-pink-700 border-pink-200/60',
    blue: 'bg-blue-50 text-blue-700 border-blue-200/60',
    orange: 'bg-amber-50/70 text-amber-700 border-amber-200/60',
    yellow: 'bg-yellow-50 text-yellow-800 border-yellow-200/60',
    green: 'bg-emerald-50/80 text-emerald-700 border-emerald-200/60',
};

export const Badge: React.FC<BadgeProps> = ({ children, color = 'green', className = '' }) => {
    return (
        <span className={`${colorMap[color]} px-2.5 py-0.5 rounded-full border font-semibold text-xs inline-flex items-center gap-1 transition-all duration-200 ${className}`}>
            {children}
        </span>
    );
};
