const initialBuyerState = {
  dataBuyer: {},
  historyBuyer: []
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
      return {
        ...buyerState,
        editNama: undefined,
        editAlamat: undefined,
        editEmail: undefined,
        editNoHP: undefined
      }
    case "GET_DATA_BUYER_FAILED":
      return initialBuyerState
    case "GET_HISTORY":
      return {
        ...buyerState,
        historyBuyer: action.payload
      }
    default:
      return buyerState
  }
}