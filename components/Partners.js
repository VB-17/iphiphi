import React from "react";
import Image from "next/image";

const partners = [
  {
    logoSrc: "/cadence.png",
    name: "Cadence",
  },

  {
    logoSrc: "/syntiant.webp",
    name: "Syntiant",
  },

  {
    logoSrc: "/nxp.png",
    name: "NXP",
  },

  {
    logoSrc: "/renesas.png",
    name: "Renesas",
  },

  {
    logoSrc: "/infineon.png",
    name: "infineon",
  },
];

function Partners() {
  return (
    <div className="">
      <div className="p-6 relative mx-auto max-w-screen-lx gap-y-20 py-28">
        <h1 className="text-3xl pb-8 font-medium">Development Partner</h1>
        <p className="font-light">
          A network of trusted partners driving innovation alongside us in
          reshaping the landscape of AI-infused audio sensor technology.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 py-12 items-center md:flex-row justify-center gap-y-16 md:gap-x-16">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={partner.logoSrc}
                alt={partner.name}
                width={120}
                height={100}
                className="max-w-xs"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partners;
