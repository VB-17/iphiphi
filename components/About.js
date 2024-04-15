import React, { useState } from "react";
import Image from "next/image";

const points = [
  "MeeamiTech: Deep Learning based Audio AI IP for voice and speech enhancement",
  "Contify: AI based Marketing Intelligence platform",
  "InsideView: CRM Intelligence, raised $80+ Million",
  "TailCurrent: AI based Digital Marketing Platform, acquired by GenY Media in 2015",
  "HelloSoft: mobile VoIP, acquired by Imagination Technologies in 2011",
  "Datapath Systems: Semiconductor SERDES IP, acquired by LSI Logic in 2000",
];

function ListItem({ content }) {
  return (
    <li className="flex">
      <span className="shrink-0 block outline outline-2 mx-2 mr-4 mt-3 outline-black outline-offset-4 h-1 w-1 rounded-full bg-black"></span>
      <span className="text-gray-600">{content}</span>
    </li>
  );
}

function About() {
  return (
    <div className="md:p-6 py-32 relative" id="about">
      <div className="mx-auto max-w-screen-lx p-6">
        <h1 className="text-3xl font-medium pb-8">About IPHIPI</h1>
        <div className="space-y-8 font-light">
          <p className="leading-relaxed">
            As we gear up for the device AI revolution, miniaturizing AI stands
            as a pivotal step towards embedding intelligence into everyday
            gadgets. Shrinking AI algorithms to fit within the confines of small
            devices such as wearables, earbuds, and IoT sensors opens up a realm
            of possibilities. This miniaturization empowers these devices to
            process data locally, enhancing speed, privacy, and efficiency while
            reducing reliance on cloud computing. With AI condensed into compact
            forms, devices can seamlessly adapt to user preferences, anticipate
            needs, and provide personalized experiences on a scale never seen
            before. The miniaturization of AI heralds a future where
            intelligence becomes ubiquitous, seamlessly integrated into the
            fabric of our daily lives.
          </p>

          <div className="space-y-10 ">
            {/* Directors */}
            <div>
              <h2 className="text-2xl font-medium mb-6">Directors</h2>
              <div className="md:grid md:grid-cols-2 md:gap-16 md:space-y-0">
                <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-[1fr_2fr] md:items-start md:gap-x-6">
                  <div className="relative w-72 my-8 aspect-square md:w-full md:my-0 ">
                    <Image
                      src={"/pankaj.jpeg"}
                      alt="Pankaj joshi"
                      fill
                      objectPosition="bottom"
                      className="object-cover "
                    />
                  </div>

                  <div className="space-y-2 md:text-left">
                    <h3 className="font-medium text-center md:text-left ">
                      Pankaj Joshi - B. Tech IIT Kharagpur, MSEE Univ of Hawaii
                      USA, MBA INSEAD.
                    </h3>
                    <p className="leading-relaxed text-sm">
                      In the last 20 years, Pankaj has been a part of 6 startups
                      as an early employee, leadership team and as a founder
                      CEO. He was most recently head of product at Meeamitech, a
                      deep learning based Audio AI IP for voice and speech
                      enhnacement.
                    </p>

                    {/* <ul className="list-none space-y-3">
                      {points.map((item) => (
                        <ListItem key={item} content={item} />
                      ))}
                    </ul> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Advisors */}
            <div>
              <h2 className="text-2xl font-medium mb-6">Advisors</h2>
              <div className="md:grid md:grid-cols-2 md:gap-16 md:space-y-0">
                <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-[1fr_2fr] md:items-start md:gap-x-6">
                  <div className="relative w-72 my-8 aspect-square md:w-full md:my-0">
                    <Image
                      src={"/sumita.jpeg"}
                      alt="Sumita"
                      fill
                      objectPosition="bottom"
                      className=" "
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium text-center md:text-left">
                      Sumita Thakur - B.Tech NIT Durgapur, MS Univ of Hawaii,
                      USA
                    </h3>
                    <p className="leading-relaxed text-sm">
                      Sumita is currently head of Head - Programs & Outreach,
                      School of Innovation & Entrepreneurship, IIT Hyderabad.
                      Successfully launched multiple new products (programs),
                      customer acquisition in new markets and categories.
                    </p>
                  </div>
                </div>
                <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-[1fr_2fr] md:items-start md:gap-x-6">
                  <div className="relative w-72 my-8 aspect-square md:w-full md:my-0">
                    <Image
                      src={"/doug-makishima.jpeg"}
                      alt="Doug makishima"
                      fill
                      objectPosition="bottom"
                      className="object-cover "
                    />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium text-center md:text-left ">
                      Doug Makishima, CSMO Summittech
                    </h3>
                    <p className="leading-relaxed text-sm">
                      Doug Makishima is a seasoned C-level executive, startup
                      adviser and angel investor with deep experience in cloud
                      edge computing, AI, wireless mobile communications, IoT,
                      networking & storage, e-commerce and blockchain
                      technologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
