import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Hero from "./components/Hero";
import PopularDestinations from "./components/PopularDestinations";
import SeasonalTravelGuide from "./components/SeasonalTravelGuide";
import SafetyInformation from "./components/SafetyInformation";
import ThingsToAvoid from "./components/ThingsToAvoid";
import Footer from "./components/Footer";

function App() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 text-gray-900 font-sans">
      <Hero />
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.5 }}
      >
        <PopularDestinations />
      </motion.div>
      <SeasonalTravelGuide />
      <SafetyInformation />

      <ThingsToAvoid />

      <Footer />
    </div>
  );
}

export default App;
