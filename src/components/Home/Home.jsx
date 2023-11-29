import React, { useRef, useEffect } from "react";
import styles from "./Home.module.css";
import Reveal from "../Reveal/Reveal";
import {
  FaReact,
  FaArrowAltCircleRight,
  FaVuejs,
  FaPalette,
  FaSass,
} from "react-icons/fa";

const Home = () => {
  const rotationRef = useRef(null);

  useEffect(() => {
    const rotateInterval = setInterval(() => {
      if (rotationRef.current) {
        rotationRef.current.style.transform = `rotate(${
          (rotationRef.current.rotation || 0) + 1
        }deg)`;
        rotationRef.current.rotation = (rotationRef.current.rotation || 0) + 1;
      }
    }, 30); // Adjust the interval as needed

    return () => clearInterval(rotateInterval);
  }, []);

  return (
    <section id="home">
      <Reveal>
        <div className="container">
          <div className={styles.home}>
            <div className={styles["home-content"]}>
              <div className={styles["home-title"]}>
                <h2>Hey, I'm Burak</h2>
              </div>
              <div className={styles["text-wrapper"]}>
                <p>Frontend Developer</p>
              </div>

              <div className={styles.links}>
                <div className={styles.link}>
                  <a href="#portfolio">Explore My Projects</a>
                </div>
                <span className={styles.divider}>or</span>
                <div className={styles.linkk}>
                  <a href="#about">Learn About Me</a>
                </div>
              </div>
              <div className={styles["icons"]}>
                <div className={styles["icons-container"]}>
                  <FaReact className={styles["react"]} title="React" />
                  <FaArrowAltCircleRight
                    className={styles["next"]}
                    title="Next.js"
                  />
                  <FaVuejs className={styles["vue"]} title="Vue.js" />
                  <FaPalette
                    className={styles["tailwind"]}
                    title="Tailwind CSS"
                  />
                  <FaSass className={styles["sass"]} title="Sass" />
                </div>
                <div className={styles.scroll}>
                  <a a href="#contact">
                    <span>Contact Me</span>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.circle}>
              <div className={styles.content}>
                <img src="./images/burak4.jpg" alt="Burak" />
                <a
                  href="./images/BurakCV.pdf"
                  download="Burak_Unver_Jr_Data_Scientist.pdf"
                >
                  Download CV !
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Home;
