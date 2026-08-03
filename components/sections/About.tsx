export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-32">
      <div className="grid gap-12 md:grid-cols-2">
        {/* Left Column */}
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Building AI solutions that save businesses time.
          </h2>

          <p className="leading-8 text-gray-400">
            I'm Karl, a Tech Virtual Assistant specializing in AI automation,
            web development, and workflow optimization. I enjoy creating systems
            that eliminate repetitive work and help businesses operate more
            efficiently.
          </p>
        </div>

        {/* Right Column */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h3 className="mb-6 text-2xl font-semibold text-white">What I Do</h3>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-cyan-400">AI Automation</h4>
              <p className="text-gray-400">
                Automating repetitive business processes.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-cyan-400">Web Development</h4>
              <p className="text-gray-400">
                Building modern, responsive websites.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-cyan-400">Tech VA</h4>
              <p className="text-gray-400">
                Helping businesses streamline operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
