import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PROJECTS = [
  { id: 1, type: 'Graphic', title: 'The Voice Within', caption: 'Typography that speaks louder than words.', img: '/assets/poster1.jpg' },
  { id: 2, type: 'Graphic', title: 'Lumos Candles', caption: 'A warm glow in every detail.', img: '/assets/brand_kit.jpg' },
  { id: 3, type: 'Graphic', title: 'Echoes of Silence', caption: 'Every silence has a story.', img: '/assets/movie_poster.jpg' },
  { id: 4, type: 'Graphic', title: 'Bold Woman Series', caption: 'Confidence, crafted with color.', img: '/assets/social_series.jpg' },
  { id: 5, type: 'UI/UX', title: 'InnerPeace', caption: 'Designing calm in every click.', img: '/assets/app_mockup1.png' },
  { id: 6, type: 'UI/UX', title: 'FitFlow', caption: 'Fitness meets flow.', img: '/assets/app_mockup2.png' },
  { id: 7, type: 'UI/UX', title: 'NeoDrive', caption: 'The future of driving, designed.', img: '/assets/ev_dash.png' },
  { id: 8, type: 'UI/UX', title: 'Aura Jewelry', caption: 'Elegance in every pixel.', img: '/assets/ecom_site.jpg' },
  { id: 9, type: 'UI/UX', title: 'Roamify', caption: 'Travel, designed to inspire.', img: '/assets/travel_app.png' },
];

const tabs = ['Graphic Design', 'UI/UX Design'];

const Projects = () => {
  const [active, setActive] = useState(tabs[0]);
  const filtered = useMemo(() => PROJECTS.filter(p => (active === 'Graphic Design' ? p.type === 'Graphic' : p.type === 'UI/UX')), [active]);

  return (
    <section id="projects" className="px-6 py-24 md:px-12">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-zinc-900">Projects: Where Imagination Takes Shape</h2>
        <p className="mt-3 text-zinc-600">Explore selected works across brand, print, and digital products.</p>
      </div>

      <div className="mx-auto mt-8 flex w-full max-w-xl items-center justify-center gap-2 rounded-full bg-white/70 p-2 shadow-sm ring-1 ring-black/5">
        {tabs.map(t => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`w-1/2 rounded-full px-4 py-2 text-sm transition ${active === t ? 'bg-[#eecfd6] text-zinc-900' : 'text-zinc-600 hover:bg-white'}`}
          >
            {t}
          </button>
        ))}
      </div>

      <motion.div layout className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filtered.map((p) => (
            <motion.a
              key={p.id}
              href={`#/case/${p.id}`}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="group relative block overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5"
            >
              <div className="h-48 w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${p.img})` }} />
              <div className="p-4">
                <h3 className="font-medium text-zinc-900">{p.title}</h3>
                <p className="mt-1 text-sm text-zinc-600">{p.caption}</p>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>

      <div id="contact" className="mx-auto mt-20 max-w-3xl rounded-2xl bg-gradient-to-br from-[#f7efe7] via-white to-[#e9f4f3] p-8 text-center shadow-sm ring-1 ring-black/5">
        <h3 className="font-serif text-2xl">Let’s Create Magic Together</h3>
        <p className="mt-2 text-zinc-600">Let’s collaborate and bring ideas to life — visually and experientially.</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a href="#" className="rounded-full bg-[#eecfd6] px-5 py-2 text-sm text-zinc-900 shadow-sm">View Resume</a>
          <a href="#" className="rounded-full border border-[#d6b07a] bg-white px-5 py-2 text-sm text-zinc-900 shadow-sm">Hire Me</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="rounded-full bg-[#8dd3cc] px-5 py-2 text-sm text-zinc-900 shadow-sm">LinkedIn Profile</a>
        </div>
        <p className="mt-6 text-sm text-zinc-500">Thank you for scrolling through my story.</p>
      </div>
    </section>
  );
};

export default Projects;
