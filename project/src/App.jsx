import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Dining from './components/Dining';
import Testimonials from './components/Testimonials';
import BookingCTA from './components/BookingCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-gradient-to-b from-black via-zinc-950 to-black text-zinc-100">
      <Navbar />
      <main>
        <Hero />
        <Rooms />
        <Amenities />
        <Dining />
        <Testimonials />
        <BookingCTA />
      </main>
      <Footer />
    </div>
  );
}
