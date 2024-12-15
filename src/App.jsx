import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ServicePage from './ServicePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">

        {/* Header */}
        <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
          <div className="container mx-auto flex justify-between items-center py-6 px-8">
            <h1 className="text-4xl font-serif text-teal-700">ArtisanAbode</h1>
            <nav className="space-x-8 text-lg">
              <a href="/" className="text-gray-700 hover:text-teal-700 transition duration-300">Home</a>
              {/* Scroll to the Contact Section */}
              <a href="#contact" className="text-gray-700 hover:text-teal-700 transition duration-300">Contact</a>
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
        <footer id="contact" className="w-full bg-teal-700 py-6 text-white border-t mt-8">
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
