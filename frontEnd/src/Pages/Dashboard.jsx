// src/Pages/Dashboard.jsx
import React from 'react';
import Navbar from './Components/Navbar';
import { Link } from 'react-router-dom';

const labs = [
  { id: 'sql-injection', title: 'SQL Injection Lab', completed: true },
  { id: 'xss', title: 'XSS Lab', completed: true },
  { id: 'file-upload', title: 'File Upload Lab', completed: false },
  { id: 'auth-bypass', title: 'Auth Bypass Lab', completed: true },
  { id: 'cmd-injection', title: 'Command Injection Lab', completed: false },
  { id: 'buffer-overflow', title: 'Buffer Overflow Lab', completed: true },
  { id: 'csrf', title: 'CSRF Lab', completed: false },
  { id: 'broken-auth', title: 'Broken Auth Lab', completed: true },
  { id: 'insecure-deserialization', title: 'Insecure Deserialization Lab', completed: false },
  { id: 'ssrf', title: 'SSRF Lab', completed: false },
  { id: 'clickjacking', title: 'Clickjacking Lab', completed: true },
  { id: 'weak-encryption', title: 'Weak Encryption Lab', completed: false },
  { id: 'privilege-escalation', title: 'Privilege Escalation Lab', completed: true },
  { id: 'dns-spoofing', title: 'DNS Spoofing Lab', completed: false },
  { id: 'reverse-engineering', title: 'Reverse Engineering Lab', completed: true },
  { id: 'web-shell', title: 'Web Shell Lab', completed: false },
  { id: 'password-cracking', title: 'Password Cracking Lab', completed: true },
  { id: 'api-security', title: 'API Security Lab', completed: false },
  { id: 'cloud-security', title: 'Cloud Security Lab', completed: true },
  { id: 'mobile-app-security', title: 'Mobile App Security Lab', completed: false },
];

const Dashboard = () => {
  const completedLabs = labs.filter(lab => lab.completed);
  const totalLabs = labs.length;
  const percent = Math.round((completedLabs.length / totalLabs) * 100);

  return (
    <div className="min-h-screen bg-[#2C2C2C] text-white flex flex-col">
      <Navbar />

      <main className="flex-grow p-6">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Dashboard</h1>

          {/* Progress Section */}
          <div className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg border-2 border-green-400 mb-10">
            <h2 className="text-2xl font-semibold mb-4">Your Progress</h2>
            <div className="w-full bg-gray-800 rounded-full h-4 mb-2">
              <div
                className="bg-green-400 h-4 rounded-full"
                style={{ width: `${percent}%` }}
              ></div>
            </div>
            <p className="text-gray-300 mt-2">
              {completedLabs.length} of {labs.length} labs completed ({percent}%)
            </p>
          </div>

          {/* Completed Labs List */}
          <h2 className="text-2xl font-semibold mb-4">Completed Labs</h2>
          {completedLabs.length === 0 ? (
            <p className="text-gray-300">You haven't completed any labs yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedLabs.map(lab => (
                <div
                  key={lab.id}
                  className="bg-[#1A1A1A] p-4 rounded-lg shadow border-l-4 border-green-400"
                >
                  <h3 className="text-lg font-semibold">{lab.title}</h3>
                  <Link
                    to={`/labs/${lab.id}`}
                    className="mt-2 inline-block text-green-400 hover:text-green-500 underline text-sm"
                  >
                    Review Lab →
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <footer className="bg-[#1A1A1A] text-gray-400 py-6 text-center">
        &copy; 2025 HackLab. All rights reserved.
      </footer>
    </div>
  );
};

export default Dashboard;
