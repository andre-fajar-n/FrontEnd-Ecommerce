import React, { Component, Fragment } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import IsiKeranjang from "../components/IsiKeranjang"

class Keranjang extends Component {
  render() {
    const list = [1, 2, 3]
    return (
      <Fragment>
        <Header />
        <section className="container">
          <h3>Keranjang</h3>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th className="col-1">No</th>
                <th className="col-4">Produk</th>
                <th className="col-2">Harga</th>
                <th className="col-2">Jumlah</th>
                <th className="col-2">Total</th>
                <th className="col-1"></th>
              </tr>
            </thead>
            <tbody>
              {list.map((value) => (
                <IsiKeranjang value={value} />
              ))}
            </tbody>
          </table>
          <br />
          <h3>Detail Pengiriman</h3>
          <hr />
          <table>
            <tbody>
              <tr>
                <th>Nama Penerima</th>
                <th>Andre Fajar Nugroho</th>
              </tr>
              <tr>
                <th>Alamat</th>
                <th>Jalan Blitar no. 20, Ngunut, Tulungagung, Jawa Timur</th>
              </tr>
              <tr>
                <th>Metode Pembayaran</th>
                <th>Transfer/OVO</th>
              </tr>
              <tr>
                <th>Kurir</th>
                <th>JNE/Tiki/J&T</th>
              </tr>
            </tbody>
          </table>
        </section>
        <Footer />
      </Fragment>
    )
  }
}

export default Keranjang;