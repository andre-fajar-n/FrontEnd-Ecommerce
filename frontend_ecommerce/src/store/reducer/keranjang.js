const initialStateKeranjang = {
  keranjang: [],
  inputQty: 1
}

export default function keranjangReducer(keranjangState = initialStateKeranjang, action) {
  switch (action.type) {
    case "GET_KERANJANG":
      return {
        ...keranjangState,
        keranjang: action.payload
      }
    case "CHANGE_INPUT_QTY":
      return {
        ...keranjangState,
        inputQty: action.payload.target.value
      }
    default:
      return keranjangState
  }
}