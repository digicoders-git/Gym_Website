import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800",
    "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800",
    "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800",
    "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=800",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800",
    "https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=800",
    "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800"
  ];

  return (
    <div className="w-full bg-white text-black font-sans relative">
      {/* HERO SECTION */}
      <section className="relative w-full h-[60vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2000&auto=format&fit=crop" 
            alt="Gym Gallery Hero" 
            className="w-full h-full object-cover opacity-60 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Our <span className="text-[#DB5726]">Gallery</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Take a visual tour of our facilities and see where the magic happens.
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="pt-20 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[#DB5726] font-bold tracking-widest uppercase text-sm mb-4">Inside GymYQ</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 tracking-tight">Our Atmosphere, Your Achievement</h3>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Get a glimpse of the state-of-the-art equipment, the high-energy workout zones, and the elite community that makes GymYQ the ultimate destination for fitness enthusiasts.
          </p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedImg(img)}
              className="overflow-hidden rounded-sm group cursor-pointer shadow-lg relative"
            >
              <img 
                src={img} 
                alt={`Gallery ${i}`} 
                className="w-full h-80 object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-[#DB5726]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold uppercase tracking-widest text-xs border border-white px-4 py-2">View Larger</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* IMAGE MODAL */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 md:p-10 transition-all duration-500 animate-fadeIn"
          onClick={() => setSelectedImg(null)}
        >
          <button 
            className="absolute top-10 right-10 text-white hover:text-[#DB5726] transition-colors"
            onClick={() => setSelectedImg(null)}
          >
            <X size={40} />
          </button>
          
          <div className="max-w-5xl max-h-full overflow-hidden shadow-2xl border-4 border-white/10 relative">
            <img 
              src={selectedImg} 
              alt="Enlarged Gallery" 
              className="w-full h-full object-contain"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
