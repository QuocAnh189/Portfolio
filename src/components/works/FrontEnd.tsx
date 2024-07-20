import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const FrontEnd = () => {
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
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I can build website interfaces with html5, css or JavaScript libraries
          (JQuery, React, Next.js).
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I can build API from Front-End to Back-End with RTK-Query , React
          Query, Axios, ...
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          On the other hand , I use interface building libraries like Tailwind ,
          Bootstrap to build and responsive website.
        </li>
      </ul>
    </motion.div>
  );
};

export default FrontEnd;
