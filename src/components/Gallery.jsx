import React from 'react';
import gallery01 from '../assets/gallery/gallery-01.png';
import gallery02 from '../assets/gallery/gallery-02.png';
import gallery03 from '../assets/gallery/gallery-03.png';
import gallery04 from '../assets/gallery/gallery-04.png';
import gallery05 from '../assets/gallery/gallery-05.png';
import gallery06 from '../assets/gallery/gallery-06.png';
import gallery07 from '../assets/gallery/gallery-07.png';
import gallery08 from '../assets/gallery/gallery-08.png';
import gallery09 from '../assets/gallery/gallery-09.png';
import gallery10 from '../assets/gallery/gallery-10.png';
import gallery11 from '../assets/gallery/gallery-11.png';
import gallery12 from '../assets/gallery/gallery-12.png';
import gallery13 from '../assets/gallery/gallery-13.png';
import gallery14 from '../assets/gallery/gallery-14.png';
import gallery15 from '../assets/gallery/gallery-15.png';


const Gallery = () => {
  const images = [
    gallery01,
    gallery02,
    gallery03,
    gallery04,
    gallery05,
    gallery06,
    gallery07,
    gallery08,
    gallery09,
    gallery10,
    gallery11,
    gallery12,
    gallery13,
    gallery14,
    gallery15,
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
