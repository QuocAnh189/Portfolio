//image
import quizzesApp from 'src/assets/images/eventhub.png'
import parkingApp from 'src/assets/images/parking.png'
import discordApp from 'src/assets/images/discord.png'
import ecommerceApp from 'src/assets/images/ecommerce.png'
import portfolioApp from 'src/assets/images/portfolio.png'

//interfaces
import { IProject } from 'src/interfaces/project'

const projects: IProject[] = [
  {
    type: 'Website',
    right: true,
    image: quizzesApp,
    name: 'Event Hub',
    description:
      'EventHub is an online event management and ticketing application that allows users to create, manage, and participate in events with ease and convenience.',
    technologies: ['React', 'Go', 'Gin-gonic', 'Postgres', 'Redux Toolkit', 'Gorm', 'Socket-IO'],
    fe_link: 'https://github.com/QuocAnh189/EventHub',
    be_link: 'https://github.com/QuocAnh189/GoHub',
    demo: 'https://www.youtube.com/embed/DRTfkA4G7qo',
  },

  {
    type: 'Website',
    right: false,
    image: parkingApp,
    name: 'ParkingLot (License-Plate-Detection)',
    description:
      'The system allows users to enter license plate numbers, check-in/check-out times, and display parking availability. Additionally, the application can manage access cards and vehicle entry history.',
    technologies: ['React', 'Go', 'Gin-gonic', 'Postgres', 'Redux Toolkit', 'Docker', 'Nginx', 'Yolo-v5'],
    fe_link: 'https://github.com/QuocAnh189/Parkinglot_Fe',
    be_link: 'https://github.com/QuocAnh189/GoParkingLot',
    demo: 'https://www.youtube.com/embed/kaaOSn1WkrA',
  },

  {
    type: 'Website',
    right: true,
    image: portfolioApp,
    name: 'Portfolio CMS',
    description:
      'This Laravel-based Portfolio CMS provides an intuitive platform to manage and showcase personal or professional projects, making it easy to create and update dynamic portfolios. Implementing Clean Architecture, Repository Pattern, Cache with Redis',
    technologies: ['PHP', 'JQuery', 'Laravel', 'Datatable', 'MySql', 'Docker'],
    fe_link: 'https://github.com/QuocAnh189/Portfolio_CMS',
    be_link: 'https://github.com/QuocAnh189/Portfolio_CMS',
    demo: 'https://www.youtube.com/embed/E1uBb05D1ss',
  },

  {
    type: 'Website',
    right: false,
    image: discordApp,
    name: 'Discord Clone',
    description:
      'This Next.js-based Discord Clone replicates key features of Discord, providing real-time messaging, voice channels, and seamless user interaction with a modern web experience.',
    technologies: ['Next.js', 'Prisma', 'Tailwind', 'Live Kit', 'MongoDB', 'Socket-IO'],
    fe_link: 'https://github.com/QuocAnh189/Discord_Clone',
    be_link: 'https://github.com/QuocAnh189/Discord_Clone',
    demo: 'https://www.youtube.com/embed/RxXEj0dIL1k',
  },

  {
    type: 'Website',
    right: true,
    image: ecommerceApp,
    name: 'Mini Ecommerce - Template for Clean Architecture',
    description: 'E-Commerce mini system via Golang with Clean Architecture',
    technologies: ['React', 'Typescript', 'Go', 'Gin-gonic', 'Tailwind', 'Redux', 'Clean Architecture'],
    fe_link: 'https://github.com/QuocAnh189/OrganicFood_FE',
    demo: 'https://www.youtube.com/embed/v5L2c1o0I7M',
  },
]

export default projects
