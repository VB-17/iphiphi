import React from "react";
import Image from "next/image";

const myProducts = [
  {
    img: "/tws.png",
    subTitle: "Intelligent TWS",
    title: "AI Mic for TWS",
    description: "Transform your earbuds to a smart device with AI Mic.",
    features: [
      "AI Environment Noise Cancellation (ENC)",
      "Auto ANC on/off based on Environmental conditions",
      "Transparency Mode for environment awareness",
      "Voice commands and control",
    ],
  },

  {
    img: "/pr1.webp",
    subTitle: "Intelligent Mics for Call Centers",
    title: "AI Mic for Contact Center Headphones",
    description:
      "AI mic for call center headphones are designed to enhance call center environment by blocking nearby conversation and background voice noises",

    features: ["Bubble Mic", "Background voice suppression", "ENC on playback"],
  },

  {
    img: "/radio.jpeg",
    subTitle: "",
    title: "AI Mic for Two Way Radios",
    description:
      "Elevate your two-way radio experience with our AI mic solution, redefining intelligent communication. Supress outdoor noises such as sirens, engine noise, traffic noise which guarantees clear mission critical communication. Enable handsfree operation with voice activation control.",

    features: [
      "Minimizing Outdoor Disturbance",
      "Denoising Level Control",
      "Handsfree Operation",
    ],
  },
];

function CheckList({ content }) {
  return (
    <li className="flex items-center">
      <span className="flex items-center justify-between bg-green-500 p-1 rounded-full">
        <svg
          className="flex-shrink-0  w-2 h-2 text-white "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 12"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5.917 5.724 10.5 15 1.5"
          />
        </svg>
      </span>

      <span className="pt-[2px] ext-gray-700 ml-2 text-base text-gray-700">
        {content}
      </span>
    </li>
  );
}

function Products() {
  return (
    <div id="products" className="bg-blue-50">
      <div className="mx-auto py-20 max-w-screen-lx">
        <div className="p-6">
          <h1 className="text-3xl font-medium pb-12">Products</h1>
          <div className="space-y-32">
            {myProducts.map((item, index) => (
              <div
                className={`md:flex md:gap-x-16 ${
                  index % 2 ? "md:flex-row-reverse" : ""
                }`}
                key={item.subTitle}
              >
                <div className="relative w-full h-72 md:h-80 mb-8 md:mb-0 bg-gray-800 rounded-md">
                  <Image
                    src={item.img}
                    fill
                    className="object-cover"
                    alt={item.subTitle}
                  />
                </div>
                <div className="space-y-6 w-full">
                  <h1 className="font-semibold text-2xl">{item.title}</h1>
                  {/* <h3 className="text-blue-600 text-base tracking-wide font-medium ">
                    {item.subTitle}
                  </h3> */}
                  <p className="text-gray-700">{item.description}</p>
                  <ul className="list-none space-y-2">
                    {item.features.map((content) => (
                      <CheckList key={content} content={content} />
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
