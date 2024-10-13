import React from 'react';
import { FaMapMarkerAlt, FaLeaf, FaSolarPanel, FaSeedling } from 'react-icons/fa'; // Icons for visual enhancement
import { motion } from 'framer-motion'; // Animations for interactive elements

const AboutFarm = () => {
  return (
    <section className="w-full p-12 bg-gray-50"> {/* Ensure full width and clean background */}
      <div className="px-6 max-w-none"> {/* Removed container class and max-w to ensure full width */}
        
        {/* Section Title */}
        <h2 className="mb-8 text-4xl font-bold text-center text-green-700">
          About <span className="text-green-600">Kinoko</span> Farm
        </h2>

        {/* Farm Description */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="mb-4 text-lg text-gray-700">
            <strong>Kinoko</strong> is located in the lush countryside of <strong>Hambantota, Sri Lanka</strong>, spread across 50 acres of fertile land. Operated by Parabiz, our farm is led by expert farmers dedicated to sustainable and organic farming practices.
          </p>
          <p className="text-lg text-gray-700">
            Our mission is to produce high-quality mushrooms using eco-friendly methods that protect the environment. We leverage natural compost, renewable energy, and advanced farming techniques to ensure sustainability.
          </p>
        </div>

        {/* Icons and Highlights Section */}
        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
          {/* Location */}
          <motion.div 
            className="flex flex-col items-center p-6 transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
          >
            <FaMapMarkerAlt className="mb-4 text-5xl text-red-500" />
            <h3 className="text-xl font-semibold text-gray-800">Our Location</h3>
            <p className="text-gray-600">Hambantota, Sri Lanka</p>
          </motion.div>

          {/* Expertise */}
          <motion.div 
            className="flex flex-col items-center p-6 transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
          >
            <FaLeaf className="mb-4 text-5xl text-green-600" />
            <h3 className="text-xl font-semibold text-gray-800">Expert Farmers</h3>
            <p className="text-gray-600">
              Led by experienced farmers with a passion for organic and sustainable farming methods.
            </p>
          </motion.div>

          {/* Sustainability */}
          <motion.div 
            className="flex flex-col items-center p-6 transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
          >
            <FaSolarPanel className="mb-4 text-5xl text-yellow-500" />
            <h3 className="text-xl font-semibold text-gray-800">Eco-friendly Practices</h3>
            <p className="text-gray-600">
              Using renewable energy and organic compost to nurture the environment and ensure sustainability.
            </p>
          </motion.div>

          {/* Organic Farming */}
          <motion.div 
            className="flex flex-col items-center p-6 transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
          >
            <FaSeedling className="mb-4 text-5xl text-green-500" />
            <h3 className="text-xl font-semibold text-gray-800">Organic Farming</h3>
            <p className="text-gray-600">
              We grow mushrooms using natural compost and organic practices that preserve soil health.
            </p>
          </motion.div>
        </div>

        {/* Additional Information Section */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <h3 className="mb-4 text-2xl font-bold text-green-700">Our Mission</h3>
          <p className="text-lg text-gray-700">
            At <strong>Kinoko</strong>, we grow a variety of mushrooms including oyster mushrooms, shiitake, and button mushrooms. Our growing process ensures a balance between innovation and tradition, helping us protect the environment while delivering fresh, organic produce.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutFarm;
