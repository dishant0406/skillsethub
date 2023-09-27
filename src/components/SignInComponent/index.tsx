'use client';
import React, { useState } from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import axios from 'axios';
import { toast } from 'react-hot-toast';

type Props = {};


const SignInComponent: React.FC = () => {
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [userType, setUserType] = useState('');
  const [university, setUniversity] = useState('');
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (!email) {
        toast.error('Please enter email')
      }

      if (!userType) {
        toast.error('Please select user type')
      }

      setLoading(true)

      const univeristies = await axios.get(`http://universities.hipolabs.com/search?country=india`)
      const { data } = univeristies
      const emailDomain = email.split('@')[1]
      const university = data.find((item: any) => item.domains.includes(emailDomain))
      if (!university) {
        toast.error('Please enter valid educational email')
        return
      }

      setUniversity(university.name)

      const { data: signupData } = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_PROD_URL}/api/v1/user/signin`, {
        email,
        role: userType,
        frontend_url: 'http://localhost:3000'
      })

      if (signupData) {
        toast.success('Please check your email for verification')
      }
    }
    catch (err: any) {
      toast.error('Something went wrong')
    }
    finally {
      setLoading(false)
    }



  };


  const selectCountry = (val: any) => {
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
              <option value="curriculam developer" >Curriculam Developer</option>
              <option value="educator">Educator</option>
            </select>
          </div>
          <div className="mt-4">
            <button
              disabled={loading}
              type="submit"
              className="w-full disabled:opacity-50 disabled:cursor-not-allowed bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-300"
            >
              {
                loading ? 'Sending you the magic Link...' : 'Submit'
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignInComponent;