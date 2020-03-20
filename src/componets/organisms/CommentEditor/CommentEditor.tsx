import * as React from 'react'

import { BACKGROUND_COLOR } from '@/styles/Variables'
import { BasicButton } from '@/componets/atoms/Button'
import { BasicText } from '@/componets/atoms/Text'
import { Image } from '@/componets/atoms/Image'
import { TextArea } from '@/componets/atoms/TextArea'
import { media } from '@/styles/Mixin'
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
          {errors.comment && errors.comment}
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
`

const LayoutTextArea = styled.div`
  position: relative;
`

const LayoutFoot = styled.div`
  display: flex;
  justify-content: space-between;
  @media (${media.desktop}) {
    margin-top: 15px;
  }
`

const ErrorText = styled(BasicText)`
  position: absolute;
  left: 0;
  @media (${media.desktop}) {
    bottom: -25px;
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
  }
`

const SubmitButton = styled(BasicButton)`
  @media (${media.desktop}) {
    width: 150px;
  }
`
