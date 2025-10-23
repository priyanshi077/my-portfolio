import { ArrowUpRight } from "lucide-react";

const blogPosts = [
  {
    img: "/blog1.jpg",
    type: "UI/ UX Design",
    author: "Jayesh Patil",
    date: "10 Nov, 2023",
    accent: "bg-[#bfc8fe]",
    arrow: "bg-[#232f3e]",
    title: "Design Unraveled: Behind the Scenes of UI/UX Magic",
  },
  {
    img: "/blog2.jpg",
    type: "App Design",
    author: "Jayesh Patil",
    date: "09 Oct, 2023",
    accent: "bg-[#2bb792]",
    arrow: "bg-[#232f3e]",
    title: "Sugee: Loan Management System for Rural Sector.",

  },
  {
    img: "/blog3.jpg",
    type: "App Design",
    author: "Jayesh Patil",
    date: "13 Aug, 2023",
    accent: "bg-[#fee284]",
    arrow: "bg-[#232f3e]",
    title: "Cinetrade: Innovative way to invest in Digital Media",

  },
];

export default function BlogSection() {
  return (
    <section id="blog"className="w-full py-14 md:py-16 px-3 md:px-10">
      <h2 className="text-[#384155] text-[2rem] md:text-4xl font-bold leading-none mb-12 ml-15">
        <span className="block leading-tight">
          From my
        </span>
        <span className="block leading-tight">blog post</span>
      </h2>
      <div className="flex flex-col md:flex-row md:gap-9 gap-12 items-start justify-start">
        {blogPosts.map((post, i) => (
          <div
            key={i}
            className="w-full max-w-[360px] mx-auto flex flex-col items-start relative"
          >
            {/* Card image with arrow */}
            <div className={`relative w-full aspect-[1/1] rounded-[2.1rem] overflow-visible mb-8 flex-shrink-0 flex justify-center items-center ${post.accent}`}>
              <img
                src={post.img}
                alt={post.title}
                className="rounded-[2.1rem] w-full h-full object-cover"
              />
              {/* Floating Arrow Button */}
              <button
                className={`
                  absolute -bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:right-[-35px] md:translate-x-0
                  w-16 h-16 rounded-full ${post.arrow}
                  flex items-center justify-center shadow-xl border-4 border-white
                  transition hover:scale-110
                `}
                style={{ fontSize: "2rem", zIndex: 10 }}
                aria-label="Read More"
              >
                <ArrowUpRight className="text-white w-8 h-8" />
              </button>
            </div>
            {/* Badge and Meta row */}
            <div className="w-full flex gap-2 items-center mb-2">
              <span className="px-4 py-1 rounded-full bg-gray-100 text-[#384155] text-sm md:text-base font-medium">{post.type}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm font-normal mb-2">
              <span className="text-orange-400 text-lg font-bold leading-none" style={{marginRight:2}}>•</span>
              <span>{post.author}</span>
              <span className="text-orange-400 text-lg font-bold leading-none" style={{marginLeft:2,marginRight:2}}>•</span>
              <span>{post.date}</span>
            </div>
            {/* Title */}
            <div className="w-full mt-1 text-left text-[#384155] text-lg md:text-xl font-bold leading-snug tracking-tight">
              {post.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
