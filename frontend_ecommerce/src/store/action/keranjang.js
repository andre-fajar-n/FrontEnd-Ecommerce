import axios from "axios"

const url = process.env.REACT_APP_BASE_URL

export const getKeranjang = () => {
  return async (dispatch, getState) => {
    dispatch({ type: "IS_LOADING" })

    try {
      const response = await axios({
        method: "GET",
        url: `${url}keranjang`,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
      })

      // const response = await axios.get(url + "keranjang", {
      //   headers: {
      //     "Content-Type": "application/json; charset=utf-8",
      //     Accept: "application/json; charset=utf-8",
      //     'Authorization': 'Bearer ' + localStorage.getItem("token")
      //   }
      // })
      dispatch({
        type: "GET_KERANJANG",
        payload: response.data
      })
    } catch (error) {
      dispatch({
        type: "GET_KERANJANG",
        payload: []
      })
    }
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
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json; charset=utf-8",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      params: {
        product_id: product_id,
        quantity: getState().keranjang.inputQty
      }
    })
  }
}

export const deleteKeranjang = (id) => {
  return async (dispatch, getState) => {
    await axios({
      method: "DELETE",
      url: `${url}keranjang/${id}`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json; charset=utf-8",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
  }
}

export const checkout = () => {
  return (dispatch, getState) => {
    axios({
      method: "POST",
      url: `${url}checkout`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json; charset=utf-8",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
  }
}