const initialStateProduk = {
  allProduk: [],
  allKategori: [],
  kategoriID: {}
}

export default function produkReducer(produkState = initialStateProduk, action) {
  switch (action.type) {
    case "SEMUA_PRODUK":
      return {
        ...produkState,
        allProduk: action.payload
      }
    case "KATEGORI":
      return {
        ...produkState,
        allKategori: action.payload
      }
    default:
      return produkState
  }
}