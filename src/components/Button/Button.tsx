import React from "react";

type ButtonProps = {
    rounded?: boolean;
    type?: "button" | "submit" | "reset";
    size?: "small" | "medium" | "large";
    color?: string;
    onClick?: () => void;
    disabled?: boolean;
    children: React.ReactNode;
    subClass?: string;
};

export default function Button({
    rounded = false,
    type = "button",
    size = "medium",
    onClick,
    disabled = false,
    children,
    color = "bg-primary text-white hover:bg-opacity-60  ",
    subClass,
}: ButtonProps) {
    const sizeClasses = {
        small: "px-2 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-6 py-3 text-lg",
    };

    const roundedClass = rounded ? "rounded-full" : "rounded-md";

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${sizeClasses[size]} ${roundedClass} ${color} ${subClass}  transition-all flex items-center justify-center `}
        >
            {children}
        </button>
    );
}
