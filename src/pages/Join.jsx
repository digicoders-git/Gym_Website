import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Join = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    plan: 'Select Your Plan',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, plan, password } = formData;

    if (!firstName || !lastName || !email || !password || plan === 'Select Your Plan') {
      Swal.fire({
        title: 'Missing Fields!',
        text: 'Bhai, saari details bharna zaroori hai! Kripya form poora karein.',
        icon: 'warning',
        confirmButtonColor: '#DB5726',
        background: '#fff',
        color: '#000'
      });
      return;
    }

    Swal.fire({
      title: 'Congratulations!',
      text: `Thank you for joining, ${firstName}! We are excited to have you in the club.`,
      icon: 'success',
      confirmButtonColor: '#DB5726',
      background: '#fff',
      color: '#000'
    });

    // Reset form after successful "submission"
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      plan: 'Select Your Plan',
      password: ''
    });
  };

  return (
    <div className="w-full bg-white text-black font-sans">
      {/* HERO SECTION */}
      <section className="relative w-full h-[60vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2000&auto=format&fit=crop" 
            alt="Join Hero" 
            className="w-full h-full object-cover opacity-60 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Join The <span className="text-[#DB5726]">Club</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            The first step towards your better self starts here. Join our elite fitness community today.
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="pt-20 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[#DB5726] font-bold tracking-widest uppercase text-sm mb-4">Your Journey Starts Here</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 tracking-tight">Become The Best Version Of Yourself</h3>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Joining GymYQ is not just about getting a membership; it's about committing to a lifestyle change. Our elite facilities and expert community are ready to support you every step of the way.
          </p>
        </div>
      </section>

      {/* JOIN FORM */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto bg-white rounded-sm overflow-hidden shadow-2xl border border-gray-100 flex flex-col lg:flex-row">
          <div className="hidden lg:block lg:w-1/2 relative">
            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000" alt="Gym" className="w-full h-full object-cover grayscale" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-12">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tighter">Start Your Transformation</h2>
                <p className="text-lg opacity-90 leading-relaxed italic">"The only bad workout is the one that didn't happen."</p>
              </div>
            </div>
          </div>
          
          <div className="p-8 md:p-16 lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-black mb-2">Create <span className="text-[#DB5726]">Account</span></h1>
            <p className="text-gray-500 mb-10">Sign up and choose your path to greatness.</p>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-[#DB5726] transition-colors" 
                  placeholder="First Name" 
                />
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-[#DB5726] transition-colors" 
                  placeholder="Last Name" 
                />
              </div>
              
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-[#DB5726] transition-colors" 
                placeholder="Email Address" 
              />
              
              <select 
                name="plan"
                value={formData.plan}
                onChange={handleChange}
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-[#DB5726] transition-colors appearance-none"
              >
                <option>Select Your Plan</option>
                <option>Basic Plan ($29/mo)</option>
                <option>Pro Plan ($49/mo)</option>
                <option>Elite Plan ($89/mo)</option>
              </select>
              
              <input 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-[#DB5726] transition-colors" 
                placeholder="Password" 
              />
              
              <button 
                type="submit"
                className="w-full py-4 bg-black text-white font-bold rounded-sm hover:bg-[#DB5726] transition-all transform hover:-translate-y-1 shadow-xl uppercase tracking-widest mt-4"
              >
                Join Now
              </button>
            </form>
            
            <p className="mt-8 text-center text-gray-500 text-sm">
              Already have an account? <Link to="/login" className="text-[#DB5726] font-bold hover:underline">Login here</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;
