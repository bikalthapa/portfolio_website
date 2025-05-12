const projectsData = [
      {
    id: "10",
    title: "Fitness Website (Zenfit)",
    description: "This project was made on aagaman-2.0 webathon program held at Madan Bhandari Memorial College with senior students.",
    imageUrl: "images/project_img/zenfit.png",
    demoUrl: "https://bikalthapa.github.io/aagaman-2.0-webathon",
    githubUrl: "https://github.com/bikalthapa/aagaman-2.0-webathon",
    techStack: ["HTML", "CSS", "JS","Bootstrap"],
    date: "February 2024",
    category: "Website",
    rating: 5
  },
      {
    id: "10",
    title: "Event Management Website.",
    description: "An Informative event management website with frontend part only.",
    imageUrl: "images/project_img/event_management.png",
    demoUrl: "https://bikalthapa.github.io/event_management",
    githubUrl: "https://github.com/bikalthapa/event_management",
    techStack: ["HTML", "CSS", "JS","Bootstrap","AOS JS"],
    date: "February 2024",
    category: "Website",
    rating: 5
  },
    {
    id: "9",
    title: "Attendance Management System (BARSA Attend)",
    description: "BARSA Attend is the Full Stack Attendance Management System developed by me & my team Teach BARSA for school.",
    imageUrl: "images/project_img/barsa_attend.png",
    demoUrl: "https://bikalthapa.github.io/Barsa/Frontend",
    githubUrl: "https://github.com/bikalthapa/Barsa",
    techStack: ["HTML", "JS","Bootstrap", "PHP", "MYSQL"],
    date: "February 2024",
    category: "Website",
    rating: 5
  },
  {
    id: "8",
    title: "Full Stack school website with online results.",
    description: "A school website with full stack integration that allows students to view results online and stay updated with notices.",
    imageUrl: "images/project_img/ssbss_official.png",
    demoUrl: "https://bikalthapa.github.io/ssbss_official",
    githubUrl: "https://github.com/bikalthapa/ssbss_official",
    techStack: ["React", "Node.js", "MongoDB"],
    date: "February 2024",
    category: "Website",
    rating: 5
  },
  {
    id: "10",
    title: "Local Area Converter",
    description: "It can convert the local area like aana, katha, dhur into other units.",
    imageUrl: "images/project_img/area_converter.png",
    demoUrl: "https://bikalthapa.github.io/area-converter",
    githubUrl: "https://github.com/bikalthapa/area-converter",
    techStack: ["HTML", "CSS", "JS","Bootstrap"],
    date: "February 2024",
    category: "Utility",
    rating: 2
  },
  {
    id: "1",
    title: "Chess Empire game in react js.",
    description: "An interactive and modern chess game built using React with basic AI and drag-and-drop functionality.",
    imageUrl: "images/project_img/chess_game.png",
    demoUrl: "https://bikalthapa.github.io/chess-game",
    githubUrl: "https://github.com/bikalthapa/chess-game",
    techStack: ["React"],
    date: "February 2024",
    category: "Game",
    rating: 4.3
  },
  {
    id: "2",
    title: "Quiz Game in react js.",
    description: "A dynamic quiz application with multiple categories and score tracking, built using React.",
    imageUrl: "images/project_img/quiz_app_react.png",
    demoUrl: "https://bikalthapa.github.io/quiz_app_react",
    githubUrl: "https://github.com/bikalthapa/quiz_app_react",
    techStack: ["React"],
    date: "February 2024",
    category: "Game",
    rating: 4.1
  },
  {
    id: "3",
    title: "Tic Tac Toe Game",
    description: "Classic Tic Tac Toe game built with JavaScript, offering a simple and responsive UI.",
    imageUrl: "images/project_img/tic-tac-toe.png",
    demoUrl: "https://bikalthapa.github.io/tic-tac-toe",
    githubUrl: "https://github.com/bikalthapa/tic-tac-toe",
    techStack: ["JavaScript", "HTML/CSS"],
    date: "February 2024",
    category: "Game",
    rating: 4.7
  },
  {
    id: "3",
    title: "Card Memorize Game",
    description: "A best game to increase the memory power.",
    imageUrl: "images/project_img/memorize_game.png",
    demoUrl: "https://bikalthapa.github.io/memorize_game",
    githubUrl: "https://github.com/bikalthapa/memorize_game",
    techStack: ["JavaScript", "HTML/CSS"],
    date: "February 2024",
    category: "Game",
    rating: 3.7
  },
  {
    id: "4",
    title: "Real Time Analog Clock in JS.",
    description: "An elegant real-time analog clock using vanilla JavaScript and CSS for animations.",
    imageUrl: "images/project_img/analog_clock.png",
    demoUrl: "https://bikalthapa.github.io/analog-clock",
    githubUrl: "https://github.com/bikalthapa/analog-clock",
    techStack: ["JavaScript", "HTML/CSS"],
    date: "February 2024",
    category: "Utility",
    rating: 4.0
  },
  {
    id: "5",
    title: "CSS heartbeat animation",
    description: "A smooth and clean CSS animation that mimics a heartbeat using keyframes and transformations.",
    imageUrl: "images/project_img/heart_beat_animation.png",
    demoUrl: "https://bikalthapa.github.io/css-heart",
    githubUrl: "https://github.com/bikalthapa/css-heart",
    techStack: ["CSS"],
    date: "February 2024",
    category: "Utility",
    rating: 3.9
  },
  {
    id: "6",
    title: "Scientific Calculator using HTML",
    description: "A feature-rich scientific calculator supporting advanced math operations and responsive design.",
    imageUrl: "images/project_img/scientific_calculator.png",
    demoUrl: "https://bikalthapa.github.io/scientific-calculator",
    githubUrl: "https://github.com/bikalthapa/scientific-calculator",
    techStack: ["JavaScript", "HTML/CSS"],
    date: "February 2024",
    category: "Utility",
    rating: 4.4
  },
  {
    id: "7",
    title: "Temperature Converter into three units.",
    description: "A simple tool to convert temperature values between Celsius, Fahrenheit, and Kelvin.",
    imageUrl: "images/project_img/temperature_converter.png",
    demoUrl: "https://bikalthapa.github.io/temperature-converter",
    githubUrl: "https://github.com/bikalthapa/temperature-converter",
    techStack: ["JavaScript", "HTML/CSS"],
    date: "February 2024",
    category: "Utility",
    rating: 4.2
  }
];







// Skills Data
const skillsData = {
  frontend: [
    { name: "HTML/CSS", level: 100 },
    { name: "JavaScript", level: 90 },
    { name: "Responsive Design", level: 95 },
    { name: "Tailwind CSS", level: 85 },
    { name: "UI/UX Design", level: 80 },
  ],
  backend: [
    { name: "Node.js", level: 80 },
    { name: "Express", level: 75 },
    { name: "MongoDB", level: 70 },
    { name: "PostgreSQL", level: 65 },
    { name: "API Development", level: 85 },
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Docker", level: 70 },
    { name: "VS Code", level: 95 },
    { name: "Figma", level: 80 },
    { name: "Terminal", level: 85 },
  ]
};

// Testimonials Data
const testimonialsData = [
  {
    id: "1",
    name: "Alex Johnson",
    role: "Product Manager at TechCorp",
    content: "Working with this developer was a fantastic experience. Their attention to detail and ability to translate our vision into a functional product exceeded our expectations.",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format"
  },
  {
    id: "2",
    name: "Sarah Williams",
    role: "CEO at StartupX",
    content: "Incredible work ethic and technical skills. Our project was delivered on time with excellent code quality and documentation. Would definitely work with them again.",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format"
  },
  {
    id: "3",
    name: "Michael Chen",
    role: "CTO at DataSystems",
    content: "The developer brought innovative solutions to our complex problems. Their expertise in both frontend and backend development made our application seamless.",
    avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format"
  }
];
