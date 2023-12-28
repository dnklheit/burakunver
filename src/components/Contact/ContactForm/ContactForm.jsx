import React, { useState } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [touchFields, setTouchedFields] = useState([]);
  const [emailStatus, setEmailStatus] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setEnteredName(value);
    } else if (name === "email") {
      setEnteredEmail(value);
    } else if (name === "message") {
      setEnteredMessage(value);
    }
  };

  const handleInputBlur = (event) => {
    const { name } = event.target;
    if (!touchFields.includes(name)) {
      setTouchedFields((prevFields) => [...prevFields, name]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: enteredName,
      email: enteredEmail,
      message: enteredMessage,
    };

    try {
      const response = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Email sent successfully");
        setEmailStatus("success");
      } else {
        console.error(
          "Failed to send email. Server responded with:",
          response.statusText
        );
        setEmailStatus("error");
      }
    } catch (error) {
      console.error("Error sending email", error);
      setEmailStatus("error");
    }

    // Reset form fields if needed
  };

  const isFieldInvalid = (fieldName) => {
    if (fieldName === "name") {
      return enteredName.trim() === "" && touchFields.includes(fieldName);
    }
    if (fieldName === "email") {
      return (
        (!enteredEmail.trim() || !emailIsValid(enteredEmail)) &&
        touchFields.includes(fieldName)
      );
    }
    if (fieldName === "message") {
      return enteredMessage.trim() === "" && touchFields.includes(fieldName);
    }
    return false;
  };

  const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      {emailStatus === "success" && (
        <p className={styles.success}>Email sent successfully!</p>
      )}
      {emailStatus === "error" && (
        <p className={styles.error}>
          Failed to send email. Please try again later.
        </p>
      )}
      <div
        className={`${styles["form-control"]} ${
          isFieldInvalid("name") && styles.invalid
        }`}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={enteredName}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          autoComplete="name"
        />
        {isFieldInvalid("name") && (
          <p className={styles.error}>Please enter your name.</p>
        )}
      </div>
      <div
        className={`${styles["form-control"]} ${
          isFieldInvalid("email") && styles.invalid
        }`}
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={enteredEmail}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          autoComplete="email"
        />
        {isFieldInvalid("email") && (
          <p className={styles.error}>
            Please enter a valid email address with the correct format.
          </p>
        )}
      </div>
      <div
        className={`${styles["form-control"]} ${
          isFieldInvalid("message") && styles.invalid
        }`}
      >
        <textarea
          name="message"
          placeholder="Message"
          value={enteredMessage}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          autoComplete="off"
          className={styles.textarea}
        ></textarea>
        {isFieldInvalid("message") && (
          <p className={styles.error}>Please enter your message.</p>
        )}
      </div>
      <button className={styles.button}>Send Message</button>
    </form>
  );
};

export default ContactForm;
