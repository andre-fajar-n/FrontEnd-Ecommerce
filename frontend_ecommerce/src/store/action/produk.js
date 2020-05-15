import axios from "axios"

const url = process.env.REACT_APP_BASE_URL

export const semuaProduk = () => {
  return (dispatch) => {
    axios.get(url + "produk")
      .then((response) => {
        dispatch({
          type: "SEMUA_PRODUK",
          payload: response.data
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }
}

export const kategori = () => {
  return (dispatch) => {
    axios.get(url + "kategori")
      .then((response) => {
        dispatch({
          type: "KATEGORI",
          payload: response.data
        })
      })
      .catch((error) => (console.error(error)))
  }
}