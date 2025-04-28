import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Components/Navbar';

const posts = [
  {
    id: 'intro-to-sql-injection',
    title: 'Introduction to SQL Injection',
    date: '2025-03-01',
    excerpt: 'Learn how SQL Injection works and how to prevent it in your apps.',
  },
  {
    id: 'xss-basics',
    title: 'Cross-Site Scripting (XSS) Basics',
    date: '2025-03-15',
    excerpt: 'Understand XSS—types, examples, and defenses you should implement.',
  },
  {
    id: 'buffer-overflow-101',
    title: 'Buffer Overflows 101',
    date: '2025-04-05',
    excerpt: 'A beginner’s guide to buffer overflows and memory corruption exploits.',
  },
  // …more posts…
];

const Blog = () => (
  <div className="min-h-screen bg-[#2C2C2C] text-white flex flex-col">
    <Navbar />

    <main className="flex-grow p-6">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Blog & Tutorials</h1>
        <div className="space-y-6">
          {posts.map(post => (
            <article
              key={post.id}
              className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg border-l-4 border-green-400"
            >
              <h2 className="text-2xl font-semibold text-green-400 mb-1">
                <Link to={`/blog/${post.id}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-400 text-sm mb-3">{post.date}</p>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <Link
                to={`/blog/${post.id}`}
                className="text-green-400 hover:text-green-500 font-semibold"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>

    <footer className="bg-[#1A1A1A] text-gray-400 py-6 text-center">
      &copy; 2025 HackLab. All rights reserved.
    </footer>
  </div>
);

export default Blog;
