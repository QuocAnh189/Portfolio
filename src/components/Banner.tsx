//animation
import { motion } from "framer-motion";
import "animate.css";

//images
import { logoBanner } from "../../public/assets";
import Image from "next/image";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-row gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.div className="mx-auto gap-4 flex flex-col">
        <motion.span
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-60 inline-block mb-4 px-3 py-2 text-[18px] font-titleFont font-bold border border-textGreen bg-linearGreen "
        >
          Welcome to my Portfolio
        </motion.span>
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-lg font-titleFont tracking-wide text-textGreen"
        >
          Hi, my name is
        </motion.h3>
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col text-4xl lgl:text-5xl font-titleFont font-semibold"
        >
          Tran Phuoc Anh Quoc.
          <span className="text-white mt-2 lgl:mt-4">
            I can build everything for the web
          </span>
        </motion.h1>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-base md:max-w-[650px] text-textDark font-medium text-justify"
        >
          I am a web developer with over 1+ years of experience in University.I
          am a student 3rd at University Of Information Technology I have a
          strong foundation in front-end & back-end development and am skilled
          in creating user-friendly and responsive web applications using React
          and its ecosystem.
          <a>
            <span className="text-textGreen inline-flex relative cursor-pointer overflow-x-hidden group">
              Learn more
              <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-0 -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500"></span>
            </span>
          </a>
        </motion.p>
        <a href="https://github.com/QuocAnh189" target="_blank">
          <motion.button
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="w-52 h-14 text-sm font-titleFont  border border-textGreen rounded-md text-textGreen   hover:bg-hoverColor duration-300"
          >
            Check out my Project
          </motion.button>
        </a>
      </motion.div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="animate__animated animate-pulse"
      >
        <Image src={logoBanner} alt="logoBanner" />
      </motion.div>
    </section>
  );
};

export default Banner;
