import React, {useRef} from 'react'
import "./contact.css";
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import { BsWhatsapp } from "react-icons/bs";
import emailjs from 'emailjs-com'
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ql58847",
        "template_b07thvb",
        form.current,
        "d0Ya6bnZrphW4POy-"
    )
    e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>abhishekpandey5403@gmail.com</h5>
            <a href="mailto:abhishekpandey5403@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Abhishek Pandey</h5>
            <a href="https://m.me/abhishek_000005" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+918400562395</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+918400562395"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS  */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="7"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            {" "}
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact
