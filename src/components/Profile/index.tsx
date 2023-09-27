import React from "react";
import Image from "next/image";
import
{
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import
{
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
const ProfileComponent = () =>
{
  return (
    <div className="flex flex-col items-center p-[1rem]">
      <div className="mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)] bg-cover bg-center"></div>
      <div className="bg-white m-5 rounded-2xl z-[1] -mt-16 w-[95%] h-[100]">
        <div className=" m-10 flex items-center gap-6">
          <div></div>
          <Image
            className="block mx-auto h-24 sm:mx-0 sm:shrink-0 rounded-lg shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]"
            src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            width={100}
            height={100}

            alt="Woman's Face"
          />
          <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-0.5">
              <p className="text-2xl text-black font-semibold mb-2">
                Erin Lindford
              </p>
              <p className="text-slate-500 font-medium">Product Engineer</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="p-4 mt-4 border-t-2 border-gray-200 rounded-xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-white w-1/2 mr-2">
            <h2 className="font-bold text-xl mb-2">Bio</h2>
            <p>Your bio goes here...</p>
          </div>
          <div className="p-4 mt-4 border-t-2 border-gray-200 rounded-xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-white w-1/2 ml-2">
            <h2 className="font-bold text-xl mb-2">Experiences</h2>
            <p>Your Experiences goes here...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
