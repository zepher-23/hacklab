import React, { useState } from 'react';
import { Link } from 'react-router-dom';
 // Import the Navbar component

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', form);
    alert('Logged in (simulated)');
  };

  return (
    <div className="min-h-screen bg-[#2C2C2C] flex items-center justify-center">
      <div className="w-full max-w-md bg-[#1A1A1A] p-8 rounded-lg shadow-lg border-2 border-green-400">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Login to HackLab</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-white mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={onChange}
              required
              className="w-full p-3 rounded bg-[#2C2C2C] text-white border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-white mb-1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={onChange}
              required
              className="w-full p-3 rounded bg-[#2C2C2C] text-white border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-green-400 text-black rounded-lg font-semibold hover:bg-green-500 transition duration-300"
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-center text-gray-300">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-green-400 hover:text-green-500">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
