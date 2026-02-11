import React from 'react';
import logo from '../assets/logo.png';

const teachers = [
  {
    name: 'Er. Ramkrishna Sinha',
    subject: 'Physics Expert',
    qualifications: 'B.Tech- Electrical & Electronics',
    experience: '24 Years of Experience',
    award: 'Bihar Shiksha Ratna Awardee',
  },
  {
    name: 'Mr. Abhishek kr. Sinha',
    subject: 'Mathematics Expert',
    qualifications: 'M.Sc.',
    experience: '18 Years of Experience',
  },
  {
    name: 'Mr. Santosh kr. Sharma',
    subject: 'Biology Expert',
    qualifications: 'M.Sc (Botany), B.Ed',
    experience: '18 Years of Experience',
  },
  {
    name: 'Dr. Prem Shankar Singh',
    subject: 'Economics Expert',
    qualifications: 'Ph.D., M.A (Economics)',
    experience: '35 Years of Experience',
  },
  {
    name: 'Mr. Ravi Raj',
    subject: 'Music Expert',
    qualifications: 'M.A (Music)',
    experience: '9 Years of Experience',
  },
  {
    name: 'Dr. Vivek Kumar',
    subject: 'Accounts & B.St. Expert',
    qualifications: 'Ph.D,B.Ed, M.Com',
    experience: '20 Years of Experience',
    award: 'Pratibha Samman Awardee',
  },
  {
    name: 'Mr. Amit Aman',
    subject: 'Chemistry Expert',
    qualifications: 'M.Sc(Chemistry) B.Ed.,Ph.D.(pur.)',
    experience: '14 Years of Experience',
  },
  {
    name: 'Mr.Rahul Narayan',
    subject: 'Mathematics Expert',
    qualifications: 'M.Sc.',
    experience: '17 Years of Experience',
  },
  {
    name: 'Mr. Niraj Kumar',
    subject: 'Biology Expert',
    qualifications: 'M.V.Sc',
    experience: '13 Years of Experience',
  },
  {
    name: 'Md. Nawaal Shahid',
    subject: 'English Expert',
    qualifications: 'M.A (English)',
    experience: '7 Years of Experience',
  },
  {
    name: 'Er. Md. Zeeshan Ahmad',
    subject: 'Chemistry Expert',
    qualifications: 'B.Tech-Mechanical, B.Ed.',
    experience: '14 Years of Experience',
  },
  {
    name: 'Mr. Rabindra Kr. Sinha',
    subject: 'Political Science Expert',
    qualifications: 'M.A , BPSC Qualified',
    experience: '22 Years of Experience',
  },
  {
    name: 'Mr. Vivek Kumar Pandey',
    subject: 'Economics Expert',
    qualifications: 'M.Com, LL.B',
    experience: '10 Years of Experience',
  },
  {
    name: 'Md. Zishan Ansari',
    subject: 'History Expert',
    qualifications: 'M.A(History)',
    experience: '8 Years of Experience',
  },
];

const Teachers = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Teachers</h2>
          <p className="text-lg text-slate-600">Commitment - Passion - Integrity</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <div key={index} className="bg-slate-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
              <img src={logo} alt={teacher.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-bold text-slate-900">{teacher.name}</h3>
              <p className="text-blue-600 font-semibold mb-4">{teacher.subject}</p>
              <div className="text-sm text-slate-600">
                <p className="mb-2"><span className="font-semibold">Qualifications:</span> {teacher.qualifications}</p>
                <p><span className="font-semibold">Experience:</span> {teacher.experience}</p>
                {teacher.award && <p className="mt-2 text-yellow-600 font-semibold">{teacher.award}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teachers;
