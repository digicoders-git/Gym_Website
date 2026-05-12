import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    { id: 1, title: "Top 5 Post-Workout Meals", date: "May 10, 2026", category: "Nutrition", img: "/nutrition_blog_hero_1778594647875.png" },
    { id: 2, title: "Mastering the Deadlift", date: "May 08, 2026", category: "Training", img: "/deadlift_training_hero_1778594663676.png" },
    { id: 3, title: "The Power of Morning Yoga", date: "May 05, 2026", category: "Yoga", img: "/yoga_lifestyle_hero_1778594686149.png" },
    { id: 4, title: "Muscle Building 101", date: "May 03, 2026", category: "Strength", img: "/strength_equipment_hero_1778594709289.png" },
    { id: 5, title: "HIIT vs Steady Cardio", date: "May 01, 2026", category: "Cardio", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800" },
    { id: 7, title: "Mental Health & Fitness", date: "April 25, 2026", category: "Lifestyle", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800" },
    { id: 10, title: "Olympic Lifting Basics", date: "April 18, 2026", category: "Strength", img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800" },
    { id: 12, title: "The Art of Recovery", date: "April 12, 2026", category: "Recovery", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800" },
    { id: 13, title: "Weight Loss Secrets", date: "April 10, 2026", category: "Lifestyle", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800" },
    { id: 14, title: "Bench Press Mastery", date: "April 08, 2026", category: "Training", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800" },
    { id: 15, title: "Yoga for Athletes", date: "April 05, 2026", category: "Yoga", img: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=800" },
    { id: 16, title: "Motivation Hacks", date: "April 03, 2026", category: "Motivation", img: "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?q=80&w=800" },
    { id: 18, title: "Heart Health & Exercise", date: "March 28, 2026", category: "Cardio", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800" },
    { id: 20, title: "Consistency is King", date: "March 22, 2026", category: "Lifestyle", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800" }
  ];

  return (
    <div className="w-full bg-white text-black font-sans">
      {/* HERO SECTION */}
      <section className="relative w-full h-[60vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2000&auto=format&fit=crop"
            alt="Blog Hero"
            className="w-full h-full object-cover opacity-60 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Fitness <span className="text-[#DB5726]">Blog</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Expert insights, nutrition advice, and the latest workout trends to keep you inspired.
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="pt-20 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[#DB5726] font-bold tracking-widest uppercase text-sm mb-4">Latest Insights</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 tracking-tight">Fuel Your Mind, Transform Your Body</h3>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Explore our curated collection of fitness articles. From deep-dives into training techniques to nutrition secrets, we bring you the knowledge to crush your goals.
          </p>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-sm mb-6 aspect-video">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute top-4 left-4 bg-[#DB5726] text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">{post.category}</div>
              </div>
              <p className="text-[#DB5726] text-sm font-bold mb-2 uppercase tracking-widest">{post.date}</p>
              <h3 className="text-xl md:text-2xl font-bold text-black group-hover:text-[#DB5726] transition-colors leading-snug mb-4 tracking-tight">{post.title}</h3>
              <p className="text-gray-500 line-clamp-2">Click to read our expert breakdown on how to achieve your goals faster and more efficiently with these tips.</p>
              <div className="mt-6 flex items-center font-bold text-xs uppercase tracking-[0.2em] text-[#DB5726] group-hover:text-black transition-colors">
                Read Full Story <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
