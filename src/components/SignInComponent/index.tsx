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
      <div className="bg-white/60 p-8 shadow-md rounded-md w-90 h-[50vh]">
        <h2 className="text-2xl font-semibold mb-4">Login / Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Country</label>
            <CountryDropdown
              value={country}
              onChange={selectCountry}
              classes='w-[100%] mt-1 p-2 w-full border border-gray-300 rounded-md text-black/50'
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">User Type</label>
            <select
              className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black/50"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              required
            >
              <option value="" disabled className=' text-black/50'>Select User Type</option>
              <option value="curriculamDeveloper" className='text-black/50'>Curriculam Developer</option>
              <option value="student" className='text-black/50'>Student</option>
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