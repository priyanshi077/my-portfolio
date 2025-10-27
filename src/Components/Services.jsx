import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react"; // npm install lucide-react
import ServiceCard from "./ServiceCard";

const cards = [
  { title: "UI/UX Design", imgSrc: "/landing.jpg" },
  { title: "Web Design", imgSrc: "/webdesign.jpg" },
  { title: "Landing Page", imgSrc: "/ui.design.jpg" },
];




const Services = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section
      id="service"
      className="relative w-full min-h-[750px] px-6 sm:px-10 py-20 overflow-hidden rounded-[40px]"
    >
      {/* Background Layer */}
      <img
        src="/service.bg.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover rounded-[40px] z-0"
      />
      <div className="absolute inset-0 bg-black/40 rounded-[40px] z-10" />

      {/* Decorative Blob */}
      <img
        src="/abstracle.png"
        alt="blob"
        className="absolute inset-0 w-full h-[850px] object-cover opacity-70 rounded-[40px] z-20 pointer-events-none mix-blend-overlay"
      />

      {/* Heading */}
      <div className="relative z-30 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-white">
          My <span className="text-orange-400">Services</span>
        </h2>
        <p className="text-white text-base sm:text-lg max-w-lg text-right leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
          nunc, posuere in justo vulputate, bibendum sodales.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-40 flex justify-center flex-wrap sm:flex-nowrap gap-10 mt-16 p-5">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`transition-all duration-500 ${idx === activeIndex ? "opacity-100 scale-105" : "opacity-90"
              }`}
          >
            <ServiceCard {...card} />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center items-center gap-3 mt-10 relative z-40">
        {cards.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`cursor-pointer transition-all duration-300 rounded-full ${idx === activeIndex
              ? "w-8 h-3 bg-orange-400"
              : "w-3 h-3 bg-white/50 hover:bg-white/70"
              }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Services;