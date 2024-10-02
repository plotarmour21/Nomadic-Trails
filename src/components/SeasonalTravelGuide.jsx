import React, { useState } from "react";
import { motion } from "framer-motion";

const seasonalGuide = [
  {
    season: "Summer (April - June)",
    description:
      "Hot and dry in most parts. Great for hill stations and mountain retreats.",
    recommendations: [
      "Ladakh - Experience the high-altitude desert and Buddhist culture",
      "Himachal Pradesh - Enjoy cool weather in Shimla or Manali",
      "Uttarakhand - Visit the Valley of Flowers (opens in July)",
    ],
  },
  {
    season: "Monsoon (July - September)",
    description: "Rainy season with lush greenery. Perfect for nature lovers.",
    recommendations: [
      "Kerala - Enjoy Ayurvedic treatments and lush landscapes",
      "Meghalaya - Witness the living root bridges and waterfalls",
      "Goa - Experience off-season tranquility and lower prices",
    ],
  },
  {
    season: "Autumn (October - November)",
    description:
      "Pleasant weather and festive season. Ideal for most destinations.",
    recommendations: [
      "Rajasthan - Explore the desert and majestic forts",
      "Varanasi - Witness the spiritual atmosphere during Diwali",
      "Kolkata - Experience the grand Durga Puja celebrations",
    ],
  },
  {
    season: "Winter (December - March)",
    description:
      "Cold in the north, pleasant in the south. Perfect for cultural tours.",
    recommendations: [
      "Rann of Kutch, Gujarat - Attend the Rann Utsav",
      "Goa - Enjoy the beaches and New Year celebrations",
      "Andaman Islands - Perfect weather for beach activities and water sports",
    ],
  },
];

function SeasonalTravelGuide() {
  const [activeSeason, setActiveSeason] = useState(seasonalGuide[0].season);

  return (
    <section id="seasonal-guide" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Seasonal Travel Guide
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {seasonalGuide.map((season) => (
            <button
              key={season.season}
              onClick={() => setActiveSeason(season.season)}
              className={`px-4 py-2 rounded-full ${
                activeSeason === season.season
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-800 hover:bg-orange-100"
              }`}
            >
              {season.season.split(" ")[0]}
            </button>
          ))}
        </div>
        {seasonalGuide.map(
          (season) =>
            season.season === activeSeason && (
              <motion.div
                key={season.season}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-2xl font-semibold mb-4">{season.season}</h3>
                <p className="text-gray-600 mb-4">{season.description}</p>
                <h4 className="font-semibold mb-2">
                  Recommended Destinations:
                </h4>
                <ul className="list-disc pl-5">
                  {season.recommendations.map((recommendation, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="mb-2"
                    >
                      {recommendation}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )
        )}
      </div>
    </section>
  );
}

export default SeasonalTravelGuide;
