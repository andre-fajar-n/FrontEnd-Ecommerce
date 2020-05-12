import React, { Component, Fragment } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import KategoriDiToko from "../components/KategoriDiToko"
import { splitData, tampilkanHasilSplit } from "../function/function"

class Toko extends Component {
  render() {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const splitList = splitData(list, 3)
    return (
      <Fragment>
        <Header />
        <section className="container">
          <h1>Nama Toko</h1>
          <h4>Lokasi</h4>
          <div className="row">
            <div className="col-md-4">
              <h4>Etalase Toko</h4>
              <KategoriDiToko />
            </div>
            <div className="col-md-8">
              <h4>Produk</h4>
              {tampilkanHasilSplit("produk", splitList, this.props)}
            </div>
          </div>
        </section>
        <Footer />
      </Fragment>
    )
  }
}

export default Toko;