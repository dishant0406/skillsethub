import { NotificationComponent } from '@/components'
import React from 'react'

type Props = {

}

const CirculamDev = ({ searchParams }: any) => {

  const { tab } = searchParams

  console.log('tab', tab)
  if (!tab) return null

  return (
    <div>
      {tab === 'notifications' && <NotificationComponent />}
    </div>
  )
}

export default CirculamDev