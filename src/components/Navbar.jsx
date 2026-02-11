import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-slate-100">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-1 p-1 border rounded-lg">
          <img src={logo} alt="Disha Nucleus Logo" className="w-9 h-9" />
          <div>
            <h1 className="text-xl font-bold text-slate-900 leading-none">Disha Nucleus</h1>
            <p className="text-[8px] text-slate-500 tracking-wider font-bold uppercase">Senior Secondary School</p>
            <p className="text-[7px] text-slate-500 tracking-wider uppercase">A Unit Of Chandrakala Sinha Gyanoday Trust</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4 items-center font-medium text-sm">
          <Link to="/" className="text-slate-600 hover:text-blue-900 transition">Home</Link>
          <Link to="/about" className="text-slate-600 hover:text-blue-900 transition">About Us</Link>
          <Link to="/academics" className="text-slate-600 hover:text-blue-900 transition">Academics</Link>

          <div className="flex gap-1 ml-2">
            <Link to="/student" className="px-4 py-2 rounded-full border border-blue-900 text-blue-900 font-semibold hover:bg-blue-50 transition text-sm">
              Student
            </Link>
            <Link to="/admin" className="px-4 py-2 rounded-full bg-blue-900 text-white font-semibold shadow-lg hover:bg-blue-800 transition hover:shadow-xl text-sm">
              Admin
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`${open ? 'max-h-screen' : 'max-h-0'} md:hidden overflow-hidden transition-[max-height] duration-300 bg-white border-t border-slate-100`}>
        <div className="container mx-auto px-6 py-4">
          <nav className="flex flex-col space-y-3 font-medium text-sm">
            <Link to="/" onClick={() => setOpen(false)} className="text-slate-700 hover:text-blue-900">Home</Link>
            <Link to="/about" onClick={() => setOpen(false)} className="text-slate-700 hover:text-blue-900">About Us</Link>
            <Link to="/academics" onClick={() => setOpen(false)} className="text-slate-700 hover:text-blue-900">Academics</Link>

            <div className="flex flex-col sm:flex-row gap-3 mt-3">
              <Link to="/student" onClick={() => setOpen(false)} className="px-4 py-2 rounded-full border border-blue-900 text-blue-900 font-semibold hover:bg-blue-50 text-sm text-center">
                Student
              </Link>
              <Link to="/admin" onClick={() => setOpen(false)} className="px-4 py-2 rounded-full bg-blue-900 text-white font-semibold hover:bg-blue-800 text-sm text-center">
                Admin
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
