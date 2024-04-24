"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";

const benefit = [
  {
    img: "/img_benefit_bg_voice.png",
    subTitle: " Background Voice Cancellation ",
    title: " Background Voice Cancellation ",
    description:
      "AI-powered background voice cancellation technology ensures only active voices on calls are heard, eliminating all other nearby voices and distractions.",
  },

  {
    img: "/img_benefit_nc.png",
    subTitle: "Background Noise Cancellation",
    title: " Background Voice Cancellation ",
    description:
      "AI mic for call center headphones are designed to enhance call center environment by blocking nearby conversation and background voice noises",
  },

  {
    img: "/img_benefit_echo.png",
    subTitle: "",
    title: " Background Voice Cancellation ",
    description:
      " Deliver crystal-clear call experiences by removing both inbound and outbound background noise, free from distractions and chatter from all participants. ",
  },
];

const Benefits = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleTogglePlay = () => {
    const video = videoRef.current;
    if (video && video.paused) {
      video.play();
    } else if (video) {
      video.pause();
    }
    setIsPlaying(video ? !video.paused : false);
  };

  return (
    <div id="" className="">
      <div className="mx-auto py-20 md:px-12 max-w-screen-lx">
        <div className="p-6">
          <h1 className="benefits-heading text-center font-bold pb-12">
            AI-powered Noise Cancellation
          </h1>
          <div className="space-y-24 mt-5">
            {benefit.map((item, index) => (
              <div
                className={`md:flex items-center md:gap-x-10 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                key={item.subTitle}
              >
                <div className="relative w-full h-72 mb-8 md:mb-0 rounded-md">
                  <Image
                    src={item.img}
                    layout="fill"
                    objectFit="cover"
                    alt={item.subTitle}
                    className="rounded-md"
                  />
                </div>
                <div className="space-y-6">
                  <h4 className="font-semibold text-center md:text-start benefits-subtitle">
                    {item.title}
                  </h4>
                  <p className="text-gray-700 benefit_text">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center md:items-start mt-16 justify-center gap-4 flex-col md:flex-row">
            <div>
              <button className="text-white bg-blue-500 hover:bg-blue-600 benefit_buttons rounded-lg text-sm px-6 py-3.5 mb-2">
                Get IPHIPI for free
              </button>
              <div className="my-3">
                <p className="block text-xs-km font-medium my-1">
                  <span className="pe-2 text-green-400">
                    <i className="fa-solid fa-check"></i>
                  </span>
                  For individuals and small teams
                </p>
                <p className="block text-xs-km font-medium my-1">
                  <span className="pe-2 text-green-400">
                    <i className="fa-solid fa-check"></i>
                  </span>
                  No credit card required
                </p>
              </div>
            </div>
            <div>
              <button className="text-white bg-blue-950 hover:bg-black benefit_buttons rounded-lg text-sm px-6 py-3.5 mb-2">
                Book a demo
              </button>
              <div className="my-3">
                <p className="block text-xs-km font-medium my-1">
                  <span className="pe-2 text-green-400">
                    <i className="fa-solid fa-check"></i>
                  </span>
                  For individuals and small teams
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
