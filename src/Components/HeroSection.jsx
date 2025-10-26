import React, { useState } from "react";

export default function HeroSection() {
  const [animationStarted, setAnimationStarted] = useState(false);

  return (
    <section id="home" className="relative overflow-hidden min-h-[85vh] bg-white">
      {/* Hello button */}
      <div className="text-center">
        <button className="border border-black rounded-full px-5 py-1 m-5 font-medium hover:bg-black hover:text-white transition">
          Hello
        </button>
      </div>

      {/* Main Heading */}
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-2">
        I&apos;m <span className="text-orange-500">Priyanshi</span>,
        <br />
        Web Developer
      </h1>

      {/* Semi-circle background */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-10 w-[60%] md:w-[50%] lg:w-[42%]">
        <div className="w-full h-[180px] md:h-[260px] lg:h-[300px] bg-orange-300 rounded-t-full" />
      </div>

    {/* Center image with hover background image */}
<div
  onMouseEnter={() => setAnimationStarted(true)}
  onMouseLeave={() => setAnimationStarted(false)}
  className="absolute left-1/2 -translate-x-1/2 bottom-0 z-30 flex justify-center"
>
  <div className="relative group w-[240px] h-[300px] md:w-[320px] md:h-[400px] lg:w-[420px] lg:h-[520px]">
    {/* Background image  */}
    {/* <img
      src="/image.png"
      alt="Background portrait"
       className="absolute left-1/2 bottom-5 -translate-x-1/2 translate-y-[10%]
             w-[420%] h-[220%] object-contain
             transition-all duration-700 ease-out z-10"
    /> */}

    {/* Main visible image */}
    <img
      src="/Portfolio.img.png"
      alt="Priyanshi portrait"
      className="w-full h-full object-cover rounded-t-lg drop-shadow-xl
                 transition-all duration-500 ease-out group-hover:scale-105 relative z-20"
    />
  </div>
</div>



      {/* Buttons overlayed on image */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[6%] z-40">
        <nav className="inline-flex items-center rounded-full bg-white/6 backdrop-blur-md border border-white/25 shadow-lg p-[6px] space-x-3">
         
          {/* Portfolio button */}
          <a
            href="#contact"
            aria-label="Portfolio"
            className="group inline-flex items-center gap-3 font-medium text-white/95
                       px-8 py-3 rounded-full
                       transition-all duration-300 ease-out
                       hover:shadow-[0_0_15px_rgba(255,165,0,0.6)]
                       hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500
                       hover:border hover:border-white/20
                       hover:scale-[1.03]"
          >
            <span className="text-lg">Portfolio</span>
            <svg
              className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M5 12h14M13 5l6 7-6 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* Hire me button */}
          <a
            href="#contact"
            aria-label="Hire me"
            className="group inline-flex items-center gap-3 font-medium text-white/95
                       px-8 py-3 rounded-full
                       transition-all duration-300 ease-out
                       hover:shadow-[0_0_15px_rgba(255,165,0,0.6)]
                       hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500
                       hover:border hover:border-white/20
                       hover:scale-[1.03]"
          >
            <span className="text-lg">Hire me</span>
            <svg
              className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M5 12h14M13 5l6 7-6 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </nav>
      </div>

      {/* Left testimonial */}
      <div
        className="hidden md:block absolute left-6 z-20 max-w-xs transition-all duration-300"
        style={{ top: animationStarted ? "30%" : "50%" }}
      >
        <div className="text-4xl text-slate-600 leading-none">“</div>
        <p className="mt-4 text-slate-700">
          Jenny’s exceptional product design ensured our website’s success.
          Highly recommended.
        </p>
      </div>

      {/* Right stars + experience */}
      <div
        className="hidden md:flex flex-col items-end absolute right-6 z-20 transition-all duration-300"
        style={{ top: animationStarted ? "30%" : "50%" }}
      >
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="#fb923c"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 .587l3.668 7.431L24 9.748l-6 5.847L19.335 24 12 19.897 4.665 24 6 15.595 0 9.748l8.332-1.73z" />
            </svg>
          ))}
        </div>
        <div className="text-3xl font-bold">10 Years</div>
        <div className="text-sm text-slate-600">Experience</div>
      </div>
    </section>
  );
}