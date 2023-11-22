import Image from "next/image";

const data = {
  productList: [
    {
      img: "/product1.webp",
      title: "Intelligent Mics",
      description:
        "Our intelligent mic solutions deliver exceptional voice quality in any environment, using advanced noise-cancellation and voice enhancement technology for clear communication.",
    },

    {
      img: "/product2.webp",
      title: "AI-Powered Audio Solutions",
      description:
        "Experience the next generation of audio solutions with our AI-powered technology designed to deliver exceptional sound quality and clarity.",
    },

    {
      img: "/product3.webp",
      title: "Hearing Enhancements",
      description:
        "Our hearing enhancement solutions use advanced audio processing technology to amplify sounds and reduce background noise, improving communication for individuals with hearing impairments.",
    },
  ],
  features: [
    "Cutting-Edge AI Technology",
    "Intelligent Mics for TWS Earphones",
    "Hearing Enhancements for Better Communication",
    "Customizable Audio Settings",
    "Ongoing Support",
  ],
  benifits: [
    "Enhanced Audio Experience",
    "Improved Communication",
    "Customizable Sound Settings",
    "Affordable Technology",
    "Sustained Partnership",
  ],
};

function ListItem({ content }) {
  return (
    <li className="flex items-center max-w-sm">
      <span className="block outline outline-2 mx-2 mr-4 outline-green-600 outline-offset-4 h-1 w-1 rounded-full bg-green-600"></span>
      <span className="text-gray-600">{content}</span>
    </li>
  );
}

function Services() {
  return (
    <div className="bg-blue-50" id="future">
      <div className="mx-auto max-w-screen-lx py-20 pb-48">
        <div className="p-6">
          <h2 className="text-3xl font-medium  pb-10">Our Future Potential</h2>
          <div className="space-y-16 md:space-y-0 md:grid md:gap-x-10 md:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {data.productList.map((item) => (
              <ProductCard
                key={item.img}
                img={item.img}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          <div className="relative flex pt-28 items-center">
            <div className="flex-grow border-t border-gray-600"></div>
            <span className="flex-shrink mx-4 text-gray-600 text-lg font-light">
              Features &amp; Benifits
            </span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>

          <div className="pt-16 space-y-4 lg:flex">
            <div className="md:flex md:justify-between">
              <div className="">
                <h1 className="text-xl">Features</h1>
                <ul className="py-6 space-y-2">
                  {data.features.map((text) => (
                    <ListItem key={text} content={text} />
                  ))}
                </ul>
              </div>
              <div>
                <h1 className="text-xl">Benefits</h1>

                <ul className="py-6 space-y-2">
                  {data.benifits.map((text) => (
                    <ListItem key={text} content={text} />
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative w-full md:w-1/3 h-64 mx-auto mt-8 ">
              <Image
                src={"/features.webp"}
                fill
                className="object-cover rounded-md"
                alt="hello"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ img, title, description }) {
  return (
    <div className="space-y-4">
      <div className="relative h-80 mx-auto ">
        <Image
          src={img}
          fill
          objectFit="cover"
          objectPosition=""
          className="rounded-md"
          alt="hello"
        />
      </div>
      <div className="space-y-3">
        <h2 className="text-lg font-medium">{title}</h2>
        <p className="font-light text-gray-700">{description}</p>
      </div>
    </div>
  );
}

export default Services;
