import React from 'react';
import styles from './Footer.module.css';
import { BsGithub, BsLinkedin, BsInstagram, BsFacebook,} from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className='container'>
            <div className={styles.flex}>
            <div>
                    <p>&copy; 
                    2023 by Burak Ünver.
                    <br /> All rights reserved.
                    </p>
                    </div>
                    <ul className={styles.pages}>
                        <li><a href='#home'>Home</a></li>
                        <li><a href='about'>About</a></li>
                        <li><a href='#Portfolio'>Portfolio</a></li>
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
                    <div className={styles.icons}>
                   
                    <a href='https://github.com/dnklheit'>
                        <BsGithub size={20} />
                    </a>
                    <a href='https://www.linkedin.com/in/burak-ünver/'>
                        <BsLinkedin size={20} />
                    </a>   
                    <a href='https://instagram.com/dnklheit/'>
                        <BsInstagram size={20} />
                    </a>
                        
                 
                    </div>
                </div>
            </div>
    </footer>
  )
}

export default Footer;