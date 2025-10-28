import React from "react";
import { ArrowUpRight } from "lucide-react"; // correct icon/component name

const ServiceCard = ({ title, imgSrc }) => {
  return (
    <div className="relative w-[416px] h-[600px]">
      {/* Card shell */}
      <div className="service-card custom-clip absolute inset-0 flex flex-col justify-between items-center rounded-[32px] border border-white/30 bg-white/5 shadow-2xl overflow-hidden z-40 backdrop-blur-[6px]">
        {/* Title */}
        <div className="absolute top-10 left-0 w-full px-10 pt-8 z-30 pointer-events-none">
          <h3 className="text-white text-3xl font-semibold drop-shadow-md">{title}</h3>
        </div>

        {/* Layered Image Stack */}
        <div className="flex-1 w-full flex items-end justify-center pb-16 pt-20 relative z-20 mt-25">
          {/* Back plate */}
          <div
            className="
              absolute rounded-[28px] bg-white/10 blur-[2px]
              shadow-[0_8px_30px_rgba(0,0,0,0.25)]
            "
            style={{
              width: "400px",
              height: "330px",
              bottom: "30px",
              transform: "translateY(-115px)",
              zIndex: 5,
            }}
          />
          {/* Middle plate */}
          <div
            className="
              absolute rounded-[28px] bg-white/20 blur-[1px]
              shadow-[0_6px_22px_rgba(0,0,0,0.20)]
            "
            style={{
              width: "440px",
              height: "310px",
              bottom: "55px",
              transform: "translateY(-85px)",
              zIndex: 10,
            }}
          />
          {/* Main image */}
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
      </div>

      {/* Persistent circular arrow button (always on top) */}
      <button
        type="button"
        aria-label="Open"
        className="
          absolute bottom-10 right-0
          min-[1440px]:w-[114px] min-[1440px]:h-[114px]
          w-[98px] h-[98px]
          rounded-full flex items-center justify-center
          bg-[#1f2a36] transition-colors
          hover:bg-[orange] cursor-pointer
          shadow-[0_10px_30px_rgba(0,0,0,0.35)]
          z-[60]
        "
      >
        <ArrowUpRight className="w-[72px] h-[72px] text-white" />
      </button>
    </div>
  );
};

export default ServiceCard;