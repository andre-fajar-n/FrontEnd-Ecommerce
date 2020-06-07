import axios from "axios"

const url = process.env.REACT_APP_BASE_URL

export const changeInputDataSeller = (event) => ({
  type: "CHANGE_INPUT_DATA",
  payload: event
})

export const getDataSeller = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}penjual`, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      dispatch({
        type: "GET_DATA_SELLER",
        payload: response.data
      })
    } catch (error) {
      dispatch({ type: "GET_DATA_SELLER_FAILED" })
    }
  }
}

export const editDataSeller = () => {
  return async (dispatch, getState) => {
    const bodyRequest = {}
    let editNama = getState().seller.editNama
    let editAlamat = getState().seller.editAlamat
    let editEmail = getState().seller.editEmail
    let editNoHP = getState().seller.editNoHP

    if (typeof (editNama) === "string") bodyRequest['nama'] = editNama
    else if (typeof (editAlamat) === "string") bodyRequest['alamat'] = editAlamat
    else if (typeof (editEmail) === "string") bodyRequest['email'] = editEmail
    else if (typeof (editNoHP) === "string") bodyRequest['no_hp'] = editNoHP

    try {
      await axios({
        method: "PATCH",
        url: `${url}penjual`,
        data: bodyRequest,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      })
      dispatch({ type: "PATCH_DATA_SELLER" })
    } catch (error) {
      console.error("edit data failed")
    }
  }
}

export const postDataSeller = () => {
  return async (dispatch, getState) => {
    const bodyRequest = {
      nama: getState().user.postNama,
      alamat: getState().user.postAlamat,
      email: getState().user.postEmail,
      no_hp: getState().user.postNoHP,
    }

    try {
      await axios({
        method: "POST",
        url: `${url}penjual`,
        data: bodyRequest,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      })
    } catch (error) {
      alert("failed to upload data")
    }
  }
}

export const getProductSeller = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${url}produk/penjual`, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      dispatch({
        type: "GET_PRODUCT_SELLER",
        payload: response.data
      })
    } catch (error) {
      console.error("Belum ada produk yang dimasukkan")
    }
  }
}

export const deleteProductSeller = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${url}produk/penjual/${id}`, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
    } catch (error) {
      console.error("gagal menghapus produk", error)
    }
  }
}