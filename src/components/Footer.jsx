import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
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
            <span>Near Indoor Stadium, Sandy's Compound,<br/>Ghooran Peer Baba Chowk Chhoti Khanjarpur, Bhagalpur, Bihar- 812001</span>
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
        &copy; 2026 Disha Nucleus School. All rights reserved. | Developed by Pragalbh Aditya (Xenophine)
      </div>
    </footer>
  );
};

export default Footer;
