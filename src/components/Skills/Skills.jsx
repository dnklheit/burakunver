import React from "react";
import { FaReact, FaVuejs, FaSass } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiNuxtdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaLanguage, FaChartLine, FaChartBar } from "react-icons/fa";
import { DiPython } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills-section">
        <div className="skills">
          <div className="frontend">
            <ul className="skill-item react">
              <li>React.js</li>
              <li>
                <FaReact className="react-icon" />
              </li>
            </ul>
            <ul className="skill-item next">
              <li>Next.js</li>
              <li>
                <SiNextdotjs className="next-icon" />
              </li>
            </ul>
            <ul className="skill-item vue">
              <li>Vue.js</li>
              <li>
                <FaVuejs className="vue-icon" />
              </li>
            </ul>
            <ul className="skill-item vue">
              <li>Nuxt.js</li>
              <li>
                <SiNuxtdotjs className="nuxt-icon" />
              </li>
            </ul>
            <ul className="skill-item sass">
              <li>Sass</li>
              <li>
                <FaSass className="sass-icon" />
              </li>
            </ul>
            <ul className="skill-item tailwind">
              <li>Tailwind</li>
              <li>
                <SiTailwindcss className="tailwind-icon" />
              </li>
            </ul>
            <ul className="skill-item bootstrap">
              <li>Bootstrap</li>
              <li>
                <FaBootstrap className="bootstrap-icon" />
              </li>
            </ul>
            <ul className="skill-item html">
              <li>HTML</li>
              <li>
                <DiHtml5 className="html-icon" />
              </li>
            </ul>
            <ul className="skill-item css">
              <li>CSS</li>
              <li>
                <DiCss3 className="css-icon" />
              </li>
            </ul>
          </div>
          <div className="datasci">
            <ul className="skill-item python">
              <li>Python</li>
              <li>
                <DiPython className="py-icon" />
              </li>
            </ul>
            <ul className="skill-item nlp">
              <li>NLP</li>
              <li>
                <FaLanguage className="nlp-icon" />
              </li>
            </ul>
            <ul className="skill-item lda">
              <li>LDA</li>
              <li>
                <FaLanguage className="lda-icon" />
              </li>
            </ul>
            <ul className="skill-item seaborn">
              <li>Seaborn</li>
              <li>
                <FaChartBar className="seaborn-icon" />
              </li>
            </ul>
            <ul className="skill-item matplot">
              <li>Matplot</li>
              <li>
                <FaChartLine className="matplot-icon" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
