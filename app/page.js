import About from "@/components/About";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Image from "next/image";
import { Fragment } from "react";

export default function Home() {
  return (
    <div>
      <Hero />
      <Partners />
      <Products />
      <About />
      <Services />
    </div>
  );
}
