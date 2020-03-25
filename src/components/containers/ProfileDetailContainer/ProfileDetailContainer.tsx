import * as React from 'react'

import { ProfileDetail } from '@/components/organisms/ProfileDetail'
import { RootState } from '@/store/rootReducer'
import { useSelector } from 'react-redux'

export const ProfileDetailContainer: React.FC = () => {
  const { user, username } = useSelector((state: RootState) => state.user)

  return user ? <ProfileDetail myname={username} profile={user} /> : null
}
