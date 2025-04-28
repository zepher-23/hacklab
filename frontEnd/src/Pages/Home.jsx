// src/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Components/Navbar'; // Import the Navbar component


const Home = () => {
  return (
    <div className="min-h-screen bg-[#2C2C2C] text-white flex flex-col">
        <Navbar /> {/* Include the Navbar component */}

      

      <section className="bg-[#2C2C2C] text-white flex flex-col items-center justify-center flex-grow py-24">
        <h2 className="text-5xl font-extrabold text-white mb-4">Learn Ethical Hacking with Real-Time Labs</h2>
        <p className="text-xl mb-8 text-center text-gray-300">Explore vulnerabilities, learn security techniques, and hack in a safe environment.</p>
        <a
          href="#features"
          className="bg-green-400 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-green-500 transition duration-300"
        >
          Start Learning
        </a>
      </section>

      <section id="about" className="py-16 px-6 bg-[#1A1A1A]">
        <div className="max-w-screen-xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-6">About HackLab</h3>
          <p className="text-lg mb-6 text-gray-300">
            HackLab is an online platform designed to teach ethical hacking through real-time labs. 
            Whether you're a beginner or an expert, our hands-on environment allows you to experiment and 
            learn hacking techniques in a safe, controlled setting.
          </p>
        </div>
      </section>

      <section id="features" className="py-16 px-6 bg-[#2C2C2C] text-white">
        <div className="max-w-screen-xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-[#2C2C2C] p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 border-2 border-green-400">
              <h4 className="text-2xl font-semibold text-green-400 mb-3">Hands-On Labs</h4>
              <p>Explore real-world vulnerabilities and practice on live systems.</p>
            </div>
            <div className="bg-[#2C2C2C] p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 border-2 border-green-400">
              <h4 className="text-2xl font-semibold text-green-400 mb-3">Live Training</h4>
              <p>Watch live hacking sessions and learn from experts in real-time.</p>
            </div>
            <div className="bg-[#2C2C2C] p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 border-2 border-green-400">
              <h4 className="text-2xl font-semibold text-green-400 mb-3">Community Support</h4>
              <p>Join a community of ethical hackers to discuss challenges and solutions.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-6 bg-[#1A1A1A] text-white">
        <div className="max-w-screen-xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Contact Us</h3>
          <p className="text-lg mb-6 text-gray-300">Have any questions? Get in touch with us to learn more about HackLab.</p>
          <a
            href="mailto:contact@hacklab.com"
            className="bg-green-400 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-green-500 transition duration-300"
          >
            Email Us
          </a>
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

export default Home;
