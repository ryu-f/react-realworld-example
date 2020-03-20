import { BasicText, LinkText } from '@/componets/atoms/Text'
import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { ArticleDetailContainer } from '@/componets/containers/ArticleDetailContainer'
import { BORDER_COLOR } from '@/styles/Variables'
import { CommentEditorContainer } from '@/componets/containers/CommentEditorContainer'
import { CommentListContainer } from '@/componets/containers/CommentListContainer'
import { articleOperations } from '@/store/article'
import { media } from '@/styles/Mixin'
import styled from 'styled-components'
import { userSelectors } from '@/store/user'

export const Article: React.FC = () => {
  const history = useHistory()
  const { slug } = useParams()
  const { getSingleArticleAsync } = articleOperations.useGetSingleArticle()
  const { loggedIn } = userSelectors.useLoggedIn()

  useEffect(() => {
    if (!slug) return history.push('/')
    getSingleArticleAsync(slug)
  }, [])

  return (
    <Wrapper>
      <ArticleDetailContainer />
      {loggedIn ? (
        <LayoutComment>
          <CommentEditorContainer />
          <LayoutCommentList>
            <CommentListContainer />
          </LayoutCommentList>
        </LayoutComment>
      ) : (
        <LayoutSignin>
          <BasicText size={16}>
            <SigninText to="/login" size={16} textcolor="HORIZON_BLUE">
              Sign in
            </SigninText>
            &nbsp;or&nbsp;
            <SigninText to="/register" size={16} textcolor="HORIZON_BLUE">
              sign up
            </SigninText>
            &nbsp;to add comments on this article.
          </BasicText>
        </LayoutSignin>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  @media (${media.desktop}) {
    padding-bottom: 100px;
  }
`

const LayoutComment = styled.div`
  border-top: 1px solid ${BORDER_COLOR.SILVER};
  @media (${media.desktop}) {
    max-width: 940px;
    padding-top: 80px;
    margin: 80px auto 0;
  }
`

const LayoutCommentList = styled.div`
  @media (${media.desktop}) {
    margin: 40px auto 0;
  }
`

const LayoutSignin = styled.div`
  text-align: center;
  border-top: 1px solid ${BORDER_COLOR.SILVER};
  @media (${media.desktop}) {
    max-width: 940px;
    padding-top: 40px;
    margin: 40px auto 0;
  }
`

const SigninText = styled(LinkText)`
  @media (${media.desktop}) {
    &:hover {
      text-decoration: underline;
    }
  }
`
