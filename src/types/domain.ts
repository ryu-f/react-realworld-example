export type Error = {
  errors: {
    [key: string]: Array<string>
  }
}

export type Article = {
  slug: string
  title: string
  description: string
  body: string
  tagList: Array<string>
  createdAt: Date
  updatedAt: Date
  favorited: boolean
  favoritesCount: number
  author: Profile
}

export type Comment = {
  id: number
  createdAt: Date
  updatedAt: Date
  body: string
  author: Profile
}

export type GenericErrorModel = {
  errors: GenericErrorModelErrors
}

export type GenericErrorModelErrors = {
  body: Array<string>
}

export type LoginUser = {
  email: string
  password: string
}

export type LoginUserRequest = {
  user: LoginUser
}

export type MultipleArticlesResponse = {
  articles: Array<Article>
  articlesCount: number
}

export type MultipleCommentsResponse = {
  comments: Array<Comment>
}

export type NewArticle = {
  title: string
  description: string
  body: string
  tagList?: Array<string>
}

export type NewArticleRequest = {
  article: NewArticle
}

export type NewComment = {
  body: string
}

export type NewCommentRequest = {
  comment: NewComment
}

export type NewUser = {
  username: string
  email: string
  password: string
}

export type NewUserRequest = {
  user: NewUser
}

export type Profile = {
  username: string
  bio: string
  image: string
  following: boolean
}

export type ProfileResponse = {
  profile: Profile
}

export type SingleArticleResponse = {
  article: Article
}

export type SingleCommentResponse = {
  comment: Comment
}

export type TagsResponse = {
  tags: Array<string>
}

export type UpdateArticle = {
  title?: string
  description?: string
  body?: string
}

export type UpdateArticleRequest = {
  article: UpdateArticle
}

export type UpdateUser = {
  email?: string
  token?: string
  username?: string
  bio?: string
  image?: string
}

/**
 *
 * @interface UpdateUserRequest
 */
export type UpdateUserRequest = {
  user: UpdateUser
}

export type User = {
  email: string
  token: string
  username: string
  bio: string
  image: string
}

export type UserResponse = {
  user: User
}
