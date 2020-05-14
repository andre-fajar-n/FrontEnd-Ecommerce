const initialStateProduk = {
  list: []
}

export default function produkReducer(produkState = initialStateProduk, action) {
  switch (action.type) {
    case "SEMUA_PRODUK":
      return {
        ...produkState,
        list: action.payload
      }
    default:
      return produkState
  }
}