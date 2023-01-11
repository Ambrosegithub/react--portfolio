import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineMail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { RiWhatsappLine } from 'react-icons/ri';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bxd885r', 'template_f0fxv9i', form.current, 'EgNkLKHvGtDYpfm1r');
      e.target.reset();
  };
  return (
    <section id="Contacts">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ambrisexyz@gmail.com</h5>
            <a href="mailto:ambrissexyz@gmail.com" target="_blank">Send A Message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Ambrose Isigba David</h5>
            <a href="https://m.me/ambrose.isigba.5/" target="_blank">Send A Message</a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+39+</h5>
            <a href="https://wa.me/send?phone+393512462798" target="_blank">Send A Message</a>
          </article>
        </div>
        {/** END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message"rows="7" placeholder="Send Me Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
