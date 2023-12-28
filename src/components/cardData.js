import { FaReact, FaVuejs, FaSass } from "react-icons/fa";
import { SiNextdotjs, SiTile } from "react-icons/si";
import { SiNuxtdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaLanguage, FaChartLine, FaChartBar } from "react-icons/fa";
import { DiPython } from "react-icons/di";

const cardData = [
  {
    id: "1",
    title:
      "Checklist Charm: Building an Interactive To-Do List Web App with React",
    technologies: [
      <FaReact className="react" size={25} />,
      <SiTailwindcss className="tailwind" size={25} />,
    ],
    img: "./images/todolist.png",
    description:
      "Task Manager created by React.js. The project showcases my skills in frontend development, user interface design, and the implementation of dynamic features. ",
    link: "https://dnklheit.github.io/to/",
  },
  {
    id: "2",

    title: "Weather Report - Havona",
    technologies: [
      <FaVuejs size={25} className="react" />,
      <SiTailwindcss className="tailwind" size={25} />,
    ],
    img: "./images/havona.jpg",
    description:
      "Welcome to Havona Weather created by React.js, your go-to destination for up-to-date and accurate weather information.",
    link: "https://weather-app-fawn-nu.vercel.app/",
  },
  {
    id: "3",

    title: "Calendar",
    technologies: [
      <FaReact className="react" size={25} />,
      <SiTailwindcss className="tailwind" size={25} />,
    ],
    img: "./images/calendar.jpg",
    description:
      "Experience seamless organization and effortless scheduling with React and Tailwind-powered Calendar App.",
    link: "https://dnklheit.github.io/calendar-app/",
  },

  {
    id: "4",
    title: "PokeProfiler App",
    technologies: [
      <SiNextdotjs className="next" size={25} />,
      <SiTailwindcss className="tailwind" size={25} />,
    ],
    img: "./images/pokemon.jpg",
    description:
      "Gotta catch em all with Next.js and Tailwind.css ! Search your favorite pokemon and see their abilities",
    link: "https://alakazam-alpha.vercel.app",
  },
  {
    id: "5",
    title: "Millionare",
    technologies: [
      <FaReact size={25} className="react " />,
      <FaSass className="sass" size={25} />,
    ],
    img: "./images/millionare.jpeg",
    description:
      "Who Wants to Be a Millionaire ? Series of multiple-choice questions that each have four possible answers (A,B,C,D). The contestant must answer 15 of these questions correctly, one at a time, in order to win the million dollars. As soon as the contestant answers a question incorrectly, the game is over.",
    link: "https://dnklheit.github.io/millionare/",
  },
  {
    id: "6",
    title:
      "Harmony in Discord: Analyzing Borderline Personality Disorder Patterns in Metal Music Lyrics with NLP",
    technologies: [
      <FaLanguage className="nlp" size={25} />,
      <DiPython className="python" size={25} />,
    ],
    img: "./images/music-and-bpd.jpg",
    description:
      "This Kaggle project is a special exploration where I combine my interest in data science with a focus on emotional health. I conducted an in-depth analysis using natural language processing (NLP) techniques to understand the relationship between Borderline Personality Disorder (BPD) and metal music. ",
    link: "https://www.kaggle.com/code/buraknver/borderline-personality-disorder-metal-music-nlp",
  },
  {
    id: "7",
    title: "Emotion Detection with FaceAPI",
    technologies: [],
    img: "./images/emotion.jpeg",
    description:
      "Analyze and interpret facial expressions and emotions in real time with top-notch emotion recognition software.",
    link: "https://dnklheit.github.io/Emotionrec/",
  },
  {
    id: "8",
    title: "Speech to Text AI Notebook",
    technologies: [<FaVuejs className="vue" size={25} />],
    img: "./images/speechtotext.png",
    description:
      "Speech to text is a powerful voice to text app, that provides continuous speech recognition that helps you create long notes.",
    link: "https://speechtotext-inky.vercel.app/",
  },
];

export default cardData;
