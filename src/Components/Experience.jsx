import React from "react";

const experiences = [
  {
    company: "Cognizant, Mumbai",
    date: "Sep 2016 - July 2020",
    role: "Experience Designer",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.",
  },
  {
    company: "Sugee Pvt limited, Mumbai",
    date: "Sep 2020 - July 2023",
    role: "UI/UX Designer",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.",
  },
  {
    company: "Cinetstox, Mumbai",
    date: "Sep 2023",
    role: "Lead UX Designer",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20" style={{ background: "var(--bg)" }}>
      <div className="container mx-auto max-w-6xl px-6">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
            <span className="text-slate-800 mr-2">My</span>
            <span className="text-orange-400">Work Experience</span>
          </h2>
        </header>

        <div className="relative">
          {/* full-height centered vertical dashed line */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-0"
            aria-hidden="true"
          >
            <div className="h-full w-px border-l-2 border-dashed border-slate-300" />
          </div>

          {/* timeline items */}
          <div className="space-y-12 relative z-10">
            {experiences.map((exp, idx) => {
              // choose dot color: first & last -> orange, middle -> dark blue
              const isMiddle = idx === 1;
              const outerRingBorder = "border-dashed border-2 border-slate-300";
              return (
                <div key={exp.company} className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
                  {/* left: company + date */}
                  <div className="md:text-right md:pr-8">
                    <h3 className="text-2xl font-bold text-slate-800">{exp.company}</h3>
                    <p className="mt-3 text-sm text-slate-600">{exp.date}</p>
                  </div>

                  {/* center: dotted circular ring + colored dot */}
                  <div className="flex justify-center">
                    <div className="relative flex items-center justify-center">
                      {/* dashed circular ring */}
                      <div
                        className={`flex items-center justify-center rounded-full w-12 h-12 ${outerRingBorder}`}
                        aria-hidden="true"
                      >
                        {/* inner colored dot */}
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            isMiddle ? "bg-slate-900" : "bg-orange-400"
                          }`}
                          aria-hidden="true"
                        >
                          {/* small inner white dot for orange nodes to match design */}
                          {!isMiddle && <span className="block w-3 h-3 rounded-full bg-white" />}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* right: role + description */}
                  <div className="md:pl-8">
                    <h4 className="text-2xl font-semibold text-slate-800">{exp.role}</h4>
                    <p className="mt-3 text-sm text-slate-600 max-w-md">{exp.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}