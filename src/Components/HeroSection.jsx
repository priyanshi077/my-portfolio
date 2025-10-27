import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // standard React state in JSX [web:44][web:43]
  const [isBtnDefault, setIsBtnDefault] = useState(true); // hover-based toggle [web:39][web:45]
  return (
    <section id="home" className="relative overflow-hidden min-h-[85vh] ">
      <div className="flex justify-center items-center gap-4 mt-15 mb-3">
        {/* Hello button */}
        <button className=" relative w-fit border border-black rounded-full px-5 py-1 font-medium hover:bg-black hover:text-white transition">
          <p> Hello</p>
        </button>
        {/* Right vector image */}
        <span className="absolute top-4 right-170">
          <img
            src="Vector 1.png"
            alt="Right decoration"
            className="w-12 h-12 object-contain"
          />
        </span>
      </div>

      {/* Main Heading */}
      <h1
        className={`relative text-5xl md:text-6xl font-bold text-center mb-2 transition-opacity duration-500 ${
          animationStarted ? "opacity-0" : "opacity-100"
        }`}
      >
        I&apos;m <span className="text-orange-500">Priyanshi</span>,
        <br />
        <p>Web Developer</p>
        <span className="absolute left-125  ">
          <img
            src="Vector 2.png"
            alt="Right decoration"
            className="w-full h-20 object-contain"
          />
        </span>
      </h1>

      {/* Semi-circle background */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-60px] z-10 w-[60%] md:w-[50%] lg:w-[42%]">
        <div className="w-full h-[220px] md:h-[270px] lg:h-[320px] bg-orange-300 rounded-t-full" />
      </div>

      {/* Center image with hover background image */}
      <div
        onMouseEnter={() => setAnimationStarted(true)}
        onMouseLeave={() => setAnimationStarted(false)}
        className="absolute left-1/2 -translate-x-1/2 bottom-0 z-30 flex justify-center"
      >
        <div className="relative group w-[370px] h-[300px] md:w-[320px] md:h-[400px] lg:w-[420px] lg:h-[520px]">
          {/* Background image (shows on hover) */}
          <img
            src="/image.png"
            alt="Background portrait"
            className="buttom-[0] absolute inset-0 w-[400] h-[180] object-cover rounded-t-lg
           opacity-0 group-hover:opacity-100 
           transition-all duration-500 ease-out
           group-hover:scale-200 top-30"
          />

          {/* Main visible image */}
          <img
            src="/Portfolio.img.png"
            alt="Priyanshi portrait"
            className="absolute -bottom-1 left-1/2 -translate-x-1/2 z-20 w-[380px] h-[500px] object-cover rounded-[70px]"
          />
        </div>
      </div>

      {/* Buttons overlayed on image (top layer) */}
      <div
        className="
    pointer-events-auto
    absolute inset-x-0
    bottom-10 sm:bottom-12
    flex justify-center
    z-[90]
  "
      >
        <div
          className="
    relative p-2.5 flex items-center gap-2.5 bg-white/10 rounded-[50px]
    before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit]
    before:border-2 before:border-transparent
    before:[background:linear-gradient(to_right_top,rgba(255,255,255,1),rgba(201,201,201,0))_border-box]
    before:[mask-composite:exclude_!important]
    before:[mask:linear-gradient(black_0_0)_padding-box,_linear-gradient(black_0_0)]
    after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs
  "
        >
          {/* Portfolio (default active = orange) */}
          <button
            onMouseEnter={() => setIsBtnDefault(true)} // keep Portfolio active while hovered
            onMouseLeave={() => setIsBtnDefault(false)} // hand off to Hire Me when leaving
            className={`flex items-center rounded-[60px] py-2.5
                text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25.69px]
                text-nowrap text-white transition-all
                ${
                  isBtnDefault
                    ? "bg-orange-500 outline-[0.5px] outline-[#D0D5DD] px-6 sm:px-8 font-medium"
                    : "px-[14px] sm:px-[17.5px] font-light bg-transparent"
                }`}
          >
            Portfolio
            <ArrowUpRight
              className={`ml-2 w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 ${
                isBtnDefault ? "inline-block" : "hidden"
              }`}
            />
          </button>

          <button
            onMouseEnter={() => setIsBtnDefault(false)} // activate Hire Me
            onMouseLeave={() => setIsBtnDefault(true)} // revert to Portfolio
            className={`flex items-center rounded-[60px] py-2.5
                text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25.69px]
                text-nowrap text-white transition-all
                ${
                  !isBtnDefault
                    ? "bg-orange-500 outline-[0.5px] outline-[#D0D5DD] px-6 sm:px-8 font-medium"
                    : "px-[14px] sm:px-[17.5px] font-light bg-transparent"
                }`}
          >
            Hire Me
            <ArrowUpRight
              className={`ml-2 w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 ${
                !isBtnDefault ? "inline-block" : "hidden"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Left testimonial */}
      <div
        className="hidden md:block absolute left-6 z-20 max-w-xs transition-all duration-300"
        style={{ top: animationStarted ? "30%" : "50%" }}
      >
        <img src="/quote-up.png" alt="" className="w-9 h-9" />
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