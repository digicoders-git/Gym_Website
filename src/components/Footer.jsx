import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-10 border-t-4 border-[#DB5726]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          
          {/* Column 1: About */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-6">
              <Link to="/" className="text-3xl font-extrabold uppercase tracking-widest text-white">
                Gym<span className="text-[#DB5726]">YQ</span>
              </Link>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
              We are a premium fitness center dedicated to helping you reach your peak physical shape. Experience the best equipment and expert trainers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-sm bg-gray-800 flex items-center justify-center hover:bg-[#DB5726] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-gray-800 flex items-center justify-center hover:bg-[#DB5726] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-gray-800 flex items-center justify-center hover:bg-[#DB5726] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-gray-800 flex items-center justify-center hover:bg-[#DB5726] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl font-bold uppercase mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-1/2 h-1 bg-[#DB5726]"></span>
            </h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Gallery', 'Blog', 'Trainers', 'Plans', 'Join Now', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link 
                    to={`/${link.toLowerCase().replace(' ', '') === 'home' ? '' : link.toLowerCase().replace(' ', '')}`} 
                    className="text-gray-400 hover:text-[#DB5726] transition-colors flex items-center justify-center md:justify-start"
                  >
                    <span className="mr-2 text-[#DB5726]">›</span> {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl font-bold uppercase mb-6 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-1/2 h-1 bg-[#DB5726]"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex flex-col items-center md:flex-row md:items-start">
                <MapPin className="text-[#DB5726] mb-2 md:mb-0 md:mr-3 md:mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-400">123 Fitness Street, Gym City, GC 45678</span>
              </li>
              <li className="flex flex-col items-center md:flex-row md:items-center">
                <Phone className="text-[#DB5726] mb-2 md:mb-0 md:mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-400">+1 234 567 8900</span>
              </li>
              <li className="flex flex-col items-center md:flex-row md:items-center">
                <Mail className="text-[#DB5726] mb-2 md:mb-0 md:mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-400">info@gymyq.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Opening Hours */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl font-bold uppercase mb-6 relative inline-block">
              Working Hours
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-1/2 h-1 bg-[#DB5726]"></span>
            </h4>
            <ul className="space-y-3 w-full max-w-[250px]">
              <li className="flex justify-between text-gray-400 border-b border-gray-800 pb-2">
                <span>Monday - Friday</span>
                <span className="text-white">5:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-400 border-b border-gray-800 pb-2">
                <span>Saturday</span>
                <span className="text-white">6:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Sunday</span>
                <span className="text-[#DB5726] font-bold">Closed</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} The Fitness World Gym. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-500">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
