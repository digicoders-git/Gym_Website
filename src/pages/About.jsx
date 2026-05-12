import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, Eye, Shield, Zap, Heart, Trophy } from 'lucide-react';

const Counter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return (
    <span ref={elementRef}>
      {count}{suffix}
    </span>
  );
};

const About = () => {
  const navigate = useNavigate();

  const handleStartJourney = () => {
    navigate('/join');
  };

  return (
    <div className="w-full bg-white text-black overflow-hidden font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[70vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2000&auto=format&fit=crop"
            alt="About Gym Legacy"
            className="w-full h-full object-cover opacity-60 grayscale scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 uppercase">
            Our <span className="text-[#DB5726]">Legacy</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Since 2010, we have been building more than just bodies; we have been building a community of elite performers.
          </p>
        </div>
      </section>

      {/* 2. MISSION & VISION SECTION */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="p-12 bg-gray-50 border-l-4 border-[#DB5726] hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-black flex items-center justify-center mb-8">
                <Target className="text-[#DB5726]" size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-6 uppercase tracking-tighter">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower individuals to reach their absolute peak performance through elite training, scientific nutrition, and an uncompromising atmosphere of discipline.
              </p>
            </div>
            {/* Vision */}
            <div className="p-12 bg-black border-l-4 border-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#DB5726] flex items-center justify-center mb-8">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-6 uppercase tracking-tighter text-white">Our Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To become the global gold standard for fitness excellence, creating a world where every human has the tools and mindset to transform their physical reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HISTORY TIMELINE SECTION */}
      <section className="py-18  px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[#DB5726] font-bold tracking-[0.3em] uppercase text-sm mb-4">Our Journey</h2>
            <h3 className="text-2xl md:text-4xl font-bold text-black tracking-tight uppercase">The Road To <span className="text-[#DB5726]">Greatness</span></h3>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-gray-200 hidden md:block"></div>

            <div className="space-y-24">
              {/* Year 2024 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between">
                <div className="w-full md:w-[45%] text-center md:text-right">
                  <h4 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tighter">2024</h4>
                  <h5 className="text-2xl font-bold text-black mb-4 uppercase">Digital Revolution</h5>
                  <p className="text-gray-600">Launched our high-tech tracking app and AI-driven nutrition plans, bridging the gap between iron and technology.</p>
                </div>
                <div className="w-8 h-8 bg-[#DB5726] rounded-full z-10 hidden md:block"></div>
                <div className="w-full md:w-[45%]"></div>
              </div>

              {/* Year 2015 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between">
                <div className="w-full md:w-[45%]"></div>
                <div className="w-8 h-8 bg-black rounded-full z-10 hidden md:block"></div>
                <div className="w-full md:w-[45%] text-center md:text-left">
                  <h4 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tighter">2015</h4>
                  <h5 className="text-2xl font-bold text-black mb-4 uppercase">Elite expansion</h5>
                  <p className="text-gray-600">Moved to our current 50,000 sq. ft flagship facility and introduced our legendary 'Athlete Protocol' training system.</p>
                </div>
              </div>

              {/* Year 2010 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between">
                <div className="w-full md:w-[45%] text-center md:text-right">
                  <h4 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tighter">2010</h4>
                  <h5 className="text-2xl font-bold text-black mb-4 uppercase">The First Rep</h5>
                  <p className="text-gray-600">Opened our first 500 sq. ft facility with nothing but iron weights and a dream to change the fitness game in our city.</p>
                </div>
                <div className="w-8 h-8 bg-[#DB5726] rounded-full z-10 hidden md:block"></div>
                <div className="w-full md:w-[45%]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOUNDER'S GOALS SECTION */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-[#DB5726] font-bold tracking-widest uppercase mb-4">Founder's Message</h2>
              <h3 className="text-2xl md:text-4xl font-bold text-black mb-8 leading-tight tracking-tight uppercase">My Goal Is Your <span className="text-[#DB5726]">Success</span></h3>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 italic">
                "When I started GymYQ, I didn't want to build just another gym. I wanted to build a sanctuary for people who are tired of mediocrity. My goal is to ensure that every person who walks through our doors leaves 1% better than they arrived—physically, mentally, and spiritually."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-[2px] bg-[#DB5726] mr-4"></div>
                <div>
                  <h5 className="text-xl font-bold text-black">John Wick</h5>
                  <p className="text-gray-500 uppercase text-xs tracking-widest">Founder & CEO</p>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2 group">
              <div className="absolute -inset-4 bg-[#DB5726] opacity-10 blur-2xl group-hover:opacity-20 transition-opacity"></div>
              <img
                src="/about_founder_portrait_1778596900188.png"
                alt="Founder"
                className="relative z-10 w-full grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. CORE VALUES SECTION */}
      <section className="py-24 px-4 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[#DB5726] font-bold tracking-[0.3em] uppercase text-sm mb-4">Our DNA</h2>
            <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight uppercase">Core <span className="text-[#DB5726]">Values</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Integrity", desc: "We do the work when no one is watching." },
              { icon: Zap, title: "Energy", desc: "We bring high intensity to every single rep." },
              { icon: Heart, title: "Passion", desc: "Fitness isn't what we do, it's who we are." },
              { icon: Trophy, title: "Victory", desc: "We are obsessed with winning and growth." }
            ].map((value, i) => (
              <div key={i} className="p-10 border border-gray-800 hover:border-[#DB5726] transition-all duration-300 group">
                <value.icon className="text-[#DB5726] mb-8 group-hover:scale-110 transition-transform" size={40} />
                <h4 className="text-2xl font-bold mb-4 uppercase">{value.title}</h4>
                <p className="text-gray-500 group-hover:text-gray-300 transition-colors">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. STATS & MILESTONES SECTION */}
      <section className="py-20 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { num: 14, suffix: "K", label: "Members Trained" },
              { num: 120, suffix: "", label: "Certifications" },
              { num: 10, suffix: "", label: "Years Experience" },
              { num: 50, suffix: "", label: "Awards Won" }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <h3 className="text-4xl md:text-5xl font-black text-black mb-2 group-hover:text-[#DB5726] transition-colors duration-300">
                  <Counter end={stat.num} suffix={stat.suffix} /><span className="text-[#DB5726] group-hover:text-black transition-colors">+</span>
                </h3>
                <div className="w-8 h-[2px] bg-[#DB5726] mx-auto mb-4 group-hover:w-16 transition-all duration-500"></div>
                <p className="text-gray-500 uppercase tracking-[0.2em] text-[10px] font-black">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="relative py-24 px-4 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="/about_values_icons_bg_1778597114260.png" className="w-full h-full object-cover" alt="CTA BG" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-5xl font-black text-white mb-8 tracking-tighter">
            Ready To Rewrite Your <span className="text-[#DB5726] uppercase">Story?</span>
          </h3>
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Join the thousands who have already transformed their lives. The best time to start was yesterday. The second best time is NOW.
          </p>
          <button 
            onClick={handleStartJourney}
            className="px-12 py-5 bg-[#DB5726] text-white font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 shadow-[0_0_40px_rgba(219,87,38,0.3)]"
          >
            Start Your Journey
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
