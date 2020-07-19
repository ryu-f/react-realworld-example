import React, { useCallback, useState } from 'react'

import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { BasicButton } from '@/components/atoms/Button'
import { BasicText } from '@/components/atoms/Text'
import { InputText } from '@/components/atoms/InputText'
import { SvgIcons } from '@/components/atoms/SvgIcons'
import { TextArea } from '@/components/atoms/TextArea'
import { media } from '@/styles/Mixin'

type Props = {
  onSubmit: (data: SubmitFormData) => void
}

type BaseFormData = {
  title: string
  description: string
  body: string
}

type LocalFormData = {
  [key: string]: string
} & BaseFormData

type SubmitFormData = {
  tagList: Array<string>
} & BaseFormData

export const ArticleEditor: React.FC<Props> = props => {
  const [tags, addTag] = useState([0, 1, 2])
  const { onSubmit } = props
  const { register, handleSubmit, errors } = useForm<LocalFormData>({ validateCriteriaMode: 'all' })
  const localSubmit = (data: LocalFormData) => {
    const { title, description, body } = data
    const tagList = tags.map((_, i) => data[`tag-${i}`]).filter(tag => tag.length)
    onSubmit({ title, description, body, tagList })
  }
  const onPlusClick = useCallback(() => {
    const addNumber = tags.length
    addTag(prevTags => [...prevTags, addNumber])
  }, [tags])

  return (
    <Form onSubmit={handleSubmit(localSubmit)}>
      <LayoutInput>
        <InputText
          type="text"
          name="title"
          id="title"
          placeholder="Article Title"
          ref={register({
            required: 'Title is required.',
            maxLength: { value: 200, message: 'Maxlength is 200' }
          })}
        />
        <ErrorText size={16} textcolor="warning">
          {errors.title && errors.title.message}
        </ErrorText>
      </LayoutInput>
      <LayoutInput>
        <InputText
          type="text"
          name="description"
          id="description"
          placeholder="What's this article about?"
          ref={register({
            required: 'About is required.',
            maxLength: { value: 200, message: 'Maxlength is 200' }
          })}
        />
        <ErrorText size={16} textcolor="warning">
          {errors.description && errors.description.message}
        </ErrorText>
      </LayoutInput>
      <LayoutInput>
        <TextArea
          name="body"
          id="body"
          placeholder="Write your article"
          ref={register({
            required: 'Body is required.',
            maxLength: { value: 1000, message: 'Maxlength is 1000' }
          })}
        />
        <ErrorText size={16} textcolor="warning">
          {errors.body && errors.body.message}
        </ErrorText>
      </LayoutInput>
      <TagList>
        {tags.map((tag, i) => (
          <TagListItem key={i}>
            <InputText
              type="text"
              name={`tag-${tag}`}
              id={`tag-${tag}`}
              placeholder={`Tag ${tag + 1}`}
              ref={register}
            />
          </TagListItem>
        ))}
      </TagList>
      <PlusButton type="button" onClick={onPlusClick}>
        <SvgIcons id="plus" />
      </PlusButton>
      <LayoutFoot>
        <BasicButton size="LARGE" type="submit">
          Publish Article
        </BasicButton>
      </LayoutFoot>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const LayoutInput = styled.div`
  position: relative;
  @media (${media.desktop}) {
    margin-top: 40px;
  }
`

const LayoutFoot = styled.div`
  @media (${media.desktop}) {
    margin-top: 30px;
  }
`

const ErrorText = styled(BasicText)`
  position: absolute;
  left: 0;
  @media (${media.desktop}) {
    bottom: -25px;
  }
`

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const TagListItem = styled.li`
  width: ${100 / 3}%;
`

const PlusButton = styled.button`
  position: relative;
  @media (${media.desktop}) {
    width: 50px;
    height: 50px;
  }
`
