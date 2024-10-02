import React from "react";
import { motion } from "framer-motion";
import { XCircle } from "lucide-react";

const thingsToAvoid = [
  {
    title: "Disrespecting Local Customs",
    description:
      "Always research and respect local traditions and dress codes.",
  },
  {
    title: "Ignoring Food and Water Safety",
    description: "Be cautious with street food and always drink bottled water.",
  },
  {
    title: "Overlooking Travel Insurance",
    description: "Ensure you have comprehensive travel insurance coverage.",
  },
  {
    title: "Neglecting Personal Safety",
    description:
      "Stay aware of your surroundings, especially in crowded areas.",
  },
  {
    title: "Overpacking",
    description:
      "Pack light and smart, considering the diverse climates in India.",
  },
  {
    title: "Ignoring Environmental Responsibility",
    description:
      "Be mindful of your environmental impact and follow sustainable practices.",
  },
];

function ThingsToAvoid() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Things to Avoid</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {thingsToAvoid.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex items-center mb-4">
                <XCircle className="h-6 w-6 mr-2 text-red-500" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ThingsToAvoid;
