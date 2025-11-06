import React from 'react';
import { motion } from 'framer-motion';
import { User, Star } from 'lucide-react';

export default function About() {
  const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'Git', 'UI/UX'];
  const values = [
    { icon: User, title: 'Curiosity', desc: 'I love exploring new ideas and technologies.' },
    { icon: Star, title: 'Craft', desc: 'I care about clean design and thoughtful details.' },
  ];

  return (
    <section id="about" className="relative py-20 bg-[#F7F8FA] text-[#0b1220]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold"
        >
          About Me
        </motion.h2>

        <div className="mt-8 grid md:grid-cols-2 gap-10 items-start">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg leading-relaxed text-[#0b1220]/80"
          >
            Hi, I’m Utkarsh Patil — a student passionate about building useful, beautiful things.
            I enjoy learning by doing: turning ideas into interactive experiences and digging into
            how products are made from the ground up.
          </motion.p>

          <div className="grid gap-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-sm border border-black/[0.04]"
            >
              <h3 className="font-semibold text-xl mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-[#0b1220] text-white text-sm/none hover:-translate-y-0.5 transition-transform"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white/80 backdrop-blur rounded-2xl p-5 shadow-sm border border-black/[0.04]">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-5 h-5 text-[#48e1c4]" />
                    <h4 className="font-semibold">{title}</h4>
                  </div>
                  <p className="text-[#0b1220]/75">{desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
