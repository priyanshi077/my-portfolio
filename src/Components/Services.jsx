import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import ServiceCard from "./ServiceCard";

const cards = [
  { title: "UI/UX Design", imgSrc: "/landing.jpg" },
  { title: "Web Design", imgSrc: "/webdesign.jpg" },
  { title: "Landing Page", imgSrc: "/ui.design.jpg" },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [blobInView, setBlobInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const blobRef = useRef(null);
  const controls = useAnimation();

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setBlobInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (blobRef.current) observer.observe(blobRef.current);
    return () => observer.disconnect();
  }, []);

  // Floating rotation animation
  const runFloatCycle = async () => {
    await controls.start({
      x: [0, 15, 0],
      y: [0, 40, 0],
      scale: [1, 1.03, 1],
      rotate: [-6, 6, -6],
      transition: {
        duration: 6,
        ease: "easeInOut",
      },
    });
  };

  // Entrance animation + float loop
  useEffect(() => {
    if (!blobInView) return;
    (async () => {
      await controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 1, ease: [0.4, 1, 0.50, 1] },
      });
      await runFloatCycle();
    })();
  }, [blobInView, controls]);

  // Hover restart
  useEffect(() => {
    if (!isHovered) return;
    const t = setTimeout(() => {
      runFloatCycle();
    }, 150);
    return () => clearTimeout(t);
  }, [isHovered]);

  return (
    <section
      id="service"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="
        relative w-full
        min-h-[600px] sm:min-h-[650px] md:min-h-[720px] lg:min-h-[780px] xl:min-h-[820px]
        px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20
        py-10 sm:py-14 md:py-18 lg:py-22
        overflow-hidden rounded-[24px] sm:rounded-[28px] md:rounded-[36px] lg:rounded-[40px]
      "
    >
      {/* Background image */}
      <img
        src="/service.bg.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-0 rounded-[inherit]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10 rounded-[inherit]" />

      {/* Animated blob */}
      <motion.img
        ref={blobRef}
        src="/abstracle.png"
        alt="blob"
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={controls}
        className="
          absolute inset-0 w-full h-full
          object-cover opacity-80
          z-20 pointer-events-none
          mix-blend-screen
        "
      />

      {/* Heading */}
      <div
        className="
          relative z-30 flex flex-col md:flex-row
          justify-between items-start md:items-center
          gap-5 sm:gap-6 md:gap-8
        "
      >
        <h2
          className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-bold text-white leading-tight tracking-tight
          "
        >
          My <span className="text-orange-400">Services</span>
        </h2>
        <p
          className="
            text-white/90 text-sm sm:text-base md:text-lg
            md:max-w-xl lg:max-w-2xl leading-relaxed
          "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
          nunc, posuere in justo vulputate, bibendum sodales.
        </p>
      </div>

      {/* Cards */}
      <div
        className="
          relative z-40 mt-10 sm:mt-12 md:mt-16
          grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3
          gap-6 sm:gap-8 lg:gap-10
          place-items-center
        "
      >
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`transition-all duration-500 w-full max-w-[400px] ${
              idx === activeIndex ? "opacity-100 scale-[1.02]" : "opacity-90"
            }`}
          >
            <ServiceCard {...card} />
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div
        className="
          relative z-40 mt-8 sm:mt-10 flex justify-center items-center gap-3
        "
      >
        {cards.map((_, idx) => {
          const active = idx === activeIndex;
          return (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`
                transition-all duration-300 rounded-full focus:outline-none
                ${active ? "w-8 h-2.5 bg-orange-400" : "w-2.5 h-2.5 bg-white/60 hover:bg-white/80"}
              `}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Services;