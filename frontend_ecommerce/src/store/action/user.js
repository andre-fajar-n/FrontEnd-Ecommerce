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

    try {
      const response = await axios.get(url + "login",
        {
          params: {
            username: dataUsername,
            password: dataPassword
          }
        })
      localStorage.setItem("token", response.data.token)

      // start get biodata user
      try {
        const response = await axios.get(url + "user", {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
          }
        })
        localStorage.setItem("id", response.data.id)
        localStorage.setItem("username", response.data.username)
        localStorage.setItem("status_internal", response.data.status_internal)
        localStorage.setItem("status_penjual", response.data.status_penjual)
        localStorage.setItem("status_admin", response.data.status_admin)
      } catch (error) {
        alert("data cannot found")
      }
      // end get biodata user

    } catch (error) {
      alert("You don't have an account. Please register")
    }
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
    try {
      await axios.post(url + "user", bodyRequest)

      // start get token for login
      try {
        const response = await axios.get(url + "login",
          {
            params: {
              username: dataUsername,
              password: dataPassword
            }
          })
        localStorage.setItem("token", response.data.token)

        // start get biodata user
        try {
          const response = await axios.get(url + "user", {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
          })
          localStorage.setItem("id", response.data.id)
          localStorage.setItem("username", response.data.username)
          localStorage.setItem("status_internal", response.data.status_internal)
          localStorage.setItem("status_penjual", response.data.status_penjual)
          localStorage.setItem("status_admin", response.data.status_admin)
        } catch (error) {
          alert("data cannot found")
        }
        // end get biodata user

      } catch (error) {
        alert("You don't have an account. Please register")
      }
      // end get token for login

    } catch (error) {
      alert("Akun sudah terdaftar")
    }
  }
}

export const doLogout = () => {
  return () => {
    localStorage.removeItem("token")
    localStorage.removeItem("id")
    localStorage.removeItem("username")
    localStorage.removeItem("status_internal")
    localStorage.removeItem("status_penjual")
    localStorage.removeItem("status_admin")
  }
}