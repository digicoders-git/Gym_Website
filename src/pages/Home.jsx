import { useState } from 'react';
import { Link } from 'react-router-dom';

const classImages = [
  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800",
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800",
  "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=800",
  "https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=800",
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800"
];

const trainerImages = [
  "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=500",
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=500",
  "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=500",
  "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=500"
];

const testimonialsData = [
  { name: "John Doe", gender: "male", text: "This gym completely changed my life. The trainers are incredibly supportive and the facilities are always spotless.", result: "Lost 15kg in 3 months" },
  { name: "Sarah Smith", gender: "female", text: "I've been to many gyms, but the community here is unmatched. It's like a second home to me now.", result: "Muscle gain & Tone" },
  { name: "Mike Johnson", gender: "male", text: "The variety of classes is amazing. From Yoga to Boxing, there's something for everyone at any level.", result: "Improved Stamina" },
  { name: "Emily Davis", gender: "female", text: "Professional equipment and a very clean environment. I highly recommend it for serious athletes.", result: "Pro Performance" },
  { name: "David Wilson", gender: "male", text: "The personal training sessions are worth every penny. My trainer is very knowledgeable.", result: "Core Strength" },
  { name: "Linda Brown", gender: "female", text: "I love the 24/7 access. It fits perfectly with my busy work schedule. Very convenient!", result: "Consistency" },
  { name: "Robert Taylor", gender: "male", text: "Best decision I ever made for my health. The BMI tracking really helped me stay on track.", result: "Overall Health" },
  { name: "James Miller", gender: "male", text: "Cinematic vibes and high-end gear. This is the premium experience I was looking for.", result: "Elite Fitness" },
  { name: "Karen Moore", gender: "female", text: "Very friendly staff and members. I never felt intimidated as a beginner. Everyone is so helpful.", result: "Confidence" },
  { name: "Richard Anderson", gender: "male", text: "The amenities like the sauna and spa are a game-changer after a heavy leg day.", result: "Recovery" },
  { name: "Thomas Jackson", gender: "male", text: "I've reached my goal weight thanks to the expert diet plans provided by the trainers here.", result: "Weight Goal Met" },
  { name: "Christopher White", gender: "male", text: "High energy, great music, and even better people. I actually look forward to my workouts now.", result: "Mental Clarity" },
  { name: "Daniel Harris", gender: "male", text: "The classes are intense but so rewarding. The coaches really push you to your limits.", result: "Power & Speed" },
  { name: "Matthew Martin", gender: "male", text: "Modern, clean, and top-tier trainers. What more could you ask for? Definitely the best gym.", result: "Peak Condition" },
  { name: "Barbara Thompson", gender: "female", text: "I've seen amazing results in just a few weeks. The atmosphere is so motivating and positive.", result: "Visible Changes" },
  { name: "Anthony Garcia", gender: "male", text: "Great location, plenty of parking, and never too crowded. Perfect for my early morning routine.", result: "No Excuses" },
  { name: "Elizabeth Martinez", gender: "female", text: "The yoga sessions are so peaceful and help me manage stress while building strength.", result: "Flexibility" },
  { name: "Joshua Robinson", gender: "male", text: "I've been a member for 2 years and I'm not going anywhere else. This is my fitness family.", result: "Long-term Fit" },
  { name: "Mark Clark", gender: "male", text: "Outstanding facility. The equipment is always in top condition and there's never a wait.", result: "Efficiency" },
  { name: "Nancy Rodriguez", gender: "female", text: "Absolutely love the vibe here. It's more than just a gym, it's a lifestyle. Join today!", result: "Life Changing" }
];

const Home = () => {
  const [selectedClassImage, setSelectedClassImage] = useState(null);

  return (
    <div className="w-full font-sans bg-white text-black overflow-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[90vh] flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60">
            <source src="/f_c_b_e_be_f_amp_.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-normal leading-none md:leading-none mb-2">
            <span className="text-white drop-shadow-md">Transform Your Body</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 pb-2 inline-block drop-shadow-sm -mt-2">
              Transform Your Life
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto drop-shadow-md">
            Join The Fitness World Gym today. Experience top-tier equipment, expert trainers, and a community dedicated to pushing your limits.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-8 py-4 text-lg font-bold rounded-sm text-white bg-[#DB5726] hover:bg-[#b0451e] transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_14px_0_rgba(219,87,38,0.39)]">
              Start Your Journey
            </Link>
            <Link to="/about" className="px-8 py-4 text-lg font-bold rounded-sm text-white border-2 border-[#DB5726] hover:bg-[#DB5726] transition-all duration-300 transform hover:-translate-y-1">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US SECTION */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">More Than Just A Gym</h3>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                We are a community of fitness enthusiasts dedicated to helping you achieve your physical and mental best. With state-of-the-art facilities and world-class trainers, we provide the ultimate environment for your transformation.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-lg"><span className="text-[#DB5726] mr-3 font-bold">✔</span> Over 10,000 sq ft of workout space</li>
                <li className="flex items-center text-lg"><span className="text-[#DB5726] mr-3 font-bold">✔</span> Premium equipment from top brands</li>
                <li className="flex items-center text-lg"><span className="text-[#DB5726] mr-3 font-bold">✔</span> Open 24/7 for all members</li>
              </ul>
              <Link to="/about" className="inline-block px-8 py-4 text-lg font-bold text-black bg-white hover:bg-[#DB5726] hover:text-white transition-all duration-300 uppercase">
                Read Our Story
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#DB5726] translate-x-4 translate-y-4 rounded-sm"></div>
              <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop" alt="Gym Interior" className="relative z-10 w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US SECTION */}
      <section className="pt-18 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[#DB5726] font-bold tracking-wider uppercase mb-2">Why Choose Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-16">Build Your Best Self</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-10 group hover:bg-[#DB5726] transition-colors duration-300 rounded-sm border-b-4 border-[#DB5726]">
              <div className="text-[#DB5726] group-hover:text-white text-5xl mb-6">🏋️</div>
              <h4 className="text-2xl font-bold text-white mb-4 uppercase">Modern Equipment</h4>
              <p className="text-gray-400 group-hover:text-white">Access to the latest and greatest fitness machines and free weights for all muscle groups.</p>
            </div>
            <div className="bg-black p-10 group hover:bg-[#DB5726] transition-colors duration-300 rounded-sm border-b-4 border-[#DB5726]">
              <div className="text-[#DB5726] group-hover:text-white text-5xl mb-6">🧑‍🏫</div>
              <h4 className="text-2xl font-bold text-white mb-4 uppercase">Expert Trainers</h4>
              <p className="text-gray-400 group-hover:text-white">Get guidance from certified professionals dedicated to helping you reach your goals faster.</p>
            </div>
            <div className="bg-black p-10 group hover:bg-[#DB5726] transition-colors duration-300 rounded-sm border-b-4 border-[#DB5726]">
              <div className="text-[#DB5726] group-hover:text-white text-5xl mb-6">⏱️</div>
              <h4 className="text-2xl font-bold text-white mb-4 uppercase">Flexible Timings</h4>
              <p className="text-gray-400 group-hover:text-white">We are open early morning till late night to fit your busy schedule perfectly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLASSES & PROGRAMS SECTION */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#DB5726] font-bold tracking-wider uppercase mb-2">Our Programs</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-black">Classes For Everyone</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Bodybuilding', 'Crossfit', 'Yoga', 'Cardio', 'Boxing', 'Zumba'].map((cls, i) => (
              <div
                key={i}
                onClick={() => setSelectedClassImage(classImages[i])}
                className="relative h-80 overflow-hidden group cursor-pointer bg-black shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#DB5726] rounded-sm"
              >
                <img src={classImages[i]} alt={cls} className="w-full h-full object-cover opacity-60 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-[#DB5726] flex items-center justify-center mb-4 transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-75">
                    <span className="text-[#DB5726] text-2xl">👁️</span>
                  </div>
                  <h4 className="text-3xl font-extrabold text-white group-hover:text-[#DB5726] transition-colors uppercase tracking-wide">{cls}</h4>
                  <p className="text-white opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 mt-3 font-medium">Click to view preview</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Modal */}
        {selectedClassImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm" onClick={() => setSelectedClassImage(null)}>
            <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
              <button
                onClick={() => setSelectedClassImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-[#DB5726] text-5xl font-bold transition-colors leading-none"
              >
                &times;
              </button>
              <img src={selectedClassImage} alt="Class Preview" className="w-full h-auto max-h-[85vh] object-cover shadow-2xl border-4 border-gray-800 rounded-sm" />
            </div>
          </div>
        )}
      </section>

      {/* 5. EXPERT TRAINERS SECTION */}
      <section className="py-18 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#DB5726] font-bold tracking-wider uppercase mb-2">The Team</h2>
            <h3 className="text-3xl md:text-4xl font-bold">Expert Trainers</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {['John Doe', 'Sarah Smith', 'Mike Johnson', 'Emily Davis'].map((name, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="overflow-hidden mb-6 border-b-4 border-transparent group-hover:border-[#DB5726] transition-colors relative">
                  <img src={trainerImages[i]} alt={name} className="w-full h-96 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex gap-4 justify-center">
                      <span className="text-white hover:text-[#DB5726] cursor-pointer">IG</span>
                      <span className="text-white hover:text-[#DB5726] cursor-pointer">TW</span>
                    </div>
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-white uppercase text-center">{name}</h4>
                <p className="text-[#DB5726] text-center font-medium">Head Trainer</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PRICING SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[#DB5726] font-bold tracking-wider uppercase mb-2">Memberships</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-16">Choose Your Plan</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            {/* Basic Plan */}
            <div className="bg-white p-10 hover:-translate-y-2 transition-transform duration-300 rounded-2xl shadow-xl border border-gray-100 flex flex-col relative overflow-hidden">
              <h4 className="text-xl font-bold text-gray-500 mb-2 uppercase tracking-wider">Basic</h4>
              <p className="text-5xl font-extrabold text-black mb-8">$29<span className="text-lg text-gray-400 font-medium">/mo</span></p>
              <ul className="space-y-4 text-gray-600 mb-10 text-left flex-grow">
                <li className="flex items-center"><span className="text-[#DB5726] mr-3 font-bold text-xl">✓</span> Gym access during off-hours</li>
                <li className="flex items-center"><span className="text-[#DB5726] mr-3 font-bold text-xl">✓</span> Locker facility</li>
                <li className="flex items-center text-gray-300"><span className="mr-3 text-xl">✕</span> Personal Trainer</li>
                <li className="flex items-center text-gray-300"><span className="mr-3 text-xl">✕</span> Diet Plan</li>
              </ul>
              <button className="w-full py-4 font-bold bg-gray-100 text-black hover:bg-black hover:text-white transition-colors rounded-xl">Get Started</button>
            </div>
            {/* Pro Plan */}
            <div className="bg-black p-12 hover:-translate-y-2 transition-transform duration-300 shadow-2xl relative rounded-2xl flex flex-col transform lg:scale-105 border border-gray-800 z-10">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-[#DB5726] text-white text-xs font-bold px-4 py-2 rounded-bl-2xl rounded-tr-2xl uppercase tracking-wider">Most Popular</div>
              <h4 className="text-xl font-bold text-[#DB5726] mb-2 uppercase tracking-wider">Pro</h4>
              <p className="text-6xl font-extrabold text-white mb-8">$49<span className="text-lg text-gray-400 font-medium">/mo</span></p>
              <ul className="space-y-4 text-gray-300 mb-10 text-left flex-grow">
                <li className="flex items-center"><span className="text-[#DB5726] mr-3 font-bold text-xl">✓</span> 24/7 Gym access</li>
                <li className="flex items-center"><span className="text-[#DB5726] mr-3 font-bold text-xl">✓</span> All group classes</li>
                <li className="flex items-center"><span className="text-[#DB5726] mr-3 font-bold text-xl">✓</span> Locker & Towel service</li>
                <li className="flex items-center"><span className="text-[#DB5726] mr-3 font-bold text-xl">✓</span> Monthly fitness consultation</li>
              </ul>
              <button className="w-full py-4 font-bold bg-[#DB5726] text-white hover:bg-[#b0451e] transition-colors rounded-xl shadow-[0_4px_20px_rgba(219,87,38,0.4)]">Get Started</button>
            </div>
            {/* Elite Plan */}
            <div className="bg-white p-10 hover:-translate-y-2 transition-transform duration-300 rounded-2xl shadow-xl border border-gray-100 flex flex-col relative overflow-hidden">
              <h4 className="text-xl font-bold text-gray-500 mb-2 uppercase tracking-wider">Elite</h4>
              <p className="text-5xl font-extrabold text-black mb-8">$89<span className="text-lg text-gray-400 font-medium">/mo</span></p>
              <ul className="space-y-4 text-gray-600 mb-10 text-left flex-grow">
                <li className="flex items-center"><span className="text-[#DB5726] mr-3 font-bold text-xl">✓</span> 24/7 Gym access</li>
                <li className="flex items-center"><span className="text-[#DB5726] mr-3 font-bold text-xl">✓</span> Personal Trainer 2x/week</li>
                <li className="flex items-center"><span className="text-[#DB5726] mr-3 font-bold text-xl">✓</span> Premium Diet Plan</li>
                <li className="flex items-center"><span className="text-[#DB5726] mr-3 font-bold text-xl">✓</span> Spa & Sauna Access</li>
              </ul>
              <button className="w-full py-4 font-bold bg-gray-100 text-black hover:bg-black hover:text-white transition-colors rounded-xl">Get Started</button>
            </div>
          </div>
        </div>
      </section>


      {/* 8. AMENITIES SECTION */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[#DB5726] font-bold tracking-wider uppercase mb-2">Premium Perks</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-16">Gym Amenities</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🌡️', name: 'Sauna & Spa' },
              { icon: '🥤', name: 'Protein Bar' },
              { icon: '🚗', name: 'Free Parking' },
              { icon: '🔒', name: 'Secure Lockers' },
              { icon: '📶', name: 'Free Wi-Fi' },
              { icon: '👕', name: 'Pro Shop' },
              { icon: '🧼', name: 'Towels' },
              { icon: '🚿', name: 'Hot Showers' }
            ].map((item, i) => (
              <div key={i} className="border border-gray-800 p-8 hover:border-[#DB5726] transition-colors rounded-sm group cursor-pointer bg-[#111]">
                <div className="text-5xl mb-4 opacity-50 group-hover:opacity-100 group-hover:-translate-y-2 transition-all">{item.icon}</div>
                <h4 className="text-lg font-bold uppercase group-hover:text-[#DB5726] transition-colors">{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 10. CALL TO ACTION BANNER */}
      <section className="py-24 bg-[#DB5726] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-md">Ready to Push Your Limits?</h2>
          <p className="text-xl mb-10 font-medium">Join today and get your first week completely free. No commitments, just results.</p>
          <button className="px-12 py-5 bg-black text-white font-bold text-xl hover:bg-white hover:text-black transition-colors duration-300 uppercase shadow-xl rounded-sm">
            Join The Club Now
          </button>
        </div>
      </section>

      {/* 11. BMI CALCULATOR */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>

              <h3 className="text-3xl md:text-4xl font-bold mb-6">Calculate Your BMI</h3>
              <p className="text-gray-400 mb-8 text-lg">
                Body Mass Index (BMI) is a measure of body fat based on height and weight that applies to adult men and women. Use this calculator to check your status.
              </p>
              <form className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-6">
                  <input type="number" placeholder="Weight (kg)" className="w-full bg-[#111] border border-gray-800 p-4 text-white focus:outline-none focus:border-[#DB5726] transition-colors rounded-sm" />
                  <input type="number" placeholder="Height (cm)" className="w-full bg-[#111] border border-gray-800 p-4 text-white focus:outline-none focus:border-[#DB5726] transition-colors rounded-sm" />
                </div>
                <div className="flex flex-col sm:flex-row gap-6">
                  <input type="number" placeholder="Age" className="w-full sm:w-1/2 bg-[#111] border border-gray-800 p-4 text-white focus:outline-none focus:border-[#DB5726] transition-colors rounded-sm" />
                  <select className="w-full sm:w-1/2 bg-[#111] border border-gray-800 p-4 text-gray-400 focus:outline-none focus:border-[#DB5726] transition-colors outline-none rounded-sm">
                    <option>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <button type="button" className="w-full py-4 mt-4 bg-[#DB5726] text-white font-bold uppercase hover:bg-[#b0451e] transition-colors text-lg rounded-sm shadow-[0_4px_14px_0_rgba(219,87,38,0.39)]">
                  Calculate Now
                </button>
              </form>
            </div>
            <div className="bg-[#111] p-10 border border-gray-800 rounded-sm">
              <h4 className="text-3xl font-bold mb-8 border-b border-gray-800 pb-4">BMI Chart</h4>
              <ul className="space-y-6 text-lg">
                <li className="flex justify-between items-center text-gray-400 border-b border-gray-800 pb-2"><span>Below 18.5</span> <span>Underweight</span></li>
                <li className="flex justify-between items-center text-[#DB5726] font-bold border-b border-gray-800 pb-2"><span className="text-2xl">18.5 - 24.9</span> <span className="text-xl">Healthy</span></li>
                <li className="flex justify-between items-center text-gray-400 border-b border-gray-800 pb-2"><span>25.0 - 29.9</span> <span>Overweight</span></li>
                <li className="flex justify-between items-center text-gray-400"><span>30.0 and Above</span> <span>Obese</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>



      {/* 7. TESTIMONIALS SECTION */}
      <section className="pt-18 bg-gray-100 border-t border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-[#DB5726] font-bold tracking-wider uppercase mb-2">Success Stories</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-black">What Members Say</h3>
        </div>

        <div className="relative">
          <div className="animate-scroll gap-5 py-4">
            {/* Double the array for seamless infinite scroll */}
            {[...testimonialsData, ...testimonialsData].map((item, i) => (
              <div key={i} className="w-[400px] bg-white p-10 shadow-lg border-b-4 border-transparent hover:border-[#DB5726] text-left relative transition-all duration-300 rounded-sm shrink-0">
                <span className="text-[#DB5726] text-8xl absolute top-0 left-6 opacity-20 font-serif leading-none">"</span>
                <p className="text-gray-600 italic mb-8 relative z-10 pt-6 text-lg">
                  "{item.text}"
                </p>
                <div className="flex items-center mt-auto">
                  <div className="w-14 h-14 bg-gray-300 rounded-full mr-4 overflow-hidden">
                    <img
                      src={item.gender === 'male'
                        ? `https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop&crop=faces&random=${i}`
                        : `https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop&crop=faces&random=${i}`}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-black">{item.name}</h5>
                    <p className="text-sm text-[#DB5726] font-medium">{item.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
