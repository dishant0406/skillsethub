// pages/login.tsx
'use client';
import React, { useState } from 'react';
import { CountryDropdown } from 'react-country-region-selector';

type Props = {};


const LoginPage: React.FC = () =>
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
    setRegion(val);
  }

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md w-80">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
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
              classes='w-[100%] p-2 border border-gray-300 rounded-md'
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">User Type</label>
            <select
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              required
            >
              <option value="" disabled>Select user type</option>
              <option value="educator">Educator</option>
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
};

export default LoginPage;
