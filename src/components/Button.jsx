import React from 'react';

export default function Button({size, color, onClick, children}) {
    const colorClasses = {
        violet: "bg-violet-800 hover:bg-violet-700 text-white",
        white: "bg-white text-slate-800",
        emerald: "bg-[#04eed2] text-white hover:text-slate-800"
    };
    const sizeClasses = {
        small: "w-10",
        middle: "w-15",
        large: "w-[13rem]"
    };
    const buttonClass = `${colorClasses[color] || ""} ${sizeClasses[size] || ""} rounded-xl py-1 px-3 border border-transparent  text-base font-bold transition-all shadow-md hover:shadow-lg focus:shadow-none active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 h-11`;

    return (
        <button
            type="button"
            onClick={onClick}
            className={buttonClass}
        >
            {children}
        </button>
    );
}
