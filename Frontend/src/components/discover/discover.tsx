import { useRef } from "react";
import NightHiking from "../../assets/NightHiking.png";
import SummerCamp from "../../assets/SummerCamp.png";
import FreshRiver from "../../assets/FreshRiver.png";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";
import { delay } from "../../utils/helperFunctions";

export default function Discover() {
  const ref = useRef(null);
  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const isInView = useInView(ref, { once: true });

  async function animate() {
    controls.start({ y: 0, opacity: 1, transition: { duration: 0.6 } });
    await delay(200);
    controls2.start({ y: 0, opacity: 1, transition: { duration: 0.6 } });
    await delay(200);
    controls3.start({ y: 0, opacity: 1, transition: { duration: 0.6 } });
  }

  useEffect(() => {
    if (isInView) {
      animate();
    }
  }, [isInView, animate]);
  const experiences = [
    {
      image: NightHiking,
      title: "Night Hiking",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      controls: controls,
    },
    {
      image: SummerCamp,
      title: "Summer Camp",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      controls: controls2,
    },
    {
      image: FreshRiver,
      title: "Fresh River",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      controls: controls3,
    },
  ];

  return (
    <section className="py-20 lg:py-0 min-h-screen overflow-hidden w-full bg-secondary text-inverted flex flex-col justify-center relative z-40 gap-8 text-center ">
      <h2 className=" text-6xl px-4 sm:text-8xl gap-4 sm:p-0 flex flex-col sm:w-2/3 mx-auto mb-8 ">
        DISCOVER OUR EXPERIENCE
        <span className="max-w-screen-md mx-auto text-3xl font-secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </h2>
      <div
        ref={ref}
        className="flex flex-wrap gap-8 lg:gap-44 justify-evenly box-border max-w-screen-xl mx-auto px-10"
      >
        {experiences.map((experience) => (
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={experience.controls}
            className="flex max-w-md font-secondary items-start text-left flex-col gap-4"
            key={experience.title}
          >
            <img
              className="w-full"
              src={experience.image}
              alt={experience.title}
            />
            <h3 className="m-0 font-bold text-4xl">{experience.title}</h3>
            <p className="m-0  text-2xl opacity-50">{experience.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
