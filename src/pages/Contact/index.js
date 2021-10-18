// import react + useState and validate email helper
import emailjs from "emailjs-com";
import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  // set up form state - name, email and message are empty
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;

  // set errorMessage -- none to start
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    if (e.target.name === "email") {
      // validate email address using helper
      const isValid = validateEmail(e.target.value);

      //   is valid conditional statement
      if (!isValid) {
        // error message if email not valid
        setErrorMessage("Your email is invalid.");
      } else {
        // else no message
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        // if user clicks out of box without entering value, name or message or email is required error message appears
        setErrorMessage(`${e.target.name} is required`);
      } else {
        // else no message
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      // if no error message, set the form state
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qzw23pw",
        "template_145mvxn",
        e.target,
        "user_gtluYGBzv6Ty1a8Rh6Yuq"
      )
      .then(
        (result) => {
          console.log(result.text);
          setErrorMessage("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <section className="container-style">
      <h1 data-testid="h1tag" className="page-title">
        Contact me
      </h1>
      <form
        id="contact-form"
        // handle form submission - not being used but ready to be defined in future
        onSubmit={handleSubmit}
        className="main-cont-background"
      >
        <div className="d-flex flex-column ">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            defaultValue={name}
            name="name"
            // on blur handleChange function call - value entered or not
            onBlur={handleChange}
          />
        </div>
        <div className="d-flex flex-column">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            defaultValue={email}
            name="email"
            // on blur handleChange function call - value entered or not and is it valid email
            onBlur={handleChange}
          />
        </div>
        <div className="d-flex flex-column">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            defaultValue={message}
            // on blur handleChange function call - value entered or not
            onBlur={handleChange}
            rows="5"
          />
        </div>
        {/* show error message when there is one */}
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="buttontag" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

// export contact form
export default ContactForm;
