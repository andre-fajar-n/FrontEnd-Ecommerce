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
  return async (dispatch, getState) => {

    const dataUsername = getState().user.inputUsername;

    const dataPassword = getState().user.inputPassword;

    await axios.get(url + "login",
      {
        params: {
          username: dataUsername,
          password: dataPassword
        }
      })
      .then(async (response) => {
        dispatch({
          type: "DO_LOGIN",
          payload: response.data.token
        })
        await axios.get(url + "user", {
          headers: {
            'Authorization': 'Bearer ' + getState().user.token
          }
        })
          .then((responseUser) => {
            dispatch({
              type: "GET_USER",
              payload: responseUser.data
            })
          })
      })
      .catch((error) => {
        console.warn("cek error", error)
        dispatch({ type: "DO_LOGIN_FALSE" })
      })
  }
}

export const register = () => {
  return async (dispatch, getState) => {
    const dataUsername = getState().user.inputUsername;

    const dataPassword = getState().user.inputPassword;

    const bodyRequest = {
      username: dataUsername,
      password: dataPassword
    }

    await axios.post(url + "user", bodyRequest)
      .then((response) => {
        dispatch({ type: "REGISTER", payload: response.data })
      })
  }
}

export const doLogout = () => ({ type: "DO_LOGOUT" })

export const getUser = () => {
  return async (dispatch, getState) => {
    try {
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
    } catch (error) {
      alert("Silahkan lengkapi Biodata Anda")
      console.warn("cek error", error)
    }
  }
}