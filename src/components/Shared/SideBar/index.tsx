"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { HiMiniUserCircle } from "react-icons/hi2";
import { IoHome } from "react-icons/io5";
import { MdNotifications } from "react-icons/md";
import { BsClipboardData } from "react-icons/bs";
type Props = {};

const SideBar = (props: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const query = useSearchParams();
  const tab = query.get("tab");
  const [options, setOptions] = useState([
    {
      name: "Dashboard",
      Icon: IoHome,
      selected: false,
      value: "dashboard",
    },
    {
      name: "Profile",
      Icon: HiMiniUserCircle,
      selected: false,
      value: "profile",
    },
    {
      name: "Analytics",
      Icon: BsClipboardData,
      selected: false,
      value: "analytics",
    },
    {
      name: "Notifications",
      Icon: MdNotifications,
      selected: false,
      value: "notifications",
    },
  ]);

  // const handleSelect = (item: string) => {
  //   const newOptions = options.map((option) => {
  //     if (option.name === item) {
  //       return {
  //         ...option,
  //         selected: true
  //       }
  //     }
  //     return {
  //       ...option,
  //       selected: false
  //     }
  //   })
  //   setOptions(newOptions)
  // }

  useEffect(() => {
    if (tab) {
      const newOptions = options.map((option) => {
        if (option.value === tab) {
          return {
            ...option,
            selected: true,
          };
        }
        return {
          ...option,
          selected: false,
        };
      });
      setOptions(newOptions);
    }
  }, [tab]);

  const handleTabClick = (tabName: React.SetStateAction<string>) => {
    if (tabName === "") {
      router.replace(pathname);
      return;
    }

    router.replace(pathname + "?tab=" + tabName);
  };
  return (
    <div className="m-[1rem] h-[95vh] w-[20vw] rounded-lg side-bar-css">
      <div className="h-[5rem] flex items-center justify-center border-b border-[rgba(255,255,255,0.5)]">
        <img
          src="/Skils-Black.svg"
          className="h-[3rem] transition-all duration-300 hover:shadow-[3px_3px_0px_0px_rgba(255,255,255)]"
        />
      </div>
      <div className="w-full flex flex-col gap-[1rem] px-[1rem] mt-[1rem]">
        {options.map((option) => {
          return (
            <div
              onClick={() => {
                handleTabClick(option.value);
              }}
              className={`${
                option.selected &&
                "bg-[#389df0] shadow-[0_8px_20px_rgb(255,255,255,0.12)]"
              } px-[1rem] transition-all cursor-pointer ${
                !option.selected && "hover:bg-white/10"
              } duration-300 flex items-center h-[3.5rem] w-full rounded-lg`}
            >
              <option.Icon className="text-[#fff] text-xl" />
              <p className="text-[#fff] text-lg font-medium mt-[3px] ml-[1rem]">
                {option.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
