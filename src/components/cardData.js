import { FaReact, FaVuejs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaLanguage } from "react-icons/fa";
import { DiPython } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";

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

    title: "Rayal Park Hotel Clone Website",
    technologies: [
      <DiHtml5 className="html" size={25} />,
      <DiCss3 className="css" size={25} />,
    ],
    img: "./images/rayal-park.jpg",
    description:
      "Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your getaway truly extraordinary.",
    link: "https://hotel-california-three.vercel.app/",
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
    title: "Museek Music Website",
    technologies: [
      <DiHtml5 className="html" size={25} />,
      <DiCss3 className="css" size={25} />,
    ],
    img: "./images/screenshot.png",
    description:
      "Explore the rhythmic realm of Museek, your go-to for soulful tunes. Dive into curated genres, enhancing your auditory journey. Whether you're a casual listener or a music connoisseur, Museek caters to all.",
    link: "https://music-website-sepia.vercel.app/",
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
    link: "https://emotionrec.vercel.app/",
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
