import React from "react";
import styles from "./Contact.module.css";
import Reveal from "../Reveal/Reveal";
import ContactForm from "./ContactForm/ContactForm";
import { TbPhoneCall } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { HiLocationMarker } from "react-icons/hi";

const Contact = () => {
  return (
    <section id="contact">
      <Reveal>
        <div className={styles.title}>
          <h2>Contact</h2>
        </div>

        <div className={styles.contact}>
          <div className={styles.content}>
            <p>
              Please fill out the form on this section to contact with me or
              e-mail me:
            </p>
            <div className={styles["contact-wrapper"]}>
              <TbPhoneCall className={styles["phone-icon"]} size={35} />
              <span>Call me</span>
              <h3>537 797 46 87</h3>
            </div>
            <div className={styles["contact-wrapper"]}>
              <HiOutlineMail className={styles["mail-icon"]} size={35} />
              <span>Email</span>
              <h3>burakunver.dev@gmail.com</h3>
              <div className={styles["contact-wrapper"]}>
                <HiLocationMarker className={styles["loc-marker"]} size={38} />
                <span>Location</span>
                <h3> Eskisehir, Turkiye</h3>
              </div>
            </div>
          </div>
          <div className={styles.heading}>
            <ContactForm />
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Contact;
