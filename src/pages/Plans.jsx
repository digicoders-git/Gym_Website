import React from 'react';
import { useNavigate } from 'react-router-dom';

const Plans = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
  };

  return (
    <div className="w-full bg-white text-black font-sans">
      {/* HERO SECTION */}
      <section className="relative w-full h-[60vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2000&auto=format&fit=crop" 
            alt="Plans Hero" 
            className="w-full h-full object-cover opacity-60 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Membership <span className="text-[#DB5726]">Plans</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Simple, transparent pricing for everyone. Choose the path that fits your goals.
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="pt-20 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[#DB5726] font-bold tracking-widest uppercase text-sm mb-4">Choose Your Path</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 tracking-tight">Flexible Plans For Your Fitness Journey</h3>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            We believe that fitness should be accessible to everyone. Our plans are designed to give you the best value, whether you are just starting out or looking for elite performance training.
          </p>
        </div>
      </section>

      {/* PLANS GRID */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
              {/* Basic Plan */}
              <div className="bg-white p-10 hover:-translate-y-2 transition-transform duration-300 rounded-sm shadow-xl border border-gray-100 flex flex-col relative overflow-hidden text-left">
                <h4 className="text-xl font-bold text-gray-400 mb-2 uppercase tracking-wider">Basic</h4>
                <p className="text-5xl font-extrabold text-black mb-8">$29<span className="text-lg text-gray-400 font-medium">/mo</span></p>
                <ul className="space-y-4 text-gray-600 mb-10 text-left flex-grow">
                  <li className="flex items-center"><span className="text-[#DB5726] mr-3 font-bold text-xl">✓</span> Gym access during off-hours</li>
                  <li className="flex items-center"><span className="text-[#DB5726] mr-3 font-bold text-xl">✓</span> Locker facility</li>
                  <li className="flex items-center text-gray-300"><span className="mr-3 text-xl">✕</span> Personal Trainer</li>
                  <li className="flex items-center text-gray-300"><span className="mr-3 text-xl">✕</span> Diet Plan</li>
                </ul>
                <button 
                  onClick={handleGetStarted}
                  className="w-full py-4 font-bold bg-gray-100 text-black hover:bg-black hover:text-white transition-colors rounded-sm uppercase tracking-widest"
                >
                  Get Started
                </button>
              </div>
              
              {/* Pro Plan */}
              <div className="bg-black p-12 hover:-translate-y-2 transition-transform duration-300 shadow-2xl relative rounded-sm flex flex-col transform lg:scale-105 border border-gray-800 z-10 text-left">
                <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-[#DB5726] text-white text-xs font-bold px-4 py-2 uppercase tracking-widest">Most Popular</div>
                <h4 className="text-xl font-bold text-[#DB5726] mb-2 uppercase tracking-wider">Pro</h4>
                <p className="text-6xl font-extrabold text-white mb-8">$49<span className="text-lg text-gray-400 font-medium">/mo</span></p>
                <ul className="space-y-4 text-gray-300 mb-10 text-left flex-grow">
                  <li className="flex items-center"><span className="text-[#DB5726] mr-3 font-bold text-xl">✓</span> 24/7 Gym access</li>
                  <li className="flex items-center"><span className="text-[#DB5726] mr-3 font-bold text-xl">✓</span> All group classes</li>
                  <li className="flex items-center"><span className="text-[#DB5726] mr-3 font-bold text-xl">✓</span> Locker & Towel service</li>
                  <li className="flex items-center"><span className="text-[#DB5726] mr-3 font-bold text-xl">✓</span> Monthly fitness consultation</li>
                </ul>
                <button 
                  onClick={handleGetStarted}
                  className="w-full py-4 font-bold bg-[#DB5726] text-white hover:bg-[#b0451e] transition-colors rounded-sm shadow-[0_4px_20px_rgba(219,87,38,0.4)] uppercase tracking-widest"
                >
                  Get Started
                </button>
              </div>
              
              {/* Elite Plan */}
              <div className="bg-white p-10 hover:-translate-y-2 transition-transform duration-300 rounded-sm shadow-xl border border-gray-100 flex flex-col relative overflow-hidden text-left">
                <h4 className="text-xl font-bold text-gray-400 mb-2 uppercase tracking-wider">Elite</h4>
                <p className="text-5xl font-extrabold text-black mb-8">$89<span className="text-lg text-gray-400 font-medium">/mo</span></p>
                <ul className="space-y-4 text-gray-600 mb-10 text-left flex-grow">
                  <li className="flex items-center"><span className="text-[#DB5726] mr-3 font-bold text-xl">✓</span> 24/7 Gym access</li>
                  <li className="flex items-center"><span className="text-[#DB5726] mr-3 font-bold text-xl">✓</span> Personal Trainer 2x/week</li>
                  <li className="flex items-center"><span className="text-[#DB5726] mr-3 font-bold text-xl">✓</span> Premium Diet Plan</li>
                  <li className="flex items-center"><span className="text-[#DB5726] mr-3 font-bold text-xl">✓</span> Spa & Sauna Access</li>
                </ul>
                <button 
                  onClick={handleGetStarted}
                  className="w-full py-4 font-bold bg-gray-100 text-black hover:bg-black hover:text-white transition-colors rounded-sm uppercase tracking-widest"
                >
                  Get Started
                </button>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;
