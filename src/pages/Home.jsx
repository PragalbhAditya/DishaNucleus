import React from 'react';
import { BookOpen, Video, Users, Phone, Mail, MapPin, ArrowRight, Award, Target, Heart, Globe, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import gateVideo from '../assets/disha_gate-open.mp4';
import prospectus from '../assets/Disha_2026.pdf';
import sample_paper from '../assets/Sample_Paper_2026.pdf';
import logo from '../assets/logo.png';
import Navbar from '../components/Navbar';
import Gallery from '../components/Gallery';
import Teachers from '../components/Teachers';

const Home = () => {
  const videoRef = React.useRef(null);
  const [showPopup, setShowPopup] = React.useState(false);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
    const timer = setTimeout(() => {
        setShowPopup(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-2xl max-w-sm w-full text-center relative">
                <button onClick={closePopup} className="absolute top-2 right-2 text-slate-500 hover:text-slate-800">
                    <X size={24} />
                </button>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Welcome to Disha Nucleus!</h3>
                <p className="text-slate-600 mb-6">Admissions for the 2026-27 session are now open. Download our prospectus to learn more.</p>
                <div className="flex flex-col gap-4">
                    <button
                        onClick={() => {
                            window.open(prospectus, '_blank');
                            closePopup();
                        }}
                        className="bg-yellow-500 text-slate-900 px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-yellow-400 transition"
                    >
                        Download Prospectus
                    </button>
                    <button 
                        onClick={() => {
                            window.open(sample_paper, '_blank');
                            closePopup();
                        }}
                        className="px-6 py-3 rounded-lg border border-slate-300 font-semibold hover:bg-slate-100 transition"
                    >
                        Download Sample Paper
                    </button>
                </div>
            </div>
        </div>
      )}

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

      {/* 2. Navbar (responsive) */}
      <Navbar />

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
            <StatItem number="10,000+" label="Students Enrolled" />
            <StatItem number="100%" label="Excellence in boards/JEE/NEET/
            CA/CS/UPSC" />
            <StatItem number="15+" label="Expert Faculty" />
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

       {/* Mission & Vision Section */}
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

      {/* Journey & History */}
      <div className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Journey</h2>
            <p className="text-lg text-slate-600">More than two decades of excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <TimelineItem year="2002" title="Inception" desc="Disha Nucleus School was founded with a vision to provide quality education to all." />
            <TimelineItem year="2004" title="Excellence Recognition" desc="Established track record in board exams, JEE, and NEET preparations." />
            <TimelineItem year="2020" title="CBSE Affiliation" desc="Achieved CBSE affiliation (Affiliation No. 331023) to standardize education quality." />
            <TimelineItem year="2024" title="Modern Campus" desc="Upgraded facilities with digital classrooms and advanced laboratories." />
          </div>
        </div>
      </div>

      <Teachers />

      {/* Why Choose Us */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-blue-900 font-bold tracking-widest uppercase text-xs mb-3">Why Choose Disha Nucleus?</h3>
            <h2 className="text-4xl font-bold text-slate-900">What Makes Us Different</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <FeatureBox 
        icon={<BookOpen size={32} />}
        title="Concept-Driven Learning" 
        desc="Focus on building strong concepts and deep understanding, not rote memorization. Moving from rote memorization to Concept-Driven Learning is like learning to build with LEGOs instead of just memorizing what the final house looks like."
      />
      <FeatureBox 
        icon={<Users size={32} />}
        title="Experienced & Dedicated Faculty" 
        desc="Our team brings decades of combined expertise to every project, ensuring that we don't just meet standards-we set them. We continuously integrate emerging technologies and modern methodologies to stay ahead of educational trends."
      />
      <FeatureBox 
        icon={<Target size={32} />}
        title="Board + Competitive Exam Focus" 
        desc="To get success in both we apply dual strategy: mastering the foundational NCERT/Textbook theory for Boards while simultaneously practicing time-bound problem-solving for competitive success."
      />
      <FeatureBox 
        icon={<Heart size={32} />}
        title="Discipline-Focus-Values" 
        desc="Discipline provides the structure for consistency, while focus directs that energy toward specific goals. Anchored by core values, these traits transform potential into achievement."
      />
      <FeatureBox 
        icon={<Award size={32} />}
        title="Unwavering Excellence: Our Track Record" 
        desc="Our proven methodology transforms potential into excellence, securing high percentiles and prestigious placements through disciplined preparation, conceptual mastery, and expert-led guidance."
      />
      <FeatureBox 
        icon={<Globe size={32} />}
        title="Navigating Futures: Career Guidance Initiative" 
        desc="Our personalized career counseling goes beyond the classroom, helping students bridge the gap between their academic strengths and their professional aspirations through expert-led seminars, and one-on-one mentorship."
      />
      <FeatureBox 
        icon={<BookOpen size={32} />}
        title="Empowering Learning Via Modern Infrastructure" 
        desc="A modern infrastructure is a silent educator, transforming the learning experience from passive to immersive. Amenities like smart classrooms, advanced science labs, and ergonomic study zones foster critical thinking and collaboration."
      />
      <FeatureBox 
        icon={<Target size={32} />}
        title="The Power of Precision: Testing & Feedback" 
        desc="Regular assessments are the engine of academic growth. We utilize the 'Testing Effect' - a proven scientific principle where frequent recall through mock tests solidifies knowledge in long-term memory far more effectively than passive reading."
      />
    </div>
        </div>
      </div>

      <Gallery />

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

export default Home;
