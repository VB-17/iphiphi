import React from "react";

const partners = ["a", "b", "c", "d"];

function Partners() {
  return (
    <div className="px-4">
      <h1 className="text-2xl pb-8 font-medium">Our Partners</h1>
      <p className="font-light   ">
        A network of trusted partners driving innovation alongside us in
        reshaping the landscape of AI-infused audio technology.
      </p>
      <div className="mx- space-y-6 py-8">
        {partners.map((item) => (
          <div
            className="p-4 border rounded-md w-auto"
            key={item}
          >
            <div className="h-64 w-64 bg-gray-500"></div>
            <p className="text-md">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;
