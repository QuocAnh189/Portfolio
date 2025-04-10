import { motion } from 'framer-motion'
import { TiArrowForward } from 'react-icons/ti'

const SoftwareDesign = () => {
  const skills = [
    'Applied SOLID principles to ensure maintainable and extensible object-oriented codebases.',
    'Use common design patterns to solve recurring software architecture problems.',
    'Use Clean-Architecture to structure applications into clear layers for separation.',
    'Use DI to decouple components and facilitate easier testing and configuration.',
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="w-full">
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        <span className="text-textGreen tracking-wide">@ Software Design</span>
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

export default SoftwareDesign
