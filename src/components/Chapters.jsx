import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, PenTool, Layout } from 'lucide-react';

const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <div className="mx-auto max-w-3xl text-center">
    <p className="text-sm tracking-widest text-[#d6b07a] uppercase">{eyebrow}</p>
    <h2 className="mt-2 font-serif text-3xl md:text-4xl text-zinc-900">{title}</h2>
    {subtitle && (
      <p className="mt-3 text-zinc-600">{subtitle}</p>
    )}
  </div>
);

const Chapters = () => {
  const chapterOneImages = [
    '/assets/poster1.jpg',
    '/assets/movie_poster.jpg',
    '/assets/logo1.png',
  ];

  return (
    <div className="space-y-28 px-6 py-24 md:px-12">
      {/* Chapter 1 */}
      <section>
        <SectionTitle
          eyebrow="Chapter 1"
          title="The Beginning: My Artistic World"
          subtitle="My creative story began with colors, compositions, and textures — designing posters, logos, and brand stories. This is where I learned the art of visual balance."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {chapterOneImages.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative h-56 overflow-hidden rounded-xl bg-[#f3e9e4]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${src})` }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 text-[#d6b07a]">
          <PenTool size={18} />
          <span className="text-sm">Brush strokes merge into a cursor — a shift begins.</span>
        </div>
      </section>

      {/* Chapter 2 */}
      <section>
        <SectionTitle
          eyebrow="Chapter 2"
          title="The Shift: Design Meets Purpose"
          subtitle="Soon I realized — design isn’t just visual, it’s functional. That’s when I entered the world of UI and UX."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-72 rounded-xl bg-[url('/assets/logo2.png')] bg-cover bg-center"
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-72 rounded-xl bg-[url('/assets/app_mockup1.png')] bg-cover bg-center"
          />
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 text-[#8dd3cc]">
          <Layout size={18} />
          <span className="text-sm">Art morphs into interface — form meets function.</span>
        </div>
      </section>

      {/* Chapter 3 */}
      <section>
        <SectionTitle
          eyebrow="Chapter 3"
          title="The Process: How I Design"
        />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-white/60 p-6 shadow-sm ring-1 ring-black/5">
            <h3 className="font-serif text-2xl">Graphic Flow</h3>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
              {['Moodboard','Color palette','Final poster'].map((s, i) => (
                <motion.div key={s} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-lg bg-[#f7efe7] p-4">
                  {s}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="rounded-xl bg-white/60 p-6 shadow-sm ring-1 ring-black/5">
            <h3 className="font-serif text-2xl">UI/UX Flow</h3>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
              {['Wireframe','Prototype','User testing'].map((s, i) => (
                <motion.div key={s} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-lg bg-[#e9f4f3] p-4">
                  {s}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-4 items-center justify-center gap-3 text-xs text-zinc-600 md:text-sm">
          {['Idea','Sketch','Prototype','Launch'].map((t) => (
            <motion.div key={t} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center justify-center gap-2 rounded-full bg-white/60 px-3 py-2 ring-1 ring-black/5">
              <Sparkles size={14} className="text-[#d6b07a]" />
              {t}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Chapters;
