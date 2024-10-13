import React from "react";
import Card from "./CardComp.jsx";
import Icon1 from "../../assets/icon/1.jpg";
import Icon2 from "../../assets/icon/2.jpg";
import Icon3 from "../../assets/icon/3.jpg";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../../utility/animation";

const HowItHelps = () => {
  return (
    <section className="p-0.5 bg-secondary">
      <div className="container py-4 my-10 ">
        {" "}
        {/* Changed py and my values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pb-2 ">
          <div className="col-span-2 ">
            <div className=" grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-5 ">
              <motion.div
                variants={SlideRight(0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }} // Trigger when 20% of the element is in view
              >
                <Card
                  icon={Icon1}
                  heading="Mushroom 1"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risussed volutpat non."
                />
              </motion.div>
              <motion.div
                variants={SlideRight(0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }} // Trigger when 20% of the element is in view
              >
                <Card
                  icon={Icon2}
                  heading="Mushroom 2"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risussed volutpat non."
                />
              </motion.div>
              <motion.div
                variants={SlideRight(0.6)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }} // Trigger when 20% of the element is in view
              >
                <Card
                  icon={Icon3}
                  heading="Mushroom 3"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risussed volutpat non."
                />
              </motion.div>
            </div>
          </div>
          <motion.div
            variants={SlideLeft(0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} // Trigger when 20% of the element is in view
            className="flex flex-col xl:justify-center xl:pr-14"
          >
            <h1 className="text-3xl font-bold text-darkBlue">
              Different types of Mushrooms
            </h1>
            <p className="text-gray-400 mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
              esse ab natus.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              <a href="#" className="text-primary">
                Learn More
              </a>
            </p>
            <button className="w-fit mt-4 border border-gray-200 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300">
              Get Each
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItHelps;
