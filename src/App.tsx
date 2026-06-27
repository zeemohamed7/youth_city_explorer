import React, { useState, useMemo } from 'react'
import {
  Search,
  Filter,
  Clock,
  Calendar,
  Users,
  Upload,
  ChevronDown,
  BookmarkPlus,
  BookmarkCheck,
  CalendarDays,
  AlertTriangle,
  ArrowLeft
} from 'lucide-react'

const MOCK_SCRAPED_DATA = [
  {
    id: 1,
    center: 'Science & Technology',
    title: 'Artificial Intelligence Skills - Prompt 2',
    org: '',
    age: '9 to 11 years',
    ageMin: 9,
    ageMax: 11,
    days: 'Sunday and Tuesday',
    dates: '12 July to 4 August',
    time: '9:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the world of artificial intelligence in a simplified and enjoyable way that matches their level of awareness and natural curiosity for learning, by enabling them to use its tools and formulate effective directives, and encouraging them to innovate and discover areas of practical application responsibly and with awareness.'
  },
  {
    id: 2,
    center: 'Science & Technology',
    title: 'Environmental leader 1',
    org: '',
    age: '9 to 11 years',
    ageMin: 9,
    ageMax: 11,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 16 July',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to prepare young environmental leaders capable of carrying the environmental message and spreading awareness and sound practices in their immediate surroundings and the broader community, through fun interactive and applied activities that enhance their leadership spirit and develop their abilities to have a positive impact and protect the environment.'
  },
  {
    id: 3,
    center: 'Science & Technology',
    title: 'Environmental leader 2',
    org: '',
    age: '9 to 11 years',
    ageMin: 9,
    ageMax: 11,
    days: 'Sunday and Tuesday and Thursday',
    dates: '19 July to 23 July',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to prepare young environmental leaders capable of carrying the environmental message and spreading awareness and sound practices in their immediate surroundings and the broader community, through fun interactive and applied activities that enhance their leadership spirit and develop their abilities to have a positive impact and protect the environment.'
  },
  {
    id: 4,
    center: 'Science & Technology',
    title: 'Mission: Lost Satellite Rescue',
    org: 'Bahrain Space Agency',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '13 July to 22 July',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the world of satellites through an interactive simulation using the Tinkercad platform, where they experience the experience of rescuing a satellite by working in teams, and learning about orbit, energy and communication systems.'
  },
  {
    id: 5,
    center: 'Science & Technology',
    title: 'Three.. Two.. One.. Launch: Trip to the Moon',
    org: 'Bahrain Space Agency',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 23 July',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to teach participants the basics of spaceflight through a practical experience that simulates a trip to the moon, including designing and launching rockets, understanding the lunar environment, and building a rover in an educational environment that stimulates innovation and exploration.'
  },
  {
    id: 6,
    center: 'Science & Technology',
    title: 'Future astronauts',
    org: 'Bahrain Space Agency',
    age: '9 to 12 years',
    ageMin: 9,
    ageMax: 12,
    days: 'Sunday and Tuesday and Thursday',
    dates: '9 August to 20 August',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the world of astronauts through an interactive experience that simulates aspects of their real training, through tests, motor and mental challenges, and fun space missions that develop their various skills and abilities.'
  },
  {
    id: 7,
    center: 'Science & Technology',
    title: 'Minecraft Space Exploration 1',
    org: 'Bahrain Space Agency',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '27 July to 5 August',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the basics of space exploration and space missions using Minecraft Space Exploration, through an interactive environment based on building, teamwork, and space challenges.'
  },
  {
    id: 8,
    center: 'Science & Technology',
    title: 'Minecraft Space Exploration 2',
    org: 'Bahrain Space Agency',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '10 August to 19 August',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the basics of space exploration and space missions using Minecraft Space Exploration, through an interactive environment based on building, teamwork, and space challenges.'
  },
  {
    id: 9,
    center: 'Science & Technology',
    title: 'Paper Clay',
    org: '',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '10 August to 19 August',
    time: '9:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the art of making paper clay by recycling paper and turning it into innovative artistic products, while providing them with the opportunity to display and market their work through a mini market where participants display their products in front of visitors, giving them a realistic experience in marketing, communicating with customers, and managing the sales process directly.'
  },
  {
    id: 10,
    center: 'Science & Technology',
    title: "The Stargazer's Starter Guide",
    org: '',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '13 July to 29 July',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the basics of astronomy and sky observation skills, through an interactive experience that helps them learn about celestial bodies and acquire the basic tools to begin their journey in stargazing with confidence and enjoyment.'
  },
  {
    id: 11,
    center: 'Science & Technology',
    title: 'Sustainability champions',
    org: '',
    age: '9 to 12 years',
    ageMin: 9,
    ageMax: 12,
    days: 'Sunday and Tuesday and Thursday',
    dates: '26 July to 6 August',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the concepts of sustainability and environmental preservation through interactive activities and creative challenges that reinforce positive behaviors and encourage them to make a positive impact in their communities.'
  },
  {
    id: 12,
    center: 'Science & Technology',
    title: 'Spark',
    org: '',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '3 August to 19 August',
    time: '9:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to enable participants to design interactive projects that combine physical computing and electronics, employ programming to solve real-life problems and develop prototypes that contribute to addressing challenges related to the sustainable development goals.'
  },
  {
    id: 13,
    center: 'Science & Technology',
    title: 'RoboBuilders: Engineering the Future',
    org: 'Telecommunications Regulatory Authority',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 20 August',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the world of robotics and engineering through a practical experience that allows them to design, build and program real robots using specialized tools, through fun challenges and projects that develop innovation and problem-solving skills.'
  },
  {
    id: 14,
    center: 'Science & Technology',
    title: 'AI for Young Innovators',
    org: 'DOO',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday',
    dates: '12 July to 21 July',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the basics of artificial intelligence and Python programming through an interactive training bootcamp, which allows them to build simple artificial intelligence models, use generative artificial intelligence tools, in addition to developing innovative digital projects that conclude with a competitive hackathon in which they present their outputs.'
  },
  {
    id: 15,
    center: 'Science & Technology',
    title: "Let's plant together",
    org: '',
    age: '9 to 11 years',
    ageMin: 9,
    ageMax: 11,
    days: 'Monday and Wednesday',
    dates: '3 August to 5 August',
    time: '9:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the basics of agriculture and the importance of preserving the environment and natural resources, through enjoyable practical activities that enhance their connection with nature and develop their love of agriculture.'
  },
  {
    id: 16,
    center: 'Science & Technology',
    title: 'Young Aviators: The Airline Team Challenge',
    org: 'Gulf Air',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '26 July to 13 August',
    time: '9:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the world of aviation through interactive experiences that combine flight simulation, air safety procedures, and teamwork, in an enjoyable educational environment that blends the Arabic and English languages, to develop scientific curiosity and enhance communication and cooperation skills.'
  },
  {
    id: 17,
    center: 'Science & Technology',
    title: 'Universe of Bees',
    org: '',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Workshop',
    dates: '16 July',
    time: '9:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The workshop aims to introduce participants to the world of bees and their importance in environmental balance through an interactive experience that reviews the life cycle of bees, their roles within the hive, and their relationship with plants and biodiversity, in addition to learning about local experiences in beekeeping, which enhances their understanding of the role of bees in pollination, food production, and the sustainability of ecosystems.'
  },
  {
    id: 18,
    center: 'Science & Technology',
    title: 'Nature Detectives: Learning to Observe Like a Scientist',
    org: '',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Workshop',
    dates: '19 July',
    time: '9:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description: ''
  },
  {
    id: 19,
    center: 'Science & Technology',
    title: '3D Printing and Digital Manufacturing 2',
    org: 'American University of Bahrain',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday, Tuesday and Wednesday',
    dates: '13 July to 15 July',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the basics of 3D printing and digital manufacturing, by integrating design thinking, practical manufacturing and product development within a technological innovation environment, to enable them to keep pace with modern technologies.'
  },
  {
    id: 20,
    center: 'Science & Technology',
    title: 'Promising Paramedic 1',
    org: 'Paramedic Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '20 July to 29 July',
    time: '9:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to empower emerging generations and youth with basic life-saving skills, by integrating realistic simulation with modern technologies, to transform theoretical knowledge into immediate response in emergency situations and to enhance societal responsibility and leadership during crises.'
  },
  {
    id: 21,
    center: 'Science & Technology',
    title: 'Promising paramedic 2',
    org: 'Paramedic Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '3 August to 12 August',
    time: '9:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to empower emerging generations and youth with basic life-saving skills, by integrating realistic simulation with modern technologies, to transform theoretical knowledge into immediate response in emergency situations and to enhance societal responsibility and leadership during crises.'
  },
  {
    id: 22,
    center: 'Science & Technology',
    title: 'VEX IQ Basics of Robotics, Programming and Artificial Intelligence',
    org: '',
    age: '10 to 14 years',
    ageMin: 10,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '26 July to 6 August',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the basics of robotics, programming, and artificial intelligence through an applied experience using VEX IQ, where participants learn to build robotic models that simulate lunar exploration missions and deal with challenges inspired by real-life space applications.'
  },
  {
    id: 23,
    center: 'Science & Technology',
    title: 'Code Creators: Build, Play, Innovate',
    org: 'Telecommunications Regulatory Authority',
    age: '10 to 14 years',
    ageMin: 10,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '13 July to 19 August',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the basics of programming through an interactive experience based on game design, animation, and simple applications, enabling them to think like programmers and create their own digital projects.'
  },
  {
    id: 24,
    center: 'Science & Technology',
    title: 'Little engineer',
    org: 'Bahrain Society of Engineers',
    age: '11 to 14 years',
    ageMin: 11,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '9 August to 13 August',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to integrate participants into the fields of engineering and technology through three main axes, including: building engineering and sustainable environment, engineering of green materials and solutions, and future energy and smart control, through practical activities and realistic simulations covering the installation of electrical circuits and the design of environmentally friendly solutions.'
  },
  {
    id: 25,
    center: 'Science & Technology',
    title: 'Artificial Intelligence Skills - Prompt 1',
    org: '',
    age: '12 to 14 years',
    ageMin: 12,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '13 July to 5 August',
    time: '9:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the world of artificial intelligence in a simplified and enjoyable way that matches their level of awareness and natural curiosity for learning, by enabling them to use its tools and formulate effective directives, and encouraging them to innovate and discover areas of practical application responsibly and with awareness.'
  },
  {
    id: 26,
    center: 'Science & Technology',
    title:
      'Intelligence Explorers: The journey of future children in the world of artificial intelligence',
    org: '',
    age: '12 to 14 years',
    ageMin: 12,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '26 July to 6 August',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the basics of artificial intelligence through educational games and fun, realistic experiences using visual tools such as Scratch and the Teachable Machine, with the aim of developing their logical thinking skills and creativity at an early age.'
  },
  {
    id: 27,
    center: 'Science & Technology',
    title: 'Our local trees',
    org: '',
    age: '12 to 14 years',
    ageMin: 12,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '10 August to 12 August',
    time: '9:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the indigenous and endemic fruit trees in the Bahraini environment, and to strengthen their connection to the local agricultural identity by learning about their importance and ways to propagate and preserve them.'
  },
  {
    id: 28,
    center: 'Science & Technology',
    title: 'Reboot // Cyber Sandbox',
    org: 'Telecommunications Regulatory Authority',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Every day',
    dates: '16 August to 20 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the basics of cybersecurity through extensive practical training that includes applied laboratories and challenge-based exercises, allowing them to acquire technical skills and experiences that simulate real-world work environments.'
  },
  {
    id: 29,
    center: 'Science & Technology',
    title: 'Surveying and geospatial data engineering',
    org: '',
    age: '15 to 30 years',
    ageMin: 15,
    ageMax: 30,
    days: 'Sunday, Monday, Tuesday and Thursday',
    dates: '12 July to 16 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the basics of surveying engineering and geospatial data through a practical training experience that simulates a real-life work environment, during which they learn about the stages of surveying work, from collecting field data to producing maps and representing data.'
  },
  {
    id: 30,
    center: 'Science & Technology',
    title: 'The Orbit Pitch',
    org: 'Bahrain Space Agency',
    age: '15 to 18 years',
    ageMin: 15,
    ageMax: 18,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 23 July',
    time: '4:00 PM to 6:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to emulate the experience of space startups by enabling participants to design an innovative satellite to solve a real problem, from generating the idea to presenting the project to a jury in a professional manner.'
  },
  {
    id: 31,
    center: 'Science & Technology',
    title: 'Earth Observation Lab: Transforming Satellite Data to Decisions',
    org: 'Bahrain Space Agency',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Monday and Wednesday',
    dates: '13 July to 29 July',
    time: '3:30 PM to 5:30 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the concept of Earth observation and its role in extracting geospatial information that supports national decision-making, through learning about remote sensing techniques, satellite images, geographic information systems, and data analysis.'
  },
  {
    id: 32,
    center: 'Science & Technology',
    title: 'Develop and publish 3D games',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 20 August',
    time: '5:30 PM to 8:30 PM',
    timeCategory: 'Evening',
    description:
      'The program aims to immerse participants in an interactive studio environment that simulates the life cycle of professional game development, where they collaborate to complete a 3D game project and publish it on a global platform, transforming them from mere players into publishing developers.'
  },
  {
    id: 33,
    center: 'Science & Technology',
    title: 'Build Your 3D Printer',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Sunday and Tuesday and Thursday',
    dates: '26 July to 6 August',
    time: '4:00 PM to 8:30 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to enable participants to design and build their own 3D printer, by learning about the basics of design, digital manufacturing, and the practical application of assembly and programming processes. The program contributes to developing engineering thinking and innovation by transforming ideas into tangible models and products.'
  },
  {
    id: 34,
    center: 'Science & Technology',
    title: 'Professional course for learning artificial intelligence',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Sunday and Tuesday and Thursday',
    dates: '26 July to 6 August',
    time: '4:00 PM to 7:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to provide participants with basic knowledge and skills in the field of artificial intelligence and its practical applications, by learning about the concepts of machine learning and generative artificial intelligence and using modern tools to develop realistic solutions and projects that serve various fields.'
  },
  {
    id: 35,
    center: 'Science & Technology',
    title: 'Aircraft Engineer Challenge 1',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Monday and Wednesday',
    dates: '13 July to 22 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the basics of aeronautical engineering through practical and competitive challenges within a training environment that simulates professional reality, where participants work in teams under the supervision of specialists from the BAS Aeronautical Engineering Training Center to implement applied activities that contribute to developing engineering and practical skills and enhancing teamwork.'
  },
  {
    id: 36,
    center: 'Science & Technology',
    title: 'Aircraft Engineer Challange 2',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Monday and Wednesday',
    dates: '27 July to 5 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the basics of aeronautical engineering through practical and competitive challenges within a training environment that simulates professional reality, where participants work in teams under the supervision of specialists from the BAS Aeronautical Engineering Training Center to implement applied activities that contribute to developing engineering and practical skills and enhancing teamwork.'
  },
  {
    id: 37,
    center: 'Science & Technology',
    title: 'Cyber Shabab',
    org: 'National Center for Cyber ​​Security',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Monday and Wednesday',
    dates: '3 August to 5 August',
    time: '4:00 PM to 7:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to develop the capabilities of participants in the field of cybersecurity through interactive training workshops that combine theoretical knowledge and practical application, which contributes to enhancing digital awareness, understanding cyber threats, and acquiring basic skills to protect systems and data.'
  },
  {
    id: 38,
    center: 'Science & Technology',
    title: 'Cyber Security Career Guidance 1',
    org: 'National Center for Cyber ​​Security',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Workshop',
    dates: '3 August',
    time: '6:00 PM to 7:00 PM',
    timeCategory: 'Evening',
    description:
      'The workshop aims to introduce participants to career paths in the field of cybersecurity through interactive content and guidance sessions that highlight the different specializations, required skills, professional certificates, and educational paths, helping participants explore professional opportunities appropriate to their interests and abilities.'
  },
  {
    id: 39,
    center: 'Science & Technology',
    title: 'Cyber Security Career Guidance 2',
    org: 'National Center for Cyber ​​Security',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Workshop',
    dates: '5 August',
    time: '6:00 PM to 7:00 PM',
    timeCategory: 'Evening',
    description:
      'The workshop aims to introduce participants to career paths in the field of cybersecurity through interactive content and guidance sessions that highlight the different specializations, required skills, professional certificates, and educational paths, helping participants explore professional opportunities appropriate to their interests and abilities.'
  },
  {
    id: 40,
    center: 'Science & Technology',
    title: 'Miniature garden design',
    org: 'National initiative for agricultural sector development',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Monday and Wednesday',
    dates: '3 August to 12 August',
    time: '4:00 PM to 6:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to develop the creativity and design skills of the participants through a practical experience that combines art and nature, where participants learn about the basics of designing and landscaping miniature gardens using plants and various cosmetic elements, while providing the opportunity to apply their innovative ideas and highlight their own methods of design.'
  },
  {
    id: 41,
    center: 'Science & Technology',
    title: 'Radiation fingerprint',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Sunday and Tuesday and Thursday',
    dates: '9 August to 13 August',
    time: '5:00 PM to 8:00 PM',
    timeCategory: 'Evening',
    description:
      'The program aims to introduce participants to the concept of radiation, its types, sources and uses through interactive methods that combine simplified explanation and applied activities, while highlighting the principles of safety and radiation protection and linking scientific concepts to daily life situations.'
  },
  {
    id: 42,
    center: 'Science & Technology',
    title: 'Conscious generation',
    org: '',
    age: '15 to 25 years',
    ageMin: 15,
    ageMax: 25,
    days: 'Sunday and Tuesday and Thursday',
    dates: '16 August to 20 August',
    time: '4:00 PM to 6:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to empower participants by raising their awareness of emergency situations, promoting digital health culture, and combating misleading information, in addition to developing their leadership skills and sense of social responsibility in an interactive manner.'
  },
  {
    id: 43,
    center: 'Science & Technology',
    title: 'Game Design Lab',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Monday and Wednesday',
    dates: '20 July to 29 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to enable participants to design and build their own board and physical games, by integrating game design thinking with basic electronics and digital manufacturing tools such as vinyl cutting, to transform their ideas into playable interactive models and test them with others.'
  },
  {
    id: 44,
    center: 'Science & Technology',
    title: 'Architecture 101',
    org: 'Royal University for Girls',
    age: '15 to 18 years',
    ageMin: 15,
    ageMax: 18,
    days: 'Monday and Wednesday',
    dates: '10 August to 19 August',
    time: '6:00 PM to 8:00 PM',
    timeCategory: 'Evening',
    description:
      'The program aims to introduce participants to the basics of architecture through a series of theoretical and practical workshops, to enable them to explore their technical and engineering skills and understand architecture more deeply, in cooperation with the Royal University for Girls.'
  },
  {
    id: 45,
    center: 'Science & Technology',
    title: 'Aviation Career Foundations & MultiCrew Ops',
    org: 'Gulf Air',
    age: '15 to 20 years',
    ageMin: 15,
    ageMax: 20,
    days: 'Monday and Wednesday',
    dates: '3 August to 19 August',
    time: '6:30 PM to 8:30 PM',
    timeCategory: 'Evening',
    description:
      'The program aims to introduce participants to the basics of commercial aviation operations, by focusing on professional technical flows, structural communications adopted in the aviation sector, and regulatory frameworks, to prepare participants and realistic training environments for their future career paths.'
  },
  {
    id: 46,
    center: 'Science & Technology',
    title: 'From Counter to Take-off 1',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Monday and Wednesday',
    dates: '13 July to 15 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the mechanisms of simulating traveler registration office procedures, handling luggage, verifying travel documents and security safety, in addition to the basics of loading and unloading aircraft and controlling weights and loads, through educational environments and interactive spaces that provide realistic simulation experiences.'
  },
  {
    id: 47,
    center: 'Science & Technology',
    title: 'From Counter to Take-off 3',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Monday and Wednesday',
    dates: '27 July to 29 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the mechanisms of simulating traveler registration office procedures, handling luggage, verifying travel documents and security safety, in addition to the basics of loading and unloading aircraft and controlling weights and loads, through educational environments and interactive spaces that provide realistic simulation experiences.'
  },
  {
    id: 48,
    center: 'Science & Technology',
    title: 'From Counter to Take-off 2',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Monday and Wednesday',
    dates: '20 July to 22 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the mechanisms of simulating traveler registration office procedures, handling luggage, verifying travel documents and security safety, in addition to the basics of loading and unloading aircraft and controlling weights and loads, through educational environments and interactive spaces that provide realistic simulation experiences.'
  },
  {
    id: 49,
    center: 'Science & Technology',
    title: 'From Counter to Take-off 4',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Monday and Wednesday',
    dates: '3 August to 5 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the mechanisms of simulating traveler registration office procedures, handling luggage, verifying travel documents and security safety, in addition to the basics of loading and unloading aircraft and controlling weights and loads, through educational environments and interactive spaces that provide realistic simulation experiences.'
  },
  {
    id: 50,
    center: 'Science & Technology',
    title: 'AI and Cybersecurity in Football: The Future of the Game',
    org: 'British University',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Workshop',
    dates: '15 July',
    time: '4:00 PM to 6:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The workshop aims to integrate participants into the world of computer science from the gate of football and the atmosphere of the World Cup, by exploring smart data-based systems such as VAR technology and wearable sensors while dissecting cyber threats and ransom attacks facing sports entities through studying realistic cases and applied challenges.'
  },
  {
    id: 51,
    center: 'Science & Technology',
    title: 'Prompt Like a Pro: Unlock the Power of Generative AI',
    org: 'Nasser Scientific and Technical Center',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Sunday and Tuesday and Thursday',
    dates: '16 August to 20 August',
    time: '4:00 PM to 7:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the basics and features of generative artificial intelligence and large language models (LLMs), with an emphasis on advanced command engineering techniques. Participants discover how to effectively work with tools such as ChatGPT, Gemini, and Claude to increase productivity, and build intelligent assistants customized to serve their academic and professional goals.'
  },
  {
    id: 52,
    center: 'Science & Technology',
    title: 'Nature Positive Futures: Building a career for people and planet',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Workshop',
    dates: '15 July',
    time: '4:00 PM to 7:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The workshop aims to introduce participants to the various professional opportunities in the environmental sector, by reviewing the academic paths, skills and experiences necessary to work in the environmental fields, which will help them explore their interests and develop a vision for their professional future in this sector.'
  },
  {
    id: 53,
    center: 'Science & Technology',
    title: 'Universe of Bees',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Workshop',
    dates: '16 July',
    time: '4:00 PM to 7:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the world of bees and their importance in environmental balance through an interactive experience that reviews the life cycle of bees, their roles within the hive, and their relationship with plants and biodiversity, in addition to learning about local experiences in beekeeping, which enhances their understanding of the role of bees in pollination, food production, and the sustainability of ecosystems.'
  },
  {
    id: 54,
    center: 'Science & Technology',
    title: 'Nature Detectives: Learning to Observe like a Scientist',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Workshop',
    dates: '19 July',
    time: '4:00 PM to 7:00 PM',
    timeCategory: 'Afternoon',
    description: ''
  },
  {
    id: 55,
    center: 'Science & Technology',
    title: '3D Printing and Digital Manufacturing 1',
    org: 'American University of Bahrain',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Monday, Tuesday and Wednesday',
    dates: '13 July to 15 July',
    time: '3:30 PM to 6:30 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the basics of 3D printing and digital manufacturing, by integrating design thinking, practical manufacturing and product development within a technological innovation environment, to enable them to keep pace with modern technologies.'
  },
  {
    id: 56,
    center: 'Science & Technology',
    title: 'Promising paramedic',
    org: 'Paramedic Academy',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 20 August',
    time: '3:30 PM to 5:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to empower young participants and emerging generations with basic life-saving skills, by integrating realistic simulation with modern technologies, to transform theoretical knowledge into immediate and effective response in emergency situations.'
  },
  {
    id: 57,
    center: 'Science & Technology',
    title: 'AstroFarm AI: The ISS Space Agriculture Program',
    org: 'Bahrain Space Agency',
    age: '18 to 25 years',
    ageMin: 18,
    ageMax: 25,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 23 July',
    time: '6:30 PM to 8:30 PM',
    timeCategory: 'Evening',
    description:
      'The program aims to enable participants to develop a smart model to simulate an agricultural reserve on the International Space Station, using artificial intelligence and data analysis to control the growth of plants and continuously monitor their condition.'
  },
  {
    id: 58,
    center: 'Science & Technology',
    title: 'Materials Beyond Earth',
    org: 'Bahrain Space Agency',
    age: '18 to 25 years',
    ageMin: 18,
    ageMax: 25,
    days: 'Monday and Wednesday',
    dates: '13 July to 29 July',
    time: '6:00 PM to 8:30 PM',
    timeCategory: 'Evening',
    description:
      'The program aims to introduce participants to the importance of selecting materials in the space sector due to their exposure to harsh conditions, and focuses on understanding the mechanism of selecting appropriate materials through theoretical knowledge and applied experiments, which enhances their engineering thinking.'
  },
  {
    id: 59,
    center: 'Science & Technology',
    title: 'CubeSat Systems Engineering: The 1U Electrical Challenge',
    org: 'Bahrain Space Agency',
    age: '18 to 24 years',
    ageMin: 18,
    ageMax: 24,
    days: 'Sunday and Tuesday and Thursday',
    dates: '26 July to 30 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to provide participants with a practical understanding of electrical systems in cubesats, with an emphasis on the operation and processing unit (OBC), the power system (EPS), and the direction and control system (ADCS), through practical and software applications that enhance their engineering expertise.'
  },
  {
    id: 60,
    center: 'Science & Technology',
    title: 'SEEP - Space Enabled Entrepreneurship Program',
    org: 'Bahrain Space Agency',
    age: '18 to 30 years',
    ageMin: 18,
    ageMax: 30,
    days: 'Monday, Tuesday and Wednesday',
    dates: '16 August to 19 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to provide an applied experience in entrepreneurship in which participants live the journey of establishing a start-up company that uses space technologies to solve realistic challenges and turn them into profitable opportunities, which enhances innovative thinking and decision-making ability.'
  },
  {
    id: 61,
    center: 'Science & Technology',
    title: 'Artificial Intelligence Scientific Research Camp',
    org: '',
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Every day',
    dates: '19 July to 23 July',
    time: '4:00 PM to 7:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to enable participants to acquire scientific research skills using artificial intelligence tools at various stages of the research process, starting from idea generation and data analysis to academic writing and scientific publishing. It also contributes to developing critical thinking and innovation skills, which enhances the participants’ ability to produce high-quality scientific research.'
  },
  {
    id: 62,
    center: 'Science & Technology',
    title: 'Intellectual Property Clinic',
    org: '',
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 16 July',
    time: '4:00 PM to 7:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to enhance participants’ awareness of the importance of intellectual property and protecting innovations, through awareness workshops and specialized advisory sessions that provide practical guidance on mechanisms for protecting ideas and registering intellectual rights, thus supporting participants in transforming their innovations into sustainable legal assets.'
  },
  {
    id: 63,
    center: 'Science & Technology',
    title:
      'How do we design friendly environments for people with disabilities?',
    org: '',
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Monday and Wednesday',
    dates: '10 August to 19 August',
    time: '5:00 PM to 8:00 PM',
    timeCategory: 'Evening',
    description:
      'The program aims to raise participants’ awareness of the environmental challenges faced by people with disabilities and the importance of inclusive access to provide them with an independent life, through practical exercises and experiments that showcase applied solutions for designing accessible environments for all.'
  },
  {
    id: 64,
    center: 'Science & Technology',
    title: 'Introductory Applied IoT Workshop Based on Huawei HCIA-IoT',
    org: 'Huawei',
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Monday and Wednesday',
    dates: '13 July to 29 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the basics of the Internet of Things (IoT) as a network to connect people and machines via sensors and applications, by transforming the (Huawei HCIA-IoT) path into a simplified, youth-oriented interactive experience, focusing on smart city applications suitable for the society of the Kingdom of Bahrain.'
  },
  {
    id: 65,
    center: 'Science & Technology',
    title: 'Genome Ambassadors',
    org: 'National Genome Center',
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Every day',
    dates: '9 August to 13 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to simplify the concepts of genomics and genetics for participants and link them to scientific research, health and daily life, while empowering and training them to consciously transfer this knowledge to others to be “genomic ambassadors” in society.'
  },
  {
    id: 66,
    center: 'Science & Technology',
    title: 'Industrial Innovation Laboratory',
    org: 'United Nations Industrial Development Organization (UNIDO)',
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Sunday and Tuesday and Thursday',
    dates: '19 July to 13 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program, designed as a mini-industrial incubator, aims to provide participants with the technical and engineering skills to transform innovative ideas into prototypes and marketable products, by integrating them into the areas of the Fourth Industrial Revolution and building a culture of local manufacturing to prepare a generation that will lead the economic future of the Kingdom of Bahrain.'
  },
  {
    id: 67,
    center: 'Science & Technology',
    title: 'Discover the world of cars',
    org: 'Al Zayani Investments Company',
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Sunday and Tuesday and Thursday',
    dates: '19 July to 30 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to enhance the practical skills of participants through an innovative educational experience to learn about the world of cars from various technical and practical aspects, which contributes to developing their skills and understanding of this sector and discovering professional opportunities related to it.'
  },
  {
    id: 68,
    center: 'Science & Technology',
    title: 'Discover the world of cars +',
    org: 'Al Zayani Investments Company',
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Monday and Wednesday',
    dates: '3 August to 12 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to enhance the practical skills of participants by providing an innovative educational experience for Bahraini youth to learn about the world of cars from various technical and applied aspects, by providing the opportunity to engage in practical experience that includes car repair, diagnosing faults, and learning about the basics of programming vehicle systems, which contributes to developing their knowledge and skills and exploring professional opportunities related to this sector.'
  },
  {
    id: 69,
    center: 'Leadership & Entrepreneurship',
    title: 'In Bahraini 1',
    org: 'House of Oud Authority - Al Baraha Market',
    age: '7 to 12 years',
    ageMin: 7,
    ageMax: 12,
    days: 'Monday and Wednesday',
    dates: '13 July to 3 August',
    time: '5:00 PM to 6:30 PM',
    timeCategory: 'Evening',
    description:
      'The “Bahraini” program is a national educational program that aims to consolidate the Bahraini identity through interaction with the Bahraini dialect, customs, traditions, and popular heritage in a modern and interactive educational manner.'
  },
  {
    id: 70,
    center: 'Leadership & Entrepreneurship',
    title: 'In Bahraini 2',
    org: 'House of Oud Authority - Al Baraha Market',
    age: '7 to 12 years',
    ageMin: 7,
    ageMax: 12,
    days: 'Monday and Wednesday',
    dates: '10 August to 26 August',
    time: '5:00 PM to 6:30 PM',
    timeCategory: 'Evening',
    description:
      'The “Bahraini” program is a national educational program that aims to consolidate the Bahraini identity through interaction with the Bahraini dialect, customs, traditions, and popular heritage in a modern and interactive educational manner.'
  },
  {
    id: 71,
    center: 'Leadership & Entrepreneurship',
    title: 'Bahrain Gate',
    org: '',
    age: '9 to 11 years',
    ageMin: 9,
    ageMax: 11,
    days: 'Sunday and Tuesday and Thursday',
    dates: '16 August to 20 August',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the Bahraini identity by exploring customs and traditions, folk arts, and Freej life, through creative activities and interactive experiences that enhance belonging, pride in the homeland, and preservation of cultural heritage.'
  },
  {
    id: 72,
    center: 'Leadership & Entrepreneurship',
    title: 'What is money? Experience of banks and the central bank 1',
    org: 'Central Bank of Bahrain',
    age: '9 to 11 years',
    ageMin: 9,
    ageMax: 11,
    days: 'Workshop',
    dates: '20 July',
    time: '9:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The workshop aims to introduce participants to the concepts of money, banks, payment systems, and the role of the central bank through simplified interactive activities. Participants also learn about the basics of money management, saving and spending, in addition to exploring modern financial technologies such as digital payments and payment wallets.'
  },
  {
    id: 73,
    center: 'Leadership & Entrepreneurship',
    title: 'The Dana of Diplomacy',
    org: 'Ministry of Foreign Affairs - Mohammed bin Mubarak Academy for Diplomatic Studies',
    age: '9 to 11 years',
    ageMin: 9,
    ageMax: 11,
    days: 'Every day',
    dates: '2 August to 6 August',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'An interactive program for children, inspired by the book “Dana of Diplomacy,” and takes participants on an interesting journey to learn about the world of diplomacy, and the role of the Ministry of Foreign Affairs and embassies in building relations between countries and promoting peace and cooperation among peoples.'
  },
  {
    id: 74,
    center: 'Leadership & Entrepreneurship',
    title: 'From idea to completion',
    org: 'INJAZ Bahrain Foundation',
    age: '9 to 11 years',
    ageMin: 9,
    ageMax: 11,
    days: 'Sunday and Tuesday and Thursday',
    dates: '2 August to 6 August',
    time: '9:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the basics of creative thinking and entrepreneurship through interactive activities and practical challenges, which help them generate ideas, transform them into simple projects, and develop the spirit of initiative, teamwork, and self-confidence.'
  },
  {
    id: 75,
    center: 'Leadership & Entrepreneurship',
    title: 'A world beyond',
    org: '',
    age: '9 to 11 years',
    ageMin: 9,
    ageMax: 11,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 23 July',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The Ofoq team offers a program that aims to introduce participants to positive values ​​and personal skills through an interactive exploratory trip that combines activities, challenges, and educational games, which contributes to enhancing positive thinking and developing communication and teamwork skills.'
  },
  {
    id: 76,
    center: 'Leadership & Entrepreneurship',
    title: 'Small money city',
    org: '',
    age: '9 to 11 years',
    ageMin: 9,
    ageMax: 11,
    days: 'Sunday and Tuesday and Thursday',
    dates: '9 August to 20 August',
    time: '9:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the basics of financial culture through interactive activities and practical experiences, which help them understand the value of money, manage expenses, and make responsible financial decisions in a manner appropriate to their ages.'
  },
  {
    id: 77,
    center: 'Leadership & Entrepreneurship',
    title: 'Commander step',
    org: '',
    age: '9 to 11 years',
    ageMin: 9,
    ageMax: 11,
    days: 'Sunday and Tuesday and Thursday',
    dates: '9 August to 20 August',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to enable participants to acquire knowledge and skills related to promising future fields, such as artificial intelligence, sustainable development, and cybersecurity, which contributes to preparing them as youth leaders capable of innovation and active participation in development, and directing their energies towards specific initiatives and projects that support the aspirations of the Kingdom of Bahrain.'
  },
  {
    id: 78,
    center: 'Leadership & Entrepreneurship',
    title: 'Legacy School',
    org: 'Bahrain Heritage Sports Committee',
    age: '9 to 11 years',
    ageMin: 9,
    ageMax: 11,
    days: 'Monday and Wednesday',
    dates: '13 July to 29 July',
    time: '9:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the authentic Bahraini heritage through an interactive experience that combines land and sea skills, cultural etiquette, customs and traditions, which contributes to strengthening their connection to the national identity and consolidating the social values ​​derived from Bahraini heritage.'
  },
  {
    id: 79,
    center: 'Leadership & Entrepreneurship',
    title: 'Electronic games: Playing is fun... but is it safe?',
    org: 'Institute of Judicial and Legal Studies',
    age: '9 to 11 years',
    ageMin: 9,
    ageMax: 11,
    days: 'Workshop',
    dates: '16 July',
    time: '9:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The lecture aims to enhance participants’ awareness of the dangers of electronic games and their behavioral and legal effects, and to familiarize them with their rights and duties while using games and digital platforms. It also highlights the foundations of safe and responsible use of electronic games and the importance of protecting privacy and personal data in the digital environment.'
  },
  {
    id: 80,
    center: 'Leadership & Entrepreneurship',
    title: 'Electronic fraud: One message... and you could lose everything!',
    org: 'Institute of Judicial and Legal Studies',
    age: '9 to 11 years',
    ageMin: 9,
    ageMax: 11,
    days: 'Workshop',
    dates: '3 August',
    time: '9:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The lecture aims to introduce participants to the concept of electronic fraud and its most prominent methods and common forms in the digital environment, and to develop critical thinking skills when dealing with messages, links, and electronic content. It also highlights the importance of verifying sources, adopting safe digital practices, and reporting fraud attempts, which contributes to enhancing awareness and protecting the digital community.'
  },
  {
    id: 81,
    center: 'Leadership & Entrepreneurship',
    title:
      'Electronic blackmail: If someone threatens me online, what should I do?',
    org: 'Institute of Judicial and Legal Studies',
    age: '9 to 11 years',
    ageMin: 9,
    ageMax: 11,
    days: 'Workshop',
    dates: '12 August',
    time: '9:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The lecture aims to make participants aware of the concept of electronic blackmail and its various forms in the digital environment, and to introduce them to the correct actions when facing threats or blackmail attempts via the Internet. The lecture also enhances legal awareness and encourages seeking assistance from the competent authorities, which contributes to protecting individuals and enhancing digital security.'
  },
  {
    id: 82,
    center: 'Leadership & Entrepreneurship',
    title: 'Watan Junior imprint',
    org: '',
    age: '12 to 14 years',
    ageMin: 12,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '10 August to 19 August',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the basics of volunteer work and organizing events, through a practical experience that allows them to plan and implement community initiatives, in a way that enhances the spirit of responsibility, teamwork, and belonging to the homeland.'
  },
  {
    id: 83,
    center: 'Leadership & Entrepreneurship',
    title: 'Emotional intelligence',
    org: '',
    age: '12 to 14 years',
    ageMin: 12,
    ageMax: 14,
    days: 'Sunday and Tuesday',
    dates: '9 August to 11 August',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the concept of emotional intelligence and its importance in daily life, through interactive activities that help them understand their feelings, communicate positively with others, and manage different situations with confidence and awareness.'
  },
  {
    id: 84,
    center: 'Leadership & Entrepreneurship',
    title: 'Leap to Change',
    org: '',
    age: '12 to 14 years',
    ageMin: 12,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 20 August',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to leadership and life skills, and to enhance the values ​​of gratitude and giving, through practical activities and interactive experiences that help them build character, serve society, and make a positive impact.'
  },
  {
    id: 85,
    center: 'Leadership & Entrepreneurship',
    title: 'What is money? The experience of banks and the central bank 2',
    org: 'Central Bank of Bahrain',
    age: '12 to 14 years',
    ageMin: 12,
    ageMax: 14,
    days: 'Workshop',
    dates: '28 July',
    time: '9:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The workshop aims to introduce participants to the concepts of money, banks, payment systems, and the role of the central bank through simplified interactive activities. Participants also learn about the basics of money management, saving and spending, in addition to exploring modern financial technologies such as digital payments and payment wallets.'
  },
  {
    id: 86,
    center: 'Leadership & Entrepreneurship',
    title: 'Young Toastmasters',
    org: 'INJAZ Bahrain Foundation',
    age: '12 to 14 years',
    ageMin: 12,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '13 July to 22 July',
    time: '9:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the basics of public speaking and leadership, through interactive activities and practical applications that help them organize ideas, speak confidently, and develop verbal and non-verbal communication skills.'
  },
  {
    id: 87,
    center: 'Leadership & Entrepreneurship',
    title: 'The debate generation',
    org: 'Kingdom debates',
    age: '12 to 14 years',
    ageMin: 12,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '19 July to 6 August',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the basics of dialogue and the art of debate, and to develop critical thinking and the ability to build logical arguments and express opinions with confidence, through practical activities and interactive debates that enhance respect for different points of view.'
  },
  {
    id: 88,
    center: 'Leadership & Entrepreneurship',
    title: 'Parliamentarian Junior',
    org: 'Youth Leadership Association',
    age: '12 to 14 years',
    ageMin: 12,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '26 July to 13 August',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' leadership skills through interactive workshops and parliamentary simulation experiences, enabling them to formulate and discuss ideas and submit constructive proposals that serve society and the nation."
  },
  {
    id: 89,
    center: 'Leadership & Entrepreneurship',
    title: 'Fit For Life',
    org: 'Youth Leadership Association - Mabaret Al Kooheji Charity',
    age: '12 to 14 years',
    ageMin: 12,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '3 August to 5 August',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to basic life skills and prepare for the future, through interactive activities that help them understand the requirements of the labor market, make personal and financial decisions, and enhance self-reliance.'
  },
  {
    id: 90,
    center: 'Leadership & Entrepreneurship',
    title: 'Spark Youth',
    org: '',
    age: '12 to 14 years',
    ageMin: 12,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '3 August to 19 August',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the principles of leadership and excellence, through practical challenges and interactive workshops that develop the spirit of initiative, teamwork, and problem solving, and enable them to transform their ideas into distinguished achievements.'
  },
  {
    id: 91,
    center: 'Leadership & Entrepreneurship',
    title: 'Innovation Lab',
    org: 'Kashta Tours',
    age: '12 to 14 years',
    ageMin: 12,
    ageMax: 14,
    days: 'Sunday and Monday and Wednesday and Thursday',
    dates: '26 July to 30 July',
    time: '9:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to enable participants to transform ideas into practical solutions through a set of interactive applications and exercises that develop creative thinking, enhance teamwork skills, and solve challenges.'
  },
  {
    id: 92,
    center: 'Leadership & Entrepreneurship',
    title: 'Security awareness portal',
    org: 'Ministry of Interior',
    age: '12 to 14 years',
    ageMin: 12,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '13 July to 29 July',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'It is an interactive introductory program directed at the emerging group, in which participants discover the world of the Ministry of Interior closely, from safety and traffic to child protection and rights, combating violence, and electronic security. In order to learn about the various professional paths within the Ministry in a way that expands their horizons and supports their planning for their future career, through educational workshops and interactive activities that establish community awareness and enhance national belonging.'
  },
  {
    id: 93,
    center: 'Leadership & Entrepreneurship',
    title: 'Online shopping: a real store or a fake website?',
    org: 'Institute of Judicial and Legal Studies',
    age: '12 to 14 years',
    ageMin: 12,
    ageMax: 14,
    days: 'Workshop',
    dates: '22 July',
    time: '9:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      "The lecture aims to enhance participants' awareness of the basics of safe online shopping, and introduce them to the best practices to protect their data and rights while purchasing online. It also highlights fraudulent methods associated with fake stores and misleading offers, and explains mechanisms for verifying the credibility of websites before completing purchases."
  },
  {
    id: 94,
    center: 'Leadership & Entrepreneurship',
    title: 'Rules and arts of etiquette for girls',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Monday and Wednesday',
    dates: '10 August to 19 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to instill the values ​​of sophisticated behavior and public taste among the participants, by providing them with the principles and arts of social and daily etiquette within the framework of a training experience that combines knowledge and practical application.'
  },
  {
    id: 95,
    center: 'Leadership & Entrepreneurship',
    title: 'Digital assets from a regulatory lens',
    org: 'Central Bank of Bahrain',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Monday',
    dates: '13 July to 26 August',
    time: '4:00 PM to 6:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The workshop aims to introduce participants to the world of digital assets and cryptocurrencies from a regulatory and supervisory perspective, by reviewing the mechanism of operation of these markets, the risks and opportunities associated with them, and the role of regulatory authorities in protecting the consumer and promoting financial stability. Participants will also learn about the experience of the Kingdom of Bahrain in regulating this sector and supporting innovation within a safe environment.'
  },
  {
    id: 96,
    center: 'Leadership & Entrepreneurship',
    title:
      'The banking sector, the central bank, and the future of the financial sector',
    org: 'Central Bank of Bahrain',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Sunday',
    dates: '2 August to 26 August',
    time: '4:00 PM to 6:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The workshop aims to introduce participants to the banking sector, the functions of central banks, payment systems, and modern developments in financial technology, while highlighting its role in supporting the economy and financial stability, and highlighting the Kingdom of Bahrain’s position as a regional financial center.'
  },
  {
    id: 97,
    center: 'Leadership & Entrepreneurship',
    title: 'Finance Park 1',
    org: 'INJAZ Bahrain',
    age: '15 to 18 years',
    ageMin: 15,
    ageMax: 18,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 16 July',
    time: '4:00 PM to 6:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the world of finance and real life through an interactive experience that allows them to make real decisions about their professional future, their studies, and their financial situation in a model that simulates reality.'
  },
  {
    id: 98,
    center: 'Leadership & Entrepreneurship',
    title: 'Finance Park 2',
    org: 'INJAZ Bahrain',
    age: '15 to 18 years',
    ageMin: 15,
    ageMax: 18,
    days: 'Sunday and Tuesday and Thursday',
    dates: '19 July to 23 July',
    time: '4:00 PM to 6:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the world of finance and real life through an interactive experience that allows them to make real decisions about their professional future, their studies, and their financial situation in a model that simulates reality.'
  },
  {
    id: 99,
    center: 'Leadership & Entrepreneurship',
    title: 'Digital Assets & Blockchain',
    org: 'Central Bank of Bahrain',
    age: '16 to 35 years',
    ageMin: 16,
    ageMax: 35,
    days: 'Every day',
    dates: '16 August to 20 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to blockchain technology and digital assets, including cryptocurrencies and tokenized stocks, through a practical training experience that reviews the mechanisms of their use, management and analysis, and their role in shaping the future of the digital economy.'
  },
  {
    id: 100,
    center: 'Leadership & Entrepreneurship',
    title: 'The Company Program',
    org: 'INJAZ Bahrain',
    age: '16 to 25 years',
    ageMin: 16,
    ageMax: 25,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 20 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to entrepreneurship skills through an applied experience for establishing and managing companies, in a way that develops their leadership skills, decision-making, teamwork, and financial awareness.'
  },
  {
    id: 101,
    center: 'Leadership & Entrepreneurship',
    title: 'Land of determination',
    org: 'Youth Leadership Association - KAS',
    age: '16 to 35 years',
    ageMin: 16,
    ageMax: 35,
    days: 'Sunday and Monday',
    dates: '2 August to 3 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to enhance the spirit of cooperation and social responsibility among participants through an interactive simulation of the challenges of daily life, to train them to devise consensus solutions and launch projects with a positive impact.'
  },
  {
    id: 102,
    center: 'Leadership & Entrepreneurship',
    title: 'The journey',
    org: 'Youth Leadership Association - KAS',
    age: '16 to 35 years',
    ageMin: 16,
    ageMax: 35,
    days: 'Tuesday and Wednesday and Thursday',
    dates: '4 August to 6 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      "The program aims to enhance participants' negotiation and collective decision-making skills through an interactive simulation experience that requires reaching consensuses that serve diverse needs and priorities."
  },
  {
    id: 103,
    center: 'Leadership & Entrepreneurship',
    title: 'Marketing Playground: Create It. Brand It. Sell It.',
    org: 'British University',
    age: '17 to 20 years',
    ageMin: 17,
    ageMax: 20,
    days: 'Workshop',
    dates: '7 July',
    time: '4:00 PM to 6:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the dimensions of the dynamic world of marketing through interactive challenges and innovative group activities, enabling them to go through the full experience of building a commercial identity, designing promotional campaigns, and mastering presentation and selling skills.'
  },
  {
    id: 104,
    center: 'Leadership & Entrepreneurship',
    title: 'Law Behind the Headlines',
    org: 'British University',
    age: '17 to 20 years',
    ageMin: 17,
    ageMax: 20,
    days: 'Workshop',
    dates: '23 July',
    time: '4:00 PM to 6:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to explore the mechanisms of legal action through critical analysis of prominent and controversial issues in the fields of popular culture, media, and sports, with a focus on studying the relationship between legal decisions, public perceptions, and the concept of justice in contemporary society.'
  },
  {
    id: 105,
    center: 'Leadership & Entrepreneurship',
    title: 'Debate leaders',
    org: 'Kingdom debates',
    age: '18 to 30 years',
    ageMin: 18,
    ageMax: 30,
    days: 'Monday and Wednesday',
    dates: '12 July to 5 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The “Debate Leaders” program is an interactive and competitive training program that aims to develop young people’s skills in the art of debate and dialogue, by training them in critical thinking, building logical arguments, and effective presentation and communication. The program concludes with competitive debate competitions through which the best participants are selected and the Bahraini national debate team is qualified to represent the Kingdom in local and international forums.'
  },
  {
    id: 106,
    center: 'Leadership & Entrepreneurship',
    title: 'Hipo Youth',
    org: '',
    age: '18 to 30 years',
    ageMin: 18,
    ageMax: 30,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 20 August',
    time: '4:30 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'An advanced national youth leadership program that seeks to hone the capabilities of the Bahraini youth, carrying within him a love for the Kingdom of Bahrain, thus achieving ambitions and achievements of which the Kingdom is proud. The program allows participants to meet influential leadership figures with a footprint in various fields, discuss with them a number of topics of interest to young people, and participate in making change through formulating creative and innovative ideas and initiatives that are presented to decision makers.'
  },
  {
    id: 107,
    center: 'Leadership & Entrepreneurship',
    title: 'Administrative dimensions',
    org: 'Institute of Public Administration',
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Workshop',
    dates: '15 July',
    time: '6:00 PM to 8:00 PM',
    timeCategory: 'Evening',
    description:
      'The workshop aims to enhance the critical thinking and dialogue skills of the participants through an interactive simulation of realistic administrative challenges, allowing them to express their convictions and positions in a dynamic manner that consolidates the ability to express opinions and understand the points of view of others.'
  },
  {
    id: 108,
    center: 'Leadership & Entrepreneurship',
    title: 'Challenge Teams - Team in Change',
    org: 'Institute of Public Administration',
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Workshop',
    dates: '23 July',
    time: '6:00 PM to 8:00 PM',
    timeCategory: 'Evening',
    description:
      'The workshop aims to provide participants with the knowledge and skills necessary to manage work teams effectively, by understanding individuals’ personalities, and employing their abilities in planning tasks and organizing responsibilities, ensuring the achievement of strategic goals and raising the level of harmony and productivity.'
  },
  {
    id: 109,
    center: 'Leadership & Entrepreneurship',
    title: 'Emotional intelligence',
    org: 'Institute of Public Administration',
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Workshop',
    dates: '26 July',
    time: '6:00 PM to 8:00 PM',
    timeCategory: 'Evening',
    description:
      'The workshop aims to provide participants with the basic concepts of emotional intelligence, train them on self-management skills and control emotions at various age levels, and provide them with the necessary tools to deal professionally with different personality types and understand their needs.'
  },
  {
    id: 110,
    center: 'Leadership & Entrepreneurship',
    title: 'Launch your business',
    org: 'Ministry of Industry and Trade',
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Workshop',
    dates: '12 July',
    time: '3:30 PM to 8:30 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to enable participants to understand the integrated life cycle of a commercial project, starting from developing the idea and verifying its suitability for the market, all the way to launch, expansion, and sustainability strategies, while reviewing the support mechanisms available to entrepreneurs.'
  },
  {
    id: 111,
    center: 'Leadership & Entrepreneurship',
    title: 'Tuckman Model - Life Cycle of Teams',
    org: '',
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Workshop',
    dates: '30 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The workshop aims to hone the teamwork skills of the participants by applying the “Tuckman Model” in an interactive environment, to enable them to understand the stages of teams’ development, develop communication tools, and manage tasks and decisions efficiently under work pressure.'
  },
  {
    id: 112,
    center: 'Leadership & Entrepreneurship',
    title: 'Do you want to start your project? I start it right',
    org: '',
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Workshop',
    dates: '19 July',
    time: '4:00 PM to 6:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The workshop aims to enable participants to understand the regulatory requirements and requirements associated with practicing commercial activities, through an interactive workshop based on applied activities and realistic simulations, which helps them establish their projects on sound and sustainable foundations.'
  },
  {
    id: 113,
    center: 'Leadership & Entrepreneurship',
    title: 'Leadership Excellence Workshop 1',
    org: 'Auction',
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Workshop',
    dates: '16 July',
    time: '6:00 PM to 8:00 PM',
    timeCategory: 'Evening',
    description:
      'The workshop aims to introduce participants to marketing skills and strategies by understanding data, analyzing it, and using it to make decisions. It also provides them with practical experience that simulates business environments and helps them understand the mechanisms of growth and development.'
  },
  {
    id: 114,
    center: 'Leadership & Entrepreneurship',
    title: 'Leadership Excellence Workshop 2',
    org: 'Auction',
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Workshop',
    dates: '23 July',
    time: '6:00 PM to 8:00 PM',
    timeCategory: 'Evening',
    description:
      'The workshop aims to introduce participants to marketing skills and strategies by understanding data, analyzing it, and using it to make decisions. It also provides them with practical experience that simulates business environments and helps them understand the mechanisms of growth and development.'
  },
  {
    id: 115,
    center: 'Leadership & Entrepreneurship',
    title: 'Diplomatic protocol',
    org: 'Ministry of Foreign Affairs + Mohammed bin Mubarak Academy for Diplomatic Studies',
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Every day',
    dates: '12 July to 23 July',
    time: '6:00 PM to 8:00 PM',
    timeCategory: 'Evening',
    description:
      'The program aims to introduce participants to the basics of diplomatic protocol and international etiquette through interactive activities and realistic simulations inspired by diplomatic work situations. The program focuses on developing official reception skills, event management, professional communication, and dealing with delegations and official figures in accordance with international norms and protocols.'
  },
  {
    id: 116,
    center: 'Leadership & Entrepreneurship',
    title: 'Space of awareness',
    org: 'Youth Leadership Association and Silwan Psychiatric Hospital',
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Monday and Wednesday',
    dates: '13 July to 5 August',
    time: '6:00 PM to 8:00 PM',
    timeCategory: 'Evening',
    description:
      'The program aims to break the social stigma associated with mental health, and establish the concept that talking about it and seeking support is normal, safe, and an integral part of life, while enabling young people to transform this awareness into societal impact.'
  },
  {
    id: 117,
    center: 'Leadership & Entrepreneurship',
    title: 'Dialogue Ambassadors 2',
    org: 'Bahrain Foundation for Dialogue',
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Every day',
    dates: '26 July to 30 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to develop dialogue, communication, and teamwork skills among young people, and enhance their ability to initiate and participate in society by combining knowledge, practical application, interactive exercises, and realistic simulation, to encourage them to design initiatives that serve society and enhance the culture of dialogue and understanding.'
  },
  {
    id: 118,
    center: 'Leadership & Entrepreneurship',
    title:
      'How to achieve your dreams, a professional workshop on the principles of entrepreneurship',
    org: 'Edujeel Learning Tech',
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Every day',
    dates: '9 August to 13 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to empower participants with entrepreneurship skills, by directing them towards formulating their ideas and turning them into successful and sustainable startup projects.'
  },
  {
    id: 119,
    center: 'Leadership & Entrepreneurship',
    title: 'renaissance',
    org: '',
    age: '18 to 25 years',
    ageMin: 18,
    ageMax: 25,
    days: 'Monday and Wednesday',
    dates: '13 July to 29 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to hone participants’ leadership and personal skills and employ artificial intelligence techniques within the framework of an interactive educational experience, to qualify youth competencies capable of keeping pace with the requirements of the smart labor market and confronting contemporary economic and technical developments.'
  },
  {
    id: 120,
    center: 'Leadership & Entrepreneurship',
    title: 'I am a Toastmaster (for people with determination)',
    org: '',
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Monday and Wednesday',
    dates: '13 July to 12 August',
    time: '5:00 PM to 8:00 PM',
    timeCategory: 'Evening',
    description:
      'The program aims to activate the role of people of determination in society and the labor market by providing a comprehensive training experience that takes into account the diversity of their needs, and works to hone their leadership and communication skills to enable them to move from the stage of discovering potential to the stage of initiative and making a positive impact.'
  },
  {
    id: 121,
    center: 'Leadership & Entrepreneurship',
    title: 'Trail',
    org: 'Bahrain Youth Hostels Association',
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Monday and Wednesday',
    dates: '10 August to 19 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to qualify participants and develop their abilities to plan, organize and lead youth trips and programs professionally, in an effort to prepare and qualify a generation of young leaders capable of managing field programs through an experience that combines theoretical knowledge and practical simulation.'
  },
  {
    id: 122,
    center: 'Leadership & Entrepreneurship',
    title: 'Be the Next Employee',
    org: 'INJAZ Bahrain Foundation',
    age: '18 to 25 years',
    ageMin: 18,
    ageMax: 25,
    days: 'Sunday and Tuesday and Thursday',
    dates: '9 August to 13 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to qualify participants to move confidently into the labor market by developing the skills of preparing a professional CV and preparing for personal interviews, while benefiting from the expertise of human resources specialists to understand employment requirements and enhance their professional readiness.'
  },
  {
    id: 123,
    center: 'Leadership & Entrepreneurship',
    title: 'Future exporters',
    org: 'Bahrain exports',
    age: '18 to 30 years',
    ageMin: 18,
    ageMax: 30,
    days: 'Sunday and Tuesday and Thursday',
    dates: '19 July to 23 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to enable participants to develop local products and services capable of competing in regional and global markets, by providing them with the necessary knowledge and skills in brand building, international marketing, and export requirements, through specialized workshops and field experiences that enhance their readiness for expansion in foreign markets.'
  },
  {
    id: 124,
    center: 'Leadership & Entrepreneurship',
    title: 'PwC Tax Consulting Lab',
    org: 'PwC',
    age: '18 to 27 years',
    ageMin: 18,
    ageMax: 27,
    days: 'Sunday and Tuesday and Thursday',
    dates: '2 August to 16 August',
    time: '6:00 PM to 8:00 PM',
    timeCategory: 'Evening',
    description:
      'The program aims to introduce participants to the world of tax consulting through a practical simulation experience that simulates the real work environment, where participants gain applied experience in analyzing clients’ needs, studying realistic cases, and formulating professional recommendations in accordance with the work methodologies followed in the consulting sector.'
  },
  {
    id: 125,
    center: 'Leadership & Entrepreneurship',
    title: 'Innovation Lab',
    org: 'Kashta Tours',
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Sunday and Monday and Wednesday and Thursday',
    dates: '26 July to 30 July',
    time: '4:00 PM to 6:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to enable participants to transform ideas into practical solutions through a set of interactive applications and exercises that develop creative thinking, enhance teamwork skills, and solve challenges.'
  },
  {
    id: 126,
    center: 'Leadership & Entrepreneurship',
    title: 'Events workshop: from idea to implementation',
    org: '',
    age: '18 to 25 years',
    ageMin: 18,
    ageMax: 25,
    days: 'Every day',
    dates: '16 August to 20 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'An interactive practical program that introduces participants to the world of event management and organization through an experience that simulates professional reality. Participants will learn how to transform a creative idea into an integrated event through concept design, operational plan preparation, budget building, marketing, sponsorship management, and visitor experience. At the end of the program, the teams work to develop an integrated event idea and present it to an evaluation committee.'
  },
  {
    id: 127,
    center: 'Leadership & Entrepreneurship',
    title: 'EY Talks',
    org: 'EY',
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Monday',
    dates: '27 July to 27 July',
    time: '5:00 PM to 8:00 PM',
    timeCategory: 'Evening',
    description:
      'The program aims to provide participants with the opportunity to benefit from the expertise of EY specialists through short interactive sessions that showcase problem-solving methods, structured thinking, and effective communication, thus enhancing their understanding of the consulting work environment.'
  },
  {
    id: 128,
    center: 'Leadership & Entrepreneurship',
    title: 'Meeting with an EY consultant',
    org: 'EY',
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Tuesday',
    dates: '28 July to 28 July',
    time: '5:00 PM to 8:00 PM',
    timeCategory: 'Evening',
    description:
      'The program aims to enable participants to benefit from one-on-one mentoring sessions with EY consultants in multiple fields, allowing them to ask questions and receive specialized career guidance that supports their academic and professional careers.'
  },
  {
    id: 129,
    center: 'Leadership & Entrepreneurship',
    title: 'Business Challenge: Professional Case Study with EY',
    org: 'EY',
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Wednesday',
    dates: '29 July to 29 July',
    time: '5:00 PM to 8:00 PM',
    timeCategory: 'Evening',
    description:
      'The program aims to develop participants’ skills in analyzing business problems by working on a realistic case study and applying the strategic thinking and analysis methodologies used at EY to reach practical and convincing solutions.'
  },
  {
    id: 130,
    center: 'Leadership & Entrepreneurship',
    title: 'Dinari - Ninth Edition',
    org: 'Mabarrat Al Kooheji - Youth Leadership Association',
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 30 July',
    time: '6:00 PM to 8:00 PM',
    timeCategory: 'Evening',
    description:
      'The program aims to enhance personal financial awareness among participants, by providing them with the right skills and mechanisms to manage their financial affairs and plan their economic future effectively.'
  },
  {
    id: 131,
    center: 'Leadership & Entrepreneurship',
    title: 'Awareness Factory - Awareness Pro',
    org: '',
    age: '19 to 30 years',
    ageMin: 19,
    ageMax: 30,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 20 August',
    time: '6:00 PM to 8:00 PM',
    timeCategory: 'Evening',
    description:
      'The program aims to enable young people with volunteer interests to create awareness-raising activities and initiatives in the health and educational youth welfare sector, by integrating theoretical education with practical application with a group of specialists in welfare and volunteer work in accordance with standards of sustainability and innovation and the opportunity to attract participants as volunteers in annual welfare projects.'
  },
  {
    id: 132,
    center: 'Leadership & Entrepreneurship',
    title: 'Entrepreneurship with EY',
    org: 'EY',
    age: '19 to 35 years',
    ageMin: 19,
    ageMax: 35,
    days: 'Sunday and Tuesday',
    dates: '19 July to 21 July',
    time: '5:00 PM to 8:00 PM',
    timeCategory: 'Evening',
    description:
      'The program aims to support participants in developing their entrepreneurial ideas and projects by learning about business models, analyzing feasibility, and benefiting from the direct guidance of EY experts, leading to building effective investment offers and presenting them to investors.'
  },
  {
    id: 133,
    center: 'Leadership & Entrepreneurship',
    title: 'Professional development with EY',
    org: 'EY',
    age: '19 to 35 years',
    ageMin: 19,
    ageMax: 35,
    days: 'Wednesday and Thursday and Sunday',
    dates: '22 July to 26 July',
    time: '5:00 PM to 8:00 PM',
    timeCategory: 'Evening',
    description:
      'The program aims to prepare participants to enter the labor market by exploring different career paths, developing job interview skills, and building a professional and personal identity that enhances their career opportunities.'
  },
  {
    id: 134,
    center: 'Leadership & Entrepreneurship',
    title: 'The imprint of a homeland',
    org: '',
    age: '20 to 30 years',
    ageMin: 20,
    ageMax: 30,
    days: 'Monday and Wednesday',
    dates: '10 August to 19 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to provide an integrated experience starting from planning events and initiatives all the way to their implementation and evaluation, with a focus on organization skills, teamwork, resource management, and transforming ideas into realistic projects with impact that serve youth centers.'
  },
  {
    id: 135,
    center: 'Leadership & Entrepreneurship',
    title: 'What did you do when you got emotional!',
    org: '',
    age: '20 to 35 years',
    ageMin: 20,
    ageMax: 35,
    days: 'Workshop',
    dates: '16 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The workshop aims to empower participants with self-management skills and interpret human behavior according to the “Choice Theory” and the “Car” model, to explain how to control emotions by directing thoughts and actions instead of submitting to feelings and having complete control over reactions.'
  },
  {
    id: 136,
    center: 'Leadership & Entrepreneurship',
    title: 'Switch',
    org: '',
    age: '21 to 24 years',
    ageMin: 21,
    ageMax: 24,
    days: 'Sunday and Tuesday and Thursday',
    dates: '26 July to 13 August',
    time: '5:00 PM to 8:00 PM',
    timeCategory: 'Evening',
    description:
      'The program aims to prepare participants for the transition from university life to the work environment, by introducing them to the basic professional skills and behaviors that help them adapt and succeed in various work environments.'
  },
  {
    id: 137,
    center: 'Sports',
    title: 'Football - juniors - boys 1',
    org: 'Winners Football Club',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 30 July',
    time: '9:00 AM to 10:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to hone participants’ football talents by adopting quick and mini-competitive games, to develop basic technical skills and enhance tactical understanding of the game in an enjoyable training environment.'
  },
  {
    id: 138,
    center: 'Sports',
    title: 'Football - juniors - boys 2',
    org: 'Winners Football Club',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '2 August to 20 August',
    time: '9:00 AM to 10:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to hone participants’ football talents by adopting quick and mini-competitive games, to develop basic technical skills and enhance tactical understanding of the game in an enjoyable training environment.'
  },
  {
    id: 139,
    center: 'Sports',
    title: 'Football - juniors - boys 3',
    org: 'Winners Football Club',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '12 July to 30 July',
    time: '9:00 AM to 10:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to hone participants’ football talents by adopting quick and mini-competitive games, to develop basic technical skills and enhance tactical understanding of the game in an enjoyable training environment.'
  },
  {
    id: 140,
    center: 'Sports',
    title: 'Football - juniors - boys 4',
    org: 'Winners Football Club',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '2 August to 20 August',
    time: '9:00 AM to 10:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to hone participants’ football talents by adopting quick and mini-competitive games, to develop basic technical skills and enhance tactical understanding of the game in an enjoyable training environment.'
  },
  {
    id: 141,
    center: 'Sports',
    title: 'Football - juniors - boys 5',
    org: 'Winners Football Club',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 30 July',
    time: '10:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to hone participants’ football talents by adopting quick and mini-competitive games, to develop basic technical skills and enhance tactical understanding of the game in an enjoyable training environment.'
  },
  {
    id: 142,
    center: 'Sports',
    title: 'Football - juniors - boys 6',
    org: 'Winners Football Club',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '2 August to 20 August',
    time: '10:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to hone participants’ football talents by adopting quick and mini-competitive games, to develop basic technical skills and enhance tactical understanding of the game in an enjoyable training environment.'
  },
  {
    id: 143,
    center: 'Sports',
    title: 'Football - juniors - boys 7',
    org: 'Winners Football Club',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '12 July to 30 July',
    time: '10:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to hone participants’ football talents by adopting quick and mini-competitive games, to develop basic technical skills and enhance tactical understanding of the game in an enjoyable training environment.'
  },
  {
    id: 144,
    center: 'Sports',
    title: 'Football - juniors - boys 8',
    org: 'Winners Football Club',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '2 August to 20 August',
    time: '10:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to hone participants’ football talents by adopting quick and mini-competitive games, to develop basic technical skills and enhance tactical understanding of the game in an enjoyable training environment.'
  },
  {
    id: 145,
    center: 'Sports',
    title: 'Football - juniors - boys 9',
    org: 'Winners Football Club',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 30 July',
    time: '11:00 AM to 12:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to hone participants’ football talents by adopting quick and mini-competitive games, to develop basic technical skills and enhance tactical understanding of the game in an enjoyable training environment.'
  },
  {
    id: 146,
    center: 'Sports',
    title: 'Football - Junior - Boys 10',
    org: 'Winners Football Club',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '2 August to 20 August',
    time: '11:00 AM to 12:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to hone participants’ football talents by adopting quick and mini-competitive games, to develop basic technical skills and enhance tactical understanding of the game in an enjoyable training environment.'
  },
  {
    id: 147,
    center: 'Sports',
    title: 'Football - Junior - Boys 11',
    org: 'Winners Football Club',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '12 July to 30 July',
    time: '11:00 AM to 12:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to hone participants’ football talents by adopting quick and mini-competitive games, to develop basic technical skills and enhance tactical understanding of the game in an enjoyable training environment.'
  },
  {
    id: 148,
    center: 'Sports',
    title: 'Football - Junior - Boys 12',
    org: 'Winners Football Club',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '2 August to 20 August',
    time: '11:00 AM to 12:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to hone participants’ football talents by adopting quick and mini-competitive games, to develop basic technical skills and enhance tactical understanding of the game in an enjoyable training environment.'
  },
  {
    id: 149,
    center: 'Sports',
    title: 'Football - Junior - Boys 13',
    org: 'Winners Football Club',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 30 July',
    time: '12:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to hone participants’ football talents by adopting quick and mini-competitive games, to develop basic technical skills and enhance tactical understanding of the game in an enjoyable training environment.'
  },
  {
    id: 150,
    center: 'Sports',
    title: 'Football - Junior - Boys 14',
    org: 'Winners Football Club',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '2 August to 20 August',
    time: '12:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to hone participants’ football talents by adopting quick and mini-competitive games, to develop basic technical skills and enhance tactical understanding of the game in an enjoyable training environment.'
  },
  {
    id: 151,
    center: 'Sports',
    title: 'Football - Junior - Boys 15',
    org: 'Winners Football Club',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '12 July to 30 July',
    time: '12:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to hone participants’ football talents by adopting quick and mini-competitive games, to develop basic technical skills and enhance tactical understanding of the game in an enjoyable training environment.'
  },
  {
    id: 152,
    center: 'Sports',
    title: 'Football - Junior - Boys 16',
    org: 'Winners Football Club',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '2 August to 20 August',
    time: '12:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to hone participants’ football talents by adopting quick and mini-competitive games, to develop basic technical skills and enhance tactical understanding of the game in an enjoyable training environment.'
  },
  {
    id: 153,
    center: 'Sports',
    title: 'Football - juniors - girls 1',
    org: 'Winners Football Club',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 30 July',
    time: '10:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to hone the participants’ football talents by adopting quick and mini-competitive games, to develop basic technical skills and enhance tactical understanding of the game in an enjoyable training environment.'
  },
  {
    id: 154,
    center: 'Sports',
    title: 'Football - juniors - girls 2',
    org: 'Winners Football Club',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '2 August to 20 August',
    time: '10:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to hone the participants’ football talents by adopting quick and mini-competitive games, to develop basic technical skills and enhance tactical understanding of the game in an enjoyable training environment.'
  },
  {
    id: 155,
    center: 'Sports',
    title: 'Football - juniors - girls 3',
    org: 'Winners Football Club',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '12 July to 30 July',
    time: '10:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to hone the participants’ football talents by adopting quick and mini-competitive games, to develop basic technical skills and enhance tactical understanding of the game in an enjoyable training environment.'
  },
  {
    id: 156,
    center: 'Sports',
    title: 'Football - juniors - girls 4',
    org: 'Winners Football Club',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '2 August to 20 August',
    time: '10:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to hone the participants’ football talents by adopting quick and mini-competitive games, to develop basic technical skills and enhance tactical understanding of the game in an enjoyable training environment.'
  },
  {
    id: 157,
    center: 'Sports',
    title: 'Basketball 3X3 - Junior - Boys 1',
    org: 'Foxes Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 30 July',
    time: '9:00 AM to 10:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to hone participants' talents in 3X3 basketball through skills stations and competitive mini-games, to develop basic technical skills and enhance tactical understanding of the game."
  },
  {
    id: 158,
    center: 'Sports',
    title: 'Basketball 3X3 - Junior - Boys 2',
    org: 'Foxes Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '2 August to 20 August',
    time: '9:00 AM to 10:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to hone participants' talents in 3X3 basketball through skills stations and competitive mini-games, to develop basic technical skills and enhance tactical understanding of the game."
  },
  {
    id: 159,
    center: 'Sports',
    title: 'Basketball 3X3 - Junior - Boys 3',
    org: 'Foxes Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '12 July to 30 July',
    time: '9:00 AM to 10:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to hone participants' talents in 3X3 basketball through skills stations and competitive mini-games, to develop basic technical skills and enhance tactical understanding of the game."
  },
  {
    id: 160,
    center: 'Sports',
    title: 'Basketball 3X3 - Junior - Boys 4',
    org: 'Foxes Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '2 August to 20 August',
    time: '9:00 AM to 10:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to hone participants' talents in 3X3 basketball through skills stations and competitive mini-games, to develop basic technical skills and enhance tactical understanding of the game."
  },
  {
    id: 161,
    center: 'Sports',
    title: 'Basketball 3X3 - Junior - Boys 5',
    org: 'Foxes Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 30 July',
    time: '10:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to hone participants' talents in 3X3 basketball through skills stations and competitive mini-games, to develop basic technical skills and enhance tactical understanding of the game."
  },
  {
    id: 162,
    center: 'Sports',
    title: 'Basketball 3X3 - Junior - Boys 6',
    org: 'Foxes Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '2 August to 20 August',
    time: '10:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to hone participants' talents in 3X3 basketball through skills stations and competitive mini-games, to develop basic technical skills and enhance tactical understanding of the game."
  },
  {
    id: 163,
    center: 'Sports',
    title: 'Basketball 3X3 - Junior - Boys 7',
    org: 'Foxes Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '12 July to 30 July',
    time: '10:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to hone participants' talents in 3X3 basketball through skills stations and competitive mini-games, to develop basic technical skills and enhance tactical understanding of the game."
  },
  {
    id: 164,
    center: 'Sports',
    title: 'Basketball 3X3 - Junior - Boys 8',
    org: 'Foxes Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '2 August to 20 August',
    time: '10:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to hone participants' talents in 3X3 basketball through skills stations and competitive mini-games, to develop basic technical skills and enhance tactical understanding of the game."
  },
  {
    id: 165,
    center: 'Sports',
    title: 'Basketball 3X3 - Junior - Boys 9',
    org: 'Foxes Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 30 July',
    time: '11:00 AM to 12:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to hone participants' talents in 3X3 basketball through skills stations and competitive mini-games, to develop basic technical skills and enhance tactical understanding of the game."
  },
  {
    id: 166,
    center: 'Sports',
    title: '3X3 Basketball - Junior - Boys 10',
    org: 'Foxes Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '2 August to 20 August',
    time: '11:00 AM to 12:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to hone participants' talents in 3X3 basketball through skills stations and competitive mini-games, to develop basic technical skills and enhance tactical understanding of the game."
  },
  {
    id: 167,
    center: 'Sports',
    title: '3X3 Basketball - Junior - Boys 11',
    org: 'Foxes Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '12 July to 30 July',
    time: '11:00 AM to 12:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to hone participants' talents in 3X3 basketball through skills stations and competitive mini-games, to develop basic technical skills and enhance tactical understanding of the game."
  },
  {
    id: 168,
    center: 'Sports',
    title: '3X3 Basketball - Junior - Boys 12',
    org: 'Foxes Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '2 August to 20 August',
    time: '11:00 AM to 12:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to hone participants' talents in 3X3 basketball through skills stations and competitive mini-games, to develop basic technical skills and enhance tactical understanding of the game."
  },
  {
    id: 169,
    center: 'Sports',
    title: '3X3 Basketball - Junior - Boys 13',
    org: 'Foxes Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 30 July',
    time: '12:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to hone participants' talents in 3X3 basketball through skills stations and competitive mini-games, to develop basic technical skills and enhance tactical understanding of the game."
  },
  {
    id: 170,
    center: 'Sports',
    title: '3X3 Basketball - Junior - Boys 14',
    org: 'Foxes Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '2 August to 20 August',
    time: '12:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to hone participants' talents in 3X3 basketball through skills stations and competitive mini-games, to develop basic technical skills and enhance tactical understanding of the game."
  },
  {
    id: 171,
    center: 'Sports',
    title: '3X3 Basketball - Junior - Boys 15',
    org: 'Foxes Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '12 July to 30 July',
    time: '12:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to hone participants' talents in 3X3 basketball through skills stations and competitive mini-games, to develop basic technical skills and enhance tactical understanding of the game."
  },
  {
    id: 172,
    center: 'Sports',
    title: '3X3 Basketball - Junior - Boys 16',
    org: 'Foxes Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '2 August to 20 August',
    time: '12:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to hone participants' talents in 3X3 basketball through skills stations and competitive mini-games, to develop basic technical skills and enhance tactical understanding of the game."
  },
  {
    id: 173,
    center: 'Sports',
    title: 'Basketball 3X3 - Junior - Girls 1',
    org: 'Foxes Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 30 July',
    time: '9:00 AM to 10:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to hone the talents of participants in 3X3 basketball through skills stations and mini-competitive games, to develop basic technical skills and enhance tactical understanding of the game.'
  },
  {
    id: 174,
    center: 'Sports',
    title: 'Basketball 3X3 - Junior - Girls 2',
    org: 'Foxes Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '2 August to 20 August',
    time: '9:00 AM to 10:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to hone the talents of participants in 3X3 basketball through skills stations and mini-competitive games, to develop basic technical skills and enhance tactical understanding of the game.'
  },
  {
    id: 175,
    center: 'Sports',
    title: 'Basketball 3X3 - Junior - Girls 3',
    org: 'Foxes Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '12 July to 30 July',
    time: '9:00 AM to 10:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to hone the talents of participants in 3X3 basketball through skills stations and mini-competitive games, to develop basic technical skills and enhance tactical understanding of the game.'
  },
  {
    id: 176,
    center: 'Sports',
    title: 'Basketball 3X3 - Junior - Girls 4',
    org: 'Foxes Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '2 August to 20 August',
    time: '9:00 AM to 10:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to hone the talents of participants in 3X3 basketball through skills stations and mini-competitive games, to develop basic technical skills and enhance tactical understanding of the game.'
  },
  {
    id: 177,
    center: 'Sports',
    title: 'Basketball 3X3 - Junior - Girls 5',
    org: 'Foxes Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 30 July',
    time: '10:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to hone the talents of participants in 3X3 basketball through skills stations and mini-competitive games, to develop basic technical skills and enhance tactical understanding of the game.'
  },
  {
    id: 178,
    center: 'Sports',
    title: 'Basketball 3X3 - Junior - Girls 6',
    org: 'Foxes Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '2 August to 20 August',
    time: '10:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to hone the talents of participants in 3X3 basketball through skills stations and mini-competitive games, to develop basic technical skills and enhance tactical understanding of the game.'
  },
  {
    id: 179,
    center: 'Sports',
    title: 'Basketball 3X3 - Junior - Girls 7',
    org: 'Foxes Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '12 July to 30 July',
    time: '10:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to hone the talents of participants in 3X3 basketball through skills stations and mini-competitive games, to develop basic technical skills and enhance tactical understanding of the game.'
  },
  {
    id: 180,
    center: 'Sports',
    title: 'Basketball 3X3 - Junior - Girls 8',
    org: 'Foxes Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '2 August to 20 August',
    time: '10:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to hone the talents of participants in 3X3 basketball through skills stations and mini-competitive games, to develop basic technical skills and enhance tactical understanding of the game.'
  },
  {
    id: 181,
    center: 'Sports',
    title: 'Tennis - Junior - Boys 1',
    org: 'Moody Tennis Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 30 July',
    time: '9:00 AM to 10:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic skills in tennis through interactive exercises and games suitable for the age group, with a focus on the forehand, backhand, serve, reception, footwork, exchange of shots, and the basics of playing in matches."
  },
  {
    id: 182,
    center: 'Sports',
    title: 'Tennis - Junior - Boys 2',
    org: 'Moody Tennis Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '2 August to 20 August',
    time: '9:00 AM to 10:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic skills in tennis through interactive exercises and games suitable for the age group, with a focus on the forehand, backhand, serve, reception, footwork, exchange of shots, and the basics of playing in matches."
  },
  {
    id: 183,
    center: 'Sports',
    title: 'Tennis - Junior - Boys 3',
    org: 'Moody Tennis Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '12 July to 30 July',
    time: '9:00 AM to 10:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic skills in tennis through interactive exercises and games suitable for the age group, with a focus on the forehand, backhand, serve, reception, footwork, exchange of shots, and the basics of playing in matches."
  },
  {
    id: 184,
    center: 'Sports',
    title: 'Tennis - Junior - Boys 4',
    org: 'Moody Tennis Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '2 August to 20 August',
    time: '9:00 AM to 10:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic skills in tennis through interactive exercises and games suitable for the age group, with a focus on the forehand, backhand, serve, reception, footwork, exchange of shots, and the basics of playing in matches."
  },
  {
    id: 185,
    center: 'Sports',
    title: 'Tennis - Junior - Boys 9',
    org: 'Moody Tennis Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 30 July',
    time: '11:00 AM to 12:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic skills in tennis through interactive exercises and games suitable for the age group, with a focus on the forehand, backhand, serve, reception, footwork, exchange of shots, and the basics of playing in matches."
  },
  {
    id: 186,
    center: 'Sports',
    title: 'Tennis - Junior - Boys 10',
    org: 'Moody Tennis Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '2 August to 20 August',
    time: '11:00 AM to 12:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic skills in tennis through interactive exercises and games suitable for the age group, with a focus on the forehand, backhand, serve, reception, footwork, exchange of shots, and the basics of playing in matches."
  },
  {
    id: 187,
    center: 'Sports',
    title: 'Tennis - Junior - Boys 11',
    org: 'Moody Tennis Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '12 July to 30 July',
    time: '11:00 AM to 12:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic skills in tennis through interactive exercises and games suitable for the age group, with a focus on the forehand, backhand, serve, reception, footwork, exchange of shots, and the basics of playing in matches."
  },
  {
    id: 188,
    center: 'Sports',
    title: 'Tennis - Junior - Boys 12',
    org: 'Moody Tennis Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '2 August to 20 August',
    time: '11:00 AM to 12:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic skills in tennis through interactive exercises and games suitable for the age group, with a focus on the forehand, backhand, serve, reception, footwork, exchange of shots, and the basics of playing in matches."
  },
  {
    id: 189,
    center: 'Sports',
    title: 'Tennis - Junior - Boys 13',
    org: 'Moody Tennis Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 30 July',
    time: '12:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic skills in tennis through interactive exercises and games suitable for the age group, with a focus on the forehand, backhand, serve, reception, footwork, exchange of shots, and the basics of playing in matches."
  },
  {
    id: 190,
    center: 'Sports',
    title: 'Tennis - Junior - Boys 14',
    org: 'Moody Tennis Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '2 August to 20 August',
    time: '12:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic skills in tennis through interactive exercises and games suitable for the age group, with a focus on the forehand, backhand, serve, reception, footwork, exchange of shots, and the basics of playing in matches."
  },
  {
    id: 191,
    center: 'Sports',
    title: 'Tennis - Junior - Boys 15',
    org: 'Moody Tennis Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '12 July to 30 July',
    time: '12:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic skills in tennis through interactive exercises and games suitable for the age group, with a focus on the forehand, backhand, serve, reception, footwork, exchange of shots, and the basics of playing in matches."
  },
  {
    id: 192,
    center: 'Sports',
    title: 'Tennis - Junior - Boys 16',
    org: 'Moody Tennis Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '2 August to 20 August',
    time: '12:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic skills in tennis through interactive exercises and games suitable for the age group, with a focus on the forehand, backhand, serve, reception, footwork, exchange of shots, and the basics of playing in matches."
  },
  {
    id: 193,
    center: 'Sports',
    title: 'Tennis - Junior - Girls 1',
    org: 'Moody Tennis Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 30 July',
    time: '10:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to develop basic participation skills in tennis through interactive exercises and games suitable for the age group, with a focus on the forehand, backhand, serve, reception, footwork, exchange of strikes, and the basics of playing in matches.'
  },
  {
    id: 194,
    center: 'Sports',
    title: 'Tennis - Junior - Girls 2',
    org: 'Moody Tennis Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '2 August to 20 August',
    time: '10:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to develop basic participation skills in tennis through interactive exercises and games suitable for the age group, with a focus on the forehand, backhand, serve, reception, footwork, exchange of strikes, and the basics of playing in matches.'
  },
  {
    id: 195,
    center: 'Sports',
    title: 'Tennis - Junior - Girls 3',
    org: 'Moody Tennis Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '12 July to 30 July',
    time: '10:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to develop basic participation skills in tennis through interactive exercises and games suitable for the age group, with a focus on the forehand, backhand, serve, reception, footwork, exchange of strikes, and the basics of playing in matches.'
  },
  {
    id: 196,
    center: 'Sports',
    title: 'Tennis - Junior - Girls 4',
    org: 'Moody Tennis Academy',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '2 August to 20 August',
    time: '10:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to develop basic participation skills in tennis through interactive exercises and games suitable for the age group, with a focus on the forehand, backhand, serve, reception, footwork, exchange of strikes, and the basics of playing in matches.'
  },
  {
    id: 197,
    center: 'Sports',
    title: 'Badminton - juniors - boys 1',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 30 July',
    time: '11:00 AM to 12:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic skills in badminton through interactive exercises and fun competitive activities, with a focus on racket grip, serve, high kick, short shot, playing at the net, footwork, and control of exchanges."
  },
  {
    id: 198,
    center: 'Sports',
    title: 'Badminton - juniors - boys 2',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '2 August to 20 August',
    time: '11:00 AM to 12:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic skills in badminton through interactive exercises and fun competitive activities, with a focus on racket grip, serve, high kick, short shot, playing at the net, footwork, and control of exchanges."
  },
  {
    id: 199,
    center: 'Sports',
    title: 'Badminton - juniors - boys 3',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '12 July to 30 July',
    time: '11:00 AM to 12:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic skills in badminton through interactive exercises and fun competitive activities, with a focus on racket grip, serve, high kick, short shot, playing at the net, footwork, and control of exchanges."
  },
  {
    id: 200,
    center: 'Sports',
    title: 'Badminton - juniors - boys 4',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '2 August to 20 August',
    time: '11:00 AM to 12:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic skills in badminton through interactive exercises and fun competitive activities, with a focus on racket grip, serve, high kick, short shot, playing at the net, footwork, and control of exchanges."
  },
  {
    id: 201,
    center: 'Sports',
    title: 'Badminton - Junior - Boys 5',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 30 July',
    time: '12:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic skills in badminton through interactive exercises and fun competitive activities, with a focus on racket grip, serve, high kick, short shot, playing at the net, footwork, and control of exchanges."
  },
  {
    id: 202,
    center: 'Sports',
    title: 'Badminton - Junior - Boys 6',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '2 August to 20 August',
    time: '12:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic skills in badminton through interactive exercises and fun competitive activities, with a focus on racket grip, serve, high kick, short shot, playing at the net, footwork, and control of exchanges."
  },
  {
    id: 203,
    center: 'Sports',
    title: 'Badminton - Junior - Boys 7',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '12 July to 30 July',
    time: '12:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic skills in badminton through interactive exercises and fun competitive activities, with a focus on racket grip, serve, high kick, short shot, playing at the net, footwork, and control of exchanges."
  },
  {
    id: 204,
    center: 'Sports',
    title: 'Badminton - Junior - Boys 8',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '2 August to 20 August',
    time: '12:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic skills in badminton through interactive exercises and fun competitive activities, with a focus on racket grip, serve, high kick, short shot, playing at the net, footwork, and control of exchanges."
  },
  {
    id: 205,
    center: 'Sports',
    title: 'Badminton - Junior - Girls 1',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 30 July',
    time: '10:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to develop the basic skills of badminton through interactive exercises and fun competitive activities, with a focus on racket grip, serve, high shot, short shot, playing at the net, footwork, and control of exchanges.'
  },
  {
    id: 206,
    center: 'Sports',
    title: 'Badminton - Junior - Girls 2',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '2 August to 20 August',
    time: '10:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to develop the basic skills of badminton through interactive exercises and fun competitive activities, with a focus on racket grip, serve, high shot, short shot, playing at the net, footwork, and control of exchanges.'
  },
  {
    id: 207,
    center: 'Sports',
    title: 'Badminton - Junior - Girls 3',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '12 July to 30 July',
    time: '10:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to develop the basic skills of badminton through interactive exercises and fun competitive activities, with a focus on racket grip, serve, high shot, short shot, playing at the net, footwork, and control of exchanges.'
  },
  {
    id: 208,
    center: 'Sports',
    title: 'Badminton - Junior - Girls 4',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '2 August to 20 August',
    time: '10:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to develop the basic skills of badminton through interactive exercises and fun competitive activities, with a focus on racket grip, serve, high shot, short shot, playing at the net, footwork, and control of exchanges.'
  },
  {
    id: 209,
    center: 'Sports',
    title: 'Table tennis - juniors - boys 1',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 30 July',
    time: '10:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic table tennis skills through progressive drills and games that enhance accuracy, coordination and control, with an emphasis on racket grip, stance, serve, forehand, backhand, rotation awareness, and stability of exchanges."
  },
  {
    id: 210,
    center: 'Sports',
    title: 'Table tennis - juniors - boys 2',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '2 August to 20 August',
    time: '10:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic table tennis skills through progressive drills and games that enhance accuracy, coordination and control, with an emphasis on racket grip, stance, serve, forehand, backhand, rotation awareness, and stability of exchanges."
  },
  {
    id: 211,
    center: 'Sports',
    title: 'Table tennis - juniors - boys 3',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '12 July to 30 July',
    time: '10:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic table tennis skills through progressive drills and games that enhance accuracy, coordination and control, with an emphasis on racket grip, stance, serve, forehand, backhand, rotation awareness, and stability of exchanges."
  },
  {
    id: 212,
    center: 'Sports',
    title: 'Table tennis - juniors - boys 4',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '2 August to 20 August',
    time: '10:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic table tennis skills through progressive drills and games that enhance accuracy, coordination and control, with an emphasis on racket grip, stance, serve, forehand, backhand, rotation awareness, and stability of exchanges."
  },
  {
    id: 213,
    center: 'Sports',
    title: 'Table tennis - juniors - boys 5',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 30 July',
    time: '11:00 AM to 12:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic table tennis skills through progressive drills and games that enhance accuracy, coordination and control, with an emphasis on racket grip, stance, serve, forehand, backhand, rotation awareness, and stability of exchanges."
  },
  {
    id: 214,
    center: 'Sports',
    title: 'Table tennis - juniors - boys 6',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '2 August to 20 August',
    time: '11:00 AM to 12:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic table tennis skills through progressive drills and games that enhance accuracy, coordination and control, with an emphasis on racket grip, stance, serve, forehand, backhand, rotation awareness, and stability of exchanges."
  },
  {
    id: 215,
    center: 'Sports',
    title: 'Table tennis - juniors - boys 7',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '12 July to 30 July',
    time: '11:00 AM to 12:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic table tennis skills through progressive drills and games that enhance accuracy, coordination and control, with an emphasis on racket grip, stance, serve, forehand, backhand, rotation awareness, and stability of exchanges."
  },
  {
    id: 216,
    center: 'Sports',
    title: 'Table tennis - juniors - boys 8',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '2 August to 20 August',
    time: '11:00 AM to 12:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic table tennis skills through progressive drills and games that enhance accuracy, coordination and control, with an emphasis on racket grip, stance, serve, forehand, backhand, rotation awareness, and stability of exchanges."
  },
  {
    id: 217,
    center: 'Sports',
    title: 'Table tennis - juniors - boys 9',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 30 July',
    time: '12:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic table tennis skills through progressive drills and games that enhance accuracy, coordination and control, with an emphasis on racket grip, stance, serve, forehand, backhand, rotation awareness, and stability of exchanges."
  },
  {
    id: 218,
    center: 'Sports',
    title: 'Table tennis - juniors - boys 10',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '2 August to 20 August',
    time: '12:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic table tennis skills through progressive drills and games that enhance accuracy, coordination and control, with an emphasis on racket grip, stance, serve, forehand, backhand, rotation awareness, and stability of exchanges."
  },
  {
    id: 219,
    center: 'Sports',
    title: 'Table tennis - juniors - boys 11',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '12 July to 30 July',
    time: '12:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic table tennis skills through progressive drills and games that enhance accuracy, coordination and control, with an emphasis on racket grip, stance, serve, forehand, backhand, rotation awareness, and stability of exchanges."
  },
  {
    id: 220,
    center: 'Sports',
    title: 'Table Tennis - Junior - Boys 12',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '2 August to 20 August',
    time: '12:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic table tennis skills through progressive drills and games that enhance accuracy, coordination and control, with an emphasis on racket grip, stance, serve, forehand, backhand, rotation awareness, and stability of exchanges."
  },
  {
    id: 221,
    center: 'Sports',
    title: 'Table tennis - juniors - girls 1',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 30 July',
    time: '10:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to develop basic table tennis participation skills through progressive exercises and games that enhance accuracy, coordination and control, with an emphasis on racket grip, stance, serve, forehand, backhand, rotation awareness, and stability of exchanges.'
  },
  {
    id: 222,
    center: 'Sports',
    title: 'Table tennis - juniors - girls 2',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '2 August to 20 August',
    time: '10:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to develop basic table tennis participation skills through progressive exercises and games that enhance accuracy, coordination and control, with an emphasis on racket grip, stance, serve, forehand, backhand, rotation awareness, and stability of exchanges.'
  },
  {
    id: 223,
    center: 'Sports',
    title: 'Table tennis - juniors - girls 3',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '12 July to 30 July',
    time: '10:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to develop basic table tennis participation skills through progressive exercises and games that enhance accuracy, coordination and control, with an emphasis on racket grip, stance, serve, forehand, backhand, rotation awareness, and stability of exchanges.'
  },
  {
    id: 224,
    center: 'Sports',
    title: 'Table tennis - juniors - girls 4',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '2 August to 20 August',
    time: '10:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to develop basic table tennis participation skills through progressive exercises and games that enhance accuracy, coordination and control, with an emphasis on racket grip, stance, serve, forehand, backhand, rotation awareness, and stability of exchanges.'
  },
  {
    id: 225,
    center: 'Sports',
    title: 'Cricket - Junior - Boys 1',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 30 July',
    time: '11:00 AM to 12:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic cricket skills through indoor exercises using the net, focusing on grip, stance, batting fundamentals, throwing movement, catching, passing, and awareness of the game."
  },
  {
    id: 226,
    center: 'Sports',
    title: 'Cricket - Junior - Boys 2',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '2 August to 20 August',
    time: '11:00 AM to 12:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic cricket skills through indoor exercises using the net, focusing on grip, stance, batting fundamentals, throwing movement, catching, passing, and awareness of the game."
  },
  {
    id: 227,
    center: 'Sports',
    title: 'Cricket - Junior - Boys 3',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '12 July to 30 July',
    time: '11:00 AM to 12:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic cricket skills through indoor exercises using the net, focusing on grip, stance, batting fundamentals, throwing movement, catching, passing, and awareness of the game."
  },
  {
    id: 228,
    center: 'Sports',
    title: 'Cricket - Junior - Boys 4',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '2 August to 20 August',
    time: '11:00 AM to 12:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic cricket skills through indoor exercises using the net, focusing on grip, stance, batting fundamentals, throwing movement, catching, passing, and awareness of the game."
  },
  {
    id: 229,
    center: 'Sports',
    title: 'Cricket - Junior - Boys 5',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 30 July',
    time: '12:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic cricket skills through indoor exercises using the net, focusing on grip, stance, batting fundamentals, throwing movement, catching, passing, and awareness of the game."
  },
  {
    id: 230,
    center: 'Sports',
    title: 'Cricket - Junior - Boys 6',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '2 August to 20 August',
    time: '12:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic cricket skills through indoor exercises using the net, focusing on grip, stance, batting fundamentals, throwing movement, catching, passing, and awareness of the game."
  },
  {
    id: 231,
    center: 'Sports',
    title: 'Cricket - Junior - Boys 7',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '12 July to 30 July',
    time: '12:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic cricket skills through indoor exercises using the net, focusing on grip, stance, batting fundamentals, throwing movement, catching, passing, and awareness of the game."
  },
  {
    id: 232,
    center: 'Sports',
    title: 'Cricket - Junior - Boys 8',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '2 August to 20 August',
    time: '12:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' basic cricket skills through indoor exercises using the net, focusing on grip, stance, batting fundamentals, throwing movement, catching, passing, and awareness of the game."
  },
  {
    id: 233,
    center: 'Sports',
    title: 'Cricket - Junior - Girls 1',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 30 July',
    time: '9:00 AM to 10:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to develop basic cricketing skills through indoor exercises using the net, focusing on grip, stance, batting fundamentals, throwing movement, catching, passing, and awareness of the course of the game.'
  },
  {
    id: 234,
    center: 'Sports',
    title: 'Cricket - Junior - Girls 2',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '2 August to 20 August',
    time: '9:00 AM to 10:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to develop basic cricketing skills through indoor exercises using the net, focusing on grip, stance, batting fundamentals, throwing movement, catching, passing, and awareness of the course of the game.'
  },
  {
    id: 235,
    center: 'Sports',
    title: 'Cricket - Junior - Girls 3',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '12 July to 30 July',
    time: '9:00 AM to 10:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to develop basic cricketing skills through indoor exercises using the net, focusing on grip, stance, batting fundamentals, throwing movement, catching, passing, and awareness of the course of the game.'
  },
  {
    id: 236,
    center: 'Sports',
    title: 'Cricket - Junior - Girls 4',
    org: 'SPORTS CITY 26',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '2 August to 20 August',
    time: '9:00 AM to 10:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to develop basic cricketing skills through indoor exercises using the net, focusing on grip, stance, batting fundamentals, throwing movement, catching, passing, and awareness of the course of the game.'
  },
  {
    id: 237,
    center: 'Media & Entertainment',
    title: 'First step theater',
    org: '',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Every day',
    dates: '12 July to 13 August',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the world of theater through acting and performances, and to help them discover their talents and develop their artistic and expressive skills in a fun and age-appropriate manner.'
  },
  {
    id: 238,
    center: 'Media & Entertainment',
    title: 'Media Tech',
    org: 'Bahrain News Agency',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 13 August',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the basics of journalistic and media work through interactive activities and practical applications, while developing the skills of news writing, interviewing, field coverage, and effective communication, leading to the production of a magazine that documents the most prominent news and events of Youth City 2030.'
  },
  {
    id: 239,
    center: 'Media & Entertainment',
    title: 'Future media person',
    org: '',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 6 August',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the skills and principles of media presentation through an interactive journey in which they learn the basics of standing in front of the camera and speaking confidently, all the way to preparing and conducting press interviews professionally, and acquiring phone photography skills to produce distinctive content with simple tools, which encourages them to be creative, cooperate, express themselves, and hone their personalities in a stimulating environment.'
  },
  {
    id: 240,
    center: 'Media & Entertainment',
    title: 'The art of television preparation and presentation',
    org: '',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '13 July to 12 August',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the basics of television preparation and presentation in a simplified and interactive manner. Participants undergo a practical experience to learn about the skills of preparing television segments, presenting in front of the camera, and using body language and voice, in a way that enhances their self-confidence and their ability to communicate and express in a distinctive media style.'
  },
  {
    id: 241,
    center: 'Media & Entertainment',
    title: 'Little photographer',
    org: '',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Every day',
    dates: '12 July to 16 July',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the basics of media work and the skills of a successful media professional from multiple angles, through exploring different media fields and training in communication skills, public speaking, content creation, and dealing with the public, which gives them practical experience that helps them understand the media work environment and develop their professional and creative capabilities.'
  },
  {
    id: 242,
    center: 'Media & Entertainment',
    title: 'Click and Create',
    org: 'Telecommunications Regulatory Authority',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 13 August',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the basics of content creation and social media in a way that is safe for children, with a focus on developing creativity, building self-confidence, and forming a conscious digital identity in a fun manner that suits their ages, from idea to publication.'
  },
  {
    id: 243,
    center: 'Media & Entertainment',
    title: 'The storyteller',
    org: '',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '13 July to 12 August',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to an integrated journey of creating audio content, starting from developing the idea, building the story and writing the dialogue, through audio recording skills, editing and directing techniques, all the way to producing a final professional project.'
  },
  {
    id: 244,
    center: 'Media & Entertainment',
    title: 'Future poet',
    org: 'Popular Poetry Society',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '13 July to 22 July',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the world of Bahraini folk poetry through an interactive experience that combines literary appreciation and creative expression, to instill a love of national heritage, develop recitation skills, and strengthen the connection to cultural identity.'
  },
  {
    id: 245,
    center: 'Media & Entertainment',
    title: 'Master of Ceremony',
    org: '',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 13 August',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the basics of media presentation and effective communication in front of the audience and the camera, to enable them to build a confident media presence and develop the skills of interaction and influence in various situations and occasions.'
  },
  {
    id: 246,
    center: 'Media & Entertainment',
    title: 'Young designers',
    org: '',
    age: '10 to 14 years',
    ageMin: 10,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '13 July to 22 July',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the basics of design in an interactive and fun way, with practical application using Canva. The program focuses on developing the visual sense, creative thinking, and arranging ideas visually through simple projects that simulate practical photography.'
  },
  {
    id: 247,
    center: 'Media & Entertainment',
    title: 'Micro influencer',
    org: '',
    age: '11 to 14 years',
    ageMin: 11,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 6 August',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to guide participants towards creating purposeful and responsible content, by developing their skills in preparation, production, and initial publishing, in an integrated journey that creates a digital ambassador capable of making a positive impact.'
  },
  {
    id: 248,
    center: 'Media & Entertainment',
    title: 'Puppet theater',
    org: 'Doll house',
    age: '11 to 14 years',
    ageMin: 11,
    ageMax: 14,
    days: 'Every day',
    dates: '12 July to 16 July',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the arts of designing and making theatrical puppets, from idea to implementation, by learning about the materials and tools used and methods for building characters and embodying them visually. The program also focuses on training participants on puppet animation techniques and using them to present stories and theatrical performances in a creative and interactive manner, which contributes to developing their artistic and innovative skills in the field of performing arts.'
  },
  {
    id: 249,
    center: 'Media & Entertainment',
    title: 'Art of Illusion - SFX for Films',
    org: '',
    age: '12 to 14 years',
    ageMin: 12,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '26 July to 13 August',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the world of special effects (SFX) makeup and cinematic storytelling, by training them in optical illusion techniques and creating realistic and imaginary features and effects, in a way that develops visual innovation and cinematic character building skills.'
  },
  {
    id: 250,
    center: 'Media & Entertainment',
    title: 'Young Filmmakers Lab',
    org: '',
    age: '12 to 14 years',
    ageMin: 12,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '26 July to 13 August',
    time: '9:00 AM to 1:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to introduce participants to the world of filmmaking and visual narration through a practical experience that takes them from developing an idea to producing an integrated short film. Participants learn about the basics of writing, photography, directing, and teamwork, while transforming their ideas and experiences into visual works that reflect their creative vision within an environment that simulates the reality of cinematic production.'
  },
  {
    id: 251,
    center: 'Media & Entertainment',
    title: 'Star Maker',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 13 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'A singing artistic program that allows participants to engage in an integrated professional experience in the world of musical and singing performance, through practical exercises and live performances that combine choral parts and solo performance with the participation of an elite group of musicians and professionals, with the aim of developing artistic talents and enhancing the performance experience in front of the audience within a professional, creative environment.'
  },
  {
    id: 252,
    center: 'Media & Entertainment',
    title: 'Image development',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Every day',
    dates: '9 August to 13 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the world of analogue (film) photography, through the use of traditional cameras and understanding the mechanics of film photography and developing it manually. It also allows them to understand the fundamental differences between the schools of analogue and digital photography, and to practice developing films inside the darkroom using specialized tools, which contributes to reviving the arts of classical photography and developing their creative horizons.'
  },
  {
    id: 253,
    center: 'Media & Entertainment',
    title: 'Theatrical creativity',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Every day',
    dates: '12 July to 16 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the foundations of theatrical décor design and its role in embodying the dramatic environment on stage, by exploring décor elements and types and the use of colors and lighting, in addition to enabling participants to read theatrical texts, design décor with accurate measurements, and implement three-dimensional models.'
  },
  {
    id: 254,
    center: 'Media & Entertainment',
    title: 'Introduction to Commercial Food Photography',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Monday and Wednesday',
    dates: '20 July to 5 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to provide participants with basic skills in the art of food photography for commercial purposes, from controlling lighting and composition to formatting and visual storytelling, to produce professional, high-quality images for restaurants, brands, and social media platforms.'
  },
  {
    id: 255,
    center: 'Media & Entertainment',
    title: '360 shot',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Every day',
    dates: '19 July to 23 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to enable participants to master the basics of creating digital content using a smartphone, and to develop their skills in photography, montage, and building a personal identity on social media platforms, in line with current standards for content creation.'
  },
  {
    id: 256,
    center: 'Media & Entertainment',
    title: 'The art of influencing and communicating with the public',
    org: '',
    age: '15 to 29 years',
    ageMin: 15,
    ageMax: 29,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 23 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to enable participants to master the arts of effective speaking and presentation in front of an audience, by focusing on developing rhetorical delivery skills and excelling in a balanced and confident presence, in addition to providing participants with advanced strategies to communicate with high efficiency and effectiveness and employing them successfully in various academic, professional, and media environments.'
  },
  {
    id: 257,
    center: 'Media & Entertainment',
    title:
      'Design the idea, not the form... How do you simplify information with a smart design?',
    org: 'Al-Ayyam newspaper',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Monday and Wednesday',
    dates: '27 July to 29 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to empower participants with the foundations of effective infographic design, by teaching them how to analyze content, select and arrange basic information, to transform complex data and information into easy-to-digest visual content that combines organization, clarity, and impact to deliver the message accurately.'
  },
  {
    id: 258,
    center: 'Media & Entertainment',
    title: 'Youth media industry with artificial intelligence',
    org: 'Ministry of Information',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Sunday and Tuesday and Thursday',
    dates: '2 August to 6 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to empower participants with the skills of producing digital content in its various forms by employing artificial intelligence techniques in creating texts, images and videos, ensuring a combination of speed of completion and quality of innovation while preserving the creative identity, in addition to understanding the mechanisms and algorithms of digital platforms to produce more accessible and influential content.'
  },
  {
    id: 259,
    center: 'Media & Entertainment',
    title: 'The art of divination',
    org: '',
    age: '15 to 25 years',
    ageMin: 15,
    ageMax: 25,
    days: 'Sunday and Tuesday and Thursday',
    dates: '9 August to 13 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to empower participants with the skills of presenting concerts and managing events with confidence, by developing effective presentation and communication skills to arrange and manage segments using organizational methods, in addition to training them to prepare and draft event texts flexibly, to build a theatrical and professional presence that attracts the audience and suits the nature of each event.'
  },
  {
    id: 260,
    center: 'Media & Entertainment',
    title: 'Entertainment software industry',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 13 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the stages of the entertainment program industry, starting with creating the idea and analyzing the needs of the audience and the market, through building television formats, designing the visual identity, planning for production and marketing, all the way to preparing professional shows that can be displayed on digital channels and platforms.'
  },
  {
    id: 261,
    center: 'Media & Entertainment',
    title: 'Intro to UX',
    org: 'General Assembly',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Wednesday',
    dates: '29 July to 29 July',
    time: '4:00 PM to 6:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the basics of user experience design (UX Design) and its importance in developing digital products, through user-centered thinking methodology and training on modern design tools, which helps them understand professional opportunities and solve problems by creating effective solutions.'
  },
  {
    id: 262,
    center: 'Media & Entertainment',
    title: 'Art of Pitching',
    org: 'General Assembly',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Workshop',
    dates: '27 July',
    time: '4:00 PM to 6:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to empower participants with the arts of influential speech and presentation, by developing the skills of organizing ideas and formulating persuasive messages, and training them in influencing and communication techniques with confidence to present projects and products effectively through practical applications.'
  },
  {
    id: 263,
    center: 'Media & Entertainment',
    title: 'Frame by Frame',
    org: 'Your media portal',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Monday and Wednesday',
    dates: '13 July to 29 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the basics of producing visual content and making videos for social media platforms, through intensive practical training that covers the work stages from planning, photography, and lighting to montage and color processing, to produce digital content that simulates real work environments.'
  },
  {
    id: 264,
    center: 'Media & Entertainment',
    title: 'There is a story in our house: A reporter from my house',
    org: 'Al-Ayyam newspaper',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Monday and Wednesday',
    dates: '13 July to 15 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description: ''
  },
  {
    id: 265,
    center: 'Media & Entertainment',
    title: 'Ask like journalists',
    org: 'Al-Ayyam newspaper',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Monday and Wednesday',
    dates: '13 July to 15 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to train participants in the art of formulating intelligent questions and managing interviews, to enable them to explore deep human stories and create influential and professional media content that reflects contemporary facts and realities.'
  },
  {
    id: 266,
    center: 'Media & Entertainment',
    title:
      'A story in 100 words.. How do you write a short and touching story?',
    org: 'Al-Ayyam newspaper',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Monday and Wednesday',
    dates: '20 July to 22 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the art of writing short, condensed journalistic stories, by exploring how to transform daily situations and experiences into brief texts that tell a complete human story in a limited number of words, combining simplicity, depth of impact, and careful selection of details.'
  },
  {
    id: 267,
    center: 'Media & Entertainment',
    title: 'The first 5 seconds',
    org: 'Al-Ayyam newspaper',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Monday and Wednesday',
    dates: '29 July to 12 August',
    time: '4:00 PM to 6:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to train participants to attract viewers’ attention in the first five seconds of visual content, by crafting strong intros and choosing effective visual shots, to enhance audience interaction and build a confident presence in front of the camera that is suitable for digital platforms.'
  },
  {
    id: 268,
    center: 'Media & Entertainment',
    title: 'How do I turn numbers into influential media content?',
    org: 'Al-Ayyam newspaper',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Monday and Wednesday',
    dates: '20 July to 22 July',
    time: '4:00 PM to 6:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to empower participants with economic journalism skills, by training them to read and analyze financial data and indicators, extract news stories from them, and transform complex numbers and statistics into simplified and influential media and visual content suitable for photo reports and modern digital platforms.'
  },
  {
    id: 269,
    center: 'Media & Entertainment',
    title: 'Media cybersecurity',
    org: 'Ministry of Information',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Tuesday',
    dates: '11 August to 11 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to enhance participants’ awareness of cybersecurity in the digital media environment by identifying the most prominent electronic threats and risks, methods for protecting accounts and personal data, and mechanisms for verifying the authenticity of information, which contributes to adopting safe and responsible digital practices when using modern technologies and artificial intelligence tools.'
  },
  {
    id: 270,
    center: 'Media & Entertainment',
    title: 'AI in Media Industry',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Sunday and Tuesday and Thursday',
    dates: '2 August to 13 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to take participants on an intensive journey that takes them from the initial idea to producing a short film with all its elements, while integrating artificial intelligence into the creative process to enrich their artistic vision, as it links cinematic theories, directorial thought, and the latest smart technologies to develop a generation of creators who employ technology to enhance their creativity and expand the scope of their influence, not to be a substitute for their abilities.'
  },
  {
    id: 271,
    center: 'Media & Entertainment',
    title: 'Animation and motion graphics',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Sunday and Tuesday and Thursday',
    dates: '2 August to 13 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to enable participants to acquire the knowledge and practical skills necessary to use Adobe After Effects in producing and designing animation and animated graphic design works, through intensive applied training that contributes to developing their creative and artistic abilities.'
  },
  {
    id: 272,
    center: 'Media & Entertainment',
    title: 'Human vs AI Battle',
    org: 'Your media portal',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 16 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to enable participants to keep pace with the future of content creation in the era of artificial intelligence, by reviewing strategies for employing modern technologies to develop ideas and accelerate production, while preserving the creative identity and human touch in the final outputs.'
  },
  {
    id: 273,
    center: 'Media & Entertainment',
    title: 'Identity-enhancing media content',
    org: 'Ministry of Information',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Sunday and Tuesday and Thursday',
    dates: '19 July to 23 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to enable participants to produce media content that enhances national identity and reflects the values ​​of Bahraini society by exploring narrative methods and content creation through various media templates, which helps them express their ideas and issues in a creative and responsible manner that contributes to enhancing their presence in the national media scene.'
  },
  {
    id: 274,
    center: 'Media & Entertainment',
    title: 'Fellowship at Bahrain News Agency',
    org: 'Ministry of Information - Bahrain News Agency',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Sunday and Tuesday and Thursday',
    dates: '26 July to 30 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to enable participants to have a realistic professional experience in the media work environment through practical training and participation in covering the events and activities of Youth City in cooperation with the Bahrain News Agency, which contributes to developing their professional skills and learning about the requirements of media work in specialized institutions.'
  },
  {
    id: 275,
    center: 'Media & Entertainment',
    title: 'Marketing Playground: Create It. Brand It. Sell It.',
    org: 'BUB - University of Salford Manchester',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Workshop',
    dates: '3 August',
    time: '4:00 PM to 6:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The workshop aims to introduce participants to the basics of marketing and brand building through an interactive experience that combines creativity, teamwork, and practical challenges. Participants go through a journey that begins with creating the idea for the brand and designing its identity, through developing promotional campaigns, all the way to presenting ideas and marketing products in an educational environment that stimulates creative thinking and entrepreneurship.'
  },
  {
    id: 276,
    center: 'Media & Entertainment',
    title: 'Jewellery Photography',
    org: 'Hagras Production - Aisha Jules',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Sunday and Tuesday and Thursday',
    dates: '19 July to 6 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to provide an integrated training experience for participants in the world of photography, starting with learning about equipment and designing supporting accessories using simple materials, then moving on to techniques for photographing jewelry and highlighting its details and beauty with appropriate lighting and angles, in addition to enabling participants to master professional photography skills and transform their ideas into distinct visual projects.'
  },
  {
    id: 277,
    center: 'Media & Entertainment',
    title: 'Art Direction 101',
    org: '',
    age: '16 to 35 years',
    ageMin: 16,
    ageMax: 35,
    days: 'Monday and Wednesday',
    dates: '20 July to 12 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the visual language that forms the identity of a scene, on a training trip to explore the construction of visual worlds in cinema, television, and advertisements, and to understand the effect of colors, lighting, décor, and photography angles in telling a story, in addition to developing their skills in analyzing texts visually and preparing inspiration boards (Moodboards) to create experiences with meaning and a distinctive feeling.'
  },
  {
    id: 278,
    center: 'Media & Entertainment',
    title:
      'Documentary film making with the support of artificial intelligence',
    org: '',
    age: '17 to 35 years',
    ageMin: 17,
    ageMax: 35,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 13 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the world of documentary films and their role in documenting stories and highlighting societal issues in a creative and influential manner, while highlighting the integration of artificial intelligence to develop visual content and production sessions, in addition to enabling participants to explore the stages of preparing a documentary film and how to employ modern technologies to produce works that combine visual narration and technology.'
  },
  {
    id: 279,
    center: 'Media & Entertainment',
    title: 'Youth 2030 podcast',
    org: '',
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Monday and Wednesday',
    dates: '13 July to 12 August',
    time: '6:00 PM to 8:00 PM',
    timeCategory: 'Evening',
    description:
      'A dialogue podcast program that brings together the experiences of pioneers and specialists in various fields and the ambitions of Bahraini youth, with the aim of building bridges of dialogue between generations and providing modern content that keeps pace with modern developments in media and technology. The program allows participants to have an integrated experience in preparing, producing, and presenting professional podcast episodes, from the idea and preparation stage to recording and publishing.'
  },
  {
    id: 280,
    center: 'Media & Entertainment',
    title: 'Writing lab',
    org: '',
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Sunday and Tuesday and Thursday',
    dates: '19 July to 30 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the basics of creative writing and content creation, through an interactive and practical training experience that takes them from consuming content to producing influential texts in novels, articles, journalism, and digital narratives, in addition to enabling participants to undergo applied workshops and exercises that simulate professional editing and writing environments.'
  },
  {
    id: 281,
    center: 'Media & Entertainment',
    title: 'Psychology of Packaging',
    org: 'Innovate',
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 30 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the psychology of packaging and highlight the impact of packaging design in directing consumer behavior, through four main axes that include: cognitive perception, sensory impact, visual appeal, and emotional feeling, in addition to enabling participants to undergo practical applications for designing distinct and influential packaging in the market.'
  },
  {
    id: 282,
    center: 'Media & Entertainment',
    title: 'Advertising industry',
    org: 'Telecommunications Regulatory Authority',
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Monday and Wednesday',
    dates: '13 July to 12 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to empower participants with the skills of photographing and producing commercial advertisements, by transforming their creative ideas into professional content that simulates the requirements of the labor market.'
  },
  {
    id: 283,
    center: 'Media & Entertainment',
    title: 'Frames and Wheels',
    org: 'Al Zayani Investments',
    age: '18 to 30 years',
    ageMin: 18,
    ageMax: 30,
    days: 'Monday and Wednesday',
    dates: '3 August to 12 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to empower participants with the skills of photographing and producing professional visual content for vehicles, through training on the use of cameras and specialized equipment, understanding the composition of shots and choosing angles and movements to highlight the details and attractiveness of cars, in addition to developing montage skills and processing content with specialized programs to keep pace with modern digital content industry standards.'
  },
  {
    id: 284,
    center: 'Media & Entertainment',
    title: 'Theater directing',
    org: 'Dreams Art Production',
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Sunday and Tuesday and Thursday',
    dates: '2 August to 6 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the world of theatrical directing and creating influential performances, through a practical training experience that combines theoretical knowledge and field application. Participants learn about the foundations of building a directorial vision, managing actors, and employing various theatrical presentation elements, enabling them to transform ideas and texts into integrated artistic experiences capable of attracting the audience and delivering messages in a creative and professional manner.'
  },
  {
    id: 285,
    center: 'Media & Entertainment',
    title: 'Storytelling',
    org: '',
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Monday and Wednesday',
    dates: '10 August to 12 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to empower participants with the arts of storytelling and crafting messages, by developing the skills of building influential stories across various platforms that transform ideas and experiences into valuable creative content that creates a real emotional connection with the audience, through practical applications that simulate the requirements of modern media and marketing.'
  },
  {
    id: 286,
    center: 'Media & Entertainment',
    title: 'I am influential',
    org: '',
    age: '18 to 22 years',
    ageMin: 18,
    ageMax: 22,
    days: 'Monday and Wednesday',
    dates: '13 July to 5 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to enable participants to use media as a tool for positive influence and community service, by monitoring societal issues and needs and transforming them into meaningful media content and creative initiatives. The program combines practical training and specialized workshops to develop media skills and create influential messages that reflect the values ​​of responsibility, citizenship and community awareness.'
  },
  {
    id: 287,
    center: 'Arts & Culture',
    title: 'Young Chef 1',
    org: '',
    age: '9 to 11 years',
    ageMin: 9,
    ageMax: 11,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 23 July',
    time: '9:00 AM to 1:30 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to teach participants the basics and skills of cooking through practical application in preparing various dishes and recipes, and learning about the steps to prepare food in a safe and orderly manner, while developing skills in using ingredients, presentation, and teamwork.'
  },
  {
    id: 288,
    center: 'Arts & Culture',
    title: 'Young Chef 2',
    org: '',
    age: '9 to 11 years',
    ageMin: 9,
    ageMax: 11,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 23 July',
    time: '9:00 AM to 1:30 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to teach participants the basics and skills of cooking through practical application in preparing various dishes and recipes, and learning about the steps to prepare food in a safe and orderly manner, while developing skills in using ingredients, presentation, and teamwork.'
  },
  {
    id: 289,
    center: 'Arts & Culture',
    title: 'Young Chef 3',
    org: '',
    age: '9 to 11 years',
    ageMin: 9,
    ageMax: 11,
    days: 'Monday and Wednesday',
    dates: '13 July to 22 July',
    time: '9:00 AM to 1:30 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to teach participants the basics and skills of cooking through practical application in preparing various dishes and recipes, and learning about the steps to prepare food in a safe and orderly manner, while developing skills in using ingredients, presentation, and teamwork.'
  },
  {
    id: 290,
    center: 'Arts & Culture',
    title: 'Young Chef 4',
    org: '',
    age: '9 to 11 years',
    ageMin: 9,
    ageMax: 11,
    days: 'Monday and Wednesday',
    dates: '13 July to 22 July',
    time: '9:00 AM to 1:30 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to teach participants the basics and skills of cooking through practical application in preparing various dishes and recipes, and learning about the steps to prepare food in a safe and orderly manner, while developing skills in using ingredients, presentation, and teamwork.'
  },
  {
    id: 291,
    center: 'Arts & Culture',
    title: 'Young Chef 5',
    org: '',
    age: '9 to 11 years',
    ageMin: 9,
    ageMax: 11,
    days: 'Sunday and Tuesday and Thursday',
    dates: '26 July to 13 August',
    time: '9:00 AM to 1:30 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to teach participants the basics and skills of cooking through practical application in preparing various dishes and recipes, and learning about the steps to prepare food in a safe and orderly manner, while developing skills in using ingredients, presentation, and teamwork.'
  },
  {
    id: 292,
    center: 'Arts & Culture',
    title: 'Young Chef 6',
    org: '',
    age: '9 to 11 years',
    ageMin: 9,
    ageMax: 11,
    days: 'Sunday and Tuesday and Thursday',
    dates: '26 July to 13 August',
    time: '9:00 AM to 1:30 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to teach participants the basics and skills of cooking through practical application in preparing various dishes and recipes, and learning about the steps to prepare food in a safe and orderly manner, while developing skills in using ingredients, presentation, and teamwork.'
  },
  {
    id: 293,
    center: 'Arts & Culture',
    title: 'Young Chef 7',
    org: '',
    age: '9 to 11 years',
    ageMin: 9,
    ageMax: 11,
    days: 'Monday and Wednesday',
    dates: '27 July to 12 August',
    time: '9:00 AM to 1:30 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to teach participants the basics and skills of cooking through practical application in preparing various dishes and recipes, and learning about the steps to prepare food in a safe and orderly manner, while developing skills in using ingredients, presentation, and teamwork.'
  },
  {
    id: 294,
    center: 'Arts & Culture',
    title: 'Young Chef 8',
    org: '',
    age: '9 to 11 years',
    ageMin: 9,
    ageMax: 11,
    days: 'Monday and Wednesday',
    dates: '27 July to 12 August',
    time: '9:00 AM to 1:30 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to teach participants the basics and skills of cooking through practical application in preparing various dishes and recipes, and learning about the steps to prepare food in a safe and orderly manner, while developing skills in using ingredients, presentation, and teamwork.'
  },
  {
    id: 295,
    center: 'Arts & Culture',
    title: 'Dimensions of imagination 1',
    org: "Children's Cultural House",
    age: '9 to 11 years',
    ageMin: 9,
    ageMax: 11,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 13 August',
    time: '9:00 AM to 1:30 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to develop the imagination of participants in the fields of literature, arts, and theater through interactive activities that include creative writing, story drawing, puppet making, and theatrical performance training, in addition to designing artistic murals that express national identity and transforming their ideas into tangible literary and artistic products.'
  },
  {
    id: 296,
    center: 'Arts & Culture',
    title: 'Design Your Own Watch with AI 1',
    org: 'Bahrain Polytechnic - Qannati',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Workshop',
    dates: '2 August',
    time: '9:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to enable participants to create custom watch designs by integrating art, design, and storytelling with artificial intelligence and digital manufacturing techniques, and concludes with a competition to choose the best design that expresses the participant’s identity.'
  },
  {
    id: 297,
    center: 'Arts & Culture',
    title: 'Design Your Own Watch with AI 2',
    org: 'Bahrain Polytechnic - Qannati',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Workshop',
    dates: '3 August',
    time: '9:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to enable participants to create custom watch designs by integrating art, design, and storytelling with artificial intelligence and digital manufacturing techniques, and concludes with a competition to choose the best design that expresses the participant’s identity.'
  },
  {
    id: 298,
    center: 'Arts & Culture',
    title: 'Design Your Own Watch with AI 3',
    org: 'Bahrain Polytechnic - Qannati',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Workshop',
    dates: '4 August',
    time: '9:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to enable participants to create custom watch designs by integrating art, design, and storytelling with artificial intelligence and digital manufacturing techniques, and concludes with a competition to choose the best design that expresses the participant’s identity.'
  },
  {
    id: 299,
    center: 'Arts & Culture',
    title: 'Design Your Own Watch with AI 4',
    org: 'Bahrain Polytechnic - Qannati',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Workshop',
    dates: '5 August',
    time: '9:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to enable participants to create custom watch designs by integrating art, design, and storytelling with artificial intelligence and digital manufacturing techniques, and concludes with a competition to choose the best design that expresses the participant’s identity.'
  },
  {
    id: 300,
    center: 'Arts & Culture',
    title: 'Design Your Own Watch with AI 5',
    org: 'Bahrain Polytechnic - Qannati',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Workshop',
    dates: '6 August',
    time: '9:00 AM to 11:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to enable participants to create custom watch designs by integrating art, design, and storytelling with artificial intelligence and digital manufacturing techniques, and concludes with a competition to choose the best design that expresses the participant’s identity.'
  },
  {
    id: 301,
    center: 'Arts & Culture',
    title: 'Subway Challenge',
    org: 'Subway - Food Innovation',
    age: '9 to 14 years',
    ageMin: 9,
    ageMax: 14,
    days: 'Workshop',
    dates: '4 August',
    time: '11:00 AM to 12:00 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to engage participants in an interactive and competitive experience to design and prepare their own sandwiches using various ingredients, which enhances creativity and teamwork and gives them the opportunity to present their ideas in a fun and stimulating atmosphere during which the creations are evaluated and the best ones are chosen.'
  },
  {
    id: 302,
    center: 'Arts & Culture',
    title: 'Young Artist 1',
    org: '',
    age: '9 to 11 years',
    ageMin: 9,
    ageMax: 11,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 13 August',
    time: '9:00 AM to 1:30 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to develop the artistic skills of participants through practical workshops that combine drawing, coloring, and handicrafts, where they learn the basics of drawing and coloring techniques using various materials and tools to develop their creative and expressive skills.'
  },
  {
    id: 303,
    center: 'Arts & Culture',
    title: 'Young Artist 2',
    org: '',
    age: '9 to 11 years',
    ageMin: 9,
    ageMax: 11,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 13 August',
    time: '9:00 AM to 1:30 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to develop the artistic skills of participants through practical workshops that combine drawing, coloring, and handicrafts, where they learn the basics of drawing and coloring techniques using various materials and tools to develop their creative and expressive skills.'
  },
  {
    id: 304,
    center: 'Arts & Culture',
    title: 'Young Artist 3',
    org: '',
    age: '9 to 11 years',
    ageMin: 9,
    ageMax: 11,
    days: 'Monday and Wednesday',
    dates: '13 July to 12 August',
    time: '9:00 AM to 1:30 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to develop the artistic skills of participants through practical workshops that combine drawing, coloring, and handicrafts, where they learn the basics of drawing and coloring techniques using various materials and tools to develop their creative and expressive skills.'
  },
  {
    id: 305,
    center: 'Arts & Culture',
    title: 'Young Artist 4',
    org: '',
    age: '9 to 11 years',
    ageMin: 9,
    ageMax: 11,
    days: 'Sunday and Tuesday and Thursday',
    dates: '26 July to 13 August',
    time: '9:00 AM to 1:30 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to develop the artistic skills of participants through practical workshops that combine drawing, coloring, and handicrafts, where they learn the basics of drawing and coloring techniques using various materials and tools to develop their creative and expressive skills.'
  },
  {
    id: 306,
    center: 'Arts & Culture',
    title: 'Young Artist 5',
    org: '',
    age: '9 to 11 years',
    ageMin: 9,
    ageMax: 11,
    days: 'Sunday and Tuesday and Thursday',
    dates: '26 July to 13 August',
    time: '9:00 AM to 1:30 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to develop the artistic skills of participants through practical workshops that combine drawing, coloring, and handicrafts, where they learn the basics of drawing and coloring techniques using various materials and tools to develop their creative and expressive skills.'
  },
  {
    id: 307,
    center: 'Arts & Culture',
    title: 'Young Artist 6',
    org: '',
    age: '9 to 11 years',
    ageMin: 9,
    ageMax: 11,
    days: 'Monday and Wednesday',
    dates: '27 July to 12 August',
    time: '9:00 AM to 1:30 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to develop the artistic skills of participants through practical workshops that combine drawing, coloring, and handicrafts, where they learn the basics of drawing and coloring techniques using various materials and tools to develop their creative and expressive skills.'
  },
  {
    id: 308,
    center: 'Arts & Culture',
    title: 'Future Chef 1',
    org: '',
    age: '12 to 14 years',
    ageMin: 12,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 23 July',
    time: '9:00 AM to 1:30 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' culinary skills through practical training in preparing various dishes, including healthy meals, snacks, desserts, and international dishes, while learning about the basics of meal planning, various cooking techniques, and food presentation methods."
  },
  {
    id: 309,
    center: 'Arts & Culture',
    title: 'Future Chef 3',
    org: '',
    age: '12 to 14 years',
    ageMin: 12,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '26 July to 13 August',
    time: '9:00 AM to 1:30 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' culinary skills through practical training in preparing various dishes, including healthy meals, snacks, desserts, and international dishes, while learning about the basics of meal planning, various cooking techniques, and food presentation methods."
  },
  {
    id: 310,
    center: 'Arts & Culture',
    title: 'Future Chef 2',
    org: '',
    age: '12 to 14 years',
    ageMin: 12,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '13 July to 22 July',
    time: '9:00 AM to 1:30 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' culinary skills through practical training in preparing various dishes, including healthy meals, snacks, desserts, and international dishes, while learning about the basics of meal planning, various cooking techniques, and food presentation methods."
  },
  {
    id: 311,
    center: 'Arts & Culture',
    title: 'Future Chef 4',
    org: '',
    age: '12 to 14 years',
    ageMin: 12,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '27 July to 12 August',
    time: '9:00 AM to 1:30 AM',
    timeCategory: 'Morning',
    description:
      "The program aims to develop participants' culinary skills through practical training in preparing various dishes, including healthy meals, snacks, desserts, and international dishes, while learning about the basics of meal planning, various cooking techniques, and food presentation methods."
  },
  {
    id: 312,
    center: 'Arts & Culture',
    title: 'Dimensions of imagination 2',
    org: "Children's Cultural House",
    age: '12 to 14 years',
    ageMin: 12,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '13 July to 12 August',
    time: '9:00 AM to 1:30 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to develop the imagination of participants in the fields of literature, arts, and theater through interactive activities that include creative writing, story drawing, puppet making, and theatrical performance training, in addition to designing artistic murals that express national identity and transforming their ideas into tangible literary and artistic products.'
  },
  {
    id: 313,
    center: 'Arts & Culture',
    title: 'Future Artist 1',
    org: '',
    age: '12 to 14 years',
    ageMin: 12,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 13 August',
    time: '9:00 AM to 1:30 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to develop the artistic skills of participants through practical workshops that combine drawing, coloring, and handicrafts, where they learn the basics of drawing and coloring techniques using various materials and tools to develop their creative and expressive skills.'
  },
  {
    id: 314,
    center: 'Arts & Culture',
    title: 'Future Artist 2',
    org: '',
    age: '12 to 14 years',
    ageMin: 12,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '13 July to 12 August',
    time: '9:00 AM to 1:30 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to develop the artistic skills of participants through practical workshops that combine drawing, coloring, and handicrafts, where they learn the basics of drawing and coloring techniques using various materials and tools to develop their creative and expressive skills.'
  },
  {
    id: 315,
    center: 'Arts & Culture',
    title: 'Future Artist 3',
    org: '',
    age: '12 to 14 years',
    ageMin: 12,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '13 July to 12 August',
    time: '9:00 AM to 1:30 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to develop the artistic skills of participants through practical workshops that combine drawing, coloring, and handicrafts, where they learn the basics of drawing and coloring techniques using various materials and tools to develop their creative and expressive skills.'
  },
  {
    id: 316,
    center: 'Arts & Culture',
    title: 'Future Artist 5',
    org: '',
    age: '12 to 14 years',
    ageMin: 12,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '27 July to 12 August',
    time: '9:00 AM to 1:30 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to develop the artistic skills of participants through practical workshops that combine drawing, coloring, and handicrafts, where they learn the basics of drawing and coloring techniques using various materials and tools to develop their creative and expressive skills.'
  },
  {
    id: 317,
    center: 'Arts & Culture',
    title: 'Future Artist 4',
    org: '',
    age: '12 to 14 years',
    ageMin: 12,
    ageMax: 14,
    days: 'Sunday and Tuesday and Thursday',
    dates: '26 July to 13 August',
    time: '9:00 AM to 1:30 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to develop the artistic skills of participants through practical workshops that combine drawing, coloring, and handicrafts, where they learn the basics of drawing and coloring techniques using various materials and tools to develop their creative and expressive skills.'
  },
  {
    id: 318,
    center: 'Arts & Culture',
    title: 'Future Artist 6',
    org: '',
    age: '12 to 14 years',
    ageMin: 12,
    ageMax: 14,
    days: 'Monday and Wednesday',
    dates: '27 July to 12 August',
    time: '9:00 AM to 1:30 AM',
    timeCategory: 'Morning',
    description:
      'The program aims to develop the artistic skills of participants through practical workshops that combine drawing, coloring, and handicrafts, where they learn the basics of drawing and coloring techniques using various materials and tools to develop their creative and expressive skills.'
  },
  {
    id: 319,
    center: 'Arts & Culture',
    title: 'Flowers Arrangement',
    org: 'Lalabella',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Every day',
    dates: '26 July to 30 July',
    time: '4:00 PM to 8:30 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to teach participants the arts of flower arranging through practical workshops covering the skills of combining colors and making bouquets to develop their craft skills and enable them to apply them practically.'
  },
  {
    id: 320,
    center: 'Arts & Culture',
    title: 'Hand printing studio',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Monday and Wednesday',
    dates: '13 July to 29 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to various hand-printing techniques, such as intaglio and relief engraving and the use of a press on materials such as paper and fabrics, and to enable them to design artistic templates and patterns that reflect their personal style and develop their craft skills.'
  },
  {
    id: 321,
    center: 'Arts & Culture',
    title: 'Traditional printing workshop',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Monday and Wednesday',
    dates: '3 August to 12 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to various hand-printing techniques, such as intaglio and relief engraving and the use of a press on materials such as paper and fabrics, and to enable them to design artistic templates and patterns that reflect their personal style and develop their craft skills.'
  },
  {
    id: 322,
    center: 'Arts & Culture',
    title: 'Kooheji Jewellery Design 1',
    org: 'Kooheji Jewellery, Bahrain Gemological Institute (DANAT), Aisha Jewels',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Every day',
    dates: '12 July to 16 July',
    time: '3:30 PM to 8:30 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to develop participants’ skills in designing and crafting jewelry, through a practical experience that begins with understanding the basics and transforming ideas into implementable pieces of art. The program includes identifying gemstones in cooperation with the Bahrain Pearl and Gemstone Institute “Danat”, and gives an opportunity to implement the winning design in cooperation with “Koheji Jewellery”.'
  },
  {
    id: 323,
    center: 'Arts & Culture',
    title: 'Kooheji Jewellery Design 2',
    org: 'Kooheji Jewellery, Bahrain Gemological Institute (DANAT), Aisha Jewels',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Every day',
    dates: '19 July to 23 July',
    time: '3:30 PM to 8:30 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to develop participants’ skills in designing and crafting jewelry, through a practical experience that begins with understanding the basics and transforming ideas into implementable pieces of art. The program includes identifying gemstones in cooperation with the Bahrain Pearl and Gemstone Institute “Danat”, and gives an opportunity to implement the winning design in cooperation with “Koheji Jewellery”.'
  },
  {
    id: 324,
    center: 'Arts & Culture',
    title: 'Kooheji Jewellery Design 3',
    org: 'Kooheji Jewellery, Bahrain Gemological Institute (DANAT), Aisha Jewels',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Every day',
    dates: '26 July to 30 July',
    time: '3:30 PM to 8:30 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to develop participants’ skills in designing and crafting jewelry, through a practical experience that begins with understanding the basics and transforming ideas into implementable pieces of art. The program includes identifying gemstones in cooperation with the Bahrain Pearl and Gemstone Institute “Danat”, and gives an opportunity to implement the winning design in cooperation with “Koheji Jewellery”.'
  },
  {
    id: 325,
    center: 'Arts & Culture',
    title: 'Kooheji Jewellery Design 4',
    org: 'Kooheji Jewellery, Bahrain Gemological Institute (DANAT), Aisha Jewels',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Every day',
    dates: '2 August to 6 August',
    time: '3:30 PM to 8:30 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to develop participants’ skills in designing and crafting jewelry, through a practical experience that begins with understanding the basics and transforming ideas into implementable pieces of art. The program includes identifying gemstones in cooperation with the Bahrain Pearl and Gemstone Institute “Danat”, and gives an opportunity to implement the winning design in cooperation with “Koheji Jewellery”.'
  },
  {
    id: 326,
    center: 'Arts & Culture',
    title: 'Kooheji Jewellery Design 5',
    org: 'Kooheji Jewellery, Bahrain Gemological Institute (DANAT), Aisha Jewels',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Every day',
    dates: '9 August to 13 August',
    time: '3:30 PM to 8:30 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to develop participants’ skills in designing and crafting jewelry, through a practical experience that begins with understanding the basics and transforming ideas into implementable pieces of art. The program includes identifying gemstones in cooperation with the Bahrain Pearl and Gemstone Institute “Danat”, and gives an opportunity to implement the winning design in cooperation with “Koheji Jewellery”.'
  },
  {
    id: 327,
    center: 'Arts & Culture',
    title: 'From Manila to Manama: A Journey through Filipino Gastronomy 1',
    org: 'Phlilippine Embassy',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Workshop',
    dates: '19 July',
    time: '3:30 PM to 8:30 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to provide an interactive culinary arts workshop to celebrate the ancient Filipino culture and explore its identity through traditional dishes. The program combines theoretical and practical aspects to introduce participants to the distinctive flavors and ingredients of Filipino cuisine.'
  },
  {
    id: 328,
    center: 'Arts & Culture',
    title: 'From Manila to Manama: A Journey through Filipino Gastronomy 2',
    org: 'Phlilippine Embassy',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Workshop',
    dates: '20 July',
    time: '3:30 PM to 8:30 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to provide an interactive culinary arts workshop to celebrate the ancient Filipino culture and explore its identity through traditional dishes. The program combines theoretical and practical aspects to introduce participants to the distinctive flavors and ingredients of Filipino cuisine.'
  },
  {
    id: 329,
    center: 'Arts & Culture',
    title: 'From Manila to Manama: A Journey through Filipino Gastronomy 3',
    org: 'Phlilippine Embassy',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Workshop',
    dates: '21 July',
    time: '3:30 PM to 8:30 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to provide an interactive culinary arts workshop to celebrate the ancient Filipino culture and explore its identity through traditional dishes. The program combines theoretical and practical aspects to introduce participants to the distinctive flavors and ingredients of Filipino cuisine.'
  },
  {
    id: 330,
    center: 'Arts & Culture',
    title: 'From Manila to Manama: A Journey through Filipino Gastronomy 4',
    org: 'Phlilippine Embassy',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Workshop',
    dates: '22 July',
    time: '3:30 PM to 8:30 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to provide an interactive culinary arts workshop to celebrate the ancient Filipino culture and explore its identity through traditional dishes. The program combines theoretical and practical aspects to introduce participants to the distinctive flavors and ingredients of Filipino cuisine.'
  },
  {
    id: 331,
    center: 'Arts & Culture',
    title: 'From Manila to Manama: A Journey through Filipino Gastronomy 5',
    org: 'Phlilippine Embassy',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Workshop',
    dates: '23 July',
    time: '3:30 PM to 8:30 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to provide an interactive culinary arts workshop to celebrate the ancient Filipino culture and explore its identity through traditional dishes. The program combines theoretical and practical aspects to introduce participants to the distinctive flavors and ingredients of Filipino cuisine.'
  },
  {
    id: 332,
    center: 'Arts & Culture',
    title: 'Experimental Studio: Still Life',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 23 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to teach participants the basic skills in the arts of drawing through step-by-step practical training that focuses on planning, shading, and light and shadow distribution techniques, while mastering the integration and use of oil colors to produce integrated artistic paintings that open the way for commercial investment.'
  },
  {
    id: 333,
    center: 'Arts & Culture',
    title: 'Experimental studio: block carving',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Sunday and Tuesday and Thursday',
    dates: '26 July to 30 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the basics of sculpting molds using clay by learning shaping and manual sculpting techniques and transforming ideas into artistic models, which contributes to developing their artistic and creative skills through an interactive applied experience.'
  },
  {
    id: 334,
    center: 'Arts & Culture',
    title:
      'Experimental studio: between color and space, a journey exploring color and movement',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Sunday and Tuesday and Thursday',
    dates: '2 August to 6 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the aesthetics of liquid color and the potential of abstract art through free experimentation and exploration of the relationship between form and space, enabling them to transform their thoughts and feelings into contemporary works of art that reflect their creative vision.'
  },
  {
    id: 335,
    center: 'Arts & Culture',
    title: 'Experimental studio: the art of composition',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Sunday and Tuesday and Thursday',
    dates: '9 August to 13 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the art of collage and methods of visual composition by exploring ways to combine images, materials, and paper clippings into innovative works of art. Participants go through a practical experience to learn techniques of cutting, arranging, and building artistic layers, enabling them to produce works that express their ideas and creative vision.'
  },
  {
    id: 336,
    center: 'Arts & Culture',
    title:
      'Create Observe Feel: A Journey Through French and Francophone Culture',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Every day',
    dates: '19 July to 23 July',
    time: '3:30 PM to 8:30 PM',
    timeCategory: 'Afternoon',
    description:
      'The program, in cooperation with the Alliance Francis Institute in the Kingdom of Bahrain and under the slogan “Create, Observe, Feel,” aims to introduce participants to French and Francophone culture and arts through interactive activities that include arts, cooking, fashion, and virtual reality technologies.'
  },
  {
    id: 337,
    center: 'Arts & Culture',
    title: 'Journaling Through Texture',
    org: 'AL RIWAQ',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Sunday and Tuesday and Thursday',
    dates: '9 August to 13 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program, in cooperation with “Surface Studio,” aims to introduce participants to methods of documenting places and surfaces by exploring the textures and patterns surrounding them, and integrating them into a special diary using stamping and writing techniques and meditative activities.'
  },
  {
    id: 338,
    center: 'Arts & Culture',
    title: 'Ink and Watercolor Illustration Techniques',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 17 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the basic techniques of illustration, by focusing on the skills of line drawing, shading, creating textures, and applying watercolor and ink layers through practical experiments to develop their expressive drawings.'
  },
  {
    id: 339,
    center: 'Arts & Culture',
    title: '3D Printing Basics',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Sunday and Tuesday and Thursday',
    dates: '19 July to 23 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to provide participants with a practical introduction to transforming initial ideas and drawings into 3D printed models, by exploring the technical stages of digital modeling and modern manufacturing tools.'
  },
  {
    id: 340,
    center: 'Arts & Culture',
    title: 'Islamic Tile Technique',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Sunday and Tuesday and Thursday',
    dates: '26 July to 30 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the basics of drawing and decoration on Islamic ceramic tiles, by exploring traditional design principles and the harmony between geometric and floral shapes, to create artistic paintings inspired by antique tiles.'
  },
  {
    id: 341,
    center: 'Arts & Culture',
    title: 'Art as a Research Method',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Sunday and Tuesday and Thursday',
    dates: '2 August to 6 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description: ''
  },
  {
    id: 342,
    center: 'Arts & Culture',
    title: 'Nespresso Masterclass 1',
    org: 'Nespresso',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Workshop',
    dates: '19 July',
    time: '4:00 PM to 6:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the basics of preparing coffee and its different types through an interactive experience that combines learning and practical application, where participants go through the experience of preparing their own drinks using Nespresso products and devices, which enhances their skills and confidence in preparing coffee.'
  },
  {
    id: 343,
    center: 'Arts & Culture',
    title: 'Nespresso Masterclass 2',
    org: 'Nespresso',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Workshop',
    dates: '19 July',
    time: '6:00 PM to 8:00 PM',
    timeCategory: 'Evening',
    description:
      'The program aims to introduce participants to the basics of preparing coffee and its different types through an interactive experience that combines learning and practical application, where participants go through the experience of preparing their own drinks using Nespresso products and devices, which enhances their skills and confidence in preparing coffee.'
  },
  {
    id: 344,
    center: 'Arts & Culture',
    title: 'Nespresso Masterclass 3',
    org: 'Nespresso',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Workshop',
    dates: '20 July',
    time: '4:00 PM to 6:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the basics of preparing coffee and its different types through an interactive experience that combines learning and practical application, where participants go through the experience of preparing their own drinks using Nespresso products and devices, which enhances their skills and confidence in preparing coffee.'
  },
  {
    id: 345,
    center: 'Arts & Culture',
    title: 'Nespresso Masterclass 4',
    org: 'Nespresso',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Workshop',
    dates: '20 July',
    time: '6:00 PM to 8:00 PM',
    timeCategory: 'Evening',
    description:
      'The program aims to introduce participants to the basics of preparing coffee and its different types through an interactive experience that combines learning and practical application, where participants go through the experience of preparing their own drinks using Nespresso products and devices, which enhances their skills and confidence in preparing coffee.'
  },
  {
    id: 346,
    center: 'Arts & Culture',
    title: 'Nespresso Masterclass 5',
    org: 'Nespresso',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Workshop',
    dates: '21 July',
    time: '4:00 PM to 6:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the basics of preparing coffee and its different types through an interactive experience that combines learning and practical application, where participants go through the experience of preparing their own drinks using Nespresso products and devices, which enhances their skills and confidence in preparing coffee.'
  },
  {
    id: 347,
    center: 'Arts & Culture',
    title: 'Nespresso Masterclass 6',
    org: 'Nespresso',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Workshop',
    dates: '21 July',
    time: '6:00 PM to 8:00 PM',
    timeCategory: 'Evening',
    description:
      'The program aims to introduce participants to the basics of preparing coffee and its different types through an interactive experience that combines learning and practical application, where participants go through the experience of preparing their own drinks using Nespresso products and devices, which enhances their skills and confidence in preparing coffee.'
  },
  {
    id: 348,
    center: 'Arts & Culture',
    title: 'Nespresso Masterclass 7',
    org: 'Nespresso',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Workshop',
    dates: '22 July',
    time: '4:00 PM to 6:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the basics of preparing coffee and its different types through an interactive experience that combines learning and practical application, where participants go through the experience of preparing their own drinks using Nespresso products and devices, which enhances their skills and confidence in preparing coffee.'
  },
  {
    id: 349,
    center: 'Arts & Culture',
    title: 'Nespresso Masterclass 8',
    org: 'Nespresso',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Workshop',
    dates: '22 July',
    time: '6:00 PM to 8:00 PM',
    timeCategory: 'Evening',
    description:
      'The program aims to introduce participants to the basics of preparing coffee and its different types through an interactive experience that combines learning and practical application, where participants go through the experience of preparing their own drinks using Nespresso products and devices, which enhances their skills and confidence in preparing coffee.'
  },
  {
    id: 350,
    center: 'Arts & Culture',
    title: 'Nespresso Masterclass 9',
    org: 'Nespresso',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Workshop',
    dates: '23 July',
    time: '4:00 PM to 6:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the basics of preparing coffee and its different types through an interactive experience that combines learning and practical application, where participants go through the experience of preparing their own drinks using Nespresso products and devices, which enhances their skills and confidence in preparing coffee.'
  },
  {
    id: 351,
    center: 'Arts & Culture',
    title: 'Nespresso Masterclass 10',
    org: 'Nespresso',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Workshop',
    dates: '23 July',
    time: '6:00 PM to 8:00 PM',
    timeCategory: 'Evening',
    description:
      'The program aims to introduce participants to the basics of preparing coffee and its different types through an interactive experience that combines learning and practical application, where participants go through the experience of preparing their own drinks using Nespresso products and devices, which enhances their skills and confidence in preparing coffee.'
  },
  {
    id: 352,
    center: 'Arts & Culture',
    title: 'Fashion Design: Threads of identity',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Every day',
    dates: '26 July to 13 August',
    time: '4:00 PM to 8:30 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the basics of fashion design through a creative experience that combines Bahraini identity and modern design, enabling them to create designs inspired by local culture and develop their skills in design thinking and expression.'
  },
  {
    id: 353,
    center: 'Arts & Culture',
    title: 'Digital Illustration',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Monday and Wednesday',
    dates: '26 July to 30 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to train participants on the basics of designing digital characters by learning about the principles of artistic anatomy, drawing methods, and fashion design to suit each character. Participants learn to draw from multiple angles and analyze anatomical proportions, in addition to developing composition and visual presentation skills using digital drawing tools and techniques, enabling them to implement projects that reflect their artistic style and creative identity.'
  },
  {
    id: 354,
    center: 'Arts & Culture',
    title: 'The Calo Kitchen Challenge',
    org: 'Calo',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Every day',
    dates: '26 July to 30 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'This program aims to train participants in the skills of culinary arts and meal preparation through an intensive practical experience accompanied by professional chefs. The program focuses on teaching participants the secrets behind creating healthy and popular meals, and testing their abilities in a final challenge, where the recipe that wins first place will receive a unique opportunity to be included on the “Callo Bahrain” menu and be transformed into a meal enjoyed by thousands.'
  },
  {
    id: 355,
    center: 'Arts & Culture',
    title: 'Rise & Bake: The Art of Sourdough 1',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Every day',
    dates: '2 August to 6 August',
    time: '3:30 PM to 8:30 PM',
    timeCategory: 'Afternoon',
    description:
      'This program aims to introduce participants to the basics of baking sourdough using natural yeast, by understanding how to prepare natural yeast, going through learning about the stages of preparing dough and how to deal with it, all the way to experiencing a practical application for making sourdough bread. The program aims to give participants an interactive educational experience that combines theoretical understanding and practical application in a simplified and professional manner'
  },
  {
    id: 356,
    center: 'Arts & Culture',
    title: 'Rise & Bake: The Art of Sourdough 2',
    org: '',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Every day',
    dates: '9 August to 13 August',
    time: '3:30 PM to 8:30 PM',
    timeCategory: 'Afternoon',
    description:
      'This program aims to introduce participants to the basics of baking sourdough using natural yeast, by understanding how to prepare natural yeast, going through learning about the stages of preparing dough and how to deal with it, all the way to experiencing a practical application for making sourdough bread. The program aims to give participants an interactive educational experience that combines theoretical understanding and practical application in a simplified and professional manner'
  },
  {
    id: 357,
    center: 'Arts & Culture',
    title: 'Subway Challenge 1',
    org: 'Subway - Food Innovation',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Workshop',
    dates: '3 August',
    time: '6:00 PM to 7:00 PM',
    timeCategory: 'Evening',
    description:
      'The program aims to engage participants in an interactive and competitive experience to design and prepare their own sandwiches using various ingredients, which enhances creativity and teamwork and gives them the opportunity to present their ideas in a fun and stimulating atmosphere during which the creations are evaluated and the best ones are chosen.'
  },
  {
    id: 358,
    center: 'Arts & Culture',
    title: 'Subway Challenge 2',
    org: 'Subway - Food Innovation',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Workshop',
    dates: '5 August',
    time: '6:00 PM to 7:00 PM',
    timeCategory: 'Evening',
    description:
      'The program aims to engage participants in an interactive and competitive experience to design and prepare their own sandwiches using various ingredients, which enhances creativity and teamwork and gives them the opportunity to present their ideas in a fun and stimulating atmosphere during which the creations are evaluated and the best ones are chosen.'
  },
  {
    id: 359,
    center: 'Arts & Culture',
    title: 'Gemology: Metals, Diamonds',
    org: 'Aisha Jewels',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Monday and Wednesday',
    dates: '12 July to 16 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'This program aims to introduce participants to the basics of gemology, through studying precious metals and their karats, and exploring the nature and composition of diamonds. It also focuses on practical training on the global diamond evaluation system, how to determine its market value, and understanding the foundations and risks of investing in the jewelry market.'
  },
  {
    id: 360,
    center: 'Arts & Culture',
    title: 'Crafting Healthy Salads: Create & Compete 1',
    org: 'The Salad Bar',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Workshop',
    dates: '19 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the basics of preparing healthy, balanced salads and selecting their ingredients, and to apply this in practice by designing special recipes and participating in daily competitions based on evaluating the taste, visual presentation, and nutritional value of the dish.'
  },
  {
    id: 361,
    center: 'Arts & Culture',
    title: 'Crafting Healthy Salads: Create & Compete 2',
    org: 'The Salad Bar',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Workshop',
    dates: '20 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the basics of preparing healthy, balanced salads and selecting their ingredients, and to apply this in practice by designing special recipes and participating in daily competitions based on evaluating the taste, visual presentation, and nutritional value of the dish.'
  },
  {
    id: 362,
    center: 'Arts & Culture',
    title: 'Crafting Healthy Salads: Create & Compete 3',
    org: 'The Salad Bar',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Workshop',
    dates: '21 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the basics of preparing healthy, balanced salads and selecting their ingredients, and to apply this in practice by designing special recipes and participating in daily competitions based on evaluating the taste, visual presentation, and nutritional value of the dish.'
  },
  {
    id: 363,
    center: 'Arts & Culture',
    title: 'Crafting Healthy Salads: Create & Compete 4',
    org: 'The Salad Bar',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Workshop',
    dates: '22 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the basics of preparing healthy, balanced salads and selecting their ingredients, and to apply this in practice by designing special recipes and participating in daily competitions based on evaluating the taste, visual presentation, and nutritional value of the dish.'
  },
  {
    id: 364,
    center: 'Arts & Culture',
    title: 'Crafting Healthy Salads: Create & Compete 5',
    org: 'The Salad Bar',
    age: '15 to 35 years',
    ageMin: 15,
    ageMax: 35,
    days: 'Workshop',
    dates: '23 July',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the basics of preparing healthy, balanced salads and selecting their ingredients, and to apply this in practice by designing special recipes and participating in daily competitions based on evaluating the taste, visual presentation, and nutritional value of the dish.'
  },
  {
    id: 365,
    center: 'Arts & Culture',
    title: 'Traditional shipbuilding',
    org: '',
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Every day',
    dates: '12 July to 13 August',
    time: '4:00 PM to 8:30 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the art of traditional shipbuilding as one of the most prominent elements of Bahraini maritime heritage, where the history of the craft and the stages of shipbuilding and its tools are reviewed, while providing the opportunity for practical participation in building a model of “Al-Banoush” to enhance their connection to the national identity.'
  },
  {
    id: 366,
    center: 'Arts & Culture',
    title: 'The Art of Grooming',
    org: "Gent's Station",
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Every day',
    dates: '12 July to 16 July',
    time: '4:00 PM to 8:30 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to introduce participants to the basics of shaving and appearance care, by covering hair cutting and styling techniques, beard care, and learning about the tools used in professional styling through direct practical applications.'
  },
  {
    id: 367,
    center: 'Arts & Culture',
    title: 'Experimental studio',
    org: '',
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Sunday and Tuesday and Thursday',
    dates: '12 July to 13 August',
    time: '4:00 PM to 8:00 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to provide a supportive creative environment for participating artists who are advanced within the Experimental Studio series of programs through specialized guidance and development of artistic projects, in which artists receive specialized work spaces. The program gives participants the opportunity to enter all programs of the series and also provides the opportunity to work on integrated artistic projects from idea building to final production, which contributes to developing their artistic practices and raising the level of their creative production within a professional framework.'
  },
  {
    id: 368,
    center: 'Arts & Culture',
    title: 'Bahraini sweets industry',
    org: 'Murooj Muharraq Sweets',
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Workshop',
    dates: '2 August',
    time: '4:00 PM to 6:00 PM',
    timeCategory: 'Afternoon',
    description:
      'This program aims to provide an interactive experience to learn about the arts of making traditional Bahraini sweets, where participants learn the basics of preparing Bahraini sweets related to Bahraini heritage. Participants go through a practical experience that allows them to learn about the ingredients and methods of preparation and presentation, which contributes to strengthening their connection to Bahraini cultural heritage and preserving its continuity between generations.'
  },
  {
    id: 369,
    center: 'Arts & Culture',
    title: 'Art and diplomacy',
    org: 'Ministry of Foreign Affairs - Mohammed bin Mubarak Al Khalifa Academy for Diplomatic Studies',
    age: '18 to 35 years',
    ageMin: 18,
    ageMax: 35,
    days: 'Monday and Wednesday',
    dates: '19 July to 23 July',
    time: '4:00 PM to 8:30 PM',
    timeCategory: 'Afternoon',
    description:
      'The program aims to explore the relationship between art, diplomacy, and international politics, by identifying the role of art as a tool of soft power in promoting dialogue between cultures, and discussing practical applications that highlight the impact of artistic creativity in supporting international relations.'
  }
]

const parseDays = (daysStr, datesStr) => {
  if (!daysStr) return []
  const str = daysStr.toLowerCase()
  if (
    str.includes('every day') ||
    str.includes('all week') ||
    str.includes('all days')
  )
    return ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
  const days = []
  if (str.includes('sun')) days.push('sun')
  if (str.includes('mon')) days.push('mon')
  if (str.includes('tue')) days.push('tue')
  if (str.includes('wed')) days.push('wed')
  if (str.includes('thu')) days.push('thu')
  if (str.includes('fri')) days.push('fri')
  if (str.includes('sat')) days.push('sat')

  // Handling for specific "Workshop" single dates
  if (days.length === 0 && str.includes('workshop') && datesStr) {
    const dateMatch = datesStr.match(/(\d+)\s+([a-zA-Z]+)/)
    if (dateMatch) {
      const d = new Date(`${dateMatch[2]} ${dateMatch[1]}, 2026`)
      if (!isNaN(d)) {
        const dayNames = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
        days.push(dayNames[d.getDay()])
      }
    }
  }
  return days
}

const parseTime = (timeStr, category) => {
  const parts = timeStr.toLowerCase().split('to')
  if (parts.length < 2) return { start: 0, end: 0 }

  const extractTime = (str) => {
    const match = str.match(/(\d+):(\d+)/)
    if (!match) return null
    let h = parseInt(match[1])
    let m = parseInt(match[2]) / 60
    if (str.includes('pm') && h < 12) h += 12
    if (str.includes('am') && h === 12) h = 0
    return h + m
  }

  let start = extractTime(parts[0])
  let end = extractTime(parts[1])

  if (start === null || end === null) return { start: 0, end: 0 }

  if (!parts[0].includes('am') && !parts[0].includes('pm')) {
    if ((category === 'Evening' || category === 'Afternoon') && start < 12)
      start += 12
  }
  if (!parts[1].includes('am') && !parts[1].includes('pm')) {
    if ((category === 'Evening' || category === 'Afternoon') && end < 12)
      end += 12
  }

  // Handling for "9:00 AM to 1:00 AM" mapping error
  if (end < start && start >= 6 && end <= 5) {
    end += 12
  }

  // Handling "12:00 AM" actually meaning noon for Morning/Afternoon
  if (start === 0 && (category === 'Morning' || category === 'Afternoon')) {
    start += 12
  }
  if (
    end === 1 &&
    (category === 'Morning' || category === 'Afternoon') &&
    start >= 12
  ) {
    end += 12
  }

  return { start, end }
}

export default function WorkshopExplorer() {
  const [workshops, setWorkshops] = useState(MOCK_SCRAPED_DATA)
  const [interestQuery, setInterestQuery] = useState('')
  const [selectedAge, setSelectedAge] = useState('All')
  const [selectedTime, setSelectedTime] = useState('All')
  const [showDataPaste, setShowDataPaste] = useState(false)
  const [rawData, setRawData] = useState('')

  const [savedIds, setSavedIds] = useState([])
  const [view, setView] = useState('explore')

  const ageOptions = ['All', '7-11', '12-14', '15-18', '19-35']
  const timeOptions = ['All', 'Morning', 'Afternoon', 'Evening']

  const filteredWorkshops = useMemo(() => {
    let results = workshops.filter((ws) => {
      const matchesTime =
        selectedTime === 'All' || ws.timeCategory === selectedTime

      let matchesAge = true
      if (selectedAge !== 'All') {
        if (selectedAge === '7-11')
          matchesAge = ws.ageMin <= 11 && ws.ageMax >= 7
        else if (selectedAge === '12-14')
          matchesAge = ws.ageMin <= 14 && ws.ageMax >= 12
        else if (selectedAge === '15-18')
          matchesAge = ws.ageMin <= 18 && ws.ageMax >= 15
        else if (selectedAge === '19-35') matchesAge = ws.ageMax >= 19
      }

      return matchesTime && matchesAge
    })

    if (interestQuery.trim() !== '') {
      const queryWords = interestQuery
        .toLowerCase()
        .split(/\s+/)
        .filter((w) => w.length > 2)

      results = results
        .map((ws) => {
          let score = 0
          const textToSearch =
            `${ws.title} ${ws.description} ${ws.org}`.toLowerCase()

          queryWords.forEach((word) => {
            if (textToSearch.includes(word)) score += 1
          })

          return { ...ws, _relevanceScore: score }
        })
        .filter((ws) => ws._relevanceScore > 0)
        .sort((a, b) => b._relevanceScore - a._relevanceScore)
    }

    return results
  }, [workshops, interestQuery, selectedAge, selectedTime])

  const handleImportData = () => {
    try {
      const parsed = JSON.parse(rawData)
      if (Array.isArray(parsed)) {
        setWorkshops(parsed)
        setShowDataPaste(false)
        setRawData('')
      } else {
        console.error('Please paste a valid JSON array.')
      }
    } catch (e) {
      console.error('Invalid JSON format. Please check your data.')
    }
  }

  const toggleSave = (id) => {
    setSavedIds((prev) =>
      prev.includes(id)
        ? prev.filter((savedId) => savedId !== id)
        : [...prev, id]
    )
  }

  const savedWorkshops = useMemo(() => {
    return workshops.filter((ws) => savedIds.includes(ws.id))
  }, [workshops, savedIds])

  const conflicts = useMemo(() => {
    const detectedConflicts = []
    for (let i = 0; i < savedWorkshops.length; i++) {
      for (let j = i + 1; j < savedWorkshops.length; j++) {
        const w1 = savedWorkshops[i]
        const w2 = savedWorkshops[j]

        const days1 = parseDays(w1.days, w1.dates)
        const days2 = parseDays(w2.days, w2.dates)
        const sharedDays = days1.filter((d) => days2.includes(d))

        if (sharedDays.length > 0) {
          const t1 = parseTime(w1.time, w1.timeCategory)
          const t2 = parseTime(w2.time, w2.timeCategory)

          if (t1.start < t2.end && t1.end > t2.start) {
            detectedConflicts.push({ w1, w2 })
          }
        }
      }
    }
    return detectedConflicts
  }, [savedWorkshops])

  const calendarData = useMemo(() => {
    const days = [
      { key: 'sun', label: 'Sun', events: [] },
      { key: 'mon', label: 'Mon', events: [] },
      { key: 'tue', label: 'Tue', events: [] },
      { key: 'wed', label: 'Wed', events: [] },
      { key: 'thu', label: 'Thu', events: [] },
      { key: 'fri', label: 'Fri', events: [] },
      { key: 'sat', label: 'Sat', events: [] }
    ]

    savedWorkshops.forEach((ws) => {
      const parsedDays = parseDays(ws.days, ws.dates)
      const { start, end } = parseTime(ws.time, ws.timeCategory)
      const isConflict = conflicts.some(
        (c) => c.w1.id === ws.id || c.w2.id === ws.id
      )

      parsedDays.forEach((dayKey) => {
        const day = days.find((d) => d.key === dayKey)
        if (day) {
          day.events.push({
            ...ws,
            startTime: start,
            endTime: end,
            isConflict
          })
        }
      })
    })
    return days
  }, [savedWorkshops, conflicts])

  const hoursOfDay = Array.from({ length: 14 }, (_, i) => i + 8) // 8 AM to 9 PM

  return (
    <div className="min-h-screen bg-[#f8fcf9] text-slate-800 font-sans p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <header className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-[#e2ece5]">
          <div>
            <h1 className="text-3xl font-bold text-[#0c2340]">
              Youth City Explorer
            </h1>
            <p className="text-slate-500 mt-1">
              Filter scraped workshop data and build your schedule
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() =>
                setView(view === 'explore' ? 'schedule' : 'explore')
              }
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors font-medium ${
                view === 'schedule'
                  ? 'bg-[#1964d6] text-white'
                  : 'bg-blue-50 text-[#1964d6] hover:bg-blue-100'
              }`}
            >
              {view === 'explore' ? (
                <CalendarDays size={18} />
              ) : (
                <ArrowLeft size={18} />
              )}
              {view === 'explore'
                ? `My Schedule (${savedIds.length})`
                : 'Back to Explorer'}
            </button>
            <button
              onClick={() => setShowDataPaste(!showDataPaste)}
              className="flex items-center gap-2 bg-[#f0f5f1] hover:bg-[#e2ece5] text-[#0c2340] px-4 py-2 rounded-xl transition-colors font-medium"
            >
              <Upload size={18} />
              Import Data
            </button>
          </div>
        </header>

        {showDataPaste && (
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e2ece5] animate-in fade-in slide-in-from-top-4">
            <h3 className="font-bold text-[#0c2340] mb-2">
              Paste JSON Data from Scraper
            </h3>
            <textarea
              className="w-full h-32 p-3 border border-slate-200 rounded-xl font-mono text-sm mb-4"
              placeholder='[{"id": 7, "title": "New Workshop", "age": "18 to 35 years", "timeCategory": "Evening" ...}]'
              value={rawData}
              onChange={(e) => setRawData(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowDataPaste(false)}
                className="px-4 py-2 text-slate-500 hover:bg-slate-100 rounded-xl font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleImportData}
                className="px-4 py-2 bg-[#1964d6] text-white rounded-xl font-medium hover:bg-blue-700"
              >
                Load Data
              </button>
            </div>
          </div>
        )}

        {view === 'explore' ? (
          <div className="flex flex-col lg:flex-row gap-6">
            <aside className="w-full lg:w-64 flex-shrink-0 space-y-6">
              <div className="flex items-center gap-2 mb-4 text-[#0c2340] font-bold">
                <Filter size={18} />
                <h2>Filters</h2>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Smart Matcher
                </label>
                <div className="relative">
                  <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    size={16}
                  />
                  <input
                    type="text"
                    placeholder="e.g. food, tech, gardening"
                    className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1964d6]"
                    value={interestQuery}
                    onChange={(e) => setInterestQuery(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Age Group
                </label>
                <div className="relative">
                  <Users
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    size={16}
                  />
                  <select
                    className="w-full pl-9 pr-8 py-2 bg-white border border-slate-200 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-[#1964d6]"
                    value={selectedAge}
                    onChange={(e) => setSelectedAge(e.target.value)}
                  >
                    {ageOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                    size={16}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Time of Day
                </label>
                <div className="relative">
                  <Clock
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    size={16}
                  />
                  <select
                    className="w-full pl-9 pr-8 py-2 bg-white border border-slate-200 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-[#1964d6]"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                  >
                    {timeOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                    size={16}
                  />
                </div>
              </div>
            </aside>

            <main className="flex-1">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-bold text-[#0c2340]">
                  Available Workshops
                </h2>
                <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                  {filteredWorkshops.length} results
                </span>
              </div>

              {filteredWorkshops.length === 0 ? (
                <div className="bg-white p-12 rounded-2xl border border-dashed border-slate-300 text-center text-slate-500">
                  <p>No workshops match your current filters or interests.</p>
                  <button
                    onClick={() => {
                      setInterestQuery('')
                      setSelectedAge('All')
                      setSelectedTime('All')
                    }}
                    className="mt-4 text-[#1964d6] hover:underline font-medium"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                  {filteredWorkshops.map((ws) => (
                    <div
                      key={ws.id}
                      className="bg-white p-5 rounded-2xl shadow-sm border border-[#e2ece5] hover:shadow-md hover:border-[#b4d2c1] transition-all flex flex-col h-full relative overflow-hidden"
                    >
                      {ws._relevanceScore > 0 && (
                        <div className="absolute top-0 right-0 bg-amber-100 text-amber-800 text-[10px] font-bold px-3 py-1 rounded-bl-lg border-b border-l border-amber-200">
                          ⭐ SUGGESTED MATCH
                        </div>
                      )}

                      <div className="flex-1 mt-2">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-lg text-[#0c2340] leading-tight">
                            {ws.title}
                          </h3>
                        </div>
                        <p className="text-sm text-slate-500 mb-4">{ws.org}</p>

                        <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                          {ws.description}
                        </p>
                      </div>

                      <div className="space-y-3 pt-4 border-t border-slate-100">
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-[#3b82f6] text-white">
                            {ws.age}
                          </span>
                          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-[#22c55e] text-white">
                            {ws.dates}
                          </span>
                        </div>

                        <div className="flex items-center justify-between text-sm text-slate-600 bg-slate-50 p-2 rounded-lg">
                          <div className="flex items-center gap-1.5">
                            <Calendar size={14} className="text-slate-400" />
                            <span className="truncate max-w-[120px]">
                              {ws.days}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 font-medium text-[#1964d6]">
                            <Clock size={14} />
                            <span>{ws.time}</span>
                          </div>
                        </div>

                        <button
                          onClick={() => toggleSave(ws.id)}
                          className={`w-full mt-2 flex items-center justify-center gap-2 py-2 rounded-xl font-medium transition-all duration-200 ${
                            savedIds.includes(ws.id)
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100'
                              : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-[#1964d6]'
                          }`}
                        >
                          {savedIds.includes(ws.id) ? (
                            <>
                              <BookmarkCheck size={18} /> Saved to Schedule
                            </>
                          ) : (
                            <>
                              <BookmarkPlus size={18} /> Add to Schedule
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </main>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#0c2340]">
                My Saved Workshops
              </h2>
              <p className="text-slate-500">
                Review your selections and check for time conflicts.
              </p>
            </div>

            {conflicts.length > 0 && (
              <div className="mb-8 p-5 bg-red-50 border-l-4 border-red-500 rounded-r-xl shadow-sm">
                <div className="flex items-start gap-3">
                  <AlertTriangle
                    className="text-red-500 flex-shrink-0 mt-0.5"
                    size={24}
                  />
                  <div>
                    <h3 className="font-bold text-red-800 text-lg">
                      Schedule Conflicts Detected
                    </h3>
                    <p className="text-red-600 text-sm mb-3">
                      The following workshops happen on the same days and have
                      overlapping times:
                    </p>
                    <ul className="space-y-2">
                      {conflicts.map((c, idx) => (
                        <li
                          key={idx}
                          className="bg-white/60 px-3 py-2 rounded-lg text-red-800 text-sm font-medium border border-red-100"
                        >
                          <span className="font-bold underline">
                            {c.w1.title}
                          </span>{' '}
                          clashes with{' '}
                          <span className="font-bold underline">
                            {c.w2.title}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {savedWorkshops.length === 0 ? (
              <div className="bg-white p-12 rounded-2xl border border-dashed border-slate-300 text-center text-slate-500 flex flex-col items-center">
                <CalendarDays size={48} className="text-slate-300 mb-4" />
                <p className="text-lg font-medium text-slate-600">
                  Your schedule is empty
                </p>
                <p className="mb-6">
                  Go back to the explorer to add some workshops.
                </p>
                <button
                  onClick={() => setView('explore')}
                  className="px-6 py-2 bg-[#1964d6] text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
                >
                  Explore Workshops
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                {}
                <div className="bg-white rounded-2xl shadow-sm border border-[#e2ece5] overflow-hidden">
                  <div className="p-4 border-b border-slate-100 bg-slate-50">
                    <h3 className="font-bold text-[#0c2340]">
                      Weekly Calendar View
                    </h3>
                  </div>
                  <div className="flex overflow-x-auto">
                    <div className="flex-none w-16 flex flex-col border-r border-slate-100 bg-slate-50">
                      <div className="h-10 border-b border-slate-100"></div>
                      {hoursOfDay.map((h) => (
                        <div
                          key={h}
                          className="h-14 border-b border-slate-100 text-[10px] text-right pr-2 py-1 text-slate-400 font-medium"
                        >
                          {h > 12
                            ? `${h - 12} PM`
                            : h === 12
                              ? '12 PM'
                              : `${h} AM`}
                        </div>
                      ))}
                    </div>
                    {calendarData.map((day) => (
                      <div
                        key={day.key}
                        className="flex-1 min-w-[100px] border-r border-slate-100 relative"
                      >
                        <div className="h-10 border-b border-slate-100 text-center font-bold text-sm text-slate-600 bg-slate-50 flex items-center justify-center">
                          {day.label}
                        </div>
                        <div
                          className="relative"
                          style={{ height: `${hoursOfDay.length * 56}px` }}
                        >
                          {hoursOfDay.map((h) => (
                            <div
                              key={h}
                              className="h-14 border-b border-slate-50 w-full absolute"
                              style={{ top: `${(h - 8) * 56}px` }}
                            ></div>
                          ))}
                          {day.events.map((event, idx) => {
                            const top = (event.startTime - 8) * 56
                            const height =
                              (event.endTime - event.startTime) * 56
                            return (
                              <div
                                key={`${event.id}-${idx}`}
                                className="absolute w-full px-1"
                                style={{
                                  top: `${top}px`,
                                  height: `${height}px`,
                                  zIndex: event.isConflict ? 10 : 5
                                }}
                              >
                                <div
                                  className={`rounded-md p-1.5 text-xs h-full overflow-hidden leading-tight border ${event.isConflict ? 'bg-red-100 border-red-400 text-red-800 shadow-sm' : 'bg-blue-100 border-blue-300 text-blue-800 hover:bg-blue-200'}`}
                                >
                                  <div className="font-bold truncate">
                                    {event.title}
                                  </div>
                                  <div className="text-[10px] opacity-80">
                                    {event.time}
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-[#0c2340] mb-4">
                    Workshop Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {savedWorkshops.map((ws) => (
                      <div
                        key={ws.id}
                        className="bg-white p-5 rounded-2xl shadow-sm border border-[#e2ece5] flex flex-col h-full relative"
                      >
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-[#0c2340] leading-tight mb-1">
                            {ws.title}
                          </h3>
                          <p className="text-sm text-slate-500 mb-4">
                            {ws.org}
                          </p>

                          <div className="space-y-2 text-sm text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                            <div className="flex items-center gap-2">
                              <Calendar size={16} className="text-slate-400" />
                              <span className="font-medium">{ws.days}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock size={16} className="text-slate-400" />
                              <span>
                                {ws.time} ({ws.dates})
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 mt-4 border-t border-slate-100">
                          <button
                            onClick={() => toggleSave(ws.id)}
                            className="w-full flex items-center justify-center gap-2 py-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-xl font-medium transition-colors"
                          >
                            Remove from Schedule
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
