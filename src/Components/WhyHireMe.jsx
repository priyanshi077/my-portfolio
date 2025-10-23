
export default function WhyHireMe() {
  return (
    <section id="why" className="py-10" style={{ background: "var(--bg)" }}>
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Left: image with orange rounded backing */}
          <div className="relative flex justify-center md:justify-end right-20">
            {/* orange rounded backing (behind the photo) */}
            <div
              aria-hidden="true"
              className="absolute z-10 right-8 md:right-12 top-8 md:top-22 w-[260px] h-[260px] md:w-[360px] md:h-[400px] bg-orange-300 rounded-[48px]"
            />

            {/* image card sits above the orange backing */}
            <div className="relative z-20 w-[360px] h-[360px] md:w-[500px] md:h-[500px] rounded-[48px] overflow-hidden -mt-2 bg-transparent left-5 overlay">
              <img
                src="/HireMe.png"
                alt="Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: content */}
          <div className="relative z-30">
            <h3 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-tight text-slate-900">
              <span className="text-slate-800">Why </span>
              <span className="text-orange-400">Hire me?</span>
            </h3>

            <p className="mt-6 text-base md:text-lg text-slate-600 max-w-xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              lacus nunc, posuere in justo vulputate, bibendum sodales.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 max-w-lg">
              <div>
                <div className="text-3xl md:text-4xl font-extrabold text-slate-900">450+</div>
                <div className="mt-2 text-sm text-slate-500">Project Completed</div>
              </div>

              <div>
                <div className="text-3xl md:text-4xl font-extrabold text-slate-900">450+</div>
                <div className="mt-2 text-sm text-slate-500">Project Completed</div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block mt-10 px-10 py-4 rounded-full border-2 border-slate-800 text-slate-900 font-semibold text-lg transition-shadow hover:shadow-md"
            >
              Hire me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}