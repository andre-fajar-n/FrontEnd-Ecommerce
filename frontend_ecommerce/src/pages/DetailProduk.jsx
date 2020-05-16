import React, { Component, Fragment } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { doLogout } from "../store/action/user"
import { semuaProduk, kategori } from "../store/action/produk"
import { changeInputQty, postKeranjang } from "../store/action/keranjang"

var currencyFormatter = require('currency-formatter');

class DetailProduk extends Component {
  componentDidMount = () => {
    this.props.kategori()
    this.props.semuaProduk()
  }

  changeRouterToko = (namaToko, id) => {
    namaToko = namaToko.replace(/ /gi, "-")
    this.props.history.replace("/toko/" + namaToko)
  }

  render() {
    let namaProduk = this.props.location.pathname
    namaProduk = namaProduk.replace("/produk/", '')
    namaProduk = namaProduk.split("&")
    const produkID = namaProduk[0]
    namaProduk = namaProduk[1].replace(/-/gi, ' ')
    const detailProduk = this.props.dataProduk.filter((item) => (item.nama === namaProduk && item.id == produkID))

    console.warn("cek detail produk", this.props)
    return (
      <Fragment>
        <Header {...this.props} />
        {detailProduk.map((value) => (
          <section className="container">
            <div className="row">
              <div className="col-md-5">
                <img src={process.env.REACT_APP_BASE_URL + "img/" + value.gambar} alt={value.nama} style={{ width: "100%" }} />
              </div>
              <div className="col-md-7">
                <h1>
                  <span>{value.nama}</span>
                </h1><hr />
                <span>Harga:
                <span> {currencyFormatter.format(value.harga, { code: 'IDR' })}</span>
                </span><hr />
                <span>Stok</span><hr />
                <form action="">
                  <span>Jumlah: </span>
                  <input onChange={(event) => this.props.changeInputQty(event)}
                    type="number" id="jumlahProduk"
                    name="jumlahProduk"
                    min="1"
                    defaultValue="1">
                  </input><br />
                  <button onClick={() => this.props.postKeranjang(value.id)} className="beli-keranjang btn btn-danger my-2 my-sm-0">Tambah Ke Keranjang</button>
                  <Link to="/keranjang">
                    <button className="beli-keranjang btn btn-danger my-2 my-sm-0">Beli Sekarang</button>
                  </Link>
                </form><hr />
                <p>Deskripsi Produk:</p>
                <p>{value.deskripsi}</p>
              </div>
            </div>
            <h1><Link onClick={() => this.changeRouterToko(`${value.seller.nama}`)}>{value.seller.nama}</Link></h1>
            <h2>{value.seller.alamat}</h2>
          </section>
        ))}
        <Footer />
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  dataUser: state.user,
  dataProduk: state.produk.allProduk,
  dataKategori: state.produk.allKategori,
  dataKeranjang: state.keranjang
})

const mapDispatchToProps = {
  doLogout,
  semuaProduk,
  kategori,
  changeInputQty,
  postKeranjang
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailProduk);