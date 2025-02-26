import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const FrontEnd = () => {
  const skills = [
    "I can build website interfaces with html, css or JavaScript libraries (JQuery, React, Next.js).",
    "I can build API from Front-End to Back-End (RTK-Query , React Query, Axios, ...)",
    "On the other hand , I use interface building libraries like Tailwind , Bootstrap, Shadcn, ... to build and responsive website.",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Engineer <span className="text-textGreen tracking-wide">@FrontEnd</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">Current</p>
      <ul className="mt-6 flex flex-col gap-3">
        {skills.map((skill: string, index: number) => (
          <li
            key={`skill-${index}`}
            className="text-base flex gap-2 text-textDark"
          >
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default FrontEnd;
