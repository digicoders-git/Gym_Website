import { MessageCircle, Users } from 'lucide-react';

const SocialFloating = () => {
  return (
    <div className="fixed bottom-8 left-8 z-[9999] flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/1234567890" // Replace with actual number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group relative"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={24} />
        <span className="absolute left-16 bg-black text-white text-xs px-3 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none uppercase tracking-widest font-bold">
          WhatsApp Us
        </span>
      </a>

      {/* LinkedIn Button */}
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#0077B5] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group relative"
        aria-label="Follow on LinkedIn"
      >
        <Users size={24} />
        <span className="absolute left-16 bg-black text-white text-xs px-3 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none uppercase tracking-widest font-bold">
          LinkedIn
        </span>
      </a>
    </div>
  );
};

export default SocialFloating;
