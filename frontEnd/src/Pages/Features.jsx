// src/Features.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Components/Navbar'; // Import the Navbar component

const Features = () => {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white flex flex-col">
        <Navbar /> {/* Include the Navbar component */}
      <header className="bg-[#2C2C2C] text-white py-6 border-b-2 border-[#1A1A1A]">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-extrabold text-white">HackLab Features</h1>
         
        </div>
      </header>

      <section id="labs" className="py-16 px-6 bg-[#2C2C2C] text-white">
        <div className="max-w-screen-xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Hands-On Labs</h3>
          <p className="text-lg mb-6 text-gray-300">
            Explore a wide range of vulnerabilities through hands-on lab environments. Learn how to exploit them in real-time while also understanding how to defend against them.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-[#2C2C2C] p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 border-2 border-green-400">
              <h4 className="text-2xl font-semibold text-green-400 mb-3">Web Application Security</h4>
              <p>Learn how to identify and exploit common vulnerabilities in web applications such as SQL injection, XSS, and more.</p>
            </div>
            <div className="bg-[#2C2C2C] p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 border-2 border-green-400">
              <h4 className="text-2xl font-semibold text-green-400 mb-3">Network Security</h4>
              <p>Understand network protocols and practice on real-world attack vectors like Man-in-the-Middle, DNS Spoofing, and more.</p>
            </div>
            <div className="bg-[#2C2C2C] p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 border-2 border-green-400">
              <h4 className="text-2xl font-semibold text-green-400 mb-3">Privilege Escalation</h4>
              <p>Learn techniques to escalate privileges and gain unauthorized access to critical systems within a network.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="training" className="py-16 px-6 bg-[#1A1A1A] text-white">
        <div className="max-w-screen-xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Live Training</h3>
          <p className="text-lg mb-6 text-gray-300">
            Watch live hacking sessions conducted by experienced professionals. Learn the tricks of the trade and get your hands dirty with real-time exploits.
          </p>
          <a
            href="#contact"
            className="bg-green-400 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-green-500 transition duration-300"
          >
            Join a Live Session
          </a>
        </div>
      </section>

      <section id="community" className="py-16 px-6 bg-[#2C2C2C] text-white">
        <div className="max-w-screen-xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Community Support</h3>
          <p className="text-lg mb-6 text-gray-300">
            Join a community of like-minded ethical hackers. Share knowledge, ask questions, and participate in forums to sharpen your skills.
          </p>
          <a
            href="#contact"
            className="bg-green-400 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-green-500 transition duration-300"
          >
            Join the Community
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

export default Features;
