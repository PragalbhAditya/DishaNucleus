import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, Zap, Target, Globe, Phone, Mail, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const Academics = () => {
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
            <Link to="/about" className="text-slate-600 hover:text-blue-900 transition">About Us</Link>
            <Link to="/academics" className="text-blue-900 font-semibold">Academics</Link>
            
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
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Academics at Disha Nucleus</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">Comprehensive curriculum designed to develop critical thinking, problem-solving, and academic excellence</p>
        </div>
      </div>

      {/* 4. Boards & Certifications */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Boards & Certifications</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CertBox 
              title="CBSE Board" 
              subtitle="Central Board of Secondary Education"
              details={[
                'Classes I to XII',
                'Affiliation No.: 331023',
                'School Code: 66764',
                '100% Pass Rate Record'
              ]}
            />
            <CertBox 
              title="JEE Preparation" 
              subtitle="Joint Entrance Exam"
              details={[
                'Dedicated coaching classes',
                'Expert faculty guidance',
                'Mock tests & analysis',
                'Regular progress tracking'
              ]}
            />
            <CertBox 
              title="NEET Preparation" 
              subtitle="National Eligibility cum Entrance Test"
              details={[
                'Comprehensive Biology focus',
                'Laboratory facilities',
                'Medical entrance mastery',
                'Top achievers every year'
              ]}
            />
          </div>
        </div>
      </div>

      {/* 5. Curriculum Structure */}
      <div className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-blue-900 font-bold tracking-widest uppercase text-xs mb-3">Course Structure</h3>
            <h2 className="text-4xl font-bold text-slate-900">Our Curriculum</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CurriculumSection 
              title="Primary Section (Classes I-V)"
              subjects={['English', 'Hindi', 'Mathematics', 'Science', 'Social Studies', 'Computer Science', 'Art & Craft', 'Physical Education']}
            />
            <CurriculumSection 
              title="Upper Primary (Classes VI-VIII)"
              subjects={['English', 'Hindi/Regional Language', 'Mathematics', 'Science', 'Social Studies', 'Computer Science', 'Physical Education', 'Arts']}
            />
            <CurriculumSection 
              title="Secondary (Classes IX-X)"
              subjects={['English Core', 'Hindi', 'Mathematics', 'Science (Physics, Chemistry, Biology)', 'Social Studies', 'Computer Science', 'Physical Education']}
            />
            <CurriculumSection 
              title="Senior Secondary (Classes XI-XII)"
              subjects={['English', 'Physics', 'Chemistry', 'Biology/Mathematics', 'Computer Science', 'Physical Education', 'Electives as per choice']}
            />
          </div>
        </div>
      </div>

      {/* 6. Teaching Methodology */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Teaching Methodology</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-6">
                <MethodItem 
                  title="Interactive Learning"
                  desc="Engaging classrooms with teacher-student interaction and collaborative learning"
                />
                <MethodItem 
                  title="Technology-Enabled Classes"
                  desc="Smart classrooms with digital boards, audio-visual aids, and online resources"
                />
                <MethodItem 
                  title="Practical Demonstrations"
                  desc="Hands-on laboratory work and experiments for conceptual clarity"
                />
                <MethodItem 
                  title="Continuous Assessment"
                  desc="Regular formative and summative evaluations with personalized feedback"
                />
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <FeatureCard icon={<BookOpen size={32} />} label="24/7 Online Support" />
              <FeatureCard icon={<Users size={32} />} label="Small Class Size" />
              <FeatureCard icon={<Target size={32} />} label="Individual Attention" />
              <FeatureCard icon={<Zap size={32} />} label="Interactive Sessions" />
            </div>
          </div>
        </div>
      </div>

      {/* 7. Academic Performance */}
      <div className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Our Track Record</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="100%" label="CBSE Pass Rate" />
            <StatCard number="95+" label="Average Marks" />
            <StatCard number="50+" label="JEE Qualifiers" />
            <StatCard number="45+" label="NEET Toppers" />
          </div>
        </div>
      </div>

      {/* 8. Co-Curricular Activities */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-blue-900 font-bold tracking-widest uppercase text-xs mb-3">Beyond Classroom</h3>
            <h2 className="text-4xl font-bold text-slate-900">Co-Curricular Activities</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ActivityBox title="Sports" items={['Cricket', 'Basketball', 'Badminton', 'Table Tennis', 'Athletic Meet', 'Annual Sports Day']} />
            <ActivityBox title="Cultural Programs" items={['Annual Day Celebrations', 'Hindi Divas', 'Science Exhibition', 'Model United Nations', 'Debate Competition', 'Music & Dance']} />
            <ActivityBox title="Clubs & Societies" items={['Science Club', 'Mathematics Club', 'Computer Lab', 'Literary Society', 'Art & Craft Club', 'Environmental Club']} />
            <ActivityBox title="Community Service" items={['Cleanliness Drive', 'Social Awareness', 'Health Camp', 'Tree Plantation', 'Charity Programs', 'Community Engagement']} />
          </div>
        </div>
      </div>

      {/* 9. Admission & Fee Structure */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Admissions Now Open</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Join Disha Nucleus and be part of a thriving academic community focused on your holistic development.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href="mailto:info@dishanucleus.in" className="bg-yellow-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-yellow-400 transition inline-block">
              Get Fee Details
            </a>
            <a href="mailto:info@dishanucleus.in" className="bg-blue-900 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-blue-800 transition inline-block">
              Apply Now
            </a>
          </div>
        </div>
      </div>

      {/* 10. Footer */}
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
                 <li><Link to="/academics" className="hover:text-yellow-400 transition">Academics</Link></li>
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
const CertBox = ({ title, subtitle, details }) => (
  <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-md border-t-4 border-blue-600">
    <h3 className="text-2xl font-bold text-blue-900 mb-2">{title}</h3>
    <p className="text-slate-600 text-sm mb-6">{subtitle}</p>
    <ul className="space-y-3">
      {details.map((detail, idx) => (
        <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm">
          <Award size={16} className="text-blue-600 mt-1 flex-shrink-0" />
          <span>{detail}</span>
        </li>
      ))}
    </ul>
  </div>
);

const CurriculumSection = ({ title, subjects }) => (
  <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-600">
    <h3 className="text-xl font-bold text-slate-900 mb-6">{title}</h3>
    <div className="grid grid-cols-2 gap-4">
      {subjects.map((subject, idx) => (
        <div key={idx} className="flex items-center gap-2 text-slate-700">
          <BookOpen size={16} className="text-blue-600" />
          <span className="text-sm">{subject}</span>
        </div>
      ))}
    </div>
  </div>
);

const MethodItem = ({ title, desc }) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100">
        <Zap size={20} className="text-blue-600" />
      </div>
    </div>
    <div>
      <h4 className="text-lg font-semibold text-slate-900">{title}</h4>
      <p className="text-slate-600 text-sm mt-1">{desc}</p>
    </div>
  </div>
);

const FeatureCard = ({ icon, label }) => (
  <div className="bg-blue-50 p-6 rounded-lg text-center border border-blue-200">
    <div className="text-blue-600 mb-3 flex justify-center">{icon}</div>
    <p className="text-slate-900 font-semibold text-sm">{label}</p>
  </div>
);

const StatCard = ({ number, label }) => (
  <div className="bg-white p-8 rounded-lg shadow-md text-center border-t-4 border-blue-600">
    <h3 className="text-4xl font-bold text-blue-900 mb-2">{number}</h3>
    <p className="text-slate-600 text-sm font-medium">{label}</p>
  </div>
);

const ActivityBox = ({ title, items }) => (
  <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-600">
    <h3 className="text-xl font-bold text-slate-900 mb-6">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-center gap-3 text-slate-700 text-sm">
          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Academics;
