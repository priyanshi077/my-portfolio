import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Mail, Star, Award, ShieldCheck } from "lucide-react";

export default function ContactSection() {
  const form = useRef(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setSent(false);
    emailjs
      .sendForm(
        "service_9877d4h",   // replace
        "template_jkwo8e4",  // replace
        form.current,
        "UPWp6LDQdrZWE4bD6"       // replace
      )
      .then(
        (result) => {
          setSending(false);
          setSent(true);
        },
        (error) => {
          setSending(false);
          alert("Error sending. Please try again!");
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact"className="w-full flex flex-col items-center justify-center py-20 px-2">
      {/* Heading */}
      <h2 className="text-center text-4xl md:text-6xl font-bold text-[#384155] leading-tight mb-10">
        Have an Awsome Project<br />
        Idea?{" "}
        <span className="text-orange-400">
          Let&apos;s Discuss
        </span>
      </h2>

      {/* Email Input + Button */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="
          w-full max-w-4xl flex items-center bg-white rounded-full shadow-md border-2 border-[#fcf7f7]/90 p-1.5
          mb-9
        "
      >
        <span className="flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mx-1">
          <Mail className="text-orange-400 w-8 h-8" />
        </span>
        {/* Name, Email, Message as needed! */}
        {/* For this one-input case: */}
        <input
          name="user_email"
          className="flex-1 border-none outline-none bg-transparent text-lg px-2"
          type="email"
          placeholder="Enter Email Address"
          required
        />
        <button
          type="submit"
          className="w-44 h-16 bg-orange-400 rounded-full text-white text-2xl font-medium mr-2 hover:bg-orange-500 transition"
          disabled={sending}
        >
          {sending ? "Sending..." : sent ? "Sent!" : "Send"}
        </button>
      </form>

      {/* Info Bar */}
      <div className="
          w-full max-w-4xl flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0 sm:justify-between text-lg
          text-[#283046] font-medium
      ">
        <div className="flex items-center gap-2">
          <Star className="h-7 w-7 text-[#384155]" />
          <span>4.9/5 Average Ratings</span>
        </div>
        <div className="flex items-center gap-2">
          <Award className="h-7 w-7 text-[#384155]" />
          <span>25+ Winning Awards</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-7 w-7 text-[#384155]" />
          <span>Certified Product Designer</span>
        </div>
      </div>
      {sent && (
        <div className="text-green-600 font-semibold mt-6 text-xl">Thank you! Your email was sent successfully.</div>
      )}
    </section>
  );
}
