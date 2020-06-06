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
  componentDidMount = async () => {
    await this.props.getKeranjang()
    await this.props.kategori()
  }

  render() {
    const keranjang = this.props.dataKeranjang
    return (
      <Fragment>
        {localStorage.getItem("status_internal") ? (
          <Fragment>
            {typeof (this.props.dataBuyer.nama) === "undefined" ? (
              <Fragment>
                {alert("Silahkan lengkapi biodata anda dulu")}
                < Redirect to={{ pathname: "/profil" }} />
              </Fragment>
            ) : (
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
              )}
          </Fragment>
        ) : (
            <Redirect to={{ pathname: "/masuk" }} />
          )}
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  dataBuyer: state.buyer.dataBuyer,
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