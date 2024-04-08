import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#032B44] border-t border-t-blue-500 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="mt-2">
              We are a company that believes in the power of technology to solve
              problems.
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="mt-2">Email: info@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-6">
          <p className="text-center text-sm">
            &copy; 2024 Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
