import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      Swal.fire({
        title: 'Login Error',
        text: 'Bhai, Email aur Password bharna zaroori hai! (Please fill all fields)',
        icon: 'error',
        confirmButtonColor: '#DB5726',
        background: '#fff',
        color: '#000'
      });
      return;
    }

    Swal.fire({
      title: 'Login Successful!',
      text: 'Welcome back to GymYQ! Hum aapka dashboard load kar rahe hain.',
      icon: 'success',
      confirmButtonColor: '#DB5726',
      background: '#fff',
      color: '#000'
    });

    // Clear form
    setFormData({ email: '', password: '' });
  };

  return (
    <div className="w-full bg-white text-black font-sans">
      {/* HERO SECTION */}
      <section className="relative w-full h-[50vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop" 
            alt="Login Hero" 
            className="w-full h-full object-cover opacity-60 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Welcome <span className="text-[#DB5726]">Back</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            The grind never stops. Login to track your progress and crush your goals.
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="pt-20 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[#DB5726] font-bold tracking-widest uppercase text-sm mb-4">Athlete Login</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 tracking-tight">Your Progress Is Waiting For You</h3>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Consistency is the secret to success. Log in to your account to view your training logs, meal plans, and upcoming sessions. Let's get back to work.
          </p>
        </div>
      </section>

      {/* LOGIN CONTENT SECTION */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto bg-white rounded-sm overflow-hidden shadow-2xl border border-gray-100 flex flex-col lg:flex-row">
          
          <div className="p-8 md:p-16 lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-black mb-2">Login To <span className="text-[#DB5726]">GymYQ</span></h2>
            <p className="text-gray-500 mb-10">Enter your credentials to access your dashboard.</p>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-bold text-black mb-1 uppercase tracking-wider">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-[#DB5726] transition-colors" 
                  placeholder="john@example.com" 
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <label className="block text-sm font-bold text-black uppercase tracking-wider">Password</label>
                  <span className="text-xs text-[#DB5726] font-bold cursor-pointer hover:underline">Forgot Password?</span>
                </div>
                <input 
                  type="password" 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-[#DB5726] transition-colors" 
                  placeholder="••••••••" 
                />
              </div>
              
              <button 
                type="submit"
                className="w-full py-4 bg-black text-white font-bold rounded-sm hover:bg-[#DB5726] transition-all transform hover:-translate-y-1 shadow-xl uppercase tracking-widest mt-4"
              >
                Login Now
              </button>
            </form>
            
            <p className="mt-8 text-center text-gray-500 text-sm">
              Don't have an account? <Link to="/join" className="text-[#DB5726] font-bold hover:underline">Join The Club</Link>
            </p>
          </div>

          <div className="hidden lg:block lg:w-1/2 relative order-1 lg:order-2">
            <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1000" alt="Login Gym" className="w-full h-full object-cover grayscale" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-12 text-right">
              <div className="text-white w-full">
                <h3 className="text-4xl font-bold mb-4 uppercase tracking-tighter">Consistency Is Key</h3>
                <p className="text-lg opacity-90 leading-relaxed italic">"Success starts with self-discipline."</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Login;
