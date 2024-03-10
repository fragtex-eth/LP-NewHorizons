import Header from "./components/header/header";
import Discover from "./components/discover/discover";
import MultiLayerParallax from "./components/multiLayerParallax/multiLayerParallax";
import { useRef } from "react";
import { useInView, useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
function App() {
  const ref = useRef(null);
  const [headerTextColor, setHeaderTextColor] = useState("primary");
  const isInView = useInView(ref);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "180%"]);
  const headerTextColorVariants = {
    primary: { color: "#083649" },
    white: { color: "#fff" },
  };
  useEffect(() => {
    console.log(isInView);
  }, [isInView]);
  return (
    <>
      <motion.div
        initial="primary"
        variants={headerTextColorVariants}
        animate={headerTextColor}
        className="z-50 absolute lg:fixed top-0 w-full"
      >
        <Header />
      </motion.div>
      <motion.div ref={ref} className="w-full h-screen relative">
        <MultiLayerParallax refP={ref} />
        <div className="h-full flex flex-col z-1">
          <motion.main
            style={{ y: textY }}
            className="flex px-4 flex-col gap-8 items-center m-auto pb-32"
          >
            <h1 className=" font-normal m-0 flex flex-col gap-8 text-primary uppercase text-6xl sm:text-9xl text-center ">
              Lets open
              <br /> new horizon's together
              <span className="text-2xl font-secondary font-bold max-w-screen-md mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            </h1>
            <button className="cursor-pointer border-none  px-20 py-5 text-inverted rounded-xl font-bold font-secondary bg-secondary text-3xl ">
              Get Started
            </button>
          </motion.main>
        </div>
      </motion.div>
      <Discover />
      <motion.div
        onViewportEnter={() => setHeaderTextColor("white")}
        onViewportLeave={() => setHeaderTextColor("primary")}
      ></motion.div>
    </>
  );
}

export default App;
