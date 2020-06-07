import axios from "axios"

const url = process.env.REACT_APP_BASE_URL

export const getSemuaProduk = () => {
  return (dispatch) => {
    dispatch({ type: "IS_LOADING" })

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
    dispatch({ type: "IS_LOADING" })

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

export const inputProduk = (event) => ({
  type: "INPUT_PRODUK",
  payload: event
})

export const fileSelectedHandler = (event) => ({
  type: "INPUT_FILE",
  payload: event
})

export const tambahProduk = () => {
  return async (dispatch, getState) => {
    const inputData = new FormData();
    inputData.append('nama', getState().produk.namaProduk)
    inputData.append('kategori', getState().produk.kategori)
    inputData.append('harga', getState().produk.harga)
    inputData.append('stok', getState().produk.stok)
    inputData.append('berat', getState().produk.berat)
    inputData.append('deskripsi', getState().produk.deskripsi)
    inputData.append('gambar', getState().produk.gambar)

    try {
      await axios({
        method: "POST",
        url: `${url}produk`,
        data: inputData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      })
    } catch (error) {
      console.error("gagal menambah produk")
    }
  }
}