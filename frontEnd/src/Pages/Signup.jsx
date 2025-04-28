import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      alert("Passwords don't match");
      return;
    }
    console.log('Signup data:', form);
    alert('Account created (simulated)');
  };

  return (
    <div className="min-h-screen bg-[#2C2C2C] flex items-center justify-center">
      <div className="w-full max-w-md bg-[#1A1A1A] p-8 rounded-lg shadow-lg border-2 border-green-400">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Sign Up for HackLab</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-white mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={onChange}
              required
              className="w-full p-3 rounded bg-[#2C2C2C] text-white border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
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
          <div>
            <label htmlFor="confirm" className="block text-white mb-1">Confirm Password</label>
            <input
              type="password"
              id="confirm"
              name="confirm"
              value={form.confirm}
              onChange={onChange}
              required
              className="w-full p-3 rounded bg-[#2C2C2C] text-white border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-green-400 text-black rounded-lg font-semibold hover:bg-green-500 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-gray-300">
          Already have an account?{' '}
          <Link to="/login" className="text-green-400 hover:text-green-500">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
