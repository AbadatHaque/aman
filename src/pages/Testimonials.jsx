import React from 'react'


const testimonials = [
{ name: 'R. Kumar', text: 'Great quality matches. Highly durable and consistent.' },
{ name: 'Shweta D', text: 'Reliable product, quick delivery.' },
]


export default function Testimonials(){
return (
<div className="container mx-auto px-4 py-12">
<h1 className="text-3xl font-bold">Testimonials</h1>
<div className="mt-6 grid md:grid-cols-2 gap-4">
{testimonials.map((t, i) => (
<div key={i} className="p-4 bg-white dark:bg-slate-800 rounded shadow-sm">
<div className="font-semibold">{t.name}</div>
<div className="mt-2 text-slate-600 dark:text-slate-300">{t.text}</div>
</div>
))}
</div>
</div>
)
}