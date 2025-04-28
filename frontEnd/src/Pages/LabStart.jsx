// src/Pages/LabStart.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Components/Navbar'; // Import the Navbar component

// Duplicate of your labs array; ideally move this to a shared file
const labs = [
  { id: 'sql-injection', title: 'SQL Injection Lab' },
  { id: 'xss', title: 'Cross-Site Scripting (XSS) Lab' },
  { id: 'file-upload', title: 'File Upload Vulnerability Lab' },
  { id: 'auth-bypass', title: 'Authentication Bypass Lab' },
  { id: 'cmd-injection', title: 'Command Injection Lab' },
  { id: 'buffer-overflow', title: 'Buffer Overflow Lab' },
  { id: 'csrf', title: 'CSRF Lab' },
  { id: 'broken-auth', title: 'Broken Authentication Lab' },
  { id: 'insecure-deserialization', title: 'Insecure Deserialization Lab' },
  { id: 'ssrf', title: 'SSRF Lab' },
  { id: 'clickjacking', title: 'Clickjacking Lab' },
  { id: 'weak-encryption', title: 'Weak Encryption Lab' },
  { id: 'privilege-escalation', title: 'Privilege Escalation Lab' },
  { id: 'dns-spoofing', title: 'DNS Spoofing Lab' },
  { id: 'reverse-engineering', title: 'Reverse Engineering Lab' },
  { id: 'web-shell', title: 'Web Shell Lab' },
  { id: 'password-cracking', title: 'Password Cracking Lab' },
  { id: 'api-security', title: 'API Security Lab' },
  { id: 'cloud-security', title: 'Cloud Security Lab' },
  { id: 'mobile-app-security', title: 'Mobile App Security Lab' },
];

const LabStart = () => {
  const { labId } = useParams();
  const lab = labs.find(l => l.id === labId);

  if (!lab) {
    return (
      <div className="min-h-screen bg-[#2C2C2C] text-white flex items-center justify-center">
        <p className="text-xl">
          Lab not found.{' '}
          <Link to="/labs" className="text-green-400 underline">
            Back to Labs
          </Link>
        </p>
      </div>
    );
  }

  // Replace this URL with your actual lab environment URL or docker endpoint
  const labUrl = `https://labs.hacklab.com/environment/${lab.id}`;

  return (
    <div className="min-h-screen bg-[#2C2C2C] text-white flex flex-col">
        <Navbar />
      <header className="bg-[#2C2C2C] py-6 border-b-2 border-[#1A1A1A]">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-extrabold">{lab.title}</h1>
         
        </div>
      </header>

      <section className="flex-grow py-16 px-6">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-gray-300 mb-4">
            You are about to launch the <span className="font-semibold text-green-400">{lab.title}</span>.
          </p>
          <div className="mb-6">
            <Link
              to="/labs"
              className="inline-block text-sm text-gray-300 underline hover:text-white"
            >
              &larr; Back to Labs
            </Link>
          </div>
          <div className="relative w-full h-[70vh] rounded-lg overflow-hidden border-2 border-green-400 shadow-lg">
            <iframe
              title={lab.title}
              src={labUrl}
              className="w-full h-full"
            />
          </div>
          <p className="text-gray-400 text-sm mt-4">
            If the environment doesn’t load, ensure your VPN or Docker instance is running.
          </p>
        </div>
      </section>

      <footer className="bg-[#1A1A1A] text-white py-6">
        <div className="max-w-screen-xl mx-auto text-center text-gray-400">
          &copy; 2025 HackLab. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LabStart;
