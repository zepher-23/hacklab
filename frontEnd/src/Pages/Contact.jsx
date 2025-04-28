// src/Pages/Contact.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Components/Navbar'; // Import the Navbar component

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission (e.g., send form data to an API)
    console.log('Form submitted', formData);
    alert('Your message has been submitted!');
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white flex flex-col">
        <Navbar /> 
      <header className="bg-[#2C2C2C] text-white py-6 border-b-2 border-[#1A1A1A]">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-extrabold text-white">Contact HackLab</h1>
         
        </div>
      </header>

      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-white">Get in Touch</h2>
        <p className="text-lg text-gray-300 mt-4">
          We would love to hear from you! Whether you have questions or need support, feel free to reach out.
        </p>

        <div className="mt-8 max-w-lg mx-auto bg-[#2C2C2C] p-6 rounded-lg shadow-lg border-2 border-green-400">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-semibold text-white">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full mt-2 p-3 rounded-md bg-[#1A1A1A] text-white border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-semibold text-white">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full mt-2 p-3 rounded-md bg-[#1A1A1A] text-white border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-semibold text-white">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="4"
                className="w-full mt-2 p-3 rounded-md bg-[#1A1A1A] text-white border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-4 bg-green-400 text-white rounded-lg font-semibold hover:bg-green-500 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-[#2C2C2C] text-white py-6">
        <div className="max-w-screen-xl mx-auto text-center">
          <p>&copy; 2025 HackLab. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
