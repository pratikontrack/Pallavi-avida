import { motion } from 'framer-motion';

const testimonials = [
  { quote: 'An unforgettable blend of elegance and comfort. Every moment felt custom-designed.', author: 'Sophia Reynolds' },
  { quote: 'The attention to detail, cuisine, and service exceeded every five-star expectation.', author: 'Adrian Clarke' },
  { quote: 'Pallavi Avida is a sanctuary where luxury feels deeply personal.', author: 'Maya Kapoor' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="section-container">
        <h2 className="section-title">Guest Testimonials</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, idx) => (
            <motion.blockquote
              key={item.author}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6"
            >
              <p className="text-zinc-200">“{item.quote}”</p>
              <footer className="mt-4 text-sm text-gold-400">— {item.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
