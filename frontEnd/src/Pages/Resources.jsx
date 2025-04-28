import React from 'react';
import Navbar from './Components/Navbar';

const resources = [
  {
    title: 'Kali Linux',
    desc: 'The go-to penetration testing distro.',
    link: 'https://www.kali.org/downloads/',
    icon: (
      <img src="https://www.kali.org/images/kali-logo.svg" alt="Kali" className="w-8 h-8"/>
    )
  },
  {
    title: 'Burp Suite Community',
    desc: 'Web vulnerability scanner and proxy.',
    link: 'https://portswigger.net/burp/communitydownload',
    icon: (
      <img src="https://portswigger.net/burp/img/icon.svg" alt="Burp" className="w-8 h-8"/>
    )
  },
  {
    title: 'OWASP Cheat Sheets',
    desc: 'Definitive guides on web app security.',
    link: 'https://cheatsheetseries.owasp.org/',
    icon: (
      <img src="https://owasp.org/assets/images/logos/logo-owasp.png" alt="OWASP" className="w-8 h-8"/>
    )
  },
  {
    title: 'Metasploit Framework',
    desc: 'Exploit development and testing.',
    link: 'https://github.com/rapid7/metasploit-framework',
    icon: (
      <img src="https://avatars.githubusercontent.com/u/18091784?s=200&v=4" alt="Metasploit" className="w-8 h-8"/>
    )
  },
  {
    title: 'Wireshark',
    desc: 'Network protocol analyzer.',
    link: 'https://www.wireshark.org/download.html',
    icon: (
      <img src="https://www.wireshark.org/assets/images/wireshark–icon.svg" alt="Wireshark" className="w-8 h-8"/>
    )
  },
  {
    title: 'John the Ripper',
    desc: 'Fast password cracker.',
    link: 'https://www.openwall.com/john/',
    icon: (
      <img src="https://www.openwall.com/images/ow-logo.jpg" alt="John" className="w-8 h-8"/>
    )
  },
];

const cheatSheets = [
  { name: 'SQLi Cheat Sheet', url: '/downloads/sql-injection-cheatsheet.pdf' },
  { name: 'XSS Cheat Sheet', url: '/downloads/xss-cheatsheet.pdf' },
  { name: 'Buffer Overflow Guide', url: '/downloads/buffer-overflow-guide.pdf' },
];

const Resources = () => (
  <div className="min-h-screen bg-[#2C2C2C] text-white flex flex-col">
    <Navbar />

    <main className="flex-grow p-6">
      <div className="max-w-screen-xl mx-auto space-y-12">

        {/* Tools Section */}
        <section>
          <h1 className="text-4xl font-bold mb-6">Essential Tools</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map(res => (
              <a
                key={res.title}
                href={res.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg border-2 border-green-400 flex items-start space-x-4 hover:bg-[#2C2C2C] transition"
              >
                <div className="flex-shrink-0">
                  {res.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-green-400">{res.title}</h2>
                  <p className="text-gray-300">{res.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Cheat Sheets Section */}
        <section>
          <h1 className="text-4xl font-bold mb-6">Cheat Sheets & Guides</h1>
          <ul className="space-y-4">
            {cheatSheets.map(sheet => (
              <li key={sheet.name}>
                <a
                  href={sheet.url}
                  className="inline-block bg-green-400 text-black py-2 px-4 rounded-lg font-semibold hover:bg-green-500 transition"
                  download
                >
                  {sheet.name}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Further Reading */}
        <section>
          <h1 className="text-4xl font-bold mb-6">Recommended Reading</h1>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <a href="https://www.hackingarticles.in/" className="text-green-400 hover:underline" target="_blank" rel="noopener noreferrer">
                Hacking Articles
              </a>
            </li>
            <li>
              <a href="https://www.offensive-security.com/" className="text-green-400 hover:underline" target="_blank" rel="noopener noreferrer">
                Offensive Security Blog
              </a>
            </li>
            <li>
              <a href="https://pentestmag.com/" className="text-green-400 hover:underline" target="_blank" rel="noopener noreferrer">
                Pentest Magazine
              </a>
            </li>
          </ul>
        </section>

      </div>
    </main>

    <footer className="bg-[#1A1A1A] text-gray-400 py-6 text-center">
      &copy; 2025 HackLab. All rights reserved.
    </footer>
  </div>
);

export default Resources;
