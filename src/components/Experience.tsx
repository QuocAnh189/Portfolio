import { useState } from "react";

//components
import SectionTitle from "./SectionTitle";
import ReactBD from "./works/ReactBD";
import Google from "./works/Google";
import Apple from "./works/Apple";
import Splash from "./works/Splash";
import Amazon from "./works/Amazon";
import clsx from "clsx";

const defaultActiveItem = {
  ReactBD: false,
  Google: false,
  Apple: false,
  Splash: false,
  Amazon: false,
};

const Experience = () => {
  const [activeItems, setActiveItems] = useState({
    ReactBD: true,
    Google: false,
    Apple: false,
    Splash: false,
    Amazon: false,
  });

  const handleChangeActiveItem = (name: string) => {
    setActiveItems({ ...defaultActiveItem, [name]: true });
  };

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={() => handleChangeActiveItem("ReactBD")}
            className={clsx(
              `border-l-2  text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`,
              activeItems.ReactBD ? "border-l-textGreen" : "border-l-hoverColor"
            )}
          >
            ReactBD
          </li>
          <li
            onClick={() => handleChangeActiveItem("Google")}
            className={clsx(
              `border-l-2  text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`,
              activeItems.Google ? "border-l-textGreen" : "border-l-hoverColor"
            )}
          >
            Google
          </li>
          <li
            onClick={() => handleChangeActiveItem("Apple")}
            className={clsx(
              `border-l-2  text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`,
              activeItems.Apple ? "border-l-textGreen" : "border-l-hoverColor"
            )}
          >
            Apple
          </li>
          <li
            onClick={() => handleChangeActiveItem("Splash")}
            className={clsx(
              `border-l-2  text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`,
              activeItems.Splash ? "border-l-textGreen" : "border-l-hoverColor"
            )}
          >
            Splash
          </li>
          <li
            onClick={() => handleChangeActiveItem("Amazon")}
            className={clsx(
              `border-l-2  text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`,
              activeItems.Amazon ? "border-l-textGreen" : "border-l-hoverColor"
            )}
          >
            Amazon
          </li>
        </ul>
        {activeItems.ReactBD && <ReactBD />}
        {activeItems.Google && <Google />}
        {activeItems.Apple && <Apple />}
        {activeItems.Splash && <Splash />}
        {activeItems.Amazon && <Amazon />}
      </div>
    </section>
  );
};

export default Experience;
