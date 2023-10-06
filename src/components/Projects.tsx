import Image from "next/image";

//components
import SectionTitle from "./SectionTitle";
import Project from "./proects/Project";

//image
import { amazonImg, cyberImg, noorShop } from "../../public/assets";

//icons
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Thing i have Built" titleNo="03" />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        <Project
          right={true}
          image={amazonImg}
          name="Quizzes App for Website"
          description="An Amazon clone website for visualizing personalized Amazon website.
            View your products, Add your account with O-auth and then make the
            purchage using stripe "
          mainfeature={["O-auth", "stripe"]}
          technologies={[
            "NextJs",
            "TypeScript",
            "Next-auth",
            "Stripe",
            "Vercel Deployment",
          ]}
        />

        <Project
          right={false}
          image={cyberImg}
          name="Discord Clone 2.0"
          description="An Amazon clone website for visualizing personalized Amazon website.
            View your products, Add your account with O-auth and then make the
            purchage using stripe "
          mainfeature={["O-auth", "stripe"]}
          technologies={[
            "NextJs",
            "TypeScript",
            "Next-auth",
            "Stripe",
            "Vercel Deployment",
          ]}
        />

        <Project
          right={true}
          image={noorShop}
          name="Quizzes App for Website"
          description="An Amazon clone website for visualizing personalized Amazon website.
            View your products, Add your account with O-auth and then make the
            purchage using stripe "
          mainfeature={["O-auth", "stripe"]}
          technologies={[
            "NextJs",
            "TypeScript",
            "Next-auth",
            "Stripe",
            "Vercel Deployment",
          ]}
        />
      </div>
    </section>
  );
};

export default Projects;
