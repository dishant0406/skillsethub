'use client'

import React from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import { BsFillFilePdfFill, BsFiletypeTxt, BsCameraVideo } from 'react-icons/bs'
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
            <div className='flex items-center cursor-pointer'>
              <div className='flex items-center justify-center rounded-full h-[2rem] w-[2rem]'>
                <BsPlusCircle className=' text-xl' />
                
              </div>
              <p>Create</p>
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
            <div className='flex items-center cursor-pointer'>
              <div className='flex items-center justify-center rounded-full h-[2rem] w-[2rem]'>
                <BsPlusCircle className=' text-xl' />
              </div>
              <p>
                Create
              </p>
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