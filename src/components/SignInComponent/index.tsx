'use client';
import React, { useState } from 'react';
import { CountryDropdown } from 'react-country-region-selector';

type Props = {};


const SignInComponent: React.FC = () =>
{
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [userType, setUserType] = useState('');

  const handleSubmit = (event: React.FormEvent) =>
  {
    event.preventDefault();
    console.log(`Email: ${email}, Country: ${country}, UserType: ${userType}`);
  };
  const selectCountry = (val: any) =>
  {
    setCountry(val);
  }

  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-white to-90% h-[100vh] w-[100vw]">
      <div className="bg-white/60 p-8 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-md w-[30vw] py-[4rem]">
        <h2 className="text-center text-2xl font-semibold mb-4">Login / Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter Your Email'
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">User Type</label>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              required
              className={`mt-1 p-2 w-full border border-gray-300 rounded-md ${userType ? 'text-black' : 'text-black/50'} `}
            >
              <option value="" disabled className='text-black/50'>Select User Type</option>
              <option value="curriculamDeveloper" >Curriculam Developer</option>
              <option value="student">Student</option>
            </select>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-300"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignInComponent;