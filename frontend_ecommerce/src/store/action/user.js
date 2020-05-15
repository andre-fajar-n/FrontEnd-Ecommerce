import axios from "axios"

export const changeInputUsername = (event) => ({
  type: "CHANGE_INPUT_USERNAME",
  payload: event
})

export const changeInputPassword = (event) => ({
  type: "CHANGE_INPUT_PASSWORD",
  payload: event
})

export const doLogin = () => {
  return (dispatch, getState) => {

    const dataUsername = getState().user.inputUsername;

    const dataPassword = getState().user.inputPassword;

    axios.get(process.env.REACT_APP_BASE_URL + "login",
      {
        params: {
          username: dataUsername,
          password: dataPassword
        }
      })
      .then((response) => {
        dispatch({
          type: "DO_LOGIN",
          payload: response.data.token
        })
      })
      .catch((error) => {
        console.warn("cek error", error)
        dispatch({ type: "DO_LOGIN_FALSE" })
      })
  }
}

export const register = () => {
  return (dispatch, getState) => {
    const dataUsername = getState().user.inputUsername;

    const dataPassword = getState().user.inputPassword;

    const bodyRequest = {
      username: dataUsername,
      password: dataPassword
    }

    axios.post("http://0.0.0.0:9090/user", bodyRequest)
      .then((response) => {
        doLogin()
        dispatch({ type: "REGISTER", payload: response.data })
      })
  }
}

export const doLogout = () => ({ type: "DO_LOGOUT" })