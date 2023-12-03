import styles from "./Cards.module.css";
import { Link } from "react-router-dom";

const CustomLink = ({ to, children }) => {
  return (
    <a href={to} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

const Cards = ({ image, title, technologies, description, link }) => {
 

  return (
    <li>
      <div className={styles.card}>
        <img src={image} alt="" />
        <div className={styles["card-overlay"]}>
          <div className={styles["card-header"]}>
            <div className={styles["card-content"]}>
              <h3 className={styles["card-title"]}>{title}</h3>
              <h3 className={styles["card-type"]}>
                <span className={styles['card-tech']}> {technologies}</span>{" "}
              </h3>
            </div>
          </div>
          <p className={styles["card-description"]}>
            {description}
            <br />
            <br />
            <CustomLink to={link}>Check it</CustomLink>
          </p>
        </div>
      </div>
    </li>
  );
};

export default Cards;
