import React from 'react';
import styles from './Portfolio.module.css';
import cardData from '../cardData';
import Cards from './Cards/Cards';
import Reveal from '../Reveal/Reveal';


const Portfolio = () => {
  return (
    <Reveal>

    <section id='portfolio' className={styles.portfolio}>
        <div className='container'>
            <div className={styles.title}>
                <h2>
                    Projects
                </h2>
            </div> 
            <ul className={styles.cards}>
            {cardData.map((item) => (
                <Cards key={item.id} image={item.img}  title={item.title} level={item.level} description={item.description} link={item.link}/>
            ))}
            </ul>
        </div>
    </section>
    </Reveal>

  );
};

export default Portfolio;