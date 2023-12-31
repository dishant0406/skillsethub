'use client'

import React from 'react'
import { SideBar } from '@/components'
import { useUserStore } from '@/utils/Zustand'
import { useRouter } from 'next/navigation'

type Props = {
  children: any
}

const Template = ({ children }: Props) => {
  const { user } = useUserStore()
  const router = useRouter()


  return (
    <div className='flex h-[100vh] items-center'>
      <SideBar />
      <div className='w-[75vw] p-[1rem] pl-[0] h-full'>
        {children}
      </div>
    </div>
  )
}

export default Template