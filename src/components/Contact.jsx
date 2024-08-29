import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import '../styles/Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isMapOpen, setIsMapOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_68fiq95', 'template_iu4jizq', formData, '10HL6F3HjEcvrq2p6')
      .then((result) => {
        toast.success('Message sent successfully!'); // Success toast
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        toast.error('Failed to send message, please try again.'); // Error toast
      });
  };

  return (
    <section id="contact" className="contact">
      {/* ToastContainer is required to show the toast notifications */}
      <ToastContainer />

      <div className="contact__title">
        <p>Contact</p>
        <h2>Don't be shy! Hit me up! 👇</h2>
      </div>
      <div className="contact__content">
        <div className="contact__info">
          <div className="contact__icons">
            <div className="icon-box" onClick={() => setIsMapOpen(true)}>
              <FaMapMarkerAlt size={24} />
              <p>Location</p>
            </div>
            <div className="icon-box">
              <FaEnvelope size={24} />
              <p><a href="mailto:yadavsujeet21@gmail.com">yadavsujeet21@gmail.com</a></p>
            </div>
          </div>
        </div>
        <div className="contact__form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {isMapOpen && (
        <div className="map-modal">
          <div className="map-modal__content">
            <span className="map-modal__close" onClick={() => setIsMapOpen(false)}>&times;</span>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160990805!2d72.74109932097204!3d19.08219783963479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63a7856a53d%3A0x49689c7b7c1a5c0f!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1691003549876!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;