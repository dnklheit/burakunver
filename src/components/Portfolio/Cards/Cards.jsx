import styles from './Cards.module.css';
import { Link } from 'react-router-dom';

const CustomLink = ({ to, children }) => {
  return (
    <Link to={to}>
      {children}
    </Link>
  );
};

const Cards = ({ image, title, level, type, description, link }) => {
    const linq = 'https://alakazam-alpha.vercel.app';

  return (
    <li>
        <div className={styles.card}>
            <img src={image} alt='' />
            <div className={styles['card-overlay']}>
                <div className={styles['card-header']}>
                  
                   <div className={styles['card-content']}>
                    <h3 className={styles['card-title']}>{title}</h3>
                    <h3 className={styles['card-type']}>Level: {level}</h3>
                </div>
            </div>
            <p className={styles['card-description']}>
            {description}
            <br/>
            <CustomLink to={linq}>Check it</CustomLink>

            </p>

        </div>
        </div>
    </li>
      );
};

export default Cards;