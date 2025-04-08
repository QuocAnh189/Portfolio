import { motion } from 'framer-motion'
import { TiArrowForward } from 'react-icons/ti'

const VersionControl = () => {
  const skills = ['Used Git for source control, branching, and collaboration across various platforms.']

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="w-full">
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        <span className="text-textGreen tracking-wide">@ VersionControl</span>
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

export default VersionControl
