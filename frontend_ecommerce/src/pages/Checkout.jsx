import React, { Component, Fragment } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { doLogout } from "../store/action/user"
import { connect } from "react-redux"
import { kategori } from "../store/action/produk"
import { getKeranjang, deleteKeranjang, checkout } from "../store/action/keranjang"
import { Link, Redirect } from "react-router-dom"

var currencyFormatter = require('currency-formatter');

class Keranjang extends Component {
  componentDidMount = async () => {
    await this.props.getKeranjang()
    await this.props.kategori()
  }


  render() {
    const keranjang = this.props.dataKeranjang
    let totalHarga = 0
    let totalProduk = 0
    return (
      <Fragment>
        {localStorage.getItem("status_internal") === "true" ? (
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
                        <div className="card mb-3" style={{ maxWidth: "540px" }}>
                          <div className="row no-gutters">
                            <div className="col-md-2">
                              <img src={process.env.REACT_APP_BASE_URL + "img/" + value.product_id.gambar} className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                              <div className="card-body">
                                <h5 className="card-title">{value.product_id.nama}</h5>
                                <p className="card-text">{currencyFormatter.format(value.product_id.harga, { code: 'IDR' })}</p>
                                <p className="card-text">{value.kuantitas} barang</p>
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
        ) : (
            <div>
              {alert("Silahkan masuk terlebih dahulu")}
              <Redirect to={{ pathname: "/masuk" }} />
            </div>
          )}
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  dataUser: state.user,
  status_internal: state.user.status_internal,
  status_admin: state.user.status_admin,
  status_penjual: state.user.status_penjual,
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