'use client'

import React from 'react'
import { RiBook3Fill } from 'react-icons/ri'
import { BsFileBarGraph } from 'react-icons/bs'
import { BiSolidCommentDetail } from 'react-icons/bi'
import { SlCalender } from 'react-icons/sl'
import { BsPlusCircle } from 'react-icons/bs'
import { BsFillFilePdfFill, BsFiletypeTxt, BsCameraVideo } from 'react-icons/bs'
import { FaHouseUser } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
type Props = {}

const DashboardComponent = (props: Props) => {
  const router = useRouter()
  const circu = [
    {
      name: 'Sample Curriculum 1',
      date: '12/12/2021',
      reviews: 12
    },
    {
      name: 'Sample Curriculum 2',
      date: '12/12/2021',
      reviews: 12
    },
    {
      name: 'Sample Curriculum 4',
      date: '12/12/2021',
      reviews: 12
    },


  ]

  const resources = [
    {
      name: "Resource 1",
      type: "textbook",
      link: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    },
    {
      name: "Resource 2",
      type: "article",
      link: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    },
    {
      name: "Resource 3",
      type: "video",
      link: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    }
  ]


  return (
    <div className='w-full h-full'>
      <div className='my-[1rem] px-[1rem] mb-[3rem] flex items-center justify-between'>
        <p className='text-black/50'>
          Dashboard / <span className='text-black'>Home</span>
        </p>
        <div className='flex items-center'>
          <div className='flex items-center justify-center rounded-full h-[2rem] w-[2rem]'>
            <FaHouseUser onClick={() => {
              localStorage.removeItem('token')
              router.push('/login')
            }} className=' text-xl cursor-pointer' />
          </div>
          {/* <div className='flex items-center justify-center rounded-full h-[2rem] w-[2rem] ml-[1rem]'>
            <BsPlusCircle className=' text-xl' />
          </div> */}
        </div>
      </div>
      <div className='m-[1rem] flex items-center justify-between'>
        <div className='h-[8rem] px-[1rem] relative w-[16rem] bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl'>
          <div className='absolute  shadow-[0_3px_10px_rgb(0,0,0,0.2)] top-[-20%] h-[4rem] w-[4rem] left-[10%] flex items-center justify-center bg-orange-600 rounded-xl' >
            <RiBook3Fill className='text-white text-3xl' />
          </div>
          <div className='w-full flex items-end h-full justify-center flex-col px-[0.5rem]'>
            <div className='   text-gray-400'>Total Courses</div>
            <div className='text-[40px] text-gray-800 font-bold'>100</div>
          </div>
        </div>
        <div className='h-[8rem] px-[1rem] relative w-[16rem] bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl'>
          <div className='absolute  shadow-[0_3px_10px_rgb(0,0,0,0.2)] top-[-20%] h-[4rem] w-[4rem] left-[10%] flex items-center justify-center bg-blue-600 rounded-xl' >
            <BsFileBarGraph className='text-white text-3xl' />
          </div>
          <div className='w-full flex items-end h-full justify-center flex-col px-[0.5rem]'>
            <div className='   text-gray-400'>Total Resources</div>
            <div className='text-[40px] text-gray-800 font-bold'>100+</div>
          </div>
        </div>
        <div className='h-[8rem] px-[1rem] relative w-[16rem] bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl'>
          <div className='absolute  shadow-[0_3px_10px_rgb(0,0,0,0.2)] top-[-20%] h-[4rem] w-[4rem] left-[10%] flex items-center justify-center bg-green-600 rounded-xl' >
            <BiSolidCommentDetail className='text-white text-3xl' />
          </div>
          <div className='w-full flex items-end h-full justify-center flex-col px-[0.5rem]'>
            <div className='   text-gray-400'>Total Feedbacks</div>
            <div className='text-[40px] text-gray-800 font-bold'>50+</div>
          </div>
        </div>
        <div className='h-[8rem] px-[1rem] relative w-[16rem] bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl'>
          <div className='absolute  shadow-[0_3px_10px_rgb(0,0,0,0.2)] top-[-20%] h-[4rem] w-[4rem] left-[10%] flex items-center justify-center bg-red-600 rounded-xl' >
            <SlCalender className='text-white text-3xl' />
          </div>
          <div className='w-full flex items-end h-full justify-center flex-col px-[0.5rem]'>
            <div className='   text-gray-400'>Joined At</div>
            <div className='text-[40px] text-gray-800 font-bold'>
              {
                new Date().getFullYear()
              }
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex mx-[1rem] mt-[3rem] gap-[2rem]'>
        <div className='py-[1rem] p-[1rem] relative w-[60%] bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl'>
          <div className='flex w-full items-center justify-between'>
            <div>
              <p className='font-medium'>
                Added Curriculum
              </p>
              <p className='text-gray-400 text-[14px] ml-[0.5rem]'>
                <span className='font-bold'>10</span> added this month
              </p>
            </div>
            <div className='flex items-center'>
              <div className='flex items-center justify-center rounded-full h-[2rem] w-[2rem]'>
                <BsPlusCircle className=' text-xl' />
              </div>
            </div>
          </div>
          <div className='flex flex-col mt-[2rem]'>
            <div className='w-full flex'>
              <p className='text-[14px] w-[60%] font-bold text-black/50'>
                CURRICULUM NAME
              </p>
              <p className='text-[14px] w-[20%] font-bold text-black/50'>
                DATE
              </p>
              <p className='text-[14px] w-[20%] font-bold text-black/50'>
                REVIEWS
              </p>
            </div>
            {
              circu.map((item, index) => {
                return (
                  <div key={item.name} className='w-full shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-md p-[0.5rem] py-[1rem] transition-all duration-300 cursor-pointer hover:bg-black/20 gap-[1rem] mt-[1rem] flex'>
                    <p className='text-[14px] truncate w-[60%] font-bold text-black'>
                      {item.name}
                    </p>
                    <p className='text-[14px] truncate w-[20%] font-bold text-black'>
                      {item.date}
                    </p>
                    <p className='text-[14px] truncate w-[20%] font-bold text-black'>
                      {item.reviews}
                    </p>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='py-[1rem] p-[1rem] relative w-[30%] bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl'>
          <div className='flex w-full items-center justify-between'>
            <div>
              <p className='font-medium'>
                Added Resources
              </p>
              <p className='text-gray-400 text-[14px] ml-[0.5rem]'>
                <span className='font-bold'>15</span> added this month
              </p>
            </div>
            <div className='flex items-center'>
              <div className='flex items-center justify-center rounded-full h-[2rem] w-[2rem]'>
                <BsPlusCircle className=' text-xl' />
              </div>
            </div>
          </div>
          <div className='flex flex-col mt-[2rem]'>
            <div className='w-full flex'>
              <p className='text-[14px] w-[20%] font-bold text-black/50'>

              </p>
              <p className='text-[14px] w-[40%] font-bold text-black/50'>
                NAME
              </p>

              <p className='text-[14px] w-[40%] font-bold text-black/50'>
                LINK
              </p>
            </div>
            {
              resources.map((item, index) => {
                return (
                  <div key={item.name} className='w-full shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-md p-[0.5rem] py-[1rem] transition-all duration-300 cursor-pointer hover:bg-black/20 gap-[1rem] mt-[1rem] flex'>
                    {
                      item.type === 'textbook' && <BsFiletypeTxt className='text-[20px] text-blue-600' />
                    }
                    {
                      item.type === 'article' && <BsFillFilePdfFill className='text-[20px] text-red-600' />
                    }
                    {
                      item.type === 'video' && <BsCameraVideo className='text-[20px] text-green-600' />
                    }
                    <p className='text-[14px] truncate w-[40%] font-bold text-black'>
                      {item.name}
                    </p>
                    <p onClick={() => {
                      window.open(item.link, '__blank')
                    }} className='text-[14px] cursor-pointer truncate w-[40%] font-bold text-blue-600'>
                      {item.link}
                    </p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardComponent