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
  return async (dispatch, getState) => {

    const dataUsername = getState().user.inputUsername;

    const dataPassword = getState().user.inputPassword;

    await axios.get("http://0.0.0.0:9090/login",
      {
        params: {
          username: dataUsername,
          password: dataPassword
        }
      })
      .then(async (response) => {
        console.warn("cek action doLogin", response)
        dispatch({
          type: "DO_LOGIN",
          payload: response.data.token
        })
        // localStorage.setItem("token", response.data.token)
        // localStorage.setItem("isLogin", true)
      })
      .catch(function (error) {
        console.warn("cek error", error)
        dispatch({ type: "DO_LOGIN_FALSE" })
      })

    // if (response === undefined){
    //   alert("username atau password salah")
    // } else{
    //   localStorage.setItem("token", response.data.token)
    //   // localStorage.setItem
    // }

    // dispatch({
    //   type: "DO_LOGIN"
    // })
  }
}

export const doLogout = () => ({ type: "DO_LOGOUT" })