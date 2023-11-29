import React, { useRef, useEffect} from "react";
import svg from "../Home/softskills.svg";
import styles from './About.module.css';
import Reveal from '../Reveal/Reveal';

const About = () => {
  const rotationRef = useRef(null);

  useEffect(() => {
    const rotateInterval = setInterval(() => {
      if (rotationRef.current) {
        rotationRef.current.style.transform = `rotate(${(rotationRef.current.rotation || 0) + 1}deg)`;
        rotationRef.current.rotation = (rotationRef.current.rotation || 0) + 1;
      }
    }, 30); // Adjust the interval as needed

    return () => clearInterval(rotateInterval);
  }, [])
  return (
    <Reveal>

    <section id='about' className={styles.aboutSection}>
        <div className={styles.about}>
       
          <div className={styles.aboutContent}>
          <div className={styles.circ}>
            <div className={`${styles.softskills} ${styles.rotation}`} ref={rotationRef}>
        <img src={svg} alt="svg" />
      </div>
              <div className={styles.circle}>
                <div className={styles.content}>
                  <img src="./images/burak4.jpg" alt="Burak" />
                </div>
              </div>
          </div>
            
            <p className={styles.aboutText}>
              I'm <span className={styles.name}>Burak</span>,  a frontend enthusiast deeply immersed in the worlds of React, Tailwind CSS, Vue.js, Next.js, and Sass. My passion for crafting exceptional digital experiences is fueled by the seamless synergy of these technologies. With a robust skill set and a dedication to excellence, I am equipped to bring your projects to life.
 <br/> 
 <br/> 
 Every step of the design process, from ideation to collaboration, excites me. Let's embark on a journey to create innovative and visually captivating web solutions that resonate with your audience.
            </p>
          </div>
        </div>
    </section>
    </Reveal>

  );
}

export default About;
