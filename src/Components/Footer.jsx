import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaWhatsapp } from "react-icons/fa";
import { Mail, ArrowRight, Facebook, Youtube, Twitter} from "lucide-react";

export default function Footer() {
  // EmailJS setup
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubscribe(e) {
    e.preventDefault();
    setSending(true);
    setSent(false);
    emailjs.sendForm(
      "YOUR_SERVICE_ID",      // Replace
      "YOUR_TEMPLATE_ID",     // Replace
      formRef.current,
      "YOUR_USER_ID"          // Replace
    ).then(() => {
      setSending(false); setSent(true);
      formRef.current.reset();
    }, () => {
      setSending(false);
      alert("Could not subscribe. Try again!");
    });
  }

  return (
    <footer className="bg-[#242424] w-full pt-12 pb-4 px-4 md:px-16 rounded-t-[2rem] mt-6">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row items-baseline justify-between md:gap-0 gap-8">
        <h2 className="text-white text-5xl md:text-6xl font-extrabold mb-8 mt-2 leading-tight">
          Lets Connect there
        </h2>
        <a
          href="mailto:priyanshiweb07@gmail.com"
          className="bg-orange-400 hover:bg-orange-500 transition text-white text-2xl font-medium py-4 px-12 rounded-full flex items-center gap-2 shadow-lg"
        >
          Hire me <ArrowRight className="ml-2 w-7 h-7" />
        </a>
      </div>
      <hr className="border-[#3a3a3a] my-8" />

      {/* Middle Grid */}
      <div className="flex flex-col md:flex-row md:items-start items-center gap-10 md:gap-0 md:justify-between">
        {/* Left block */}
        <div className="flex-1 flex flex-col md:items-start items-center gap-4">
          <div className="flex items-center gap-3 mb-1">
            <div className="bg-orange-400 rounded-full w-12 h-12 flex items-center justify-center text-2xl text-white font-extrabold">P</div>
            <div className="text-white text-2xl font-bold tracking-wider">Priyanshi</div>
          </div>
          <div className="text-white text-lg max-w-xl font-normal leading-snug mb-2 text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
          </div>
          <div className="flex items-center gap-4 mt-2">
            <a href="#" target="_blank" rel="noopener noreferrer"><Facebook className="w-7 h-7 text-white hover:text-orange-400" /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><Youtube className="w-7 h-7 text-white hover:text-orange-400" /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="w-7 h-7 text-white hover:text-orange-400" /></a>
            <a href="mailto:fawzisayed1209@gmail.com"><Mail className="w-7 h-7 text-white hover:text-orange-400" /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><Twitter className="w-7 h-7 text-white hover:text-orange-400" /></a>
          </div>
        </div>
        {/* Center: Navigation/Contact */}
        <div className="flex-1 flex md:flex-row flex-col justify-between items-center md:items-start gap-12 w-full">
          <div className=
          'text-center md:text-left'>
            <div className="text-orange-400 text-xl font-semibold mb-3">Navigation</div>
            <ul className="space-y-2 text-white text-lg font-medium">
              <li><a href="#home" className="hover:text-orange-400">Home</a></li>
              <li><a href="#testimonial" className="hover:text-orange-400">Testimonials</a></li>
              <li><a href="#service" className="hover:text-orange-400">Service</a></li>
              <li><a href="#resume" className="hover:text-orange-400">Resume</a></li>
              <li><a href="#projects" className="hover:text-orange-400">Project</a></li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <div className="text-orange-400 text-xl font-semibold mb-3">Contact</div>
            <div className="text-white/90 text-lg font-medium"><a href="tel:+91 6299979308">+91 62 99 97 93 08</a></div>
            <div className="text-white/90 text-lg font-medium"><a href="mailto:fawzisayed1209@gmail.com">priyanshiweb07@gmail.com</a></div>
            <div className="text-white/90 text-lg font-medium"><a href="https://fawziuiux.com" target="_blank" rel="noopener noreferrer">Priyanshi.com</a></div>
          </div>
        </div>
  <div className="flex-1 flex flex-col items-center md:items-end gap-2">
    
  </div>
  
        {/* Right: Subscribe */}
        <div className="flex-1 flex flex-col items-center md:items-end gap-2">
          <div className="text-orange-400 text-xl font-semibold mb-3 md:text-right text-center">
            Get the latest information
          </div>
          <form ref={formRef} onSubmit={handleSubscribe} className="flex w-full max-w-[340px]">
            <input
              name="user_email"
              className="rounded-l-full bg-white px-6 py-3 text-black text-lg flex-1 outline-none"
              type="email"
              placeholder="Email Address"
              required
            />
            <button
              type="submit"
              className="bg-orange-400 rounded-r-full px-7 flex items-center justify-center hover:bg-orange-500 transition"
              disabled={sending}
            >
              <ArrowRight className="text-white w-7 h-7" />
            </button>
          </form>
          {sent && <div className="text-green-500 font-semibold text-center mt-2">Thanks for subscribing!</div>}
        </div>
      </div>
      <hr className="border-[#3a3a3a] my-8" />
      <div className="flex flex-col md:flex-row justify-between items-center text-white/80 text-lg gap-3">
        <div>
          Copyright© 2023 Fawziuiux. All Rights Reserved.
        </div>
        <div className="text-right">
          <a href="#" className="hover:text-orange-400">User Terms & Conditions</a> |{" "}
          <a href="#" className="hover:text-orange-400">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
