import React from 'react'


export const Button = ({ children, className = '', ...props }) => {
return (
<button
{...props}
className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md shadow-sm bg-slate-900 text-white dark:bg-slate-200 dark:text-slate-900 ${className}`}
>
{children}
</button>
)
}