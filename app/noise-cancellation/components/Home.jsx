import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-blue-50 px-4 py-10 md:px-8 ">
      <div className="max-w-screen-lx mx-auto md:py-20 md:flex md:justify-between md:gap-x-10">
        <div className="md:pt-0 text-center md:text-left">
          <h1 className="font-semibold mb-4 lg:text-[60px] lg:leading-tight text-3xl md:text-4xl  ">
            Noise-free meetings with AI-powered <br />
            <span className="text-blue-500">Noise Cancellation</span>
          </h1>
          <p className="font-light mb-2 learn_more_text md:max-w-xl">
            AI Mic maximizes productivity by removing background noises, voices
            and echoes from your calls and meetings.
          </p>
          <Link className="" href="#">
            <button
              type="button"
              className="font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-lg text-sm px-7 py-4 mt-6 mb-2 "
            >
              <span className="know_more_btn">Get IPHIPI for free</span>
            </button>
          </Link>
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

        <div className="relative h-96 w-11/12 mx-auto mt-16 p-4 md:mt-0 md:max-w-md">
          <div className="grid grid-cols-3 gap-3">
            <div>
              <Image
                src="/banner-image.jpg"
                // objectFit="cover"
                width={200}
                height={200}
                // objectPosition=""
                className="rounded-md"
                alt="banner-image"
              />
            </div>
            <div>
              <Image
                src="/watch.jpg"
                // objectFit="cover"
                width={200}
                height={200}
                // objectPosition=""
                className="rounded-md"
                alt="banner-image"
              />
            </div>
            <div>
              <Image
                src="/earbud.jpg"
                // objectFit="cover"
                width={200}
                height={200}
                // objectPosition=""
                className="rounded-md"
                alt="banner-image"
              />
            </div>
            <div>
              <Image
                src="/mack.jpg"
                // objectFit="cover"
                width={200}
                height={200}
                // objectPosition=""
                className="rounded-md"
                alt="banner-image"
              />
            </div>
            <div>
              <Image
                src="/phone.jpg"
                // objectFit="cover"
                width={200}
                height={200}
                // objectPosition=""
                className="rounded-md"
                alt="banner-image"
              />
            </div>
            <div>
              <Image
                src="/rrradio.jpeg"
                // objectFit="cover"
                width={200}
                height={200}
                // objectPosition=""
                className="rounded-md"
                alt="banner-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
