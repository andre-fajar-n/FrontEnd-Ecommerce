const initialSeller = {
  dataSeller: {},
  productSeller: []
}

export default function sellerReducer(sellerState = initialSeller, action) {
  switch (action.type) {
    case "GET_DATA_SELLER":
      return {
        ...sellerState,
        dataSeller: action.payload
      }
    case "GET_DATA_SELLER_FAILED":
      return initialSeller
    case "PATCH_DATA_SELLER":
      return initialSeller
    case "CHANGE_INPUT_DATA":
      return {
        ...sellerState,
        [action.payload.target.name]: action.payload.target.value
      }
    case "GET_PRODUCT_SELLER":
      return {
        ...sellerState,
        productSeller: action.payload
      }
    default:
      return sellerState
  }
}