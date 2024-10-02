import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Stethoscope,
  Thermometer,
  AlertTriangle,
} from "lucide-react";

const safetyTips = [
  {
    title: "General Safety",
    description: "Stay vigilant and trust your instincts.",
    icon: ShieldCheck,
    tips: [
      "Keep your belongings close and be aware of your surroundings",
      "Use reputable transportation services, especially at night",
      "Respect local customs and dress codes",
    ],
  },
  {
    title: "Health Precautions",
    description: "Take necessary health measures before and during your trip.",
    icon: Stethoscope,
    tips: [
      "Get necessary vaccinations before your trip",
      "Drink bottled water and avoid street food if you have a sensitive stomach",
      "Carry a basic first-aid kit and any personal medications",
    ],
  },
  {
    title: "Weather Considerations",
    description: "Be prepared for diverse weather conditions.",
    icon: Thermometer,
    tips: [
      "Check weather forecasts and pack appropriate clothing",
      "Stay hydrated, especially in hot and humid conditions",
      "Be cautious of monsoon-related hazards like flooding",
    ],
  },
  {
    title: "Scams to Avoid",
    description: "Be aware of common tourist scams.",
    icon: AlertTriangle,
    tips: [
      "Be cautious of overly friendly strangers offering unsolicited help",
      "Use official tourist information centers for guidance",
      "Negotiate and agree on prices before accepting services",
    ],
  },
];

function SafetyInformation() {
  return (
    <section id="safety" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Safety Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {safetyTips.map((tip, index) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex items-center mb-4">
                <tip.icon className="h-8 w-8 mr-2 text-orange-500" />
                <h3 className="text-xl font-semibold">{tip.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{tip.description}</p>
              <ul className="list-disc pl-5">
                {tip.tips.map((item, index) => (
                  <li key={index} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SafetyInformation;
