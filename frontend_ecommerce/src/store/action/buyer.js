import axios from "axios"

const url = process.env.REACT_APP_BASE_URL

export const changeInputDataBuyer = (event) => ({
  type: "CHANGE_INPUT_DATA",
  payload: event
})

export const getDataBuyer = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios({
        method: "GET",
        url: `${url}pembeli`,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      dispatch({
        type: "GET_DATA_BUYER",
        payload: response.data
      })
    } catch (error) {
      console.error("cek error", error)
      dispatch({ type: "GET_DATA_BUYER_FAILED" })
    }
  }
}

export const postDataBuyer = () => {
  return async (dispatch, getState) => {
    const bodyRequest = {
      nama: getState().buyer.postNama,
      alamat: getState().buyer.postAlamat,
      email: getState().buyer.postEmail,
      no_hp: getState().buyer.postNoHP,
    }

    try {
      await axios({
        method: "POST",
        url: `${url}pembeli`,
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

export const editDataBuyer = () => {
  return async (dispatch, getState) => {
    const bodyRequest = {}
    let editNama = getState().buyer.editNama
    let editAlamat = getState().buyer.editAlamat
    let editEmail = getState().buyer.editEmail
    let editNoHP = getState().buyer.editNoHP

    if (typeof (editNama) === "string") bodyRequest['nama'] = editNama
    else if (typeof (editAlamat) === "string") bodyRequest['alamat'] = editAlamat
    else if (typeof (editEmail) === "string") bodyRequest['email'] = editEmail
    else if (typeof (editNoHP) === "string") bodyRequest['no_hp'] = editNoHP

    try {
      await axios({
        method: "PATCH",
        url: `${url}pembeli`,
        data: bodyRequest,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      })
      dispatch({ type: "PATCH_DATA_BUYER" })
    } catch (error) {
      console.error("edit data failed")
    }
  }
}

export const historyBuyer = () => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "GET",
        url: `${url}history/pembeli`,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      })
      dispatch({
        type: "GET_HISTORY",
        payload: response.data
      })
    } catch (error) {
      console.error("gagal memperoleh data history pembeli", error)
    }
  }
}