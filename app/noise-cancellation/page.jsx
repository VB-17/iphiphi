import React from "react";
import Home from "./components/Home";
import Benefits from "./components/Benefits";
import Working from "./components/Working";
import AppDemo from "./components/AppDemo";
import Last from "./components/Last";
import SupportedApps from "./components/SupportedApps";

const page = () => {
  return (
    <>
      <Home />
      <Benefits />
      <Working />
      <AppDemo />
      <SupportedApps />
      <Last />
    </>
  );
};

export default page;
