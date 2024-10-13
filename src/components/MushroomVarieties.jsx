import React from 'react';
import { motion } from 'framer-motion';

const mushrooms = [
  {
    name: 'Oyster Mushrooms',
    image: 'https://images.unsplash.com/photo-1454425064867-5ba516caf601?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Rich in protein and fiber, perfect for any dish.',
  },
  {
    name: 'Shiitake Mushrooms',
    image: 'https://plus.unsplash.com/premium_photo-1704737966313-746586e51913?q=80&w=2014&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'A meaty texture and packed with antioxidants.',
  },
  {
    name: 'Button Mushrooms',
    image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJ1dHRvbiUyMG11c2hyb29tc3xlbnwwfHx8fDE2MzY3ODQyNTg&ixlib=rb-1.2.1&q=80&w=400',
    description: 'A versatile mushroom, great for soups and sautées.',
  },
];

const MushroomVarieties = () => {
  return (
    <section className="p-12 bg-gray-50">
      <h2 className="mb-10 text-4xl font-extrabold text-center text-gray-800">Our Mushroom Varieties</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {mushrooms.map((mushroom, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl"
            whileHover={{ scale: 1.03 }}  // Adds hover scaling effect
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}  // Animates entry staggered by index
          >
            {/* Image with Overlay */}
            <div className="relative">
              <img
                src={mushroom.image}
                alt={mushroom.name}
                className="object-cover w-full h-64 transition-transform duration-500 rounded-t-lg"
              />
              {/* Overlay appears on hover */}
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                <button className="px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2">
                  Learn More
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-800">{mushroom.name}</h3>
              <p className="text-gray-600">{mushroom.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MushroomVarieties;
