// src/Components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { to: '/labs',      label: 'Labs'     },
    { to: '/dashboard', label: 'Dashboard'},
    { to: '/blog',      label: 'Blog'     },
    { to: '/resources', label: 'Resources'},
    { to: '/pricing',   label: 'Pricing'  },
    { to: '/contact',   label: 'Contact'  },
  ];

  const userItems = [
    { to: '/profile',  label: 'Profile'  },
    { to: '/settings', label: 'Settings' },
    { to: '/login',    label: 'Logout'   },
  ];

  return (
    <>
      {/* Sticky, translucent, blurred navbar */}
      <header className="fixed top-0 w-full bg-[#2C2C2C]/90 backdrop-blur-md text-white flex items-center justify-between px-8 py-4 shadow-xl border-b border-green-400 z-50">
        {/* Logo on left with hover effect */}
        <Link
          to="/"
          className="text-4xl font-bold hover:text-green-400 transition-colors ml-4"
        >
          HackLab
        </Link>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="p-2 bg-green-400 rounded-md text-black shadow-lg hover:shadow-2xl transition-shadow mr-4"
          aria-label="Open menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Spacer to offset fixed header height */}
      <div className="h-20"></div>

      {/* Off-canvas Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-[#1A1A1A] transform transition-transform duration-300 z-50 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-green-400">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setOpen(false)} className="text-gray-300 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="p-4 space-y-3">
          {navItems.map(item => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block text-white py-2 px-3 rounded hover:bg-[#2C2C2C] hover:text-green-400 transition"
            >
              {item.label}
            </Link>
          ))}

          <div className="border-t border-green-400 my-4"></div>

          {userItems.map(item => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block text-green-400 py-2 px-3 rounded hover:bg-[#2C2C2C] transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
