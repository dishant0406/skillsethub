'use client'

import React, { useEffect } from 'react'
import { SideBar } from '@/components'
import { useUserStore } from '@/utils/Zustand'
import { useRouter } from 'next/navigation'

type Props = {
  children: any
}

const Template = ({ children }: Props) => {
  const { user } = useUserStore()
  const router = useRouter()

  useEffect(() => {
    if (user?._id) {
      router.push('/dashboard/curriculum-dev?tab=dashboard')
    }
  }, [user])

  return (
    <>
      {children}
    </>
  )
}

export default Template