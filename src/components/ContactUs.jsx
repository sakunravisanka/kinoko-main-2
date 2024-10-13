import React from 'react';

const ContactUs = () => {
  return (
    <section className="p-12 bg-gray-100">
      <div className="max-w-lg mx-auto text-center">
        {/* Section Title */}
        <h2 className="mb-8 text-4xl font-bold text-green-700">
          Contact Us
        </h2>

        {/* Introduction Text */}
        <p className="mb-10 text-lg text-gray-700">
          Got questions or want to get in touch? Fill out the form below, and we'll get back to you as soon as possible!
        </p>

        {/* Contact Form */}
        <form className="flex flex-col space-y-6">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 text-gray-800 transition-all duration-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {/* Email Input */}
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 text-gray-800 transition-all duration-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {/* Message Textarea */}
          <textarea
            placeholder="Your Message"
            className="p-4 text-gray-800 transition-all duration-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            rows="5"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 py-3 text-lg font-semibold text-white transition-all duration-300 bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
