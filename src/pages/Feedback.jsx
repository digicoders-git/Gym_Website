import React from 'react';

const Feedback = () => {
  return (
    <div className="w-full bg-white text-black font-sans">
      {/* HERO SECTION */}
      <section className="relative w-full h-[60vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2000&auto=format&fit=crop" 
            alt="Feedback Hero" 
            className="w-full h-full object-cover opacity-60 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Member <span className="text-[#DB5726]">Feedback</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Your feedback drives our excellence. Let us know how we can improve your experience.
          </p>
        </div>
      </section>

      {/* FEEDBACK FORM */}
      <section className="py-24 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black mb-4">Share Your Experience</h2>
          <p className="text-gray-600">Tell us what you love and what we can do better.</p>
        </div>
        
        <form className="space-y-8 bg-gray-50 p-12 rounded-sm border border-gray-100 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="font-bold text-sm uppercase tracking-wider text-gray-700">Full Name</label>
              <input type="text" className="w-full p-4 bg-white border border-gray-200 focus:border-[#DB5726] outline-none rounded-sm" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="font-bold text-sm uppercase tracking-wider text-gray-700">Email Address</label>
              <input type="email" className="w-full p-4 bg-white border border-gray-200 focus:border-[#DB5726] outline-none rounded-sm" placeholder="john@example.com" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="font-bold text-sm uppercase tracking-wider text-gray-700">Overall Satisfaction</label>
            <div className="flex gap-4">
              {[1, 2, 3, 4, 5].map(i => (
                <button key={i} type="button" className="w-12 h-12 rounded-full border-2 border-gray-200 hover:border-[#DB5726] hover:text-[#DB5726] font-bold transition-all">
                  {i}
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="font-bold text-sm uppercase tracking-wider text-gray-700">Your Feedback</label>
            <textarea rows="6" className="w-full p-4 bg-white border border-gray-200 focus:border-[#DB5726] outline-none rounded-sm" placeholder="Tell us more about your journey with GymYQ..."></textarea>
          </div>
          
          <button className="px-12 py-4 bg-[#DB5726] text-white font-bold uppercase tracking-widest hover:bg-[#b0451e] transition-colors rounded-sm shadow-lg shadow-orange-900/20">
            Submit Feedback
          </button>
        </form>
      </section>
    </div>
  );
};

export default Feedback;
