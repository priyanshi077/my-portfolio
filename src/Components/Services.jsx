import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react"; //  npm install lucide-react

const cards = [
  { title: "UI/UX Design", imgSrc: "/landing.jpg" },
  { title: "Web Design", imgSrc: "/webdesign.jpg" },
  { title: "Landing Page", imgSrc: "/ui.design.jpg" },
];

const ServiceCard = ({ title, imgSrc }) => (
  <div className="relative w-[300px] sm:w-[340px] h-[360px] group">
    {/* --- Back Layers for Depth --- */}
    <div className="absolute top-4 left-4 w-full h-full rounded-3xl bg-white/10 border border-white/20 blur-[1px]"></div>
    <div className="absolute top-2 left-2 w-full h-full rounded-3xl bg-white/10 border border-white/20"></div>

    {/* --- Main Card --- */}
    <div className="relative z-10 w-full h-full rounded-3xl border border-white/30 bg-white/10 backdrop-blur-lg shadow-lg overflow-hidden transition-transform duration-300 group-hover:scale-[1.03]">
    
      {/* Card Title */}
      <h3 className="text-white text-xl font-semibold text-left px-6 pt-5">
        {title}
      </h3>

      {/* Divider */}
      <div className="w-[85%] h-[1.5px] bg-white/30 mx-auto my-3 rounded-full"></div>

      {/* Image Section */}
      <div className="relative flex justify-center items-center px-5 mt-2">
        <div className="relative w-full h-[210px] rounded-2xl overflow-hidden">
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
          />

          {/* --- Bottom Right Circular Arrow Button --- */}
<div className="absolute bottom-5 right-5 w-12 h-12 rounded-full bg-[#0B1E3D] flex items-center justify-center shadow-lg group-hover:bg-[#142d5a] transition-all duration-300">
  <ArrowUpRight className="w-5 h-5 text-white" />
</div>
        </div>
      </div>
    </div>
  </div>
);

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section id='service' className="relative w-full min-h-[750px] px-6 sm:px-10 py-20 overflow-hidden rounded-[40px]">
      {/* --- Background Image --- */}
      <img
        src="/service.bg.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover rounded-[40px]"
      />
      <div className="absolute inset-0 w-full h-full bg-black/50 rounded-[32px] z-10" />


      {/* --- Overlay/Blob --- */}
      <img
        src="/abstracle.png"
        alt="blob"
        className="absolute inset-0 w-full h-[850px] object-cover opacity-90 rounded-[40px]"
      />

      {/* --- Heading + Description --- */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
        <div className="flex flex-col">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            My <span className="text-orange-400">Services</span>
          </h2>
        </div>

        <p className="text-white text-base sm:text-lg max-w-lg text-right leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
          nunc, posuere in justo vulputate, bibendum sodales.
        </p>
      </div>

      {/* --- Cards Section --- */}
      <div className="relative z-10 flex justify-center sm:justify-center items-center flex-wrap sm:flex-nowrap gap-10 mt-16 p-5">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`transition-opacity duration-300 ${
              idx === activeIndex ? "opacity-100" : "sm:opacity-100"
            }`}
          >
            <ServiceCard {...card} />
          </div>
        ))}
      </div>

      {/* --- Pagination Dots --- */}
      <div className="flex justify-center items-center gap-3 mt-10 relative z-10">
        {cards.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`cursor-pointer transition-all duration-300 rounded-full ${
              idx === activeIndex
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
