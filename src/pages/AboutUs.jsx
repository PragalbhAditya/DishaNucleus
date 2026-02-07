import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, BookOpen, Heart, Target, Globe, Phone, Mail, MapPin } from 'lucide-react';
import logo from '../assets/Logo.png';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* 1. Top Bar */}
      <div className="bg-slate-900 text-slate-300 py-2 text-xs">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone size={14} className="text-yellow-500"/> +91 64124 34301</span>
            <span className="flex items-center gap-2"><Mail size={14} className="text-yellow-500"/> info@dishanucleus.in</span>
          </div>
          <div className="hidden md:block opacity-80">AFFILIATION NO.: 331023 | SCHOOL NO.: 66764</div>
        </div>
      </div>

      {/* 2. Navbar */}
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
            <Link to="/about" className="text-blue-900 font-semibold">About Us</Link>
            <Link to="#" className="text-slate-600 hover:text-blue-900 transition">Academics</Link>
            
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

      {/* 3. Page Header */}
      <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">About Disha Nucleus</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">A Legacy of Excellence in Education & Character Building Since 2002</p>
        </div>
      </div>

      {/* 4. Mission & Vision Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                To provide holistic education that develops intellectually brilliant, morally upright, and socially responsible citizens. We believe in nurturing every student's potential through quality teaching, state-of-the-art infrastructure, and a supportive learning environment.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Target className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-slate-700">Excellence in academics and character development</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-slate-700">Fostering values of integrity and compassion</span>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-slate-700">Preparing students for global opportunities</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Vision</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                To be a beacon of academic excellence and character formation, creating leaders and changemakers who contribute positively to society. We envision a school where every student discovers their potential and grows into a responsible global citizen.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                <p className="text-slate-700 font-semibold italic">
                  "Excellence in Education & Character Building"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Journey & History */}
      <div className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Journey</h2>
            <p className="text-lg text-slate-600">More than two decades of excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <TimelineItem year="2002" title="Inception" desc="Disha Nucleus School was founded with a vision to provide quality education to all." />
            <TimelineItem year="2008" title="CBSE Affiliation" desc="Achieved CBSE affiliation (Affiliation No. 331023) to standardize education quality." />
            <TimelineItem year="2015" title="Excellence Recognition" desc="Established track record in board exams, JEE, and NEET preparations." />
            <TimelineItem year="2024" title="Modern Campus" desc="Upgraded facilities with digital classrooms and advanced laboratories." />
          </div>
        </div>
      </div>

      {/* 6. Why Choose Us */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-blue-900 font-bold tracking-widest uppercase text-xs mb-3">Why Choose Disha Nucleus?</h3>
            <h2 className="text-4xl font-bold text-slate-900">What Makes Us Different</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureBox 
              icon={<Users size={32} />}
              title="Experienced Faculty" 
              desc="50+ expert teachers with years of experience in their respective subjects and pedagogical innovation."
            />
            <FeatureBox 
              icon={<BookOpen size={32} />}
              title="Comprehensive Curriculum" 
              desc="Balanced approach combining academic excellence with skill development and character formation."
            />
            <FeatureBox 
              icon={<Award size={32} />}
              title="Proven Results" 
              desc="Consistent toppers in CBSE Boards, 100% pass rate, and remarkable success in JEE & NEET."
            />
            <FeatureBox 
              icon={<Globe size={32} />}
              title="Digital Learning" 
              desc="State-of-the-art infrastructure with interactive classrooms and 24/7 access to online resources."
            />
            <FeatureBox 
              icon={<Heart size={32} />}
              title="Holistic Development" 
              desc="Focus on sports, arts, and co-curricular activities alongside academics for all-round growth."
            />
            <FeatureBox 
              icon={<Target size={32} />}
              title="Personalized Attention" 
              desc="Small class sizes ensuring individual attention and customized learning plans for each student."
            />
          </div>
        </div>
      </div>

      {/* 7. Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t-4 border-yellow-500">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
           <div>
              <h4 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                <img src={logo} alt="logo" className="w-8 h-8 rounded" />
                Disha Nucleus School
              </h4>
              <p className="text-sm leading-relaxed mb-4">A unit of Chandrakala Sinha Gyanoday Trust. Committed to nurturing intellect and character since 2002.</p>
           </div>
           
           <div>
              <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                 <li><Link to="/" className="hover:text-yellow-400 transition">Home</Link></li>
                 <li><Link to="/about" className="hover:text-yellow-400 transition">About Us</Link></li>
                 <li><a href="#" className="hover:text-yellow-400 transition">Fee Structure</a></li>
                 <li><a href="#" className="hover:text-yellow-400 transition">Contact Us</a></li>
              </ul>
           </div>
           
           <div>
              <h4 className="text-white text-lg font-bold mb-4">Contact Information</h4>
              <p className="text-sm flex items-start gap-3 mb-3">
                <MapPin size={18} className="text-blue-500 mt-1"/> 
                <span>Near Indoor Stadium, Sandy,<br/>Hajipur, Vaishali</span>
              </p>
              <p className="text-sm flex items-center gap-3 mb-3">
                <Phone size={18} className="text-blue-500"/> +91 64124 34301
              </p>
              <p className="text-sm flex items-center gap-3">
                <Mail size={18} className="text-blue-500"/> info@dishanucleus.in
              </p>
           </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
           &copy; 2026 Disha Nucleus School. All rights reserved. | Developed by Nainix Dev
        </div>
      </footer>
    </div>
  );
};

// Helper Components
const TimelineItem = ({ year, title, desc }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600 text-center">
    <h3 className="text-2xl font-bold text-blue-900 mb-2">{year}</h3>
    <h4 className="text-lg font-semibold text-slate-900 mb-2">{title}</h4>
    <p className="text-slate-600 text-sm">{desc}</p>
  </div>
);

const FeatureBox = ({ icon, title, desc }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg transition">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h4 className="text-xl font-bold text-slate-900 mb-3">{title}</h4>
    <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default AboutUs;
