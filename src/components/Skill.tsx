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

const title = [
  'Programming',
  'Framework',
  'Database',
  'SoftwareDesign',
  'ApiArchitecture',
  'VersionControl',
  'Cloud',
  'SoftSkill',
]

const Skill = () => {
  const [activeItems, setActiveItems] = useState<any>({ ...defaultActiveItem, Programming: true })

  const handleChangeActiveItem = (name: string) => {
    setActiveItems({ ...defaultActiveItem, [name]: true })
  }

  return (
    <section id="skill" className="max-w-containerXs mx-auto py-10 lgl:py-24 px-4">
      <SectionTitle title="Some skills I have" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-2/5 flex flex-col">
          {title.map((item: string, index: number) => (
            <li
              key={`${item}-${index}`}
              onClick={() => handleChangeActiveItem(item)}
              className={clsx(
                `border-l-2  text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`,
                activeItems[item] === true ? 'border-l-textGreen text-textGreen' : 'border-l-hoverColor',
              )}
            >
              {item}
            </li>
          ))}
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
