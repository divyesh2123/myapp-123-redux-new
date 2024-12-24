const initialState = {}

export default (state = 0, { type }) => {
  switch (type) {

  case 'INC':
    return  state+1

    case 'DEC':
        return  state-1

  default:
    return state
  }
}
