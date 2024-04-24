"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const [open, setIsOpen] = useState(false);

  return (
    <header className="bg-white px-4 sticky top-0 z-10">
      <nav className="flex justify-between items-center max-w-screen-lx mx-auto">
        <div>
          <Image
            src="/logo.png"
            className="self-center md:-translate-x-4"
            alt="IPHIPI Logo"
            width="150"
            height="100"
          />
        </div>
        <div
          className={`nav-links duration-200 md:static absolute bg-white md:min-h-fit min-h-[28vh] left-0 ${
            open ? "top-0 translate-y-16" : "top-[-380%]"
          } md:w-auto  w-full flex items-center px-5`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <Link
                className="hover:text-blue-500 text-[15px] "
                href="#products"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-blue-500 text-[15px] "
                href="#technology"
              >
                Technology
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-500 text-[15px] " href="#future">
                Services
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-500 text-[15px] " href="#about">
                About
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-blue-500 text-[15px] "
                href="#contact"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="relative inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
          onClick={() => setIsOpen(!open)}
        >
          <span className="sr-only">Open main menu</span>

          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
        </button>
      </nav>
    </header>
  );
}

export default Footer;
