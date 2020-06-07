import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducer/user";
import produkReducer from "./reducer/produk";
import keranjangReducer from "./reducer/keranjang";
import buyerReducer from "./reducer/buyer";
import sellerReducer from "./reducer/seller";

const rootReducer = combineReducers({
  user: userReducer,
  buyer: buyerReducer,
  seller: sellerReducer,
  produk: produkReducer,
  keranjang: keranjangReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

store.subscribe(() => console.warn("cek store", store.getState()))

export default store