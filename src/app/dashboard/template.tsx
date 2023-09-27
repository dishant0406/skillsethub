'use client'

import React from 'react'
import { SideBar } from '@/components'

type Props = {
  children: any
}

const Template = ({ children }: Props) => {
  return (
    <div className='flex items-center'>
      <SideBar />
    </div>
  )
}

export default Template