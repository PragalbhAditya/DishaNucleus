import React from 'react';
import image1 from '../assets/logo.png';
import image2 from '../assets/Logo-bg.png';
import image3 from '../assets/Logo-bg2.png';


const Gallery = () => {
  const images = [
    image1,
    image2,
    image3,
  ];

  return (
    <div id="gallery" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Gallery</h2>
          <p className="text-lg text-slate-600">A Glimpse into Our World</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <img src={image} alt={`Gallery Image ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
