const initialUserState = {
  dataBuyer: {},
}

export default function userReducer(userState = initialUserState, action) {
  switch (action.type) {
    case "CHANGE_INPUT_USERNAME":
      return {
        ...userState,
        inputUsername: action.payload.target.value
      }
    case "CHANGE_INPUT_PASSWORD":
      return {
        ...userState,
        inputPassword: action.payload.target.value
      }
    case "GET_DATA_BUYER":
      return {
        ...userState,
        dataBuyer: action.payload
      }
    default:
      return userState
  }
}