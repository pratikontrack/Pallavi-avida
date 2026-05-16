import { motion } from 'framer-motion';

const amenities = ['Infinity Rooftop Pool', 'Luxury Spa & Wellness', '24/7 Concierge Service', 'Private Chauffeur', 'Executive Business Lounge', 'Signature Evening Turndown'];

export default function Amenities() {
  return (
    <section id="amenities" className="border-y border-zinc-800/70 bg-zinc-900/30 py-24">
      <div className="section-container">
        <h2 className="section-title">Amenities</h2>
        <p className="section-subtitle">Every detail is orchestrated to elevate your stay.</p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {amenities.map((item, idx) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-xl border border-zinc-800 bg-black/30 px-5 py-4 text-zinc-200"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
