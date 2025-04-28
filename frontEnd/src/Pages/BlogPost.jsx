import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';

const posts = {
  'intro-to-sql-injection': {
    title: 'Introduction to SQL Injection',
    date: '2025-03-01',
    content: `
### What is SQL Injection?

SQL Injection is a technique where attackers insert malicious SQL queries into input fields...

### Example

\`\`\`sql
SELECT * FROM users WHERE username = 'admin' --' AND password = '...';
\`\`\`

### Prevention

1. Use parameterized queries  
2. Employ ORM protections  
3. Validate and sanitize input  
    `,
  },
  'xss-basics': {
    title: 'Cross-Site Scripting (XSS) Basics',
    date: '2025-03-15',
    content: `
### XSS Types

- Stored XSS  
- Reflected XSS  
- DOM-based XSS  

### Demo

\`\`\`html
<script>alert('XSS');</script>
\`\`\`

### Defense

- Escape user input  
- Enable Content Security Policy (CSP)  
    `,
  },
  'buffer-overflow-101': {
    title: 'Buffer Overflows 101',
    date: '2025-04-05',
    content: `
### Buffer Overflow Explained

A buffer overflow occurs when data exceeds allocated memory...

### Exploit Example

\`\`\`c
char buf[8];
strcpy(buf, user_input);
\`\`\`

### Mitigation

- Stack canaries  
- ASLR  
- DEP / NX-bit  
    `,
  },
  // …other posts…
};

const BlogPost = () => {
  const { postId } = useParams();
  const post = posts[postId];

  if (!post) {
    return (
      <div className="min-h-screen bg-[#2C2C2C] text-white flex items-center justify-center">
        <p className="text-xl">
          Post not found.{' '}
          <Link to="/blog" className="text-green-400 underline">
            Back to Blog
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#2C2C2C] text-white flex flex-col">
      <Navbar />

      <main className="flex-grow p-6 max-w-screen-xl mx-auto">
        <h1 className="text-4xl font-bold text-green-400 mb-2">{post.title}</h1>
        <p className="text-gray-400 mb-6">{post.date}</p>
        <div
          className="prose prose-invert text-gray-200"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-8">
          <Link to="/blog" className="text-green-400 hover:text-green-500 underline">
            ← Back to Blog
          </Link>
        </div>
      </main>

      <footer className="bg-[#1A1A1A] text-gray-400 py-6 text-center">
        &copy; 2025 HackLab. All rights reserved.
      </footer>
    </div>
  );
};

export default BlogPost;
