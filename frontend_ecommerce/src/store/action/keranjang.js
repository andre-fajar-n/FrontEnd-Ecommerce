import axios from "axios"

const url = process.env.REACT_APP_BASE_URL

export const getKeranjang = () => {
  return (dispatch, getState) => {
    axios.get(url + "keranjang", {
      headers: {
        'Authorization': 'Bearer ' + getState().user.token
      }
    })
      .then((response) => {
        dispatch({
          type: "GET_KERANJANG",
          payload: response.data
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }
}

export const changeInputQty = (event) => ({
  type: "CHANGE_INPUT_QTY",
  payload: event
})

export const postKeranjang = (product_id) => {
  return (dispatch, getState) => {
    axios({
      method: "POST",
      url: url + "keranjang",
      headers: { Authorization: `Bearer ${getState().user.token}` },
      params: {
        product_id: product_id,
        quantity: getState().keranjang.inputQty
      }
    })
  }
}

export const deleteKeranjang = (id) => {
  return (dispatch, getState) => {
    axios({
      method: "DELETE",
      url: `${url}keranjang/${id}`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json; charset=utf-8",
        Authorization: `Bearer ${getState().user.token}`
      }
    })
  }
}