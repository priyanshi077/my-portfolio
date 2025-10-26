import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const cards = [
  { title: "UI/UX Design", imgSrc: "/landing.jpg" },
  { title: "Web Design", imgSrc: "/webdesign.jpg" },
  { title: "Landing Page", imgSrc: "/ui.design.jpg" },
];

const ServiceCard = ({ title, imgSrc }) => (
  <div className="w-[416px] h-[508px]">
    <div className="custom-clip bg-amber-300 ">
    </div>

    <div className="absolute bottom-[20px] right-[20px] z-20">
      <div className="w-[70px] h-[70px] bg-[#0B1E3D] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#142d5a] hover:scale-110 shadow-2xl">
        <ArrowUpRight className="w-6 h-6 text-white" strokeWidth={2.5} />
      </div>
    </div>
  </div>

);



const Services = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section
      id="service"
      className="relative w-full min-h-[750px] px-6 sm:px-10 py-20 overflow-hidden rounded-[40px]"
    >
      <img
        src="/service.bg.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover rounded-[40px]"
      />
      <div className="absolute inset-0 w-full h-full bg-black/50 rounded-[32px] z-10" />

      <img
        src="/abstracle.png"
        alt="blob"
        className="absolute inset-0 w-full h-[850px] object-cover opacity-90 rounded-[40px]"
      />

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