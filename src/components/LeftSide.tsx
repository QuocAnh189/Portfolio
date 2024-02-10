//icons
import { TbBrandGithub } from "react-icons/tb";
import {
  SlSocialYoutube,
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/QuocAnh189" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 duration-300">
            <TbBrandGithub />
          </span>
        </a>
        <a
          href="https://www.youtube.com/channel/UCab8oUhngzefFGNrusYY-UQ"
          target="=_blank"
        >
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2  duration-300">
            <SlSocialYoutube />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/anh-quoc-tran-phuoc-6451922b3/"
          target="=_blank"
        >
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2  duration-300">
            <SlSocialLinkedin />
          </span>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100024539650227"
          target="=_blank"
        >
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2  duration-300">
            <SlSocialFacebook />
          </span>
        </a>
        <a href="https://www.instagram.com/aq18.09_t/" target="=_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2  duration-300">
            <SlSocialInstagram />
          </span>
        </a>
      </div>
      <span className="w-[2px] h-32 bg-textDark"></span>
    </div>
  );
};

export default LeftSide;
