const initialState = {
    data: [],
    isLoading:false,
    error: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'PostRequest':
    return { ...state, isLoading: true }

  case 'PostSuc':
    return {...state,isLoading:false,data:payload}

case 'PostFail':
    return {...state,isLoading:false,error:payload}

 

  default:
    return state
  }
}
