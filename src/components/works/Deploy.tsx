import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Deploy = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        MERN Stack Developer
        <span className="text-textGreen tracking-wide">@Deploy</span>
      </h3>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I have experience in implementing projects with{" "}
          <span className="font-bold text-white">Azure</span>.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I know about{" "}
          <span className="font-bold text-white">Nginx, Docker service</span>.
        </li>
      </ul>
    </motion.div>
  );
};

export default Deploy;
