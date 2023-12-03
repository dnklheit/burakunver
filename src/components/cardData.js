import {
  FaReact,
  FaArrowAltCircleRight,
  FaVuejs,
  FaPython,
  FaPalette,
  FaSass,
  FaLanguage,
} from "react-icons/fa";

const cardData = [
  {
    id: "1",
    title:
      "Harmony in Discord: Analyzing Borderline Personality Disorder and Metal Music Lyrics with Data Science",
    technologies: [ <FaLanguage className="nlp" size={25}/>,<FaPython className='python'size={25}/>],
    img: "./images/music-and-bpd.jpg",
    description:
      "This Kaggle project is a special exploration where I combine my interest in data science with a focus on emotional health. I conducted an in-depth analysis using natural language processing (NLP) techniques to understand the relationship between Borderline Personality Disorder (BPD) and metal music. ",
    link: "https://www.kaggle.com/code/buraknver/borderline-personality-disorder-metal-music-nlp",
  },

  {
    id: "2",
    title:
      "Checklist Charm: Building an Interactive To-Do List Web App with React",
    technologies: [
      <FaReact className="react" size={25} />,
      <FaPalette className="tailwind" size={25} />,
    ],
    img: "./images/todolist.png",
    description:
      "Task Manager created by React.js. The project showcases my skills in frontend development, user interface design, and the implementation of dynamic features. ",
    link: "https://dnklheit.github.io/to/",
  },
  {
    id: "3",

    title: "Weather Report - Havona",
    technologies: <FaReact size={25} className="react" />,
    img: "./images/havona.jpg",
    description:
      "Welcome to Havona Weather created by React.js, your go-to destination for up-to-date and accurate weather information.",
    link: "https://dnklheit.github.io/havona/",
  },
  {
    id: "4",
    title: "Calendar",
    technologies: [
      <FaReact size={25} className="react" />,
      <FaPalette className="tailwind" size={25} />,
    ],
    img: "./images/calendar.jpg",
    description: "Simple calendar app created by React.js and Tailwind.css",
    link: "https://dnklheit.github.io/calendar-app/",
  },
  {
    id: "5",
    title: "PokeProfiler App",
    technologies: [
      <FaArrowAltCircleRight className="next" size={25} />,
      <FaPalette className="tailwind" size={25} />,
    ],
    img: "./images/pokemon.jpg",
    description:
      "Gotta catch em all with Next.js and Tailwind.css ! Search your favorite pokemon and see their abilities",
    link: "https://alakazam-alpha.vercel.app",
  },
  {
    id: "6",
    title: "Millionare",
    technologies: [
      <FaReact size={25} className="react " />,
      <FaSass className="sass" size={25} />,
    ],
    img: "./images/million.jpg",
    description:
      "Who Wants to Be a Millionaire ? Series of multiple-choice questions that each have four possible answers (A,B,C,D). The contestant must answer 15 of these questions correctly, one at a time, in order to win the million dollars. As soon as the contestant answers a question incorrectly, the game is over.",
    link: "https://dnklheit.github.io/millionare/",
  },
];

export default cardData;
