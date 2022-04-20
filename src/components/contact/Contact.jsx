import React,{ useRef } from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {FaWhatsapp} from 'react-icons/fa'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {

  const notifySuccess = () => toast.info("Successful message sent!", {
    className: "customSuccessToast",
    icon: "🚀",
    style: {backgroundColor: '#4db5ff', color: '#ffffff'},
    position: toast.POSITION.TOP_RIGHT
  });

  const notifyError = () => toast.error("Failed to send message!", {
    className: "customErrorToast",
    style: {backgroundColor: '#4db5ff', color: '#ffffff'},
    position: toast.POSITION.TOP_RIGHT
  });
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nh33q5s', 'template_js4lppd', form.current, 'cpBxa5r4B-1673Ou2')
      .then((result) => {
          console.log(result.text);
          notifySuccess();
      }, (error) => {
          console.log(error.text);
          notifyError();
      });

    e.target.reset();
  };

  return (
    <section id='contact'>
      <ToastContainer 
      autoClose={2000}
      hideProgressBar={true}
      closeOnClick
      pauseOnHover
      />
    
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dackogan@gmail.com</h5>
            <a href="mailto:dackogan@gmail.com" target="_blank">Send an email</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Xaypanya Phongsa</h5>
            <a href="https://m.me/Xaypanya.Phongsaaaa" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <FaWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+8562096106532</h5>
            <a href="https://wa.me/+8562096106532?text=Sabaidee" target="_blank">Send a message</a>
          </article>
        </div>
        {/* ======= END CONTACR OPTIONS ======= */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact