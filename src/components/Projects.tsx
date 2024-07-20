//components
import SectionTitle from "./SectionTitle";
import Project from "./projects/Project";

//image
import quizzesApp from "src/assets/images/eventhub.png";
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
          name="Event Hub for Website"
          description="This project use ASP.NET for Back-End and React for Front-End to build event management and ticketing"
          mainfeature={["O-auth", "stripe"]}
          technologies={[
            "React",
            "TypeScript",
            "ASP.NET",
            "MY SQL",
            "Redux Toolkit",
          ]}
          link="https://github.com/QuocAnh189/EventHub_Mobile_FE"
          demo="https://eventhubsolution.vercel.app"
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
          demo="https://footballmanagement.vercel.app"
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
          demo="https://organicfoodfe.vercel.app/contact"
        />
      </div>
    </section>
  );
};

export default Projects;
