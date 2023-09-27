"use client";
import React from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
type Props = {};

const NotificationComponent = () =>
{
  return (
    <div className="mx-auto my-20 flex max-w-screen-lg flex-col gap-8">
      <div className="flex flex-col p-8 bg-[#36464E] shadow-md hover:shodow-lg rounded-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 rounded-2xl p-3 border border-gray-800 text-blue-400 bg-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <div className="flex flex-col ml-3">
              <div className="font-medium leading-none text-gray-100">
                Notification Title
              </div>
              <p className="text-sm text-gray-200 leading-none mt-2">
                Here comes the content of the notification
              </p>
            </div>
          </div>
          <button className="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
export default NotificationComponent;
