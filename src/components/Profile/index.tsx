'use client'

import React from "react";
import Image from "next/image";
import { BiPencil, BiSave } from 'react-icons/bi';
import { useUserStore } from "@/utils/Zustand";
const ProfileComponent = () => {
  const [isEditing, setisEditing] = React.useState(false);
  const { user } = useUserStore()
  return (
    <div className="flex flex-col items-center p-[1rem]">
      <div className="mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)] bg-cover bg-center"></div>
      <div className="bg-white m-5 rounded-2xl z-[1] -mt-16 w-[95%] h-[100]">
        <div className=" m-10 flex justify-between">
          <div className="flex gap-6">
            <Image
              className="block mx-auto h-24 sm:mx-0 sm:shrink-0 rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
              src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
              width={100}
              height={100}
              alt="Woman's Face"
            />
            <div className="text-center space-y-2 sm:text-left mt-3">
              <div className="space-y-0.5">
                <p className="text-2xl text-black font-semibold mb-2">
                  {
                    user?.firstName
                  }
                  {
                    user?.lastName
                  }
                  {
                    !user?.firstName && !user?.lastName && 'John Doe'
                  }
                </p>
                <p className="text-slate-500 font-medium">
                  {user?.role}
                </p>
              </div>
            </div>
          </div>
          <div onClick={() => {
            setisEditing(!isEditing)
          }} className="flex items-center cursor-pointer">
            {!isEditing && <BiPencil />}
            {
              isEditing && <BiSave />
            }
            <p className="ml-2 font-bold">
              {!isEditing ? 'Edit' : 'Save'}
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="p-4 mt-4 border-t-2 border-gray-200 rounded-xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-white w-1/2 mr-2">
            <h2 className="font-bold text-2xl mb-2 p-3">Bio</h2>
            <div className="p-2">
              {!isEditing && <p className=" flex items-center gap-[1rem] font-semibold">First Name :
                <span className="font-normal">{user?.firstName || 'N/A'}</span>
              </p>}
              {
                isEditing && <input className="border-2 border-gray-300 p-2 w-full rounded-xl" type="text" placeholder="Enter Your First Name" />
              }
            </div>
            <div className='p-2'>
              {!isEditing && <p className=" flex items-center gap-[1rem] font-semibold">Last Name :
                <span className="font-normal">{user?.lastName || 'N/A'}</span>
              </p>}
              {
                isEditing && <input className="border-2 border-gray-300 p-2 w-full rounded-xl" type="text" placeholder="Enter Your Last Name" />
              }
            </div>
            <p className=" flex items-center gap-[1rem] font-semibold p-2">Email :
              <span className="font-normal">{user?.email || 'N/A'}</span>
            </p>
          </div>
          <div className="p-4 mt-4 border-t-2 border-gray-200 rounded-xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-white w-1/2 ml-2">
            <h2 className="font-bold text-2xl mb-2  p-3">Experiences</h2>
            {!isEditing && <p>
              {user?.profile.bio || 'Add your bio here'}
            </p>}
            {
              isEditing && <textarea className="border-2 border-gray-300 p-2 w-full rounded-xl h-[70%]" />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
