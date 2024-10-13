import React from "react";
import HeroImg from "../../assets/download.png";
import backgroundImage from "../../assets/backg2.jpg"; // Use this import correctly
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideRight } from "../../utility/animation";

const Hero = () => {
  return (
    <>
      <div
        className="container grid grid-cols-1 md:grid-cols-2 min-h-screen max-w-full relative"
        style={{
          width: "100%", // Full width
          height: "100vh", // Full viewport height
        }}
      >
        {/* Background image with low brightness */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`, // Ensure this URL is correct
            backgroundSize: "cover", // Cover the entire div
            filter: "brightness(0.4 )", // Reduce brightness
          }}
        ></div>

        {/* Brand info */}
        <div className="flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0 relative z-10">
          <div className="text-center md:text-left space-y-6">
            <motion.p
              variants={SlideRight(0.4)}
              initial="hidden"
              animate="visible"
              className="text-third uppercase font-semibold"
            >
              100% Satisfaction Guarantee
            </motion.p>
            <motion.h1
              variants={SlideRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-white text-5xl font-semibold lg:text-6xl !leading-tight"
            >
              Our Organic Mushroom <span className="text-white">Farm</span>
            </motion.h1>
            <motion.p
              variants={SlideRight(0.8)}
              initial="hidden"
              animate="visible"
              className="text-four"
            >
              <h1>
                Mushrooms are a rich, low-calorie source of fiber, protein, and
                antioxidants.
              </h1>
            </motion.p>
            {/* Button section */}
            <motion.div
              variants={SlideRight(1.0)}
              initial="hidden"
              animate="visible"
              className="text-white flex gap-8 justify-center md:justify-start !mt-8 items-center"
            >
              <button className="primary-btn">Get More</button>
              <button className="flex justify-end items-center gap-2 font-semibold">
                <span className="w-10 h-10 bg-four/15 rounded-full flex justify-center items-center">
                  <FaPlay className="text-secondary" />
                </span>
                See how it works
              </button>
            </motion.div>
          </div>
        </div>
        {/* Hero image */}
        <div className="flex justify-center items-center relative z-10">
          <motion.img
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 20, delay: 0.3 }}
            src={HeroImg}
            alt="Hero"
            className="w-[350px] md:w-[550px] xl:w-[700px]"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
