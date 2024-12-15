import React from 'react';
import { useParams } from 'react-router-dom';

const serviceData = {
  "tile-work": {
    title: "Tile Work",
    description: "High-quality tile installations for bathrooms, kitchens, and floors.",
    images: [
      "/images/tiles1.jpg",
      "/images/tiles2.jpg",
      "/images/tiles3.jpg",
      "/images/tiles4.jpg",
      "/images/tiles5.jpg",
      "/images/tiles6.jpg",      
    ],
  },
  "stone-work": {
    title: "Stone Work",
    description: "Elegant stone work for countertops, backsplashes, and outdoor spaces.",
    images: [
      "/images/s1.jpg",
      "/images/s2.jpg",
      "/images/s3.jpg",
      "/images/s4.jpg",
      "/images/s5.jpg",
      "/images/s6.jpg",      
    ],
  },
  "kitchen-remodeling": {
    title: "Kitchen Remodeling",
    description: "Complete kitchen renovations from design to installation.",
    images: [
      "/images/kr1.jpg",
      "/images/kr2.jpg",
      "/images/kr3.jpg",
      "/images/kr4.jpg",
      "/images/kr5.jpg",
      "/images/kr6.jpg",      
    ],
  },
  "plumbing": {
    title: "Plumbing",
    description: "Expert plumbing services for all your renovation needs.",
    images: [
      "/images/p1.jpg",
      "/images/p2.jpg",
      "/images/p3.jpg",
    ],
  },
  "electrical-work": {
    title: "Electrical Work",
    description: "Safe and efficient electrical installations and upgrades.",
    images: [
      "/images/e1.jpg",
      "/images/e2.jpg",
      "/images/e3.jpg",
    ],
  },
  "flooring": {
    title: "Flooring",
    description: "Professional flooring installations including hardwood, laminate, and more.",
    images: [
      "/images/f1.jpg",
      "/images/f2.jpg",
      "/images/f3.jpg",
      "/images/f4.jpg",
      "/images/f5.jpg",
      "/images/f6.jpg",      
    ],
  },
};

function ServicePage() {
  const { name } = useParams();
  const service = serviceData[name];

  if (!service) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-serif text-red-600">Service Not Found</h2>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-50 py-12 px-4 md:px-6">
      <h2 className="text-4xl font-serif text-center text-teal-800 mb-6">{service.title}</h2>
      <p className="text-lg text-gray-700 text-center mb-8">{service.description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
        {service.images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={service.title}
            className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
          />
        ))}
      </div>
    </div>
  );
}

export default ServicePage;
