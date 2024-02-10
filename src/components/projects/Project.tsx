//images
import Image from "next/image";

//icons
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import clsx from "clsx";

interface Props {
  image: any;
  right: boolean;
  description: string;
  name: string;
  mainfeature: string[];
  technologies: string[];
  link: string;
}

const Project = ({
  image,
  right,
  name,
  description,
  mainfeature,
  technologies,
  link,
}: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
      <div
        className={clsx(
          `flex flex-col gap-6`,
          right ? "xl:flex-row" : "xl:flex-row-reverse"
        )}
      >
        <a
          href=""
          target="_blank"
          className="w-full xl:w-1/2 h-auto relative group"
        >
          <div>
            <Image
              className="w-full h-full object-contain"
              src={image}
              alt="amazonImg"
            />
          </div>
        </a>
        <div
          className={clsx(
            `w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between z-10`,
            right
              ? "text-right items-end xl:-ml-16"
              : "text-left items-start xl:-mr-16"
          )}
        >
          <p className="font-titleFont text-textGreen text-sm tracking-wide">
            Feature Project
          </p>
          <h3 className="text-2xl font-bold">{name}</h3>
          <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md text-center">
            <span>{description}</span>
          </p>
          <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
            {technologies.map((technology, index) => (
              <li key={index}>{technology}</li>
            ))}
          </ul>
          <div className="text-2xl flex gap-4">
            <a
              href={link}
              target="_blank"
              className="hover:text-textGreen duration-300"
            >
              <TbBrandGithub />
            </a>
            <a
              href="https://www.youtube.com/channel/UCab8oUhngzefFGNrusYY-UQ"
              target="_blank"
              className="hover:text-textGreen duration-300"
            >
              <AiOutlineYoutube />
            </a>
            <a
              href=""
              target="_blank"
              className="hover:text-textGreen duration-300"
            >
              <RxOpenInNewWindow />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
