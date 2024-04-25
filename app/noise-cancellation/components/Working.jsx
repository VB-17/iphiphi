"use client";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Image from "next/image";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180 text-gray-400" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const Working = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => {
    setOpen((prevOpen) => (prevOpen === value ? prevOpen : value));
  };

  return (
    <div id="" className="">
      <div className="mx-auto px-6 py-20 max-w-screen-lx">
        <div className="pb-10">
          <h1 className="benefits-heading text-center font-bold">
            How AI Mic works
          </h1>
          <div className="flex justify-between gap-10 items-center">
            <div className="max-w-xl">
              <>
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                  <AccordionHeader
                    className="accordion-subheader"
                    onClick={() => handleOpen(1)}
                  >
                    Download and install
                  </AccordionHeader>
                  <AccordionBody className="learn_more_text">
                    {/* Krisp is a desktop app for Mac and Windows. When you install
                    Krisp on your computer, it creates virtual devices named
                    Krisp Microphone and Krisp Speaker. It mimics a physical
                    hardware device, when, in fact, it exists only in software
                    form. */}
                  </AccordionBody>
                  <AccordionBody className="md:hidden">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/img_benefit_echo.png"
                      alt=""
                    />
                  </AccordionBody>
                </Accordion>
                <hr className="border-1 border-slate-300" />
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                  <AccordionHeader
                    className="accordion-subheader"
                    onClick={() => handleOpen(2)}
                  >
                    Configure
                  </AccordionHeader>
                  <AccordionBody className="learn_more_text">
                    {/* Krisp offers a seamless setup experience without the need
                    for extra integrations, add-ons, or bots. Simply select
                    Krisp Microphone and Krisp Speaker in your conferencing app
                    settings, and we'll handle the rest. */}
                  </AccordionBody>
                  <AccordionBody className="md:hidden">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/img_benefit_nc.png"
                      alt=""
                    />
                  </AccordionBody>
                </Accordion>
                <hr className="border-1 border-slate-300" />
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                  <AccordionHeader
                    className="accordion-subheader"
                    onClick={() => handleOpen(3)}
                  >
                    Unleash productivity
                  </AccordionHeader>
                  <AccordionBody className="learn_more_text ">
                    {/* Once Krisp is integrated with your desktop or web-based app,
                    you're unstoppable! Experience unparalleled audio clarity,
                    complemented by auto-transcriptions, and AI generated
                    meeting summaries and action items for all your meetings. */}
                  </AccordionBody>
                  <AccordionBody className="md:hidden">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/img_benefit_bg_voice.png"
                      alt=""
                    />
                  </AccordionBody>
                </Accordion>
              </>
            </div>
            <div className="hidden md:block">
              {(open === 1 && (
                <>
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    src="/img_benefit_echo.png"
                    alt=""
                  />
                </>
              )) ||
                (open === 2 && (
                  <>
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/img_benefit_nc.png"
                      alt=""
                    />
                  </>
                )) ||
                (open === 3 && (
                  <>
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/img_benefit_bg_voice.png"
                      alt=""
                    />
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
