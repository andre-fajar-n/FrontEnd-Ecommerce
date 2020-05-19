const initialUserState = {
  username: "",
  password: "",
  token: "",
  biodata: {},
  status_internal: false,
  status_penjual: false,
  status_admin: false
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
      }
    case "DO_LOGOUT":
      return {
        ...userState,
        status_internal: false,
        status_admin: false,
        status_penjual: false,
        token: ""
      }
    case "GET_BIOADATA_USER":
      return {
        ...userState,
        biodata: action.payload
      }
    case "GET_USER":
      return {
        ...userState,
        status_internal: action.payload.status_internal,
        status_admin: action.payload.status_admin,
        status_penjual: action.payload.status_penjual
      }
    case "REGISTER":
      return {
        ...userState,
        status_internal: action.payload.status_internal,
        status_admin: action.payload.status_admin,
        status_penjual: action.payload.status_penjual
      }
    default:
      return userState
  }
}