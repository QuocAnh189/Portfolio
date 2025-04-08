//interfaces
import { ISubProject } from 'src/interfaces/sub_projects'

const sub_projects: ISubProject[] = [
  {
    title: 'Detect_License_Plate',
    description:
      'This project implements a detection plate-license with yolov5. Additionally, the project includes a simple Flask web application or Grpc.',
    listItem: ['Python', 'Grpc', 'Flask', 'Yolov5'],
    link: 'https://github.com/QuocAnh189/Detect_License_Plate',
  },
  {
    title: 'Sentiment_Analysis',
    description:
      'This project implements a Sentiment Analysis model using a neural network architecture built with Keras.',
    listItem: ['flask', 'tensorflow', 'nlp-machine-learning'],
    link: 'https://github.com/QuocAnh189/Sentiment_Analysis_EventHub',
  },
  {
    title: 'Flask_Go_Grpc',
    description: 'A mini project using GRPC with golang and python (flask)',
    listItem: ['python', 'golang', 'grpc'],
    link: 'https://github.com/QuocAnh189/Flask_Go_Grpc',
  },
  {
    title: 'Demo Ecommerce',
    description:
      'This is a demo project ecommerce with golang. Implement with jwt-authentication and connect mysql database',
    listItem: ['go', 'docker', 'mysql', 'jwt'],
    link: 'https://github.com/QuocAnh189/DemoEcom',
  },
  {
    title: 'Bin Mart',
    description:
      'This project features user-friendly navigation, product listings, shopping cart functionality, and secure checkout.',
    listItem: ['php', 'laravel', 'datatable', 'stripe'],
    link: 'https://github.com/QuocAnh189/BinMart',
  },
  {
    title: 'MessageChat_Reverb',
    description: 'This is a real-time chat application built using Laravel, leveraging WebSockets with Laravel',
    listItem: ['php', 'laravel', 'react', 'web_socket'],
    link: 'https://github.com/QuocAnh189/MessageChat_Reverb',
  },
  {
    title: 'Job_Application',
    description:
      'The JobApplication project in Laravel, aims to manage the recruitment process, including creating, managing, and tracking job applications from candidates.',
    listItem: ['php', 'laravel', 'livewire', 'mysql'],
    link: 'https://github.com/QuocAnh189/Job_Application',
  },
  {
    title: 'Trello Fe',
    description: 'Trello Fe',
    listItem: ['react', 'tailwind', 'dnd-kit', 'socket-io'],
    link: 'https://github.com/QuocAnh189/Trello_FE',
  },
  {
    title: 'Trello Be',
    description: 'Trello Be',
    listItem: ['node.js', 'mongodb', 'jwt', 'socket-io'],
    link: 'https://github.com/QuocAnh189/Trello_BE',
  },
]

export default sub_projects
