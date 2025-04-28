// src/Pages/LabDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Components/Navbar'; // Import the Navbar component

// Reuse the same labs array (or import from Labs.jsx)
const labs = [
  { id: 'sql-injection', title: 'SQL Injection Lab', desc: 'Bypass login forms and extract data via unsafe queries.', difficulty: 'Easy' },
  { id: 'xss', title: 'Cross-Site Scripting (XSS) Lab', desc: 'Inject JavaScript into pages to hijack sessions.', difficulty: 'Medium' },
  { id: 'file-upload', title: 'File Upload Vulnerability Lab', desc: 'Upload malicious files to gain server access.', difficulty: 'Medium' },
  // … include all other labs here …
  { id: 'mobile-app-security', title: 'Mobile App Security Lab', desc: 'Analyze mobile apps for insecure storage and communication flaws.', difficulty: 'Medium' },
];

const LabDetail = () => {
  const { labId } = useParams();
  const lab = labs.find((l) => l.id === labId);

  if (!lab) {
    return (
      <div className="min-h-screen bg-[#2C2C2C] text-white flex items-center justify-center">
        <p className="text-xl">Lab not found. <Link to="/labs" className="text-green-400 underline">Back to Labs</Link></p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#2C2C2C] text-white flex flex-col">
      <Navbar />


      <header className="bg-[#2C2C2C] py-6 border-b-2 border-[#1A1A1A]">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-extrabold">{lab.title}</h1>
          
        </div>
      </header>

      <section className="py-16 px-6 bg-[#1A1A1A] flex-grow">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">Difficulty: {lab.difficulty}</h2>
          <p className="text-lg text-gray-300 mb-8">{lab.desc}</p>

          <div className="bg-[#2C2C2C] p-6 rounded-lg shadow-lg mb-8 border-2 border-green-400">
            <h3 className="text-xl font-bold mb-4">Instructions</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-200">
              <li>Spin up the vulnerable environment (e.g., via Docker or VM).</li>
              <li>Open your browser or terminal and navigate to the lab URL.</li>
              <li>Follow the challenge prompt to exploit the vulnerability.</li>
              <li>Capture the flag or proof of exploit as instructed.</li>
            </ol>
          </div>

          <div className="text-center">
            <Link
              to={`/labs/${lab.id}/start`}
              className="inline-block bg-green-400 text-black py-3 px-8 rounded-lg font-semibold hover:bg-green-500 transition duration-300"
            >
              Launch Lab Environment
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#2C2C2C] text-white py-6 mt-auto">
        <div className="max-w-screen-xl mx-auto text-center text-gray-400">
          &copy; 2025 HackLab. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LabDetail;
