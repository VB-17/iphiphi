import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="">
      <footer className="bg-zinc-800 text-center text-gray-200 lg:text-left">
        <div className="max-w-screen-lx md:mx-auto mx-6 py-10 text-center md:text-left">
          {/* <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4 justify-between align-center"> */}
          <div className="flex px-10 flex-col space-y-16 md:flex-row md:space-y-0 justify-between">
            <div className="max-w-sm ">
              <div>
                <Image
                  src="/logo-light.png"
                  className="self-center md:-translate-x-4"
                  alt="IPHIPI Logo"
                  width="200"
                  height="100"
                />
              </div>
              <div>AI Mic for Smart Devices</div>
            </div>
            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Contact
              </h6>
              <div className="mb-4 flex items-center justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 w-5"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
                <div className="max-w-sm">
                  C5-104, Center for Innovation and Entrepreneurship <br />
                  IIIT Hyderabad <br /> Gachibowli, Hyderabad <br /> Telangana -
                  500032
                </div>
              </div>
              <div className="mb-4 flex items-center justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 w-5"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <a href="mailto:pankaj.joshi@iphipi.com">
                  {" "}
                  pankaj.joshi@iphipi.com{" "}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-neutral-700 p-6 text-center ">
          <span>© 2023 Copyright: </span>
          <a
            className="font-semibold text-neutral-600 dark:text-neutral-400"
            href="#"
          >
            IPHIPI
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
