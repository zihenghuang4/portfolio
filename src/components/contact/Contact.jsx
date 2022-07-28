import React from 'react';
import './contact.css';
import MAP from "../../assets/map.jpeg";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_81fhnfd', 'template_l48emae', form.current, 'L9ruuad2ua5CF9i1R');
    e.target.reset();
  }

  return (
    <section id='contact'>
      <h5>Don't hesistate to </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="map">
          <img src={MAP} alt="MAP" />
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your full name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
};

export default Contact;