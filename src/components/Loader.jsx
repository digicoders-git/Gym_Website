import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[10000] bg-white flex flex-col items-center justify-center">
      <div className="relative flex items-center justify-center">
        {/* Outer Spinning Ring */}
        <div className="w-40 h-40 border-4 border-[#DB5726] border-t-transparent rounded-full animate-spin"></div>
        
        {/* Inner Pulsing Logo */}
        <div className="absolute">
          <img src="/logo.png" alt="GymYQ Logo" className="w-24 h-24 object-contain animate-pulse" />
        </div>
      </div>
      
      {/* Loading Text */}
      <div className="mt-10 flex flex-col items-center">
        <h2 className="text-black font-bold tracking-[0.5em] uppercase text-xs mb-2">
          Preparing Excellence
        </h2>
        <div className="w-48 h-[2px] bg-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#DB5726] animate-loadingBar"></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes loadingBar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-loadingBar {
          animation: loadingBar 1.5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Loader;
