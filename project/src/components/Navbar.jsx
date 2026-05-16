import { motion } from 'framer-motion';

const links = ['Rooms', 'Amenities', 'Dining', 'Testimonials'];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800/70 bg-black/50 backdrop-blur-lg"
    >
      <nav className="section-container flex h-20 items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Pallavi Avida" className="h-10 w-10 rounded-full object-cover" />
          <p className="font-display text-xl tracking-wide text-white">Pallavi Avida</p>
        </div>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm tracking-wide text-zinc-300 transition hover:text-gold-400"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#booking"
          className="rounded-full border border-gold-500 px-5 py-2 text-sm text-gold-400 transition hover:bg-gold-500 hover:text-black"
        >
          Reserve
        </a>
      </nav>
    </motion.header>
  );
}
