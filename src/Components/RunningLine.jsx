import React from "react";

const portfolioItems = [
  { text: "UX Design" },
  { text: "App Design" },
  { text: "Dashboard" },
  { text: "Wireframe" },
  { text: "User Research" },
  { text: "UX Design" },
  { text: "App Design" },
  { text: "Dashboard" },
  { text: "Wireframe" },
  { text: "User Research" },
  { text: "UX Design" },
  { text: "App Design" },
  { text: "Dashboard" },
  { text: "Wireframe" },
  { text: "User Research" },
];

const RunningLine = () => {
  return (
    <section className="relative w-full h-[147px] bg-[#fb6413] rounded-[24px_0px_24px_0px] overflow-hidden">
  <div className="absolute inset-0">
    <div className="flex items-center gap-[15px] bg-white rotate-[-2.5deg] absolute -left-5 top-[-120px] animate-[marquee_18s_linear_infinite]">
      {/* duplicate content twice for seamless loop */}
      {[...portfolioItems, ...portfolioItems].map((item, i) => (
        <React.Fragment key={i}>
          <div className="relative w-fit mt-[-1.00px] [font-family:'Lufga-Regular',Helvetica] font-normal text-black text-5xl tracking-[-0.72px] leading-[normal] whitespace-nowrap">
            {item.text}
          </div>
          <img className="relative w-[33.97px] h-[33.97px] rotate-[2.50deg] flex-shrink-0" alt="Star" src="star-8.svg" />
        </React.Fragment>
      ))}
    </div>
  </div>
</section>

  );
};

export default RunningLine;