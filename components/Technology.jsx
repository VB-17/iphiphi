"use client";
import { useState } from "react";
import BikePlayer from "./BikePlayer";
import BabblePlayer from "./BabblePlayer";
import ClickPlayer from "./ClickPlayer";
import SirenPlayer from "./SirenPlayer";
import BabyPlayer from "./BabyPlayer";
import Link from "next/link";

const Technology = () => {
  const [activeAudio, setActiveAudio] = useState("bike");

  const handlePlayBikeAudio = () => {
    setActiveAudio("bike");
  };

  const handlePlayBabbleAudio = () => {
    setActiveAudio("babble");
  };

  const handlePlaySirenAudio = () => {
    setActiveAudio("siren");
  };

  const handlePlayBabyAudio = () => {
    setActiveAudio("baby");
  };

  const handlePlayClickAudio = () => {
    setActiveAudio("click");
  };

  return (
    <div className="md:p-6 py-32 relative" id="technology">
      <div className="mx-auto max-w-screen-lx p-6">
        <h1 className="text-3xl font-medium pb-8">AI Mic Technology</h1>
        <div className="grid grid-cols-1 gy-10 md:grid-cols-3 my-10 gap-4">
          <div className="">
            <div className="subtitle mb-4 md:mb-8">
              AI ENC for Earbuds and Wearables
            </div>
            <div className="description">
              <div className="text-body">
                World’s smallest AI ENC that consumes less than 1 mW (10%
                earbuds battery in a day). Ensure maximum clarity in your calls
                by eliminating background noises.
              </div>
              <ul className="mt-4 md:mt-8">
                <li className="text-body my-2">
                  <i className="fa-regular text-blue-500 text-sm pe-1.5 fa-circle-check"></i>
                  Clear calls from earbuds
                </li>
                <li className="text-body my-2">
                  <i className="fa-regular text-blue-500 text-sm pe-1.5 fa-circle-check"></i>
                  Clear calls from smartwatches
                </li>
              </ul>
              {/* <div className="mt-8">
                <Link
                  href={"/noise-cancellation"}
                  className="learn_more text-blue-500"
                >
                  Learn more
                </Link>
              </div> */}
            </div>
          </div>
          <div className="col-span-2">
            <div className="grid ms-0 md:ms-8 grid-cols-1 md:grid-cols-5">
              <div className="col-start-1 col-end-7 md:col-start-2 md:col-end-6">
                <div className="text-xl font-bold text-center mb-4 md:mb-8">
                  Hear AI ENC demo:
                </div>

                {activeAudio === "bike" && <BikePlayer />}
                {activeAudio === "babble" && <BabblePlayer />}
                {activeAudio === "click" && <ClickPlayer />}
                {activeAudio === "siren" && <SirenPlayer />}
                {activeAudio === "baby" && <BabyPlayer />}

                <div className="my-4 md:my-8">
                  <div className=" text-xl font-bold text-center">
                    Try different noise types
                  </div>
                  <div className="flex flex-wrap items-center justify-center my-4">
                    <button
                      className={
                        activeAudio === "bike"
                          ? "px-2.5 py-3.5 text-sm font-medium text-white bg-blue-500 rounded-lg text-center m-1"
                          : "px-2.5 py-3.5 text-sm font-medium bg-gray-200 hover:bg-gray-300 rounded-lg text-center m-1"
                      }
                      onClick={handlePlayBikeAudio}
                    >
                      Wind Voice
                    </button>
                    <button
                      className={
                        activeAudio === "babble"
                          ? "px-2.5 py-3.5 text-sm font-medium text-white bg-blue-500 rounded-lg text-center m-1"
                          : "px-2.5 py-3.5 text-sm font-medium bg-gray-200 hover:bg-gray-300 rounded-lg text-center m-1"
                      }
                      onClick={handlePlayBabbleAudio}
                    >
                      Babble Voice
                    </button>
                    <button
                      className={
                        activeAudio === "click"
                          ? "px-2.5 py-3.5 text-sm font-medium text-white bg-blue-500 rounded-lg text-center m-1"
                          : "px-2.5 py-3.5 text-sm font-medium bg-gray-200 hover:bg-gray-300 rounded-lg text-center m-1"
                      }
                      onClick={handlePlayClickAudio}
                    >
                      Click Voice
                    </button>
                    <button
                      className={
                        activeAudio === "baby"
                          ? "px-2.5 py-3.5 text-sm font-medium text-white bg-blue-500 rounded-lg text-center m-1"
                          : "px-2.5 py-3.5 text-sm font-medium bg-gray-200 hover:bg-gray-300 rounded-lg text-center m-1"
                      }
                      onClick={handlePlayBabyAudio}
                    >
                      Baby Voice
                    </button>
                    <button
                      className={
                        activeAudio === "siren"
                          ? "px-2.5 py-3.5 text-sm font-medium text-white bg-blue-500 rounded-lg text-center m-1"
                          : "px-2.5 py-3.5 text-sm font-medium bg-gray-200 hover:bg-gray-300 rounded-lg text-center m-1"
                      }
                      onClick={handlePlaySirenAudio}
                    >
                      Siren Voice
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
