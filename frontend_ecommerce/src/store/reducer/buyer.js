const initialBuyerState = {
  dataBuyer: {},
}

export default function buyerReducer(buyerState = initialBuyerState, action) {
  switch (action.type) {
    case "CHANGE_INPUT_DATA":
      return {
        ...buyerState,
        [action.payload.target.name]: action.payload.target.value
      }
    case "GET_DATA_BUYER":
      return {
        ...buyerState,
        dataBuyer: action.payload
      }
    case "PATCH_DATA_BUYER":
      return initialBuyerState
    case "GET_DATA_BUYER_FAILED":
      return initialBuyerState
    default:
      return buyerState
  }
}