import { useState } from "react";

//components
import ArchiveCard from "./ArchiveCard";

//animation
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="max-w-contentContainer mx-auto px-4 p-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Project
        </h2>
        <p className="text-sm font font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="Food Order"
          description="An online food ordering system enabling users to easily select and order from pizza restaurants."
          listItem={["NextJs", "Taildwind CSS", "Redux Toolkit"]}
          link="https://github.com/QuocAnh189/FoodOrder_FE"
        />
        <ArchiveCard
          title="Quizzes_Mobile"
          description="A mobile application allowing creation and participation in diverse and engaging quiz games."
          listItem={["ReactNative", "MongoDB", "Redux Toolkit"]}
          link="https://github.com/QuocAnh189/EzQuiz-mobile"
        />
        <ArchiveCard
          title="SOLID Basic"
          description="A project for learning fundamental SOLID principles in software development to create maintainable and scalable code"
          listItem={["Java"]}
          link="https://github.com/QuocAnh189/Solid_Basic"
        />
        <ArchiveCard
          title="Discord"
          description="A flexible and powerful community chat and communication platform serving needs from individuals to businesses"
          listItem={["NextJs", "Taildwind CSS", "Socket-IO"]}
          link="https://github.com/QuocAnh189/Discord_Clone"
        />
        <ArchiveCard
          title="Blog"
          description="A versatile and user-friendly blogging platform for sharing information and experiences."
          listItem={["NextJs", "Taildwind CSS", "Redux-Toolkit"]}
          link="https://github.com/QuocAnh189/Blog"
        />
        <ArchiveCard
          title="Even Hub"
          description="A flexible and efficient event management and scheduling system for organizations of all sizes."
          listItem={["ReactNative", "MongoDB", "Redux-Toolkit"]}
          link="https://github.com/QuocAnh189/EvenHub_Mobile_FE"
        />
        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="SQL"
                description="A project focusing on managing databases and flexible data querying to serve the needs of complex applications and systems."
                listItem={["SQL syntax"]}
                link="https://github.com/QuocAnh189/Learn_SQL"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard
                title="Data Structure Algorithms"
                description="Researching, designing, and implementing data structures and algorithms to solve real-world problems.  "
                listItem={["C++", "OOP"]}
                link="https://github.com/QuocAnh189/Data_Structure_Algorithsm"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ArchiveCard
                title="Search Algorithms"
                description="Optimizing search algorithms to improve performance and accuracy in information retrieval across platforms."
                listItem={["C++", "Search"]}
                link="https://github.com/QuocAnh189/Search_algorithms"
              />
            </motion.div>
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show more
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
