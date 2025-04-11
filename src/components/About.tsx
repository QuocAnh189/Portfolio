import { useState } from 'react'

//next
import Image from 'next/image'

//component
import SectionTitle from './SectionTitle'

//icon
import { AiFillThunderbolt } from 'react-icons/ai'

//image
import kltn from 'src/assets/images/kltn.jpg'

//data
import technologies from 'src/data/technology'
import ModalImage from './modal/ModalImage'

const About = () => {
  const [modalImage, setModalImage] = useState<boolean>(false)

  return (
    <section id="about" className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8">
      <SectionTitle titleNo="01" title="About Me" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4 text-justify">
          <p>
            Hello! My name is <span className="text-textGreen">Tran Phuoc Anh Quoc</span> and I enjoy creating things
            that live on the internet. My interest in software engineering started back in 2021 when I passed into
            University Of Information Technologies (UIT).
          </p>
          <p>
            Aspiring and enthusiastic software engineer developer studies Software Engineering, specialization in
            Software Development. Developed web and software applications not only as a front-end engineer but also
            back-end engineer.
            <span className="text-textGreen">
              {' '}
              Key skills in Backend and Frontend development - Software Engineering
            </span>
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            {technologies.map((technology: string, index: number) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                {technology}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                width={400}
                height={200}
                onClick={() => setModalImage(!modalImage)}
                data-toggle="modal"
                className="hover:cursor-pointer rounded-lg h-full object-cover"
                src={kltn}
                alt="profileImg"
              />
            </div>
          </div>
          <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300" />
        </div>
      </div>
      {modalImage && <ModalImage onClose={() => setModalImage(!modalImage)} image={kltn} />}
    </section>
  )
}

export default About
