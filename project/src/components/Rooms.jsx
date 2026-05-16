import { motion } from 'framer-motion';

const rooms = [
  { image: '/room1.jpg', name: 'Imperial Suite', description: 'Private lounge, marble bath, panoramic skyline view.' },
  { image: '/room2.jpg', name: 'Presidential Loft', description: 'Dedicated butler service and handcrafted interiors.' },
  { image: '/room3.jpg', name: 'Royal Terrace Room', description: 'Elegant terrace seating with sunset city vistas.' },
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-24">
      <div className="section-container">
        <h2 className="section-title">Luxury Rooms</h2>
        <p className="section-subtitle">Designed to deliver effortless comfort with distinctive luxury details.</p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {rooms.map((room, idx) => (
            <motion.article
              key={room.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 shadow-glow"
            >
              <img src={room.image} alt={room.name} className="h-64 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-display text-2xl text-white">{room.name}</h3>
                <p className="mt-3 text-zinc-300">{room.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
