import React from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import "../style/css/style.css"
import "../style/js/script.js"
import Masuk from "../pages/Masuk"
import Daftar from "../pages/Daftar"
import DetailProduk from "../pages/DetailProduk"
import Toko from "../pages/Toko"
import Keranjang from "../pages/Keranjang"
import { Provider } from "react-redux"
import store from "../store"
import ProdukByKategori from "../pages/ProdukByKategori"
import Checkout from "../pages/Checkout"
import Profil from "../pages/Profil"
import TambahProduk from "../pages/TambahProduk"

const MainRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/masuk" component={Masuk} />
          <Route exact path="/profil" component={Profil} />
          <Route exact path="/daftar" component={Daftar} />
          <Route exact path="/toko" component={TambahProduk} />
          <Route exact path="/keranjang" component={Keranjang} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/toko/:namaToko" component={Toko} />
          <Route exact path="/toko/:namaToko/:kategori" component={Toko} />
          <Route exact path="/kategori/:kategori" component={ProdukByKategori} />
          <Route exact path="/produk/:namaproduk" component={DetailProduk} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default MainRoutes;