const initialStateKeranjang = {
  keranjang: [],
  inputQty: 1,
  is_loading: false
}

export default function keranjangReducer(keranjangState = initialStateKeranjang, action) {
  switch (action.type) {
    case "GET_KERANJANG":
      return {
        ...keranjangState,
        keranjang: action.payload,
        is_loading: false
      }
    case "CHANGE_INPUT_QTY":
      return {
        ...keranjangState,
        inputQty: action.payload.target.value
      }
    case "IS_LOADING":
      return {
        ...keranjangState,
        is_loading: true
      }
    default:
      return keranjangState
  }
}