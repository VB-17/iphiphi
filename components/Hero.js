/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="bg-blue-50 px-4 py-16 md:px-8 ">
      <div className="max-w-screen-lx mx-auto md:py-20 md:flex md:justify-between md:gap-x-10">
        <div className="md:pt-0 space-y-8 text-center md:text-left">
          <h1 className="font-semibold lg:text-[60px] lg:leading-tight text-3xl md:text-4xl  ">
            AI Mic For Smart Devices
          </h1>
          <p className="font-light md:max-w-lg  text-gray-700"></p>

          <Link href="#products">
            <button
              type="button"
              className="font-medium text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-600 rounded-lg text-sm px-7 py-4 mt-6 mb-2 "
            >
              Know More
            </button>
          </Link>
        </div>

        <div className="relative h-96 w-11/12 mx-auto mt-16 p-4 md:mt-0 md:max-w-md">
          {/* <Image
            src="/banner-image.jpg"
            fill
            // objectFit="cover"
            // objectPosition=""
            className="rounded-md"
            alt="banner-image"
          /> */}
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
}

export default Hero;
