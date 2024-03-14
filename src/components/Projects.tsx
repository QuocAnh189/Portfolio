//components
import SectionTitle from "./SectionTitle";
import Project from "./projects/Project";

//image
import quizzesApp from "src/assets/images/quizzes.png";
import footballApp from "src/assets/images/football.png";
import organicApp from "src/assets/images/organic.png";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Thing I have Built" titleNo="03" />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        <Project
          right={true}
          image={quizzesApp}
          name="Quizzes App for Website"
          description="Engage users with diverse quiz games online, offering entertainment and educational challenges across various topics and interests."
          mainfeature={["O-auth", "stripe"]}
          technologies={[
            "Next.js",
            "TypeScript",
            "Node.js",
            "Mongo DB",
            "Redux Toolkit",
          ]}
          link="https://github.com/QuocAnh189/Quizzes_FE"
        />

        <Project
          right={false}
          image={footballApp}
          name="Soccer Championship Management"
          description="Efficiently organize and manage soccer tournaments, from club to national levels, handling schedules, results, team information, tickets, and marketing"
          mainfeature={["O-auth", "stripe"]}
          technologies={[
            "Next.js",
            "TypeScript",
            "Node.js",
            "Mongo DB",
            "React-Query",
          ]}
          link="https://github.com/QuocAnh189/SoccerManagement_FE"
        />

        <Project
          right={true}
          image={organicApp}
          name="Website Organic Food"
          description="Conveniently buy high-quality organic food online, with detailed product information, promoting healthy and sustainable lifestyles while supporting local producers and suppliers"
          mainfeature={["O-auth", "stripe"]}
          technologies={[
            "Next.js",
            "TypeScript",
            "Node.js",
            "Mongo DB",
            "Redux Toolkit",
          ]}
          link="https://github.com/QuocAnh189/OrganicFood_FE"
        />
      </div>
    </section>
  );
};

export default Projects;
