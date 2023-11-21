import Image from "next/image";

function Hero() {
  return (
    <div className="bg-blue-50 px-4 py-16 md:px-8 ">
      <div className="max-w-screen-xl mx-auto md:py-20 md:flex md:justify-between md:gap-x-10">
        <div className="md:pt-0 space-y-8 text-center md:text-left">
          <h1 className="font-bold lg:text-[60px] lg:leading-tight text-3xl md:text-4xl  ">
            Revolutionizing Audio with AI Technology
          </h1>
          <p className="font-light md:max-w-lg  text-gray-700">
            At iPhiPi, we design and manufacture cutting-edge smart chips that
            harness the power of artificial intelligence to transform audio
            experiences.
          </p>

          <button
            type="button"
            className="font-medium text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-600 rounded-lg text-sm px-7 py-4 me-2 mb-2 "
          >
            Know More
          </button>
        </div>

        <div className="relative h-96 w-11/12 mx-auto mt-16 p-4 md:mt-0 md:max-w-md">
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

export default Hero;
