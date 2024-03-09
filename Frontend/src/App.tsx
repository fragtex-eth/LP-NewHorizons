import Header from "./components/header/header";
import Discover from "./components/discover/discover";
import MultiLayerParallax from "./components/multiLayerParallax/multiLayerParallax";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
function App() {
  const ref = useRef(null);
  const [headerTextColor, setHeaderTextColor] = useState("primary");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "180%"]);
  const headerTextColorVariants = {
    primary: { color: "#083649" },
    white: { color: "#fff" },
  };
  return (
    <>
      <motion.div
        initial="primary"
        variants={headerTextColorVariants}
        animate={headerTextColor}
        className="z-50 fixed top-0 w-full"
      >
        <Header color={headerTextColor} />
      </motion.div>
      <motion.div
        onViewportLeave={() => setHeaderTextColor("white")}
        onViewportEnter={() => setHeaderTextColor("primary")}
        ref={ref}
        className="w-full h-screen p-10 relative"
      >
        <div className=" h-full flex flex-col z-1">
          <motion.main
            style={{ y: textY }}
            className="flex flex-col gap-8 items-center m-auto pb-28"
          >
            <h1 className="flex flex-col gap-8 text-primary uppercase text-9xl text-center ">
              Lets open
              <br /> new horizon's together
              <span className="text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            </h1>
            <button className="px-20 py-5 text-inverted rounded-xl bg-secondary">
              Get Started
            </button>
          </motion.main>
        </div>
        <MultiLayerParallax refP={ref} />
      </motion.div>
      <Discover />
    </>
  );
}

export default App;
