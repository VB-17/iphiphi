/* eslint-disable react/no-unescaped-entities */
// Importing necessary components from Next.js
import Image from "next/image";
import Link from "next/link";

// Hero component definition
function Hero() {
  return (
    // Hero section container with background styling
    <div className="bg-blue-50 px-4 py-16 md:px-8 ">
      <div className="max-w-screen-lx mx-auto md:py-20 md:flex md:justify-between md:gap-x-10">
        {/* Left section containing text content */}
        <div className="md:pt-0 space-y-8 text-center md:text-left">
          {/* Main heading */}
          <h1 className="font-semibold lg:text-[60px] lg:leading-tight text-3xl md:text-4xl  ">
            AI Mic For Smart Devices
          </h1>
          {/* Subtitle or additional text */}
          <p className="font-light md:max-w-lg  text-gray-700"></p>

          {/* Button linking to the products section */}
          <Link href="#products">
            <button
              type="button"
              className="font-medium text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-600 rounded-lg text-sm px-7 py-4 mt-6 mb-2 "
            >
              Know More
            </button>
          </Link>
        </div>

        {/* Right section containing the image */}
        <div className="relative h-96 w-11/12 mx-auto mt-16 p-4 md:mt-0 md:max-w-md">
          {/* Image component for the hero image */}
          <Image
            src="/hero-img.webp"
            fill
            objectFit="cover"
            objectPosition=""
            className="rounded-md"
            alt="hello"
          />
        </div>
      </div>
    </div>
  );
}

// Exporting the Hero component as default
export default Hero;
