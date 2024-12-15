import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import ServicePage from './ServicePage';

function App() {
  // State to handle the toggle of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle function for the hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to smoothly scroll to the contact section
  const scrollToContact = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">

        {/* Header */}
        <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
          <div className="container mx-auto flex justify-between items-center py-6 px-8">
            <h1 className="text-4xl font-serif text-teal-700">ArtisanAbode</h1>

            {/* Hamburger Icon */}
            <button
              className="lg:hidden block text-teal-700 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <nav className="space-x-8 text-lg hidden lg:flex">
              <Link to="/" className="text-gray-700 hover:text-teal-700 transition duration-300">Home</Link>
              <a
                href="#contact"
                className="text-gray-700 hover:text-teal-700 transition duration-300"
                onClick={scrollToContact}
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-white shadow-lg py-4 px-6`}
          >
            <nav>
              <Link
                to="/"
                className="block text-gray-700 py-2 hover:text-teal-700 transition duration-300"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <a
                href="#contact"
                className="block text-gray-700 py-2 hover:text-teal-700 transition duration-300"
                onClick={(e) => {
                  scrollToContact(e);
                  toggleMenu();
                }}
              >
                Contact
              </a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow w-full py-10 px-6 mt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service/:name" element={<ServicePage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer id="contact" className="w-full bg-teal-700 py-6 text-white border-t mt-8 pt-24">
          <div className="container mx-auto text-center text-sm">
            <p>&copy; 2024 ArtisanAbode. All rights reserved.</p>
            <p>
              Contact us at{' '}
              <a href="tel:+1234567890" className="text-teal-200 hover:underline">+1 (234) 567-890</a>
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
