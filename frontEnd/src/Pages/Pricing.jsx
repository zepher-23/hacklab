// src/Pages/Pricing.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Components/Navbar'; // Import the Navbar component

const Pricing = () => {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white flex flex-col">
        <Navbar /> {/* Include the Navbar component */}
      <header className="bg-[#2C2C2C] text-white py-6 border-b-2 border-[#1A1A1A]">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-extrabold text-white">Pricing Plans</h1>
          
        </div>
      </header>

      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-white">Choose Your Plan</h2>
        <p className="text-lg text-gray-300 mt-4">
          We offer flexible pricing plans to suit your needs. Select a plan that best fits your goals and start learning today!
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="bg-[#2C2C2C] p-6 rounded-lg shadow-lg border-2 border-green-400">
            <h3 className="text-3xl font-semibold text-white">Free Plan</h3>
            <p className="text-lg text-gray-300 mt-4">Free access to basic courses and tutorials</p>
            <div className="mt-4">
              <p className="text-2xl text-white font-bold">$0</p>
              <p className="text-lg text-gray-300 mt-2">Per Month</p>
            </div>
            <ul className="mt-6 space-y-4 text-left">
              <li>Access to beginner courses</li>
              <li>Community forum support</li>
            </ul>
            <button className="w-full py-3 mt-6 bg-green-400 text-white rounded-lg font-semibold hover:bg-green-500 transition duration-300">
              Start Free Trial
            </button>
          </div>

          {/* Basic Plan */}
          <div className="bg-[#2C2C2C] p-6 rounded-lg shadow-lg border-2 border-green-400">
            <h3 className="text-3xl font-semibold text-white">Basic Plan</h3>
            <p className="text-lg text-gray-300 mt-4">Access to most courses and community support</p>
            <div className="mt-4">
              <p className="text-2xl text-white font-bold">$19</p>
              <p className="text-lg text-gray-300 mt-2">Per Month</p>
            </div>
            <ul className="mt-6 space-y-4 text-left">
              <li>Access to beginner and intermediate courses</li>
              <li>Priority community support</li>
            </ul>
            <button className="w-full py-3 mt-6 bg-green-400 text-white rounded-lg font-semibold hover:bg-green-500 transition duration-300">
              Choose Basic Plan
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-[#2C2C2C] p-6 rounded-lg shadow-lg border-2 border-green-400">
            <h3 className="text-3xl font-semibold text-white">Premium Plan</h3>
            <p className="text-lg text-gray-300 mt-4">All-inclusive access with 1-on-1 mentoring</p>
            <div className="mt-4">
              <p className="text-2xl text-white font-bold">$49</p>
              <p className="text-lg text-gray-300 mt-2">Per Month</p>
            </div>
            <ul className="mt-6 space-y-4 text-left">
              <li>Access to all courses and advanced tutorials</li>
              <li>1-on-1 mentoring sessions</li>
              <li>Direct email support</li>
            </ul>
            <button className="w-full py-3 mt-6 bg-green-400 text-white rounded-lg font-semibold hover:bg-green-500 transition duration-300">
              Choose Premium Plan
            </button>
          </div>
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

export default Pricing;
