import { useState } from 'react'

//components
import Programming from './works/Programming'
import Framework from './works/Framework'
import SectionTitle from './SectionTitle'
import Database from './works/Database'
import SoftwareDesign from './works/SoftwareDesign'
import ApiArchitecture from './works/ApiArchitecture'
import VersionControl from './works/VersionControl'
import Cloud from './works/Cloud'
import SoftSkill from './works/SoftSkill'

//clsx
import clsx from 'clsx'

const defaultActiveItem = {
  Programming: false,
  Framework: false,
  Database: false,
  SoftwareDesign: false,
  ApiArchitecture: false,
  VersionControl: false,
  Cloud: false,
  SoftSkill: false,
}

const Skill = () => {
  const [activeItems, setActiveItems] = useState({ ...defaultActiveItem, Programming: true })

  const handleChangeActiveItem = (name: string) => {
    setActiveItems({ ...defaultActiveItem, [name]: true })
  }

  return (
    <section id="skill" className="max-w-containerXs mx-auto py-10 lgl:py-24 px-4">
      <SectionTitle title="Some skills I have" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-2/5 flex flex-col">
          <li
            onClick={() => handleChangeActiveItem('Programming')}
            className={clsx(
              `border-l-2  text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`,
              activeItems.Programming ? 'border-l-textGreen text-textGreen' : 'border-l-hoverColor',
            )}
          >
            Programming
          </li>
          <li
            onClick={() => handleChangeActiveItem('Framework')}
            className={clsx(
              `border-l-2  text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`,
              activeItems.Framework ? 'border-l-textGreen text-textGreen' : 'border-l-hoverColor',
            )}
          >
            Framework
          </li>
          <li
            onClick={() => handleChangeActiveItem('Database')}
            className={clsx(
              `border-l-2  text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`,
              activeItems.Database ? 'border-l-textGreen text-textGreen' : 'border-l-hoverColor',
            )}
          >
            Databases
          </li>
          <li
            onClick={() => handleChangeActiveItem('SoftwareDesign')}
            className={clsx(
              `border-l-2  text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`,
              activeItems.SoftwareDesign ? 'border-l-textGreen text-textGreen' : 'border-l-hoverColor',
            )}
          >
            Software Design
          </li>
          <li
            onClick={() => handleChangeActiveItem('ApiArchitecture')}
            className={clsx(
              `border-l-2  text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`,
              activeItems.ApiArchitecture ? 'border-l-textGreen text-textGreen' : 'border-l-hoverColor',
            )}
          >
            API Architecture
          </li>
          <li
            onClick={() => handleChangeActiveItem('VersionControl')}
            className={clsx(
              `border-l-2  text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`,
              activeItems.VersionControl ? 'border-l-textGreen text-textGreen' : 'border-l-hoverColor',
            )}
          >
            Version Control
          </li>
          <li
            onClick={() => handleChangeActiveItem('Cloud')}
            className={clsx(
              `border-l-2  text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`,
              activeItems.Cloud ? 'border-l-textGreen text-textGreen' : 'border-l-hoverColor',
            )}
          >
            Cloud
          </li>
          <li
            onClick={() => handleChangeActiveItem('SoftSkill')}
            className={clsx(
              `border-l-2  text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`,
              activeItems.SoftSkill ? 'border-l-textGreen text-textGreen' : 'border-l-hoverColor',
            )}
          >
            Soft Skills
          </li>
        </ul>
        {activeItems.Programming && <Programming />}
        {activeItems.Framework && <Framework />}
        {activeItems.Database && <Database />}
        {activeItems.SoftwareDesign && <SoftwareDesign />}
        {activeItems.ApiArchitecture && <ApiArchitecture />}
        {activeItems.VersionControl && <VersionControl />}
        {activeItems.Cloud && <Cloud />}
        {activeItems.SoftSkill && <SoftSkill />}
      </div>
    </section>
  )
}

export default Skill
