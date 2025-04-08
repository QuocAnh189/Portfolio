import { motion } from 'framer-motion'
import { TiArrowForward } from 'react-icons/ti'

const Framework = () => {
  const skills = [
    'Use Gin-gonic to create RESTful APIs using Gin for high-performance and minimalist web service architecture.',
    'Use React to developed component-based UIs for responsive and interactive web applications.',
    'Use Next.js to built server-side rendered (SSR) and statically generated web apps using Next.js for better SEO and performance.',
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="w-full">
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        <span className="text-textGreen tracking-wide">@ Framework</span>
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

export default Framework
