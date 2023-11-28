"use client";
import React, { useState } from "react";
import Image from "next/image";

const points = [
  "MeeamiTech: Deep Learning based Audio AI IP for voice and speech enhancement",
  "Contify: AI based Marketing Intelligence platform",
  "InsideView: CRM Intelligence, raised $80+ Million",
  "TailCurrent: AI based Digital Marketing Platform, acquired by GenY Media in 2015",
  "HelloSoft: mobile VoIP, acquired by Imagination Technologies in 2011",
  "Datapath Systems: Semiconductor SERDES IP, acquired by LSI Logic I n 2000",
];

function ListItem({ content }) {
  return (
    <li className="flex">
      <span className="shrink-0 block outline outline-2 mx-2 mr-4 mt-3 outline-black outline-offset-4 h-1 w-1 rounded-full bg-black"></span>
      <span className="text-gray-600">{content}</span>
    </li>
  );
}

const initValues = { name: "", email: "", subject: "", message: "" };
const initState = { isLoading: false, error: "", values: initValues };

function About() {

  return (
    <div className="md:p-6 py-32 relative" id="about">
      <div className="mx-auto max-w-screen-lx p-6">
        <h1 className="text-3xl font-medium pb-8">About iPhiPi</h1>
        <div className="space-y-8 font-light">
          <p className="leading-relaxed">
            IPHIPI is started with a vision to enable all devices to become “AI
            Smart using low power, low latency and always on AI sensors designed
            by IPHIPI.. What this means is that the device will become aware and
            independently take some decisions to make the user experience more
            intuitive and seamless.
          </p>

          <div className="space-y-16 ">
            {/* directors */}
            <div>
              <h2 className="text-2xl font-medium mb-6">Directors</h2>
              <div className="md:gap-16 space-y-16">
                <div className="space-y-4 md:grid md:grid-cols-2 md:gap-16">
                  <div className="relative mx-auto w-72 my-8 aspect-square md:w-full md:my-0 ">
                    <Image
                      src={"/pankaj.jpeg"}
                      alt="Pankaj joshi"
                      fill
                      objectPosition="bottom"
                      className="object-cover "
                    />
                  </div>

                  <div className="space-y-4 md:text-left">
                    <h3 className="font-medium text-center md:text-left ">
                      Pankaj Joshi, B.tech IIT Kharagpur, MSEE Univ of Hawaii,
                      USA and MBA INSEAD.
                    </h3>
                    <p>
                      In the last 20 years, Pankaj has been part of 6 startups
                      as an early employee, leadership team and as a founder
                      CEO.
                    </p>

                    <ul className="list-none space-y-3">
                      {points.map((item) => (
                        <ListItem key={item} content={item} />
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-4 md:grid md:grid-cols-2 md:gap-16">
                  <div className="relative my-8 w-72 mx-auto aspect-square md:w-full md:my-0">
                    <Image
                      src={"/sumita.jpeg"}
                      alt="Sumita"
                      fill
                      objectPosition="bottom "
                      className="object-contain "
                    />
                  </div>

                  <div className="space-y-4 md">
                    <h3 className="font-medium text-center md:text-left">
                      Sumita Thakur, B.Tech NIT Durgapur, MS Univ of Hawaii, USA
                    </h3>
                    <p className="leading-[1.8]">
                      Sumita is currently head of Head - Programs & Outreach,
                      School of Innovation & Entrepreneurship, IIT Hyderabad.
                      She has two decades of Experienced higher education
                      professional with leadership roles in business growth,
                      marketing, brand and product management for the higher
                      education industry. Successfully launched multiple new
                      products (programs), customer acquisition in new markets
                      and categories. Served as Admissions Head for top
                      Institute. Consulting Experience in online learning for
                      professionals. Currently working in the admission and
                      program aspects of undergraduate education.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* advisors */}
            <div>
              <h2 className="text-2xl font-medium mb-6">Advisors</h2>
              <div className="space-y-4 md:grid md:grid-cols-2 md:gap-16">
                <div className="relative my-8 w-72 mx-auto aspect-square md:w-full md:my-0">
                  <Image
                    src={"/doug-makishima.jpeg"}
                    alt="Doug makishima"
                    fill
                    objectPosition="bottom"
                    className="object-cover "
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium text-center md:text-left ">
                    Doug Makishima, CSMO Summittech
                  </h3>
                  <p className="leading-[1.8]">
                    Doug Makishima is a seasoned C-level executive, startup
                    adviser and angel investor with deep experience in cloud
                    edge computing, AI, wireless mobile communications, IoT,
                    networking & storage, e-commerce and blockchain
                    technologies. Doug is a thought leader and visionary with a
                    keen understanding of the wireless, mobile device and IoT
                    ecosystem. He has a solid track record of delivering to and
                    collaborating with telecom operators, enterprises, mobile
                    device OEMs, infrastructure vendors, and SoC / IC vendors.
                  </p>
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
