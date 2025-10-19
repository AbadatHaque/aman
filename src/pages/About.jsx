import React from 'react'


export default function About(){
return (
<div className="container mx-auto px-4 py-12">
<h1 className="text-3xl font-bold">About Luminex Sparq</h1>
<p className="mt-4 text-slate-600 dark:text-slate-300">Founded in Chennai, Luminex Sparq Company (Bagh Chingari) produces trusted safety matches with consistent quality controls. Our mission is to ignite trust in every box.</p>


<div className="mt-8 grid md:grid-cols-3 gap-4">
<div className="p-4 bg-white dark:bg-slate-800 rounded">
<h4 className="font-semibold">Quality</h4>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-2">Strict inspections and premium materials.</p>
</div>
<div className="p-4 bg-white dark:bg-slate-800 rounded">
<h4 className="font-semibold">Safety</h4>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-2">Compliant with safety standards.</p>
</div>
<div className="p-4 bg-white dark:bg-slate-800 rounded">
<h4 className="font-semibold">Distribution</h4>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-2">Nationwide reach across retailers.</p>
</div>
</div>
</div>
)
}