import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative overflow-hidden bg-white/70 py-10 text-center text-sm text-zinc-600">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(238,207,214,0.3),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(141,211,204,0.3),transparent_50%)]" />
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-4 px-6">
        <button onClick={scrollTop} className="group flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm ring-1 ring-black/5 transition hover:shadow-md">
          <ArrowUp className="transition group-hover:-translate-y-0.5" size={16} />
          <span>Back to top</span>
        </button>
        <p className="text-zinc-700">Designed with ❤️ by Pragya | © 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
