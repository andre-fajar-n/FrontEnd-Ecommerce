import axios from "axios"

const url = process.env.REACT_APP_BASE_URL

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

    axios.get(url + "login",
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

    axios.post(url + "user", bodyRequest)
      .then((response) => {
        doLogin()
        dispatch({ type: "REGISTER", payload: response.data })
      })
  }
}

export const doLogout = () => ({ type: "DO_LOGOUT" })

export const getUser = () => {
  return async (dispatch, getState) => {
    const response = await axios({
      method: "GET",
      url: `${url}pembeli`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json; charset=utf-8",
        Authorization: `Bearer ${getState().user.token}`
      }
    })
    dispatch({
      type: "GET_BIOADATA_USER",
      payload: response.data
    })
  }
}