import { BACKGROUND_COLOR } from '@/styles/Variables'
import { BasicText } from '@/componets/atoms/Text'
import { Image } from '@/componets/atoms/Image'
import { LinkButton } from '@/componets/atoms/Button'
import { Profile } from '@/types/domain'
import React from 'react'
import { media } from '@/styles/Mixin'
import styled from 'styled-components'

type Props = {
  myname: string
  profile: Profile
}

export const ProfileDetail: React.FC<Props> = props => {
  const { username, bio, image } = props.profile
  const { myname } = props

  const ActionButton: React.FC = () =>
    username === myname ? (
      <LinkButton size="BASE" to="/settings/">
        Edit Profile Settings
      </LinkButton>
    ) : null

  return (
    <Wrapper>
      <HeroView>
        <HeroViewInner>
          <ImageWrapper>
            <Image src={image} />
          </ImageWrapper>
          <BasicText size={32} textcolor="WHITE">
            {username}
          </BasicText>
          <BasicText size={16} textcolor="GLAY">
            {bio}
          </BasicText>
          <ActionButton />
        </HeroViewInner>
      </HeroView>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  width: 100%;
`

const HeroView = styled.div`
  position: relative;
  background-color: ${BACKGROUND_COLOR.DARK_GLAY};
  @media (${media.desktop}) {
    padding: 40px 0;
  }
`

const HeroViewInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (${media.desktop}) {
    max-width: 940px;
    margin: 0 auto;
  }
`

const ImageWrapper = styled.div`
  display: block;
  flex-shrink: 0;
  clip-path: circle(50%);
  object-fit: cover;
  @media (${media.desktop}) {
    width: 100px;
    height: 100px;
  }
`
