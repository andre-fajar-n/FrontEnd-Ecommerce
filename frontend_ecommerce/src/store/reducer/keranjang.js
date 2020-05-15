const initialStateKeranjang = {
  keranjang: []
}

export default function keranjangReducer(keranjangState = initialStateKeranjang, action) {
  switch (action.type) {
    case "GEK_KERANJANG":
      return {
        ...keranjangState,
        keranjang: action.payload
      }
    default:
      return keranjangState
  }
}