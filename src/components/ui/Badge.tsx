import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    color?: 'pink' | 'blue' | 'orange' | 'yellow' | 'green';
}

const colorMap = {
    pink: 'bg-[#FF8A80]',
    blue: 'bg-[#80D8FF]',
    orange: 'bg-[#FFD180]',
    yellow: 'bg-[#FFFF8D]',
    green: 'bg-[#A7FFEB]',
};

export const Badge: React.FC<BadgeProps> = ({ children, color = 'green' }) => {
    return (
        <span className={`${colorMap[color]} px-3 py-1 rounded-md border-2 border-dark font-bold text-sm shadow-neo-sm inline-flex items-center gap-1`}>
            {children}
        </span>
    );
};
