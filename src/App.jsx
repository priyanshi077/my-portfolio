import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import Experience from "./Components/Experience";
import WhyHireMe from "./Components/WhyHireMe";
import TestimonialSection from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Blogs from "./Components/Blogs";
import Footer from "./Components/Footer";
import RunningLine from "./Components/RunningLine";


const App = () => {
  return (
    <>
      <div className="min-h-screen">
        <div>
          <Navbar />
          <HeroSection />
          <Services />
          <Experience />
          <WhyHireMe />
          <TestimonialSection />
          <Contact />
           <RunningLine />
          <Blogs />
          <Footer />
         
        </div>
      </div>
    </>
  );
};

export default App;
