import { BasicText, LinkText } from '@/components/atoms/Text'
import React, { useEffect } from 'react'
import { media, vw } from '@/styles/Mixin'
import { useHistory, useParams } from 'react-router-dom'

import { ArticleDetailContainer } from '@/components/containers/ArticleDetailContainer'
import { BORDER_COLOR } from '@/styles/Variables'
import { CommentEditorContainer } from '@/components/containers/CommentEditorContainer'
import { CommentListContainer } from '@/components/containers/CommentListContainer'
import { articleOperations } from '@/store/article'
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

  @media (${media.mobile}) {
    padding-bottom: ${vw(200)};
  }
`

const LayoutComment = styled.div`
  width: 100%;
  border-top: 1px solid ${BORDER_COLOR.SILVER};

  @media (${media.desktop}) {
    max-width: 980px;
    padding: 80px 20px 0;
    margin: 80px auto 0;
  }

  @media (${media.mobile}) {
    width: ${vw(685)};
    padding: ${vw(80)} 0 0;
    margin: ${vw(80)} auto 0;
  }
`

const LayoutCommentList = styled.div`
  @media (${media.desktop}) {
    margin: 40px auto 0;
  }

  @media (${media.mobile}) {
    margin-top: ${vw(80)};
  }
`

const LayoutSignin = styled.div`
  text-align: center;
  border-top: 1px solid ${BORDER_COLOR.SILVER};

  @media (${media.desktop}) {
    max-width: 980px;
    padding: 80px 20px 0;
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
