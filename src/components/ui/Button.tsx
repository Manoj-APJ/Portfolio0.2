import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'accent' | 'outline';
    size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    ...props
}) => {
    const baseStyles = "font-bold rounded-full transition-all duration-200 flex items-center gap-2 justify-center active:scale-[0.98]";

    const variants = {
        primary: "bg-primary text-white hover:bg-primary/95 shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/15 hover:-translate-y-0.5",
        secondary: "bg-secondary text-dark hover:bg-secondary/95 shadow-md shadow-secondary/15 hover:shadow-lg hover:shadow-secondary/25 hover:-translate-y-0.5",
        accent: "bg-accent text-white hover:bg-accent/95 shadow-md shadow-accent/15 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5",
        outline: "bg-transparent text-primary border-1.5 border-primary/40 hover:border-primary hover:bg-primary/5",
    };

    const sizes = {
        sm: "px-5 py-1.5 text-sm",
        md: "px-6 py-2.5 text-base",
        lg: "px-8 py-3.5 text-lg",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ''}`}
            {...props}
        >
            {children}
        </button>
    );
};
