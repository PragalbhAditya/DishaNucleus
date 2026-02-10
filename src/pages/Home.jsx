import React from 'react';
import { BookOpen, Video, Users, Phone, Mail, MapPin, ArrowRight, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import gateVideo from '../assets/disha_gate-open.mp4';
import prospectus from '../assets/Disha_2026.pdf';
import logo from '../assets/logo.png';

const Home = () => {
  const videoRef = React.useRef(null);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* 1. Top Bar (Professional Contact Strip) */}
      <div className="bg-slate-900 text-slate-300 py-2 text-xs">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone size={14} className="text-yellow-500"/> +91 64124 34301</span>
            <span className="flex items-center gap-2"><Mail size={14} className="text-yellow-500"/> info@dishanucleus.in</span>
          </div>
          <div className="hidden md:block opacity-80">AFFILIATION NO.: 331023 | SCHOOL NO.: 66764</div>
        </div>
      </div>

      {/* 2. Navbar (Clean & Sticky) */}
      <header className="sticky top-0 z-50 bg-white shadow-md border-b border-slate-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo Area */}
          <div className="flex items-center gap-3">
             <img src={logo} alt="Disha Nucleus Logo" className="w-10 h-10 shadow-lg rounded-lg" />
             <div>
                <h1 className="text-2xl font-bold text-slate-900 leading-none">Disha Nucleus</h1>
                <p className="text-[10px] text-slate-500 tracking-widest font-bold mt-1 uppercase">Senior Secondary School</p>
             </div>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center font-medium text-sm">
            <Link to="/" className="text-slate-600 hover:text-blue-900 transition">Home</Link>
            <Link to="/about" className="text-slate-600 hover:text-blue-900 transition">About Us</Link>
            <Link to="/academics" className="text-slate-600 hover:text-blue-900 transition">Academics</Link>
            
            {/* Action Buttons */}
            <div className="flex gap-3 ml-4">
                <Link to="/student" className="px-5 py-2.5 rounded-full border border-blue-900 text-blue-900 font-semibold hover:bg-blue-50 transition text-sm">
                Student Portal
                </Link>
                <Link to="/admin" className="px-5 py-2.5 rounded-full bg-blue-900 text-white font-semibold shadow-lg hover:bg-blue-800 transition hover:shadow-xl text-sm">
                Admin Login
                </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* 3. Hero Section (Modern Gradient) */}
      <div className="relative text-white py-24 md:py-32 overflow-hidden">
        {/* Background Video */}
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          onEnded={handleVideoEnd}
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={gateVideo} type="video/mp4" />
        </video>
        
        {/* Overlay for readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-slate-900/60"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
          <div className="md:w-2/3">
             <span className="inline-block px-3 py-1 bg-blue-800/50 border border-blue-700 rounded-full text-blue-200 text-xs font-bold mb-6 tracking-wide uppercase">
                Admissions Open for 2026-27
             </span>
             <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
               Excellence in <span className="text-yellow-400">Education</span> <br/> & Character Building
             </h2>
             <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-xl">
               Preparing students for JEE, NEET, and Life. A holistic learning environment with state-of-the-art facilities and expert faculty.
             </p>
             <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
               <Link to="/student" className="bg-yellow-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-yellow-400 transition flex items-center justify-center gap-2">
                 Join Classroom <ArrowRight size={20}/>
               </Link>
               <button 
                 onClick={() => window.open(prospectus, '_blank')}
                 className="px-8 py-4 rounded-lg font-bold text-lg border border-white/30 hover:bg-white/10 transition backdrop-blur-sm"
               >
                 Download Prospectus
               </button>
             </div>
          </div>
        </div>
      </div>

      {/* 4. Stats Section (Trust Markers) */}
      <div className="bg-white py-12 border-b border-slate-100 shadow-sm relative -mt-8 mx-6 md:mx-20 rounded-xl z-20">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
            <StatItem number="24+" label="Years of Excellence" />
            <StatItem number="1200+" label="Students Enrolled" />
            <StatItem number="100%" label="Board Results" />
            <StatItem number="50+" label="Expert Faculty" />
         </div>
      </div>

      {/* 5. Messages from Leadership */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
             <h3 className="text-blue-900 font-bold tracking-widest uppercase text-xs mb-3">Leadership Vision</h3>
             <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Messages from Our Leaders</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Founder Message */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border-l-4 border-blue-600 shadow-md">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">F</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Message from the Founder</h4>
                  <p className="text-sm text-slate-600">Chandrakala Sinha Gyanoday Trust</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4 italic">
                "Education is not just about academics; it's about shaping the character of our children. At Disha Nucleus, we believe in fostering an environment where every child can discover their potential and grow into a responsible, compassionate, and successful individual. Our commitment is to provide holistic education that prepares students not just for exams, but for life."
              </p>
              <p className="text-slate-600 text-sm font-semibold">- Founder & Trustee</p>
            </div>

            {/* Principal Message */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border-l-4 border-blue-600 shadow-md">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">P</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Message from the Principal</h4>
                  <p className="text-sm text-slate-600">Principal</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4 italic">
                "Welcome to Disha Nucleus School! As Principal, I take immense pride in our institution's commitment to academic excellence and all-round development. With a dedicated team of experienced educators, state-of-the-art infrastructure, and a student-centric approach, we strive to create an atmosphere where curiosity thrives, talents bloom, and futures are shaped. Your child's success is our mission."
              </p>
              <p className="text-slate-600 text-sm font-semibold">- Principal</p>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Features Grid */}
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
             <h3 className="text-blue-900 font-bold tracking-widest uppercase text-xs mb-3">Why Choose Disha Nucleus?</h3>
             <h3 className="text-3xl md:text-4xl font-bold text-slate-900">A World-Class Learning Ecosystem</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Video className="w-8 h-8 text-blue-600" />}
              title="Interactive Live Classes" 
              desc="Seamless Zoom integration for real-time learning. Attend classes from the safety of your home."
            />
            <FeatureCard 
              icon={<BookOpen className="w-8 h-8 text-blue-600" />}
              title="Digital Library & Notes" 
              desc="24/7 access to high-quality PDF notes, recorded lectures, and assignments."
            />
            <FeatureCard 
              icon={<Award className="w-8 h-8 text-blue-600" />}
              title="Proven Track Record" 
              desc="Consistently producing toppers in CBSE Boards, JEE, and NEET exams."
            />
          </div>
        </div>
      </div>

      {/* 6. Footer (Professional) */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t-4 border-yellow-500">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
           <div>
              <h4 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                <img src={logo} alt="Disha Logo" className="w-8 h-8 rounded" />
                Disha Nucleus School
              </h4>
              <p className="text-sm leading-relaxed mb-4">A unit of Chandrakala Sinha Gyanoday Trust. Committed to nurturing intellect and character since 2002.</p>
           </div>
           
           <div>
              <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                 <li><a href="#" className="hover:text-yellow-400 transition">Admissions Process</a></li>
                 <li><a href="#" className="hover:text-yellow-400 transition">Fee Structure</a></li>
                 <li><a href="#" className="hover:text-yellow-400 transition">Academic Calendar</a></li>
                 <li><a href="#" className="hover:text-yellow-400 transition">Contact Us</a></li>
              </ul>
           </div>
           
           <div>
              <h4 className="text-white text-lg font-bold mb-4">Contact Information</h4>
              <p className="text-sm flex items-start gap-3 mb-3">
                <MapPin size={18} className="text-blue-500 mt-1"/> 
                <span>Near Indoor Stadium, Sandy,<br/>Ghooran Peer Baba Chowk Chhoti Khanjarpur, Bhagalpur, Bihar- 812001</span>
              </p>
              <p className="text-sm flex items-center gap-3 mb-3">
                <Phone size={18} className="text-blue-500"/> +91 64124 34301
              </p>
              <p className="text-sm flex items-center gap-3">
                <Mail size={18} className="text-blue-500"/> principal@dishanucleus.in
              </p>
           </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
           &copy; 2026 Disha Nucleus School. All rights reserved. | Developed by Xenophine
        </div>
      </footer>
    </div>
  );
};

// --- Helper Components for Clean Code ---

const StatItem = ({ number, label }) => (
  <div className="px-4">
     <h4 className="text-3xl font-bold text-blue-900 mb-1">{number}</h4>
     <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">{label}</p>
  </div>
);

const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
    <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
       <div className="text-blue-600 group-hover:text-white transition-colors duration-300">{icon}</div>
    </div>
    <h4 className="text-xl font-bold text-slate-900 mb-3">{title}</h4>
    <p className="text-slate-600 leading-relaxed text-sm">{desc}</p>
  </div>
);

export default Home;
