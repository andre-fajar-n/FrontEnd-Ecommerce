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

export const tambahProduk = () => {
  return async (dispatch, getState) => {
    const inputData = new FormData();
    inputData.append('nama', getState().produk.namaProduk)
    inputData.append('harga', getState().produk.harga)
    inputData.append('berat', getState().produk.berat)
    inputData.append('deskripsi', getState().produk.deskripsi)
    inputData.append('kategori', getState().produk.kategori)
    inputData.append('stok', getState().produk.stok)

    gambar = getState().produk.gambar.replace("C:\\fakepath\\", "")
    console.warn("cek action produk", gambar)
    // inputData.append('gambar', gambar)

    const response = await axios.post(url + "produk/penjual", inputData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${getState().user.token}`
      }
    })
    console.warn("cek response post produk", response)
    // axios({
    //   method: "POST",
    //   url: `${url}produk/penjual`,
    //   data: inputData,
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //     "Content-Type": "application/json; charset=utf-8",
    //     Accept: "application/json; charset=utf-8",
    //     Authorization: `Bearer ${getState().user.token}`
    //   }
    // })
  }
}