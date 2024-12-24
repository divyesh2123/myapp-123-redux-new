export const PostRequest = () => ({
  type: 'PostRequest',
  
})

export const PostSuc = (payload) => ({
  type: 'PostSuc',
  payload
})

export const PostFail = (payload) => ({
  type: 'PostFail',
  payload
})


