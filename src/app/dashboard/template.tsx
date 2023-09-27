'use client'

import React from 'react'
import { SideBar } from '@/components'

type Props = {
  children: any
}

const Template = ({ children }: Props) => {
  return (
    <div className='flex h-[100vh] items-center'>
      <SideBar />
      <div className='w-full p-[1rem] pl-[0] h-full'>
        {children}
      </div>
    </div>
  )
}

export default Template