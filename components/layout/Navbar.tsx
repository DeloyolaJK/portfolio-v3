export default function Navbar() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-6">
      <nav className="flex items-center justify-between rounded-full border border-white/5 bg-white/[0.04] backdrop-blur-xl px-6 py-3 shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-600 text-white font-bold">
            K
          </div>

          <span className="text-white font-semibold">Karl De Loyola</span>
        </div>

        <ul className="hidden md:flex gap-8 text-gray-300">
          <li className="cursor-pointer hover:text-white transition">About</li>

          <li className="cursor-pointer hover:text-white transition">Stack</li>

          <li className="cursor-pointer hover:text-white transition">
            Portfolio
          </li>

          <li className="cursor-pointer hover:text-white transition">
            Services
          </li>

          <li className="cursor-pointer hover:text-white transition">
            Contact
          </li>
        </ul>

        <button className="rounded-full bg-sky-500 px-5 py-3 font-semibold text-white hover:bg-sky-400 transition">
          Book a Call
        </button>
      </nav>
    </header>
  );
}
