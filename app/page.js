"use client";

import About from "@/components/About";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Products from "@/components/Products";
import Services from "@/components/Services";
import "./main.css";
import Contact from "@/components/Contact";

import { Toaster } from "react-hot-toast";
import Technology from "@/components/Technology";

export default function Home() {
  return (
    <div>
      <Hero />
      <Partners />
      <Products />
      <Technology />
      <Services />
      <About />
      <Contact />
      <Toaster />
    </div>
  );
}
