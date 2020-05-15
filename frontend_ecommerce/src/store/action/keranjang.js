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
          type: "GEK_KERANJANG",
          payload: response.data
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }
}

// export const postKeranjang = ()