import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Nomadic Trails</h3>
            <p className="text-sm">
              Discover the wonders of India with our expert travel guides and
              tips.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-orange-500 transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-500 transition duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-500 transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-500 transition duration-300"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-orange-500 transition duration-300"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="hover:text-orange-500 transition duration-300"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="hover:text-orange-500 transition duration-300"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="hover:text-orange-500 transition duration-300"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} Nomadic Trails. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
