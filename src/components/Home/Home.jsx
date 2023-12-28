import React, { useRef, useEffect } from "react";
import styles from "./Home.module.css";
import Reveal from "../Reveal/Reveal";
import { FaReact, FaVuejs, FaSass } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiNuxtdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";

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
    }, 30);
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
                <p>
                  Frontend Developer <br />
                  <span>&& </span>
                  Data Scientist
                </p>
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
                  <SiNextdotjs className={styles["next"]} title="Next.js" />
                  <FaVuejs className={styles["vue"]} title="Vue.js" />
                  <SiNuxtdotjs className={styles["vue"]} title="Nuxt.js" />
                  <FaSass className={styles["sass"]} title="Sass" />

                  <SiTailwindcss
                    className={styles["tailwind"]}
                    title="Tailwind CSS"
                  />
                  <FaBootstrap
                    className={styles["bootstrap"]}
                    title="Bootstrap"
                  />
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
                <a href="./BurakUnver_CV.pdf" download="BurakUnver_CV.pdf">
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
