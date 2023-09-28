"use client";
import React from "react";
import { RiBook3Fill } from "react-icons/ri";
import { BsFileBarGraph } from "react-icons/bs";
import { BiSolidCommentDetail } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { FaHouseUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/utils/Zustand";
import ChartComponent from "./chart";
import ChartComponent2 from "./chart2";


const Analytics = () =>
{
  const { curriculums } = useUserStore()
  return (
    <div className=" w-full flex flex-col items-center h-full">
      <div className="my-[1rem] w-full px-[1rem] mb-[3rem] flex items-center justify-between">
        <p className="text-black/50">
          Dashboard / <span className="text-black">Analytics</span>
        </p>
      </div>
      <div className="m-[1rem] w-full flex items-center justify-between">
        <div className="h-[8rem] px-[1rem] relative w-[16rem] bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl">
          <div className="absolute  shadow-[0_3px_10px_rgb(0,0,0,0.2)] top-[-20%] h-[4rem] w-[4rem] left-[10%] flex items-center justify-center bg-orange-600 rounded-xl">
            <RiBook3Fill className="text-white text-3xl" />
          </div>
          <div className="w-full flex items-end h-full justify-center flex-col px-[0.5rem]">
            <div className="   text-gray-400">Total Curriculums</div>
            <div className="text-[40px] text-gray-800 font-bold">{
              curriculums.length
            }</div>
          </div>
        </div>
        <div className="h-[8rem] px-[1rem] relative w-[16rem] bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl">
          <div className="absolute  shadow-[0_3px_10px_rgb(0,0,0,0.2)] top-[-20%] h-[4rem] w-[4rem] left-[10%] flex items-center justify-center bg-blue-600 rounded-xl">
            <BsFileBarGraph className="text-white text-3xl" />
          </div>
          <div className="w-full flex items-end h-full justify-center flex-col px-[0.5rem]">
            <div className="   text-gray-400">Total Resources</div>
            <div className="text-[40px] text-gray-800 font-bold">100+</div>
          </div>
        </div>
        <div className="h-[8rem] px-[1rem] relative w-[16rem] bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl">
          <div className="absolute  shadow-[0_3px_10px_rgb(0,0,0,0.2)] top-[-20%] h-[4rem] w-[4rem] left-[10%] flex items-center justify-center bg-green-600 rounded-xl">
            <BiSolidCommentDetail className="text-white text-3xl" />
          </div>
          <div className="w-full flex items-end h-full justify-center flex-col px-[0.5rem]">
            <div className="   text-gray-400">Total Feedbacks</div>
            <div className="text-[40px] text-gray-800 font-bold">50+</div>
          </div>
        </div>
        <div className="h-[8rem] px-[1rem] relative w-[16rem] bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl">
          <div className="absolute  shadow-[0_3px_10px_rgb(0,0,0,0.2)] top-[-20%] h-[4rem] w-[4rem] left-[10%] flex items-center justify-center bg-red-600 rounded-xl">
            <SlCalender className="text-white text-3xl" />
          </div>
          <div className="w-full flex items-end h-full justify-center flex-col px-[0.5rem]">
            <div className="   text-gray-400">Joined At</div>
            <div className="text-[40px] text-gray-800 font-bold">
              {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-[5rem] w-full items-center" >
        <div className="">
          <ChartComponent />
        </div>
        <div className="">
          <ChartComponent2 />
        </div>
      </div>
    </div >
  );
};

export default Analytics;
