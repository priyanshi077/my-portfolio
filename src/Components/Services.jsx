import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react"; // npm install lucide-react

const cards = [
  { title: "UI/UX Design", imgSrc: "/landing.jpg" },
  { title: "Web Design", imgSrc: "/webdesign.jpg" },
  { title: "Landing Page", imgSrc: "/ui.design.jpg" },
];

const ServiceCard = ({ title, imgSrc }) => (
  <div className="service-card custom-clip w-[416px] h-[600px] relative flex flex-col justify-between items-center rounded-[32px] border border-white/30 bg-white/5 shadow-2xl overflow-hidden z-40 backdrop-blur-[6px]">
    {/* Title */}
    <div className="absolute top-10 left-0 w-full px-10 pt-8 z-20 pointer-events-none">
      <h3 className="text-white text-3xl font-semibold drop-shadow-md">
        {title}
      </h3>
    </div>

   {/* Layered Image Stack */}
<div className="flex-1 w-full flex items-end justify-center pb-16 pt-20 relative z-10 mt-25">
  {/* Back plate (farthest, larger and higher offset) */}
  <div
    className="
      absolute
      rounded-[28px]
      bg-white/10
      blur-[2px]
      shadow-[0_8px_30px_rgba(0,0,0,0.25)]
    "
    style={{
      width: "440px",   // ~ image width + 40
      height: "330px",  // ~ image height - 50
      bottom: "30px",
      transform: "translateY(-115px)", // show above the image base
      zIndex: 5,
    }}
  />

  {/* Middle plate (slightly smaller and closer to image) */}
  <div
    className="
      absolute
      rounded-[28px]
      bg-white/20
      blur-[1px]
      shadow-[0_6px_22px_rgba(0,0,0,0.20)]
    "
    style={{
      width: "440px",   // ~ image width + 20
      height: "310px",  // ~ image height - 70
      bottom: "55px",
      transform: "translateY(-85px)",
      zIndex: 10,
    }}
  />

  {/* Main visible image */}
  <img
    src={imgSrc}
    alt={title}
    draggable={false}
    className="relative z-20 rounded-[28px] object-cover shadow-xl transition-transform duration-300"
    style={{
      width: "420px",
      height: "380px",
      top: "10px",
      filter: "brightness(1.00) contrast(1.1)",
    }}
  />
</div>


    {/* Circular Arrow Button */}
    <div className="absolute bottom-[20px] right-[20px] z-30">
      <div className="arrow-btn w-[70px] h-[70px] bg-[#0B1E3D] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#142d5a] hover:scale-110 shadow-2xl">
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
            className={`transition-all duration-500 ${
              idx === activeIndex ? "opacity-100 scale-105" : "opacity-90"
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