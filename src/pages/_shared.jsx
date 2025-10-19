import React from 'react'


export const Card = ({ title, children }) => (
<div className="p-4 bg-white dark:bg-slate-800 rounded-lg border dark:border-slate-700 shadow-sm">
{title && <h3 className="font-semibold">{title}</h3>}
<div className="mt-2 text-sm text-slate-600 dark:text-slate-300">{children}</div>
</div>
)