// src/Pages/Labs.jsx
import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Components/Navbar'; // Import the Navbar component

const labs = [
  { id: 'sql-injection', title: 'SQL Injection Lab', desc: 'Bypass login forms and extract data via unsafe queries.', difficulty: 'Easy' },
  { id: 'xss', title: 'Cross-Site Scripting (XSS) Lab', desc: 'Inject JavaScript into pages to hijack sessions.', difficulty: 'Medium' },
  { id: 'file-upload', title: 'File Upload Vulnerability Lab', desc: 'Upload malicious files to gain server access.', difficulty: 'Medium' },
  { id: 'auth-bypass', title: 'Authentication Bypass Lab', desc: 'Exploit logic flaws to log in without credentials.', difficulty: 'Hard' },
  { id: 'cmd-injection', title: 'Command Injection Lab', desc: 'Execute OS commands via unvalidated input.', difficulty: 'Hard' },

  // Additional labs
  { id: 'buffer-overflow', title: 'Buffer Overflow Lab', desc: 'Overwrite memory buffers in C/C++ programs to hijack control flow.', difficulty: 'Hard' },
  { id: 'csrf', title: 'CSRF Lab', desc: 'Forge requests on behalf of authenticated users without their consent.', difficulty: 'Medium' },
  { id: 'broken-auth', title: 'Broken Authentication Lab', desc: 'Exploit weak session management and password reset flows.', difficulty: 'Medium' },
  { id: 'insecure-deserialization', title: 'Insecure Deserialization Lab', desc: 'Leverage unsafe deserialization to execute arbitrary code.', difficulty: 'Hard' },
  { id: 'ssrf', title: 'SSRF Lab', desc: 'Force the server to make arbitrary requests, accessing internal resources.', difficulty: 'Medium' },
  { id: 'clickjacking', title: 'Clickjacking Lab', desc: 'Use hidden iframes to hijack user clicks and perform unintended actions.', difficulty: 'Easy' },
  { id: 'weak-encryption', title: 'Weak Encryption Lab', desc: 'Break poor cryptographic schemes to recover sensitive data.', difficulty: 'Medium' },
  { id: 'privilege-escalation', title: 'Privilege Escalation Lab', desc: 'Exploit misconfigurations to gain higher privileges on a system.', difficulty: 'Hard' },
  { id: 'dns-spoofing', title: 'DNS Spoofing Lab', desc: 'Poison DNS caches or spoof responses to redirect traffic.', difficulty: 'Hard' },
  { id: 'reverse-engineering', title: 'Reverse Engineering Lab', desc: 'Disassemble executables to discover hidden logic and vulnerabilities.', difficulty: 'Hard' },
  { id: 'web-shell', title: 'Web Shell Lab', desc: 'Upload and use web shells to control a compromised server.', difficulty: 'Medium' },
  { id: 'password-cracking', title: 'Password Cracking Lab', desc: 'Use tools like John the Ripper to brute-force or dictionary-attack hashes.', difficulty: 'Medium' },
  { id: 'api-security', title: 'API Security Lab', desc: 'Exploit common API flaws like broken object level authorization and rate-limit bypass.', difficulty: 'Medium' },
  { id: 'cloud-security', title: 'Cloud Security Lab', desc: 'Discover and exploit cloud misconfigurations in AWS/Azure/GCP.', difficulty: 'Hard' },
  { id: 'mobile-app-security', title: 'Mobile App Security Lab', desc: 'Analyze mobile apps for insecure storage and communication flaws.', difficulty: 'Medium' },
];

const Labs = () => {
  return (
    <div className="min-h-screen bg-[#2C2C2C] text-white flex flex-col">
        <Navbar /> {/* Include the Navbar component */}
      <header className="bg-[#2C2C2C] py-6 border-b-2 border-[#1A1A1A]">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-extrabold">Vulnerable Labs</h1>
          
        </div>
      </header>

      <section className="py-16 px-6">
        <div className="max-w-screen-xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Pick a Lab to Hack</h2>
          <p className="text-gray-300 mt-4">
            Each environment is intentionally vulnerable—learn exploitation and mitigation side by side.
          </p>
        </div>

        <div className="max-w-screen-xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {labs.map((lab, idx) => (
            <div
              key={lab.id}
              className={`p-6 rounded-lg shadow-lg border-2 border-green-400 ${
                idx % 2 === 0 ? 'bg-[#2C2C2C]' : 'bg-[#1A1A1A]'
              }`}
            >
              <h3 className="text-2xl font-semibold text-green-400 mb-2">{lab.title}</h3>
              <p className="text-gray-300 mb-4">{lab.desc}</p>
              <p className="text-sm uppercase tracking-wider mb-4">
                Difficulty: <span className="font-bold">{lab.difficulty}</span>
              </p>
              <Link
                to={`/labs/${lab.id}`}
                className="inline-block bg-green-400 text-black py-2 px-4 rounded-lg font-semibold hover:bg-green-500 transition duration-300"
              >
                Start Lab
              </Link>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-[#1A1A1A] py-6 mt-auto">
        <div className="max-w-screen-xl mx-auto text-center text-gray-400">
          &copy; 2025 HackLab. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Labs;
