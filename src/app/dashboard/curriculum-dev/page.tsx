import { DashboardComponent } from '@/components'
import { NotificationComponent, ProfileComponent, Analytics } from '@/components'
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
      {tab === 'analytics' && <Analytics />}
    </div>
  )
}

export default CirculamDev