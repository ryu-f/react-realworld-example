import * as React from 'react'

import { useSelector } from 'react-redux'
import { ProfileDetail } from '@/components/organisms/ProfileDetail'
import { RootState } from '@/store/rootReducer'

export const ProfileDetailContainer: React.FC = () => {
  const { user, username } = useSelector((state: RootState) => state.user)

  return user ? <ProfileDetail myname={username} profile={user} /> : null
}
