import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a full app, you'd POST to a backend. For this portfolio template we just show success.
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0b1220] text-white">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Let’s Connect
        </motion.h2>

        <div className="mt-8 grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/5 rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-5 h-5 text-[#48e1c4]" />
              <p className="text-white/80">Have an opportunity or just want to say hi? Drop a message!</p>
            </div>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="rounded-xl bg-white text-[#0b1220] px-4 py-3 focus:outline-none focus:ring-4 focus:ring-[#48e1c4]/40"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email address"
                required
                className="rounded-xl bg-white text-[#0b1220] px-4 py-3 focus:outline-none focus:ring-4 focus:ring-[#48e1c4]/40"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message"
                rows={5}
                required
                className="rounded-xl bg-white text-[#0b1220] px-4 py-3 focus:outline-none focus:ring-4 focus:ring-[#48e1c4]/40"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#48e1c4] text-[#0b1220] px-5 py-3 font-semibold shadow-lg shadow-[#48e1c4]/30 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <Send className="w-4 h-4" />
                {sent ? 'Sent!' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-4"
          >
            <p className="text-white/80 text-lg">
              I’m open to internships, collaborations, and hackathon teams. If you think I’d be a
              good fit, let’s chat!
            </p>
            <ul className="space-y-2 text-white/80">
              <li><span className="text-white">Email:</span> utkarsh@example.com</li>
              <li><span className="text-white">Location:</span> India (IST)</li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} Utkarsh Patil. All rights reserved.
        </div>
      </div>
    </section>
  );
}
