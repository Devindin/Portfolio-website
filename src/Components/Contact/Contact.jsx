import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import contactCSS from "../Contact/Contact.module.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send('service_bcf23hk', 'template_xtk2x5u', formData, 'bZnD0ijeyWo4TuhEu')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      }, (err) => {
        console.log('FAILED...', err);
        alert('Message failed to send.');
      });
  };

  return (
    <div id="contact" className={`${contactCSS.ContactWrapper} section`}>
      <h3 className="sectionheading">
        <i className="ri-shining-fill"></i> Contact
      </h3>
      <h1 className="section_Title">
        Let's Make Awesome <br />
        Together
      </h1>
      <form onSubmit={sendEmail}>
        <div className={contactCSS.inputWrapper}>
          <div className={contactCSS.input_Container}>
            <input type="text" name="name" placeholder="Enter Name " value={formData.name} onChange={handleChange} />
          </div>
          <div className={contactCSS.input_Container}>
            <input type="text" name="company" placeholder="Enter Company Name " value={formData.company} onChange={handleChange} />
          </div>
          <div className={contactCSS.input_Container}>
            <input type="email" name="email" placeholder="Enter Email " value={formData.email} onChange={handleChange} />
          </div>
          <div className={contactCSS.input_Container}>
            <input type="text" name="phone" placeholder="Enter Phone Number " value={formData.phone} onChange={handleChange} />
          </div>
        </div>
        <textarea name="message" placeholder='Message' value={formData.message} onChange={handleChange}></textarea>
        <button type="submit">Submit</button>
      </form>
      <div className={contactCSS.contactDetails}>
        <div className={contactCSS.card}>
          <h3>Location <span> Wennappuwa</span></h3>
        </div>
        <div className={contactCSS.card}>
          <h3>Phone<span> 077 439 7707</span></h3>
        </div>
        <div className={contactCSS.card}>
          <h3>Email <span> devindikarunathilaka88@gmail.com</span></h3>
        </div>
      </div>
    </div>
  );
}

export default Contact;
