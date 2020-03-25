import * as React from 'react'

import { media, vw } from '@/styles/Mixin'

import { BACKGROUND_COLOR } from '@/styles/Variables'
import { BasicButton } from '@/components/atoms/Button'
import { BasicText } from '@/components/atoms/Text'
import { Image } from '@/components/atoms/Image'
import { TextArea } from '@/components/atoms/TextArea'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

type Props = {
  image: string
  onSubmit: (data: FormData) => void
}

type FormData = {
  comment: string
}

export const CommentEditor: React.FC<Props> = props => {
  const { image, onSubmit } = props
  const { register, handleSubmit, errors } = useForm<FormData>()

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <LayoutTextArea>
        <TextArea
          name="comment"
          id="comment"
          placeholder="Write a comment..."
          ref={register({
            required: 'Comment is required.',
            maxLength: { value: 1000, message: 'Maxlength is 1000' }
          })}
        />
        <ErrorText size={16} textcolor="RED">
          {errors.comment && errors.comment.message}
        </ErrorText>
      </LayoutTextArea>
      <LayoutFoot>
        <ImageWrapper>
          <Image src={image} />
        </ImageWrapper>
        <SubmitButton size="BASE" type="submit">
          Post comment
        </SubmitButton>
      </LayoutFoot>
    </Form>
  )
}

const Form = styled.form`
  width: 100%;
  background-color: ${BACKGROUND_COLOR.WHITE_GLAY};
  @media (${media.desktop}) {
    padding: 10px 10px 5px;
  }

  @media (${media.mobile}) {
    padding: ${vw(20)} ${vw(20)};
  }
`

const LayoutTextArea = styled.div`
  position: relative;
`

const LayoutFoot = styled.div`
  display: flex;
  justify-content: space-between;
  @media (${media.desktop}) {
    margin-top: 22px;
  }

  @media (${media.mobile}) {
    margin-top: ${vw(45)};
  }
`

const ErrorText = styled(BasicText)`
  position: absolute;
  left: 0;

  @media (${media.desktop}) {
    bottom: -20px;
  }
`

const ImageWrapper = styled.div`
  display: block;
  flex-shrink: 0;
  clip-path: circle(50%);
  object-fit: cover;

  @media (${media.desktop}) {
    width: 30px;
    height: 30px;
    margin-left: 2px;
  }

  @media (${media.mobile}) {
    width: ${vw(60)};
    height: ${vw(60)};
    margin-left: ${vw(2)};
  }
`

const SubmitButton = styled(BasicButton)`
  @media (${media.desktop}) {
    width: 150px;
  }

  @media (${media.mobile}) {
    width: ${vw(300)};
  }
`
