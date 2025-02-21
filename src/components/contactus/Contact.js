import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../contactus/Contact.css'; // External CSS for styling

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [status, setStatus] = useState('');

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('your-service-id', 'your-template-id', e.target, 'your-user-id')
      .then(
        (response) => {
          setStatus('Success! Your message has been sent.');
        },
        (error) => {
          setStatus('Failed to send the message, please try again.');
        }
      );
  };

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {status && <div className="status-message">{status}</div>}
    </div>
  );
};

export default ContactUs;
