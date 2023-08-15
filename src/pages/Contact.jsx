import "../styles/Contact.css";
import { useState } from "react";

function Contact() {
  //set the fields default state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    //get contents of the input field
    const { name, value } = event.target;

    //ternaqry operator to set the state of the input field
    return name === "name"
      ? setName(value)
      : name === "email"
      ? setEmail(value)
      : setMessage(value);
  };

  function validateForm() {
    let isValid = true;
    const validationErrors = {};

    if (!name.trim()) {
      validationErrors.name = "Name is required";
      isValid = false;
    }

    if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      validationErrors.email = "A valid email is required";
      isValid = false;
    }

    if (!message.trim()) {
      validationErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(validationErrors);

    return isValid;
  }

  const handleFormSubmit = (event) => {
    //prevent page from refreshing
    event.preventDefault();

    if (validateForm()) {
      alert(
        `Hello ${name}, your email is ${email}, and your message is ${message}`
      );
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
    }
  };

  return (
    <div className="contact">
      <h1>Contact</h1>
      <form className="contact-form flex-column" onSubmit={handleFormSubmit}>
        <div className="flex-column">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={handleInputChange}
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>
        <div className="flex-column">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleInputChange}
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>
        <div className="flex-column">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            value={message}
            onChange={handleInputChange}
          />
          {errors.message && (
            <div className="error-message">{errors.message}</div>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
