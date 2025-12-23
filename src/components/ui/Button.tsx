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
    const baseStyles = "font-bold border-3 border-dark rounded-full shadow-neo transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:-translate-y-1 hover:shadow-neo-lg flex items-center gap-2 justify-center";

    const variants = {
        primary: "bg-primary text-dark",
        secondary: "bg-secondary text-dark",
        accent: "bg-accent text-dark",
        outline: "bg-transparent text-dark border-dark hover:bg-surface",
    };

    const sizes = {
        sm: "px-4 py-1 text-sm",
        md: "px-6 py-2 text-base",
        lg: "px-8 py-3 text-lg",
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
