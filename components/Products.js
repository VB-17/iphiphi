import React from "react";

const myProducts = [
  {
    img: "",
    subTitle: "Intelligent TWS",
    title: "Experience Next-Level Audio with Intelligent TWS",
    description:
      "Our intelligent TWS (True Wireless Sterio) earbuds are equipped with advanced smart chips that enhance your audio experience. With features like active noise cancellation based on your environment, conversation awarness by smart chips, and auto-noise cancellation during calls, you can immerse yourself in high-quality sound without only distractions",
    features: [
      "Active Noise Cancellation",
      "Auto Noise Cancellation",
      "Conversation Awareness",
    ],
  },

  {
    img: "",
    subTitle: "Intelligent Mics for Call Centers",
    title: "Boost Productivity and Clarity with Intelligent Call Center Mics",
    description:
      "Our intelligent microphones for call centeres are design to enhance communication. With features like acoustic fetching and bubble mic, which captures sounds only within the users's bubble, background noise in the minimized ensuring cyrstal clear interactions for both agents and customers",

    features: ["Acoustic fetching", "Denoising Level Control", "Bubble Mic"],
  },
];

function CheckList({ content }) {
  return (
    <li className="flex items-center">
      <span className="flex items-center justify-between bg-green-500 p-1 rounded-full">
        <svg
          class="flex-shrink-0  w-2 h-2 text-white "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 12"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5.917 5.724 10.5 15 1.5"
          />
        </svg>
      </span>

      <span className="pt-[2px] ext-gray-700 ml-2 text-sm text-gray-700">
        {content}
      </span>
    </li>
  );
}

function Products() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-medium pb-8">Our Products</h1>
      <div className="space-y-12">
        {myProducts.map((item) => (
          <div className="" key={item.subTitle}>
            <h3 className="text-blue-500 text-sm tracking-wide font-semibold mb-4">
              {item.subTitle}
            </h3>
            <div className="relative h-96 w-full bg-gray-800 mb-6"></div>
            <div className="space-y-6">
              <h1 className="font-semibold text-2xl">{item.title}</h1>
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
  );
}

export default Products;
