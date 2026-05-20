import { motion } from 'framer-motion';

export default function Dining() {
  return (
    <section id="dining" className="py-24">
      <div className="section-container grid items-center gap-10 lg:grid-cols-2">
        <motion.img
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          src="/dining.jpg"
          alt="Fine dining at Pallavi Avida"
          className="h-[28rem] w-full rounded-2xl object-cover shadow-glow"
        />
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">Dining</h2>
          <p className="section-subtitle">
            From curated tasting menus to rooftop candlelight dinners, our chefs craft immersive culinary journeys with global inspiration.
          </p>
          <a
            href="#booking"
            className="mt-8 inline-flex rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-gold-400"
          >
            Reserve a Table
          </a>
        </motion.div>
      </div>
    </section>
  );
}
