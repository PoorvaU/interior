import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto py-12 px-6">
      <h2 className="text-5xl font-serif text-center text-teal-800 mb-6">
        Welcome to ArtisanAbode
      </h2>
      <p className="text-lg text-gray-700 text-center mb-12">
        Explore our portfolio and services.
      </p>
      <section>
        <h3 className="text-4xl font-serif text-center text-gray-800 mb-8">
          Our Services
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Service Cards */}
          <Link
            to="/service/tile-work"
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <img
              src="/images/tiles1.jpg"
              alt="Tile Work"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h4 className="text-2xl font-semibold text-teal-600 mb-2">Tile Work</h4>
            <p className="text-gray-600">
              High-quality tile installations for bathrooms, kitchens, and floors.
            </p>
          </Link>

          <Link
            to="/service/stone-work"
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <img
              src="/images/s3.jpg"
              alt="Stone Work"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h4 className="text-2xl font-semibold text-teal-600 mb-2">Stone Work</h4>
            <p className="text-gray-600">
              Elegant stone work for countertops, backsplashes, and outdoor spaces.
            </p>
          </Link>

          <Link
            to="/service/kitchen-remodeling"
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <img
              src="/images/kr2.jpg"
              alt="Kitchen Remodeling"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h4 className="text-2xl font-semibold text-teal-600 mb-2">Kitchen Remodeling</h4>
            <p className="text-gray-600">
              Complete kitchen renovations from design to installation.
            </p>
          </Link>

          <Link
            to="/service/plumbing"
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <img
              src="/images/p2.jpg"
              alt="Plumbing"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h4 className="text-2xl font-semibold text-teal-600 mb-2">Plumbing</h4>
            <p className="text-gray-600">
              Expert plumbing services for all your renovation needs.
            </p>
          </Link>

          <Link
            to="/service/electrical-work"
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <img
              src="/images/e1.jpg"
              alt="Electrical Work"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h4 className="text-2xl font-semibold text-teal-600 mb-2">Electrical Work</h4>
            <p className="text-gray-600">
              Safe and efficient electrical installations and upgrades.
            </p>
          </Link>

          <Link
            to="/service/flooring"
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <img
              src="/images/f2.jpg"
              alt="Flooring"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h4 className="text-2xl font-semibold text-teal-600 mb-2">Flooring</h4>
            <p className="text-gray-600">
              Professional flooring installations including hardwood, laminate, and more.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
