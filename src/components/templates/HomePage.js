import React from "react";
import Home from "@/src/components/modules/Home";
import styles from "@/src/components/templates/HomePage.module.scss";
import AboutUs from "@/src/components/modules/AboutUs";
import Services from "@/src/components/modules/Services";
import Resume from "@/src/components/modules/Resume";
import Portfolio from "@/src/components/modules/Portfolio";
import Pricing from "@/src/components/modules/Pricing";
import ContactUs from "@/src/components/modules/ContactUs";
import Portfolio1 from "../modules/Portfolio1";

function HomePage() {
  return (
    <>
      <Home />
      <AboutUs />
      <Services />
      <Resume />
      {/* <Portfolio1 /> */}
      <Portfolio />
      <Pricing />
      <ContactUs /> 
    </>
  );
}

export default HomePage;
