import React, { Component, Fragment } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import IsiKeranjang from "../components/IsiKeranjang"
import { doLogout } from "../store/action/user"
import { connect } from "react-redux"
import { kategori } from "../store/action/produk"
import { getKeranjang, deleteKeranjang } from "../store/action/keranjang"
import { Link, Redirect } from "react-router-dom"

class Keranjang extends Component {
  componentDidMount = () => {
    this.props.getKeranjang()
    this.props.kategori()
  }

  render() {
    const keranjang = this.props.dataKeranjang
    console.warn("cek keranjang", this.props)
    return (
      <Fragment>
        {this.props.status_internal ? (
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
              <Link to="/checkout">
                <button className="btn btn-danger my-2 my-sm-0">Checkout</button>
              </Link>
            </section>
            <Footer />
          </Fragment>

        ) : (
            <Redirect to={{ pathname: "/masuk" }} />
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
  deleteKeranjang
}

export default connect(mapStateToProps, mapDispatchToProps)(Keranjang);