import React from 'react';
import { useParams, Link } from 'react-router-dom';

const blogPosts = [
  { id: 1, title: "Top 5 Post-Workout Meals", date: "May 10, 2026", category: "Nutrition", img: "/nutrition_blog_hero_1778594647875.png", content: "Nutrition is the foundation of any fitness journey. What you eat after your workout determines how fast you recover and grow..." },
  { id: 2, title: "Mastering the Deadlift", date: "May 08, 2026", category: "Training", img: "/deadlift_training_hero_1778594663676.png", content: "The deadlift is the king of all exercises. It targets multiple muscle groups and builds raw power. However, form is crucial..." },
  { id: 3, title: "The Power of Morning Yoga", date: "May 05, 2026", category: "Yoga", img: "/yoga_lifestyle_hero_1778594686149.png", content: "Starting your day with yoga can transform your mental clarity and physical flexibility. Here are 5 poses to start with..." },
  { id: 4, title: "Muscle Building 101", date: "May 03, 2026", category: "Strength", img: "/strength_equipment_hero_1778594709289.png", content: "Building muscle requires consistency, progressive overload, and proper recovery. In this guide, we break down the science..." },
  { id: 5, title: "HIIT vs Steady Cardio", date: "May 01, 2026", category: "Cardio", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800", content: "Should you sprint or jog? We compare High-Intensity Interval Training with steady-state cardio for fat loss..." },
  { id: 7, title: "Mental Health & Fitness", date: "April 25, 2026", category: "Lifestyle", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800", content: "The gym isn't just for your body; it's for your mind. Physical activity reduces stress and anxiety significantly..." },
  { id: 10, title: "Olympic Lifting Basics", date: "April 18, 2026", category: "Strength", img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800", content: "The Snatch and Clean & Jerk are complex movements. Here is how to start learning them safely..." },
  { id: 12, title: "The Art of Recovery", date: "April 12, 2026", category: "Recovery", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800", content: "Your muscles grow while you sleep, not while you lift. Learn the importance of foam rolling and active rest..." },
  { id: 13, title: "Weight Loss Secrets", date: "April 10, 2026", category: "Lifestyle", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800", content: "Losing weight isn't about starving; it's about making sustainable choices. Here are 10 habits to change today..." },
  { id: 14, title: "Bench Press Mastery", date: "April 08, 2026", category: "Training", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800", content: "Want a bigger chest? The bench press is your best friend. Learn the correct bar path and leg drive..." },
  { id: 15, title: "Yoga for Athletes", date: "April 05, 2026", category: "Yoga", img: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=800", content: "Even powerlifters can benefit from yoga. Improve your range of motion and prevent injuries with these flows..." },
  { id: 16, title: "Motivation Hacks", date: "April 03, 2026", category: "Motivation", img: "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?q=80&w=800", content: "Motivation is what gets you started; habit is what keeps you going. How to stay inspired when you feel lazy..." },
  { id: 18, title: "Heart Health & Exercise", date: "March 28, 2026", category: "Cardio", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800", content: "Your heart is the most important muscle. Learn how cardio improves longevity and cardiovascular health..." },
  { id: 20, title: "Consistency is King", date: "March 22, 2026", category: "Lifestyle", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800", content: "One bad meal won't make you fat, and one good workout won't make you fit. It's about what you do every day..." }
];

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-[#DB5726] font-bold underline">Go back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-white text-black font-sans min-h-screen">
      {/* HERO SECTION */}
      <section className="relative w-full h-[50vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={post.img} 
            alt={post.title} 
            className="w-full h-full object-cover opacity-60 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="inline-block bg-[#DB5726] text-white text-xs font-bold px-4 py-1 uppercase mb-6 tracking-widest">
            {post.category}
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            {post.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-bold uppercase tracking-widest">
            {post.date}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <article className="py-24 px-4 max-w-3xl mx-auto">
        <div className="prose prose-lg">
          <p className="text-xl text-gray-600 leading-relaxed mb-8 italic border-l-4 border-[#DB5726] pl-6">
            {post.content}
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
          <h2 className="text-3xl font-bold text-black mb-6 mt-12">The Key Takeaways</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-10">
            <li>Consistency is the secret sauce to success.</li>
            <li>Proper nutrition fuels your heavy sessions.</li>
            <li>Rest is just as important as the workout itself.</li>
          </ul>
          <img src={post.img} alt="Post Inner" className="w-full h-96 object-cover rounded-sm shadow-xl my-12" />
          <p className="text-gray-700 leading-relaxed mb-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>

        <div className="mt-20 pt-10 border-t border-gray-100 flex justify-between items-center">
          <Link to="/blog" className="font-bold text-black hover:text-[#DB5726] transition-colors flex items-center">
            <span className="mr-2">←</span> Back to Blog
          </Link>
          <div className="flex gap-4">
             <span className="font-bold text-sm uppercase tracking-widest text-gray-400">Share:</span>
             <span className="text-black hover:text-[#DB5726] cursor-pointer font-bold">FB</span>
             <span className="text-black hover:text-[#DB5726] cursor-pointer font-bold">IG</span>
             <span className="text-black hover:text-[#DB5726] cursor-pointer font-bold">TW</span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogDetail;
