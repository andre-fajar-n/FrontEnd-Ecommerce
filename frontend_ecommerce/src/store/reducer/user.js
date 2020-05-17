const initialUserState = {
  username: "",
  password: "",
  isLogin: false,
  token: "",
  message: "",
  biodata:{}
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
    case "DO_LOGIN":
      return {
        ...userState,
        token: action.payload,
        isLogin: true,
        message: ""
      }
    case "DO_LOGIN_FALSE":
      return {
        ...userState,
        message: "Anda belum terdaftar"
      }
    case "DO_LOGOUT":
      return {
        ...userState,
        isLogin: false,
        token: ""
      }
      case "GET_BIOADATA_USER":
        return{
          ...userState,
          biodata:action.payload
        }
    default:
      return userState
  }
}