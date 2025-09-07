import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './Contact.css'; // CSS separado

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData
        }).toString()
      });

      if (response.ok) {
        Swal.fire({
          title: "Message was sent!",
          text: "Thank you for your message. I'll get back to you soon!",
          icon: "success",
          draggable: true
        });

        // Limpar o formulário
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again later.",
      });
    }
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">Get in <span>Touch</span></h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p><strong>Email:</strong> juliabecho@gmail.com</p>
          <p><strong>Phone:</strong> +1 (778) 246-5707</p>
          <p><strong>Location:</strong> Vancouver, BC, Canada</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitch"></i></a>
          </div>
        </div>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="contact-form"
        >
          <input type="hidden" name="form-name" value="contact" />
          <h3>Send a Message</h3>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};
