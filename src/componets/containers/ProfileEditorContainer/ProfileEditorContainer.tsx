import * as React from 'react'

import { ProfileEditor } from '@/componets/organisms/ProfileEditor'
import { RootState } from '@/store/rootReducer'
import { useSelector } from 'react-redux'
import { userOperations } from '@/store/user'

type FormData = {
  email: string
  password: string
  username: string
  bio: string
  image: string
}

export const ProfileEditorContainer: React.FC = () => {
  const { email, username, bio, image } = useSelector((state: RootState) => state.user)
  const { updateAsync } = userOperations.useUpdate()
  const { logout } = userOperations.useLogout()
  const onSubmit = (data: FormData) => {
    const { username, email, password, bio, image } = data
    updateAsync({ username, email, password, bio, image })
  }

  return (
    <ProfileEditor
      onSubmit={onSubmit}
      logout={logout}
      email={email}
      username={username}
      bio={bio}
      image={image}
    />
  )
}
