import React from "react";
import Image from "next/image";
import { BiPencil } from 'react-icons/bi';
const ProfileComponent = () => {
  return (
    <div className="flex flex-col items-center p-[1rem]">
      <div className="mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)] bg-cover bg-center"></div>
      <div className="bg-white m-5 rounded-2xl z-[1] -mt-16 w-[95%] h-[100vh]">
          <div className=" m-10 flex justify-between">
          <div className="flex gap-6">
            <Image
              className="block mx-auto h-24 sm:mx-0 sm:shrink-0 rounded-lg" 
              src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
              width={100}
              height={100}
              alt="Woman's Face"
            />
            <div className="text-center space-y-2 sm:text-left mt-3">
              <div className="space-y-0.5">
                <p className="text-2xl text-black font-semibold mb-2">
                  Erin Lindford
                </p>
                <p className="text-slate-500 font-medium">Product Engineer</p>
              </div>
            </div>
          </div>
          <div className="flex items-center cursor-pointer">
             <BiPencil/>
            <p className="ml-2 font-bold">Edit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
