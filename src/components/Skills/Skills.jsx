// Skills.js

import React from 'react';
import {
  FaReact,
  FaArrowAltCircleRight,
  FaVuejs,
  FaPalette,
  FaSass,
  FaLanguage,
  FaNlp, 
  FaChartLine, 
  FaChartBar
  
} from "react-icons/fa";
import { DiPython } from 'react-icons/di';
import './Skills.css';

const Skills = () => {
  return (
    <section id='skills'>
      <div className='skills-section'>
          <div className='skills'>
            <ul className='skill-item react'>
              <li>React</li>
              <li><FaReact className='react-icon'/></li>
            </ul>
            <ul className='skill-item vue'>
              <li>Vue</li>
              <li><FaVuejs className='vue-icon'/></li>
            </ul>
            <ul className='skill-item next'>
              <li>Next</li>
              <li><FaArrowAltCircleRight className='next-icon'/></li>
            </ul>
            <ul className='skill-item tailwind'>
              <li>Tailwind</li>
              <li><FaPalette className='tailwind-icon'/></li>
            </ul>
            <ul className='skill-item sass'>
              <li>Sass</li>
              <li><FaSass className='sass-icon'/></li>
            </ul>
            <ul className='skill-item python'>
                <li>Python</li>
                <li><DiPython className='py-icon'/></li>
              </ul>
              <ul className='skill-item nlp'>
                <li>NLP</li>
                <li><FaLanguage className='nlp-icon'/></li>
              </ul>
              <ul className='skill-item lda'>
                <li>LDA</li>
                <li><FaLanguage className='lda-icon'/></li>
              </ul>
              <ul className='skill-item seaborn'>
                <li>Seaborn</li>
                <li><FaChartBar className='seaborn-icon'/></li>
              </ul>
              <ul className='skill-item matplot'>
                <li>Matplot</li>
                <li><FaChartLine className='matplot-icon'/></li>
              </ul>
          </div>
        </div>

            
    </section>
  )
}

export default Skills;
