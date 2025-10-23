import { useRef, useEffect } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Fawzi Sayed",
    role: "UI UX Designer",
    img: "/user1.jpg", // update to your real image path
    rating: 5,
    text:
      "consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.",
  },
  // Duplicate and vary as needed
  {
    name: "Fawzi Sayed",
    role: "UI UX Designer",
    img: "/user1.jpg",
    rating: 5,
    text:
      "consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.",
  },
  {
    name: "Fawzi Sayed",
    role: "UI UX Designer",
    img: "/user1.jpg",
    rating: 5,
    text:
      "consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.",
  },
];

// Testimonial card component
function TestimonialCard({ name, role, img, rating, text }) {
  return (
    <div className="relative w-[350px] max-w-full bg-white/10 rounded-2xl border border-white/15 backdrop-blur-lg shadow-lg px-6 py-5 mt-10 flex flex-col min-h-[210px] mx-2 transition-transform flex-shrink-0 overflow-hidden">
      {/* Large " Quote */}
      <Quote className="absolute text-white/20 top-5 right-5 w-16 h-16 z-0" />
      <div className="flex items-center gap-3 z-10">
        <img
          src={img}
          alt={name}
          className="w-12 h-12 rounded-full border-2 border-white/60 object-cover"
        />
        <div>
          <div className="text-white font-bold text-base">{name}</div>
          <div className="text-white/70 text-sm">{role}</div>
        </div>
      </div>
      <div className="flex items-center gap-1 mt-4 z-10">
        {[...Array(rating)].map((_, idx) => (
          <Star key={idx} className="w-5 h-5 fill-orange-400 text-orange-400" />
        ))}
        <span className="text-white text-lg font-semibold ml-2">
          {rating}.0
        </span>
      </div>
      <div className="text-white/85 text-sm leading-relaxed mt-3 pr-3 z-10 whitespace-normal break-words overflow-hidden">
        {text}
      </div>
    </div>
  );
}


export default function TestimonialSection() {
  // To keep the scroll "infinite", duplicate the array
  const items = [...testimonials, ...testimonials];

  const scrollerRef = useRef(null);

  // Optional: Pause on hover
  useEffect(() => {
    const node = scrollerRef.current;
    let paused = false;
    const handleEnter = () => (paused = true);
    const handleLeave = () => (paused = false);

    node?.addEventListener("mouseenter", handleEnter);
    node?.addEventListener("mouseleave", handleLeave);

    let frame, scrollAmount = 0;
    function loop() {
      if (!paused && node) {
        node.scrollLeft += 0.7;
        // Reset for seamless infinite effect
        if (node.scrollLeft >= node.scrollWidth / 2) {
          node.scrollLeft = 0;
        }
      }
      frame = requestAnimationFrame(loop);
    }
    loop();
    return () => {
      cancelAnimationFrame(frame);
      node?.removeEventListener("mouseenter", handleEnter);
      node?.removeEventListener("mouseleave", handleLeave);
    };
  }, []);
  
  return (
    <section id='testimonial' className="relative w-full min-h-[420px] px-4 py-20 overflow-hidden rounded-[32px] mt-2">
      {/* Background and overlay */}
      <img
        src="/service.bg.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover rounded-[32px] z-0"
      />
      <div className="absolute inset-0 w-full h-full bg-black/50 rounded-[32px] z-10" />

      {/* Heading */}
      <div className="relative z-20 flex flex-col items-center mb-6">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-4">
          Testimonials That
          <br />
          <span>
            Speak to{" "}
            <span className="text-orange-400">My Results</span>
            <span className="inline-block ml-2 align-middle -translate-y-1 text-2xl text-orange-400">
              <svg width="30" height="20"><path d="M10 8 Q15 -6 20 8" stroke="orange" strokeWidth="3" fill="none"/></svg>
            </span>
          </span>
        </h2>
        <div className="text-white text-sm sm:text-base md:text-lg font-medium text-center max-w-2xl mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
        </div>
      </div>

      {/* Scrolling Testimonials Row */}
      <div className="relative z-20 w-full overflow-x-hidden pt-4">
        <div
          ref={scrollerRef}
          className="
            flex items-stretch gap-7
            overflow-x-auto
            whitespace-nowrap
            scrollbar-hide
            will-change-scroll
            "
          style={{
            minWidth: "1400px", // ensures wider than viewport
          }}
        >
          {items.map((t, idx) => (
            <TestimonialCard key={idx + t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
