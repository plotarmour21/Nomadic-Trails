import React from "react";
import { motion } from "framer-motion";

const destinations = [
  {
    name: "Taj Mahal, Agra",
    description:
      "An iconic symbol of love and one of the New Seven Wonders of the World.",
    image:
      "https://images.unsplash.com/photo-1686508176649-4e32900fb270?q=80&w=1997&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Historical", "Architecture"],
  },
  {
    name: "Jaipur, Rajasthan",
    description:
      "The Pink City known for its stunning palaces and vibrant culture.",
    image:
      "https://images.unsplash.com/photo-1602643163983-ed0babc39797?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Culture", "Architecture"],
  },
  {
    name: "Goa Beaches",
    description:
      "Sun-kissed beaches, vibrant nightlife, and Portuguese-influenced culture.",
    image:
      "https://plus.unsplash.com/premium_photo-1697729594707-0fc9e51c8eed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Beach", "Nightlife"],
  },
  {
    name: "Kerala Backwaters",
    description: "Serene waterways, lush greenery, and traditional houseboats.",
    image:
      "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Nature", "Relaxation"],
  },
];

function PopularDestinations() {
  return (
    <section id="destinations" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Popular Destinations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  ">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-48 object-cover transform transition duration-300 hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  {destination.name}
                </h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex flex-wrap gap-2">
                  {destination.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularDestinations;
