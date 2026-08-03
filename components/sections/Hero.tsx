export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-32">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-20 px-10">
        <div className="max-w-xl">
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-sky-300">
            Available for new client work
          </span>

          <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-[-0.04em] text-white">
            I Automate.
            <br />
            I Build.
            <br />
            <span className="text-sky-400">I Help Businesses Grow.</span>
          </h1>

          <p className="mt-8 text-xl leading-9 text-gray-400">
            I help businesses automate repetitive tasks, build modern websites,
            and streamline workflows using AI-powered solutions.
          </p>

          <div className="mt-10 flex gap-5">
            <button className="rounded-full bg-sky-500 px-7 py-4 text-white font-semibold hover:bg-sky-400">
              Book a Free Call
            </button>

            <button className="rounded-full border border-white/20 px-7 py-4 text-white">
              View My Work
            </button>
          </div>
        </div>

        <div className="hidden lg:flex relative h-[620px] w-[450px] items-center justify-center rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.45)] overflow-hidden">
          <div className="absolute top-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="flex h-56 w-56 items-center justify-center rounded-full border border-dashed border-white/20 text-gray-500">
            Your Photo
          </div>
        </div>
      </div>
    </section>
  );
}
