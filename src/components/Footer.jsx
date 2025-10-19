import React from 'react'


export default function Footer(){
return (
<footer className="bg-slate-50 dark:bg-slate-900 border-t dark:border-slate-700">
<div className="container mx-auto px-4 py-6 text-center text-sm">
© {new Date().getFullYear()} Luminex Sparq Company — Bagh Chingari. All rights reserved.
</div>
</footer>
)
}