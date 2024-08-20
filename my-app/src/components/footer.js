import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-4">Anicineplex</h3>
          <p className="text-gray-400">
            Dive into the world of cinema with us. Explore, watch, and enjoy
            your favorite movies.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-white transition duration-300">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white transition duration-300">
                Contact
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white transition duration-300">
                Privacy Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white transition duration-300">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
        &copy; 2024 Anicineplex. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
