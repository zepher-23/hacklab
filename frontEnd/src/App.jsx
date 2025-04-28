import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Features from './Pages/Features';
import Contact from './Pages/Contact';
import Pricing from './Pages/Pricing';
import Labs from './Pages/Labs';
import LabDetail from './Pages/LabDetail'; // Import the LabDetail component
import LabStart from './Pages/LabStart'; // Import the LabStart component
import Login from './Pages/Login'; // Import the Login component
import Signup from './Pages/Signup'; // Import the Signup component
import Dashboard from './Pages/Dashboard'; // Import the Dashboard component
import Blog from './Pages/Blog'; // Import the Blog component
import BlogPost from './Pages/BlogPost'; // Import the BlogPost component
import Resources from './Pages/Resources';

import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="/labs/:labId" element={<LabDetail />} />  for individual lab pages
        <Route path="/labs/:labId/start" element={<LabStart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} /> // Dashboard route
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postId" element={<BlogPost />} />
        <Route path="/resources" element={<Resources />} /> // Resources route
        {/* Add more routes as needed */}
       


      </Routes>
    </Router>
  );
}

export default App;
