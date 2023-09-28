'use client'

import { useUserStore } from '@/utils/Zustand'
import axios from 'axios'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'

type Props = {}

const Template = ({ children }: any) =>
{
  const [loading, setLoading] = useState(false)
  const query = useSearchParams()
  const router = useRouter()
  const { user, setCurrculums, setUser } = useUserStore()
  let token = query.get('token')

  // useEffect(() => {
  //   const verifyToken = async () => {
  //     if (token) {
  //       localStorage.setItem('token', token)

  //     } else {
  //       token = localStorage.getItem('token')
  //     }

  //     if (!token) {
  //       router.push('/login')
  //     }

  //     try {
  //       const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_PROD_URL}/api/v1/user/me`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`
  //         }
  //       })

  //       if (data.status === 'success') {
  //         setUser(data.data.user)
  //         setCurrculums(data.data.curriculums)
  //         // console.log(data.data.user)
  //         router.push('/dashboard/curriculum-dev?tab=dashboard')
  //       } else {
  //         router.push('/login')
  //       }
  //     }
  //     catch (err) {
  //       router.push('/login')
  //     }


  //   }

  //   verifyToken()
  // }, [token])

  return (
    <>
      {children}
      <Toaster />
    </>
  )
}

export default Template