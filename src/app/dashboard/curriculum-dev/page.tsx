import { DashboardComponent } from '@/components'
import { NotificationComponent, ProfileComponent } from '@/components'
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
      {tab === 'profile' && <ProfileComponent />}
    </div>
  )
}

export default CirculamDev