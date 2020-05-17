import React, { Component, Fragment } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import IsiKeranjang from "../components/IsiKeranjang"
import { doLogout } from "../store/action/user"
import { connect } from "react-redux"
import { kategori } from "../store/action/produk"
import { getKeranjang, deleteKeranjang } from "../store/action/keranjang"

class Keranjang extends Component {
  componentDidMount = () => {
    this.props.getKeranjang()
    this.props.kategori()
  }

  render() {
    const keranjang = this.props.dataKeranjang
    console.warn("cek keranjang", keranjang)
    return (
      <Fragment>
        <Header {...this.props} />
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
            {keranjang.map((item) => (
              <tbody>
                <tr>
                  <th colSpan="5">{item.cart.seller_id.nama}</th>
                </tr>
                {item.transaction_detail.map((value, index) => (
                  <IsiKeranjang
                    id={value.id}
                    index={index + 1}
                    nama={value.product_id.nama}
                    harga={value.product_id.harga}
                    jumlah={value.kuantitas}
                    total={value.harga}
                    deleteKeranjang={this.props.deleteKeranjang}
                  />
                ))}
              </tbody>
            ))}
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

const mapStateToProps = (state) => ({
  dataUser: state.user,
  dataKategori: state.produk.allKategori,
  dataKeranjang: state.keranjang.keranjang
})

const mapDispatchToProps = {
  doLogout,
  kategori,
  getKeranjang,
  deleteKeranjang
}

export default connect(mapStateToProps, mapDispatchToProps)(Keranjang);