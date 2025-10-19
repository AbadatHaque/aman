import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from './ui/button'


export default function Navbar({ theme, setTheme }){
const loc = useLocation()
return (
<header className="bg-white dark:bg-slate-800 shadow-sm">
<div className="container mx-auto px-4 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<img src="/logo.png" alt="Luminex Sparq" className="w-12 h-12 rounded-full object-cover" />
<div>
<div className="font-bold">Luminex Sparq Company</div>
<div className="text-xs text-slate-500 dark:text-slate-300">Igniting Trust with Quality Safety Matches</div>
</div>
</div>


<nav className="flex items-center gap-3">
<Link className={`px-3 py-2 rounded ${loc.pathname==='/'? 'bg-slate-100 dark:bg-slate-700':''}`} to="/">Home</Link>
<Link className={`px-3 py-2 rounded ${loc.pathname==='/about'? 'bg-slate-100 dark:bg-slate-700':''}`} to="/about">About</Link>
<Link className={`px-3 py-2 rounded ${loc.pathname==='/testimonials'? 'bg-slate-100 dark:bg-slate-700':''}`} to="/testimonials">Testimonials</Link>
<Link className={`px-3 py-2 rounded ${loc.pathname==='/faq'? 'bg-slate-100 dark:bg-slate-700':''}`} to="/faq">FAQ</Link>
<Link className={`px-3 py-2 rounded ${loc.pathname==='/contact'? 'bg-slate-100 dark:bg-slate-700':''}`} to="/contact">Contact</Link>


<Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? 'Light' : 'Dark'}</Button>
</nav>
</div>
</header>
)
}