import React from "react";
import NightHiking from "../../assets/NightHiking.png";
import SummerCamp from "../../assets/SummerCamp.png";
import FreshRiver from "../../assets/FreshRiver.png";
export default function Discover() {
  const experiences = [
    {
      image: NightHiking,
      title: "Night Hiking",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      image: SummerCamp,
      title: "Summer Camp",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      image: FreshRiver,
      title: "Fresh River",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ];

  return (
    <section className="h-screen w-full bg-secondary text-inverted flex flex-col justify-center gap-20 text-center ">
      <h2 className="text-8xl gap-8 uppercase flex flex-col w-2/3 mx-auto">
        Discover our experience
        <span className=" text-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </h2>
      <div className="flex justify-evenly">
        {experiences.map((experience) => (
          <div className="flex flex-col items-center gap-4">
            <img
              className="max-w-[30rem] w-full"
              src={experience.image}
              alt={experience.title}
            />
            <h3>{experience.title}</h3>
            <p className="w-2/3">{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
