import React from 'react'
import styled from 'styled-components'
import { media, vw } from '@/styles/Mixin'

import { BasicText } from '@/components/atoms/Text'
import { Image } from '@/components/atoms/Image'
import { LinkButton } from '@/components/atoms/Button'
import { Profile } from '@/types/domain'

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
          <BasicText size={32} textcolor="strong">
            {username}
          </BasicText>
          <BasicText size={16} textcolor="gray">
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
  background-color: ${props => props.theme.background.darkGray};

  @media (${media.desktop}) {
    padding: 40px 20px;
  }

  @media (${media.mobile}) {
    padding: ${vw(80)} ${vw(40)};
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

  @media (${media.mobile}) {
    width: ${vw(200)};
    height: ${vw(200)};
  }
`
