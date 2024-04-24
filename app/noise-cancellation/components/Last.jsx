import React from "react";

const Last = () => {
  return (
    <div className="py-20 last-banner">
      <div className="mx-12">
        <h2 className="benefits-last-heading text-center font-bold pb-10">
          You’re only one click away from more productive calls
        </h2>
        <div className="flex items-center md:items-start justify-center gap-4 flex-col md:flex-row">
          <div>
            <button className="text-white bg-red-500 hover:bg-red-600 benefit_buttons rounded-lg text-sm px-6 py-3.5 mb-2">
              Get IPHIPI for free
            </button>
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
          <div>
            <button className="text-white bg-blue-500 hover:bg-blue-600 benefit_buttons rounded-lg text-sm px-6 py-3.5 mb-2">
              Book a demo
            </button>
            <div className="my-3">
              <p className="block text-xs-km font-medium my-1">
                <span className="pe-2 text-green-400">
                  <i className="fa-solid fa-check"></i>
                </span>
                For individuals and small teams
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Last;
