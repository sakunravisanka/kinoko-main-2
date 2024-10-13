import React from 'react';
import { FaLeaf, FaRecycle, FaWater } from 'react-icons/fa';  // Import icons for visual elements

const Sustainability = () => {
  return (
    <section className="p-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="mb-6 text-4xl font-bold text-green-700">
          Sustainability and Environmental Impact
        </h2>

        {/* Introduction */}
        <p className="mb-8 text-lg text-gray-700">
          Our commitment to sustainable farming practices is central to everything we do. We strive to minimize our environmental impact while ensuring our farm remains productive and healthy.
        </p>

        {/* Icons and Key Practices */}
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
          {/* Water Conservation */}
          <div className="flex flex-col items-center">
            <FaWater className="mb-4 text-5xl text-blue-500" />
            <h3 className="text-xl font-semibold text-gray-800">Water Conservation</h3>
            <p className="text-gray-600">
              We use advanced irrigation techniques to reduce water usage and ensure efficient water conservation.
            </p>
          </div>

          {/* Waste Reduction */}
          <div className="flex flex-col items-center">
            <FaRecycle className="mb-4 text-5xl text-green-600" />
            <h3 className="text-xl font-semibold text-gray-800">Waste Reduction</h3>
            <p className="text-gray-600">
              Our farm implements zero-waste initiatives by composting organic waste and recycling resources.
            </p>
          </div>

          {/* Soil Health */}
          <div className="flex flex-col items-center">
            <FaLeaf className="mb-4 text-5xl text-green-500" />
            <h3 className="text-xl font-semibold text-gray-800">Soil Health</h3>
            <p className="text-gray-600">
              We use organic compost and crop rotation techniques to maintain soil health and enhance biodiversity.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-10">
          <a
            href="/learn-more"
            className="inline-block px-6 py-3 text-white transition-all duration-300 bg-green-600 rounded-md hover:bg-green-700"
          >
            Learn More About Our Sustainable Practices
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
