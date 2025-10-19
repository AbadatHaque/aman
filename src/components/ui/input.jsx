import React from 'react'


export const Input = (props) => (
<input
{...props}
className="w-full px-3 py-2 border rounded-md bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
/>
)


export const Textarea = (props) => (
<textarea
{...props}
className="w-full px-3 py-2 border rounded-md bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
rows={5}
/>
)