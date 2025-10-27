import React from 'react'
import { ArrowUpRight } from "lucide-react";

const ServiceCard = ({ title, imgSrc }) => {
    return (
        <div>

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




            </div>

            {/* Circular Arrow Button */}
            <div className="absolute -bottom-[24px] -right-[24px] z-30" >
                <div className="arrow-btn w-[56px] h-[56px] bg-[#0B1E3D] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#142d5a] hover:scale-110 shadow-2xl">
                    <ArrowUpRight className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
            </div>
        </div>
       
    )
}

export default ServiceCard
