import React from 'react'
import { Card } from '../pages/_shared'


export default function Home(){
return (
<div className="container mx-auto px-4 py-12">
<div className="grid md:grid-cols-2 gap-8 items-center">
<div>
<h1 className="text-4xl font-bold">Luminex Sparq Company</h1>
<p className="mt-4 text-lg text-slate-600 dark:text-slate-300">Igniting Trust with Quality Safety Matches. Based in Chennai, we craft premium safety matches that you can rely on.</p>


<div className="mt-6 flex gap-3">
<a href="/contact" className="px-4 py-2 rounded bg-indigo-600 text-white">Contact Us</a>
<a href={`https://wa.me/91${"7431007424"}`} className="px-4 py-2 rounded border">Chat WhatsApp</a>
</div>
</div>


<div>
<img src="/logo.png" alt="logo" className="w-64 h-64 object-contain mx-auto" />
</div>
</div>


<section className="mt-12">
<h2 className="text-2xl font-semibold">Our Products</h2>
<p className="mt-2 text-slate-600 dark:text-slate-300">We supply high-quality safety matches for retailers and consumers across India.</p>


<div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
<Card title="Kitchen Matches">Reliable household matches.</Card>
<Card title="Safety Matches">Premium safety matches built to strict quality standards.</Card>
<Card title="Bulk Packs">Large quantity wholesale packs for shops and distributors.</Card>
</div>
</section>
</div>
)
}