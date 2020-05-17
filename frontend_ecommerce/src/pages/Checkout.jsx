import React, { Component, Fragment } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import IsiKeranjang from "../components/IsiKeranjang"
import { doLogout } from "../store/action/user"
import { connect } from "react-redux"
import { kategori } from "../store/action/produk"
import { getKeranjang, deleteKeranjang, checkout } from "../store/action/keranjang"
import { Link } from "react-router-dom"

var currencyFormatter = require('currency-formatter');

class Keranjang extends Component {
  componentDidMount = () => {
    this.props.getKeranjang()
    this.props.kategori()
  }


  render() {
    const keranjang = this.props.dataKeranjang
    console.warn("cek checkout", keranjang)
    let totalHarga = 0
    let totalProduk = 0
    return (
      <Fragment>
        <Header {...this.props} />
        <section className="container">
          <h1>Checkout</h1>
          <div className="row">
            <div className="col-md-8">
              <h5>Detail Pengiriman</h5>
              <hr />
              <table>
                <tbody>
                  <tr>
                    <td>Nama Penerima</td>
                    <td>Andre Fajar Nugroho</td>
                  </tr>
                  <tr>
                    <td>Alamat</td>
                    <td>Jalan Blitar no. 20, Ngunut, Tulungagung, Jawa Timur</td>
                  </tr>
                  <tr>
                    <td>Metode Pembayaran</td>
                    <td>Transfer/OVO</td>
                  </tr>
                  <tr>
                    <td>Kurir</td>
                    <td>JNE/Tiki/J&T</td>
                  </tr>
                </tbody>
              </table>
              <hr />
              {keranjang.map((item) => (
                <div>
                  <h6>{item.cart.seller_id.nama}</h6>
                  {item.transaction_detail.map((value) => (
                    <div class="card mb-3" style={{ maxWidth: "540px;" }}>
                      <div class="row no-gutters">
                        <div class="col-md-2">
                          <img src={process.env.REACT_APP_BASE_URL + "img/" + value.product_id.gambar} class="card-img" alt="..." />
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">{value.product_id.nama}</h5>
                            <p class="card-text">{currencyFormatter.format(value.product_id.harga, { code: 'IDR' })}</p>
                            <p class="card-text">{value.kuantitas} barang</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="col-md-4">
              <h5>Ringkasan Belanja</h5><hr />
              {keranjang.map((value) => {
                totalHarga += value.cart.total_harga
                totalProduk += value.cart.total_kuantitas
              })}
              <div>Total harga ({totalProduk} Produk): {currencyFormatter.format(totalHarga, { code: 'IDR' })}</div><hr />
              <div>Total Tagihan</div><hr />
              <Link to="/" onClick={() => this.props.checkout()}>
                <button className="btn btn-danger my-2 my-sm-0">Bayar</button>
              </Link>
            </div>
          </div>

        </section>
        <Footer />
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  dataUser: state.user,
  dataKategori: state.produk.allKategori,
  dataKeranjang: state.keranjang.keranjang
})

const mapDispatchToProps = {
  doLogout,
  kategori,
  getKeranjang,
  deleteKeranjang,
  checkout
}

export default connect(mapStateToProps, mapDispatchToProps)(Keranjang);