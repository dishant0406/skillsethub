import { DashboardComponent, NotificationComponent } from '@/components'
import React from 'react'

type Props = {

}

const CirculamDev = ({ searchParams }: any) => {

  const { tab } = searchParams
  if (!tab) return null

  return (
    <div>
      {tab === 'notifications' && <NotificationComponent />}
      {tab === 'dashboard' && <DashboardComponent />}
    </div>
  )
}

export default CirculamDev