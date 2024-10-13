import React from "react";
import Hero from "./components/Hero/Hero";
import HowItHelps from "./components/HowItHelps/HowItHelps";
import CardComp from "./components/HowItHelps/CardComp";
import AboutFarm from "./components/AboutFarm";
import MushroomVarieties from "./components/MushroomVarieties";
import Sustainability from "./components/Sustainability";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import NavigationBar from "./components/NavigationBar";
const App = () => {
  return (
    <main className="overflow-x-hidden">
      <NavigationBar />
      <Hero />
      <HowItHelps />
      <CardComp />
      <AboutFarm />
      <MushroomVarieties />
      <Sustainability />
      <Testimonials />
      <ContactUs />
    </main>
  );
};

export default App;
