import { motion } from 'framer-motion'
import { TiArrowForward } from 'react-icons/ti'

const Programming = () => {
  const skills = [
    'Developed scalable backend services and APIs with Go, emphasizing concurrency and performance.',
    'Built interactive user interfaces and dynamic web pages using modern JavaScript features.',
    'Utilized TypeScript for type safety and better maintainability in large-scale frontend and backend applications.',
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="w-full">
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        <span className="text-textGreen tracking-wide">@ Programming Language</span>
      </h3>
      <ul className="mt-6 flex flex-col gap-3">
        {skills.map((skill: string, index: number) => (
          <li key={`skill-${index}`} className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default Programming
