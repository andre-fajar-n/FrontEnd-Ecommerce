import axios from "axios"

const url = process.env.REACT_APP_BASE_URL

export const getSemuaProduk = () => {
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

export const inputProduk = (event) => ({
  type: "INPUT_PRODUK",
  payload: event
})

export const tambahProduk = () => {
  return (dispatch, getState) => {
    const inputData = new FormData();
    inputData.set('nama', getState().produk.namaProduk)
    inputData.set('kategori', getState().produk.kategori)
    inputData.set('harga', getState().produk.harga)
    inputData.set('stok', getState().produk.stok)
    inputData.set('berat', getState().produk.berat)
    inputData.set('deskripsi', getState().produk.deskripsi)

    gambar = getState().produk.gambar.replace("C:\\\\fakepath\\\\", "")
    inputData.append('gambar', gambar)
    console.warn("cek action produk", inputData)

    axios({
      method: "POST",
      url: `${url}produk/penjual`,
      data: inputData,
      headers: {
        'Content-Type': 'multipart/form-data',
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json; charset=utf-8",
        Authorization: `Bearer ${getState().user.token}`
      }
    })
  }
}