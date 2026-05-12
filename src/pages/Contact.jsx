import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Swal from 'sweetalert2';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      Swal.fire({
        title: 'Missing Info',
        text: 'Bhai, saare fields bharna zaroori hai! (All fields are required)',
        icon: 'warning',
        confirmButtonColor: '#DB5726',
        background: '#fff',
        color: '#000'
      });
      return;
    }

    Swal.fire({
      title: 'Message Sent!',
      text: 'Bhai, aapka message humein mil gaya hai. Hum jald hi aapse baat karenge!',
      icon: 'success',
      confirmButtonColor: '#DB5726',
      background: '#fff',
      color: '#000'
    });

    // Clear form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="w-full bg-white text-black font-sans">
      {/* HERO SECTION */}
      <section className="relative w-full h-[60vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop" 
            alt="Contact Hero" 
            className="w-full h-full object-cover opacity-60 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Contact <span className="text-[#DB5726]">Us</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Reach out to us today and let's start your fitness transformation together.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <h2 className="text-[#DB5726] font-bold tracking-widest uppercase mb-4 text-sm">Get In Touch</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-8">We're Here For You</h3>
            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              Have a question? Our team is ready to help you push your limits. Reach out via any of the channels below or fill out the form.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-center group cursor-pointer">
                <div className="w-14 h-14 bg-black text-white flex items-center justify-center rounded-sm group-hover:bg-[#DB5726] transition-all duration-300 mr-6 shadow-xl">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-black uppercase tracking-tight text-sm mb-1">Our Location</h4>
                  <p className="text-gray-500 font-medium">123 Fitness Street, Gym City, GC 45678</p>
                </div>
              </div>
              
              <div className="flex items-center group cursor-pointer">
                <div className="w-14 h-14 bg-black text-white flex items-center justify-center rounded-sm group-hover:bg-[#DB5726] transition-all duration-300 mr-6 shadow-xl">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-black uppercase tracking-tight text-sm mb-1">Call Us Anytime</h4>
                  <p className="text-gray-500 font-medium">+1 234 567 8900</p>
                </div>
              </div>
              
              <div className="flex items-center group cursor-pointer">
                <div className="w-14 h-14 bg-black text-white flex items-center justify-center rounded-sm group-hover:bg-[#DB5726] transition-all duration-300 mr-6 shadow-xl">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-black uppercase tracking-tight text-sm mb-1">Email Address</h4>
                  <p className="text-gray-500 font-medium">info@gymyq.com</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form Side */}
          <div className="bg-gray-50 p-10 rounded-sm shadow-xl border border-gray-100">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  className="w-full p-4 bg-white border border-gray-200 focus:border-[#DB5726] outline-none rounded-sm transition-colors" 
                />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email" 
                  className="w-full p-4 bg-white border border-gray-200 focus:border-[#DB5726] outline-none rounded-sm transition-colors" 
                />
              </div>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject" 
                className="w-full p-4 bg-white border border-gray-200 focus:border-[#DB5726] outline-none rounded-sm transition-colors" 
              />
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message" 
                rows="5" 
                className="w-full p-4 bg-white border border-gray-200 focus:border-[#DB5726] outline-none rounded-sm transition-colors"
              ></textarea>
              <button 
                type="submit"
                className="w-full py-4 bg-black text-white font-bold uppercase tracking-widest hover:bg-[#DB5726] transition-colors rounded-sm shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
