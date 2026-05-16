import { motion } from 'framer-motion';

export default function BookingCTA() {
  return (
    <section id="booking" className="pb-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-gold-500/40 bg-gradient-to-r from-zinc-900 to-black p-10 text-center shadow-glow"
        >
          <h2 className="font-display text-4xl text-white">Book Your Signature Stay</h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
            Let our hospitality artisans curate your escape at Pallavi Avida, where every stay is tailored with timeless luxury.
          </p>
          <a
            href="mailto:reservations@pallaviavida.com"
            className="mt-8 inline-flex rounded-full bg-gold-500 px-8 py-3 font-semibold text-black transition hover:bg-gold-400"
          >
            Contact Reservations
          </a>
        </motion.div>
      </div>
    </section>
  );
}
