import axios from "axios"

export const semuaProduk = () => {
  return async (dispatch) => {
    await axios.get("http://0.0.0.0:9090/produk")
      .then((response) => {
        console.warn("action produk", response)
        dispatch({
          type: "SEMUA_PRODUK",
          payload: response.data
        })
      })
      .catch((error) => {
        console.warn(error)
      })
  }
}