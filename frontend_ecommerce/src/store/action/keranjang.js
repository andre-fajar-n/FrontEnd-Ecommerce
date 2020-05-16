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
  return (getState) => {
    let bodyRequest = {
      product_id,
      quantity: getState().keranjang.inputQty
    }
    bodyRequest = JSON.stringify(bodyRequest)
    axios.post(url + "keranjang", bodyRequest, {
      headers: {
        'Authorization': 'Bearer ' + getState().user.token
      }
    })
      .catch((error) => (console.error(error)))
  }
}
