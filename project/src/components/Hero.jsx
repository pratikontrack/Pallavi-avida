import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen">
      <img
        src="/hero.jpg"
        alt="Luxury suite interior"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black" />

      <div className="section-container relative flex min-h-screen items-center pt-20">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-4 text-sm uppercase tracking-[0.35em] text-gold-400"
          >
            A New Definition of Luxury
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl leading-tight text-white md:text-7xl"
          >
            Welcome to Pallavi Avida
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-xl text-base text-zinc-200 md:text-lg"
          >
            Indulge in timeless elegance, bespoke service, and a serene retreat curated for discerning travelers.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
