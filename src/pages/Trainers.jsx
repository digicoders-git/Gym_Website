import React from 'react';
import { User, Phone, Mail } from 'lucide-react';

const Trainers = () => {
  const trainers = [
    { 
      name: 'John Wick', 
      role: 'Elite Strength Coach', 
      img: '/trainer_male_elite_1778595978118.png',
      specialty: 'Powerlifting'
    },
    { 
      name: 'Sarah Connor', 
      role: 'Yoga & Pilates Expert', 
      img: '/trainer_female_pro_1778596000362.png',
      specialty: 'Flexibility'
    },
    { 
      name: 'Mike Mentzer', 
      role: 'Senior Bodybuilding Coach', 
      img: '/trainer_coach_senior_1778596017313.png',
      specialty: 'Hypertrophy'
    },
    { 
      name: 'Emily Davis', 
      role: 'Cardio & HIIT Specialist', 
      img: '/trainer_emily_cardio_1778596263588.png',
      specialty: 'Endurance'
    },
    { 
      name: 'Alex Rivera', 
      role: 'Crossfit Level 3 Coach', 
      img: '/trainer_alex_crossfit_1778596282185.png',
      specialty: 'Conditioning'
    },
    { 
      name: 'Jessica Lee', 
      role: 'Sports Nutritionist', 
      img: '/trainer_jessica_nutrition_1778596396904.png',
      specialty: 'Fat Loss'
    }
  ];

  return (
    <div className="w-full bg-white text-black font-sans">
      {/* HERO SECTION */}
      <section className="relative w-full h-[60vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop" 
            alt="Trainers Hero" 
            className="w-full h-full object-cover opacity-60 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Expert <span className="text-[#DB5726]">Trainers</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Train with the world's best professionals who are committed to your success.
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="pt-20 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[#DB5726] font-bold tracking-widest uppercase text-sm mb-4">Elite Mentorship</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 tracking-tight">Learn From The Professionals</h3>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Our trainers are more than just coaches; they are mentors dedicated to helping you achieve your ultimate potential. With years of experience and specialized knowledge, they will guide you through every rep and every meal.
          </p>
        </div>
      </section>

      {/* TRAINERS GRID */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {trainers.map((t, i) => (
            <div key={i} className="group relative overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500">
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={t.img} 
                  alt={t.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                
                {/* Social Icons Overlay */}
                <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-12 group-hover:translate-x-0 transition-transform duration-500 delay-100">
                  <div className="w-10 h-10 bg-white text-black hover:bg-[#DB5726] hover:text-white flex items-center justify-center cursor-pointer transition-colors shadow-lg">
                    <User size={18} />
                  </div>
                  <div className="w-10 h-10 bg-white text-black hover:bg-[#DB5726] hover:text-white flex items-center justify-center cursor-pointer transition-colors shadow-lg">
                    <Phone size={18} />
                  </div>
                  <div className="w-10 h-10 bg-white text-black hover:bg-[#DB5726] hover:text-white flex items-center justify-center cursor-pointer transition-colors shadow-lg">
                    <Mail size={18} />
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute top-6 left-6 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1">
                   {t.specialty}
                </div>
              </div>

              {/* Info Container */}
              <div className="p-8 text-center bg-white border-t border-gray-50">
                <h3 className="text-2xl font-bold text-black mb-1 uppercase tracking-tighter group-hover:text-[#DB5726] transition-colors">
                  {t.name}
                </h3>
                <p className="text-gray-500 font-bold text-xs uppercase tracking-widest mb-4">
                  {t.role}
                </p>
                <div className="w-10 h-[2px] bg-[#DB5726] mx-auto group-hover:w-20 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Trainers;
