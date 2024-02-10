import { avatar } from "../../public/assets";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

import Image from "next/image";

const technologies = [
  "JavaScript (ES6+)",
  "React",
  "TypeScript",
  "MongoDB",
  "Redux Toolkit",
  "Next.js",
  "Node.js",
  "Express.js",
  "Taildwindcss",
  "Bootstrap",
];

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4 text-justify">
          <p>
            Hello! My name is Tran Phuoc Anh Quoc and I enjoy creating things
            that live on the internet. My interest in web development started
            back in 2021 when I passed into UIT university.
          </p>
          <p>
            Aspiring and enthusiastic software engineer developer studies
            Software Engineering, specialization in Software Development.
            Developed web applications and mobile applications not only as a
            front-end engineer but also back-end engineer.
            <span className="text-textGreen">
              {" "}
              Strong skills in HTML, CSS, Javascript, Typescript and ReactJS,
              Next.js , React Native.
            </span>
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            {technologies.map((technology, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                {technology}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={avatar}
                alt="profileImg"
              />
            </div>
          </div>
          <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
