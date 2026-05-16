export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-10">
      <div className="section-container flex flex-col items-center justify-between gap-4 text-sm text-zinc-400 md:flex-row">
        <p>© {new Date().getFullYear()} Pallavi Avida. All rights reserved.</p>
        <p>Luxury Reimagined · Global Destination for Elevated Stays</p>
      </div>
    </footer>
  );
}
