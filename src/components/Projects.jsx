import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Campus Navigator',
    desc: 'An interactive map app that helps students find buildings, events, and resources on campus.',
    img: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=1200&auto=format&fit=crop',
    tags: ['React', 'Leaflet', 'API'],
    link: '#',
  },
  {
    title: 'Study Planner',
    desc: 'A smart planner that organizes tasks and study sessions with reminders and streaks.',
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    tags: ['Node.js', 'MongoDB', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Portfolio V1',
    desc: 'My first personal site exploring motion, layout, and clean typography.',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    tags: ['Vite', 'Framer Motion', 'Design'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-[#0b1220]"
        >
          Projects
        </motion.h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden bg-[#F7F8FA] border border-black/[0.06] hover:border-[#48e1c4]/50 hover:shadow-xl hover:shadow-[#48e1c4]/10 transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-[#0b1220]">{p.title}</h3>
                  <div className="flex gap-1.5 flex-wrap justify-end">
                    {p.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-full bg-[#0b1220] text-white text-xs">{t}</span>
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-[#0b1220]/70">{p.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
