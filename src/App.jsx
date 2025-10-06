/*
BugChingari - Single-file React component (App.jsx)

How to use:
1. Create a Vite React project: `npm create vite@latest bugchingari -- --template react` or use yarn.
2. Install Tailwind CSS (follow Tailwind docs). Quick commands:
   - npm install -D tailwindcss postcss autoprefixer
   - npx tailwindcss init -p
  //  - configure tailwind.config.js `content` to include ./index.html and ./src/**/
//    - set `darkMode: 'class'` in tailwind.config.js
// 3. Create `src/index.css` with Tailwind directives (see README below in this doc).
// 4. Replace `src/App.jsx` with the component below and ensure `src/main.jsx` imports './index.css'.
// 5. Run dev: `npm run dev` and deploy to Vercel (connect the repo).

// This single-file component contains:
// - Hero with red-yellow fire theme
// - About
// - Products grid
// - Testimonials
// - FAQ
// - Contact form (mailto fallback)
// - Dark mode toggle

// Note: Tailwind must be set up for the styling to work. The app toggles the `dark` class on <html> so Tailwind dark-mode works.
// */

import React, { useEffect, useState } from "react";

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // keep html class in sync so Tailwind dark: utilities work
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  const products = [
    { id: 1, name: "Classic Strike", desc: "Reliable household matchbox — 40 sticks.", price: "₹20" },
    { id: 2, name: "StormGuard", desc: "Wind-resistant match for outdoor use.", price: "₹45" },
    { id: 3, name: "EcoSpark", desc: "Reusable box with eco-friendly sticks.", price: "₹35" },
    { id: 4, name: "PocketLite", desc: "Compact pocket matchbox with safety lid.", price: "₹30" },
  ];

  const testimonials = [
    { id: 1, name: "Rita Sen", text: "Best matches I've used — safe and long-lasting." },
    { id: 2, name: "Karan Patel", text: "Great packaging and quick delivery." },
  ];

  const faqs = [
    { q: "Do you ship nationwide?", a: "Yes — we ship across India; rates vary by location." },
    { q: "Are matches safe for children?", a: "They should be kept out of reach of children and used with supervision." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-yellow-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-yellow-400 flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2s1.5 2 1.5 4-1.5 3-1.5 5 1.5 3 1.5 5-4.5 6-4.5 6" />
            </svg>
          </div>
          <div>
            <h1 className="font-bold text-xl">BugChingari</h1>
            <p className="text-sm opacity-80">Reliable matches for home & outdoors</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 rounded-md border dark:border-gray-700 bg-white/60 dark:bg-black/40 backdrop-blur-sm text-sm"
          >
            {dark ? "Light" : "Dark"}
          </button>
          <a href="#contact" className="hidden md:inline-block px-4 py-2 rounded-md bg-red-500 text-white font-medium">Contact</a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Ignite moments with <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-yellow-400 to-yellow-200">BugChingari</span>
          </h2>
          <p className="mt-4 text-lg opacity-90">Premium matchboxes crafted for safety and lasting flame — perfect for kitchens, camping, and ceremonies.</p>

          <div className="mt-6 flex gap-3">
            <a href="#products" className="px-5 py-3 rounded-md bg-red-600 text-white font-semibold">View Products</a>
            <a href="#about" className="px-5 py-3 rounded-md border dark:border-gray-700">Learn More</a>
          </div>

          <div className="mt-8 flex gap-4 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">🔥</div>
              <div>
                <div className="text-sm font-semibold">Trusted Quality</div>
                <div className="text-xs opacity-80">ISO tested, safe strike surface</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center">⚒️</div>
              <div>
                <div className="text-sm font-semibold">Durable Packaging</div>
                <div className="text-xs opacity-80">Sturdy boxes for every use</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-2xl shadow-xl overflow-hidden bg-gradient-to-tr from-red-500 to-yellow-300 p-8 flex items-center justify-center">
            <div className="w-64 h-40 bg-white rounded-lg flex flex-col items-center justify-center text-center">
              <div className="font-bold">BugChingari</div>
              <div className="text-xs opacity-80 mt-2">Matchbox — Classic Strike</div>
              <div className="mt-4 text-sm font-semibold">₹20 / box</div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 shadow">
          <h3 className="text-2xl font-bold">About BugChingari</h3>
          <p className="mt-4 text-base opacity-90">BugChingari is a family-run matchbox company combining traditional craftsmanship with modern safety standards. We focus on reliable ignition, responsible sourcing, and attractive packaging for retailers and households.</p>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">ISO Certified</div>
            <div className="p-4 border rounded-lg">Eco-friendly Options</div>
            <div className="p-4 border rounded-lg">Bulk & Retail</div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold mb-6">Our Products</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id} className="rounded-lg p-4 bg-white/80 dark:bg-gray-800/60 shadow">
              <div className="h-32 rounded-md bg-gradient-to-br from-red-500 to-yellow-300 mb-4 flex items-center justify-center text-white font-bold">{p.name}</div>
              <div className="text-sm opacity-90">{p.desc}</div>
              <div className="mt-3 flex items-center justify-between">
                <div className="font-semibold">{p.price}</div>
                <button className="px-3 py-1 rounded bg-red-500 text-white text-sm">Enquire</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold mb-6">Testimonials</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <blockquote key={t.id} className="p-6 bg-white/80 dark:bg-gray-800/60 rounded-lg shadow">
              <p className="italic">“{t.text}”</p>
              <footer className="mt-4 font-semibold">— {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold mb-6">FAQ</h3>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="p-4 rounded-lg bg-white/80 dark:bg-gray-800/60" open={i === 0}>
              <summary className="font-semibold cursor-pointer">{f.q}</summary>
              <p className="mt-2 text-sm opacity-90">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-red-500 to-yellow-400 rounded-2xl p-8 text-black dark:text-white">
          <h3 className="text-2xl font-bold">Contact / Enquiry</h3>
          <p className="mt-2">For bulk orders, retail partnerships or general enquiries — reach out to us.</p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target;
              const name = form.name.value;
              const email = form.email.value;
              const message = form.message.value;
              // Fallback: open mail client
              window.location.href = `mailto:info@bugchingari.example?subject=Enquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\nFrom: " + name + " (" + email + ")")}`;
            }}
            className="mt-6 grid sm:grid-cols-2 gap-4"
          >
            <input name="name" required placeholder="Your name" className="p-3 rounded-md" />
            <input name="email" required type="email" placeholder="Your email" className="p-3 rounded-md" />
            <textarea name="message" required placeholder="Your message" className="p-3 rounded-md sm:col-span-2" rows={5} />
            <div className="sm:col-span-2 flex gap-3 items-center">
              <button type="submit" className="px-5 py-3 rounded-md bg-black text-white font-semibold">Send Enquiry</button>
              <div className="text-sm opacity-90">Or email us at <a href="mailto:info@bugchingari.example" className="underline">info@bugchingari.example</a></div>
            </div>
          </form>
        </div>

        <div className="mt-6 text-sm opacity-80">© {new Date().getFullYear()} BugChingari — All rights reserved</div>
      </footer>

    </div>
  );
}
