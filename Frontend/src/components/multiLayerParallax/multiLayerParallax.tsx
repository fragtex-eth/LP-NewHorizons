import React, { useRef } from "react";
import FullBackground from "../../assets/FullBackground.png";
import BottomBackground from "../../assets/ForestAnimals.png";
import { motion, useScroll, useTransform } from "framer-motion";
export default function MultiLayerParallax({ refP }) {
  const { scrollYProgress } = useScroll({
    target: refP,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const background2Y = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const backgroundSize = useTransform(
    scrollYProgress,
    [0, 1],
    ["100%", "150%"],
  );
  return (
    <>
      <motion.div
        className="absolute inset-0 -z-30 bg-bottom bg-cover"
        style={{
          backgroundImage: `url(/images/FullBackground.png)`,
          y: backgroundY,
        }}
      />
      <motion.div
        className="absolute inset-0 -z-20 bg-bottom bg-cover"
        style={{
          backgroundImage: `url(/images/MountainsSun.png)`,
          y: backgroundY,
        }}
      />
      <motion.div
        className="absolute inset-0 -z-10 bg-bottom bg-cover"
        style={{
          backgroundImage: `url(/images/ValleyHouses.png)`,
          y: background2Y,
        }}
      />
      <motion.div
        className="pointer-events-none overflow-hidden  absolute inset-0 z-10 bg-bottom bg-cover"
        style={{
          backgroundImage: `url(/images/ForestAnimals.png)`,
          scale: backgroundSize,
        }}
      />
    </>
  );
}
