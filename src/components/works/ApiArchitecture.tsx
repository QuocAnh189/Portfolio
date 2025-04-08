import { motion } from 'framer-motion'
import { TiArrowForward } from 'react-icons/ti'

const ApiArchitecture = () => {
  const skills = [
    'Built RESTful APIs with clear endpoints, consistent status codes, and stateless communication',
    'Implemented efficient binary-based RPC protocols for internal service-to-service communication',
    'Developed real-time features like live updates and chat using WebSocket connections',
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="w-full">
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        <span className="text-textGreen tracking-wide">@ Api Architecture</span>
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

export default ApiArchitecture
