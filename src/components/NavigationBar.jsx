import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation"; // Import the SlideUp animation

function NavigationBar() {
  return (
    <motion.nav
      className="bg-gray-200 shadow shadow-gray-300"
      initial="initial"
      animate="animate"
      variants={SlideUp(0.4)} // Apply SlideUp with a 0.2s delay
    >
      <div className="container mx-auto py-3 flex justify-between items-center">
        {/* Logo and name */}
        <div className="flex items-center space-x-3 text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-15 w-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 2C7.5 2 3.5 6 3 10h18c-.5-4-4.5-8-9-8zM7 10v2h10v-2H7zm0 2v4h10v-4H7zm2 4v3c0 .5-.5 1-1 1s-1-.5-1-1v-3h2zm6 0v3c0 .5-.5 1-1 1s-1-.5-1-1v-3h2z"
            />
          </svg>
          <h1 className="text-2xl font-serif">Mushroom</h1>
        </div>

        {/* Navigation tabs centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-10">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center space-x-2"
          >
            <a href="#" className="flex items-center space-x-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M22 11.414v12.586h-20v-12.586l-1.293 1.293-.707-.707 12-12 12 12-.707.707-1.293-1.293zm-6 11.586h5v-12.586l-9-9-9 9v12.586h5v-9h8v9zm-1-7.889h-6v7.778h6v-7.778z"
                  />
                </svg>
              </span>
              <span className="text-black">Home</span>
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center space-x-2"
          >
            <a href="#" className="flex items-center space-x-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M23 6.066v12.065l-11.001 5.869-11-5.869v-12.131l11-6 11.001 6.066zm-21.001 11.465l9.5 5.069v-10.57l-9.5-4.946v10.447zm20.001-10.388l-9.501 4.889v10.568l9.501-5.069v-10.388zm-5.52 1.716l-9.534-4.964-4.349 2.373 9.404 4.896 4.479-2.305zm-8.476-5.541l9.565 4.98 3.832-1.972-9.405-5.185-3.992 2.177z"
                  />
                </svg>
              </span>
              <span className="text-black">Products</span>
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center space-x-2"
          >
            <a href="#" className="flex items-center space-x-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </span>
              <span className="text-black">About Us</span>
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center space-x-2"
          >
            <a href="#" className="flex items-center space-x-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z"
                  />
                </svg>
              </span>
              <span className="text-black">Contact</span>
            </a>
          </motion.div>
        </div>

        {/* Social Icons in the right corner */}
        <div className="flex items-center space-x-4">
          {/* Facebook Icon */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="[&>svg]:h-4 [&>svg]:w-4 [&>svg]:fill-[#1877f2]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M80 299.3V512H196V299.3h70.3c2.3-24.4 7.1-47.8 7.1-47.8H196v-38.8c0-12.1 4-22.6 10.6-28.6c9.1-7.1 23.2-5.8 40.6-5.8c10.2 0 18.6.8 26.1 1.3v-50.9c-7-1-17-2.7-33.5-2.7c-29.8 0-49.8 14.1-60.7 28.5c-10.6 14.1-12.7 30.3-12.7 37.4V251H80v47.8h70.3z" />
              </svg>
            </span>
          </a>

          {/* YouTube Icon */}
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="[&>svg]:h-4 [&>svg]:w-4 [&>svg]:fill-[#ff0000]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M549.655 124.083C534.443 70.59 492.385 32 438.94 32H137.06C83.615 32 41.557 70.59 26.345 124.083 8.571 184.507 8.571 256 26.345 316.417 41.557 369.91 83.615 408.5 137.06 408.5h301.88c53.445 0 95.503-38.59 110.715-92.083C567.429 256 567.429 184.507 549.655 124.083zM232 336.465V175.535l142.132 80.465L232 336.465z" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

export default NavigationBar;
