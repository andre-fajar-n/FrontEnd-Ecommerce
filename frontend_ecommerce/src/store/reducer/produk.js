const initialStateProduk = {
  allProduk: [],
  allKategori: [],
  is_loading: false
}

export default function produkReducer(produkState = initialStateProduk, action) {
  switch (action.type) {
    case "SEMUA_PRODUK":
      return {
        ...produkState,
        allProduk: action.payload,
        is_loading: false
      }
    case "KATEGORI":
      return {
        ...produkState,
        allKategori: action.payload,
        is_loading: false
      }
    case "INPUT_PRODUK":
      return {
        ...produkState,
        [action.payload.target.name]: action.payload.target.value
      }
    case "INPUT_FILE":
      return {
        ...produkState,
        [action.payload.target.name]: action.payload.target.files[0],
      }
    case "IS_LOADING":
      return {
        ...produkState,
        is_loading: true
      }
    default:
      return produkState
  }
}