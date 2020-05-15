import React, { Component, Fragment } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { doLogout } from "../store/action/user"
import { semuaProduk, kategori } from "../store/action/produk"

var currencyFormatter = require('currency-formatter');

class DetailProduk extends Component {
  componentDidMount = () => {
    this.props.kategori()
  }

  render() {
    let namaProduk = this.props.location.pathname
    namaProduk = namaProduk.replace("/produk/", '')
    namaProduk = namaProduk.split("&")
    namaProduk = namaProduk[1].replace(/-/gi, ' ')
    const detailProduk = this.props.dataProduk.allProduk.filter((item) => {
      if (item.nama === namaProduk) {
        return item.nama
      }
      return false
    })

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
                  <input type="number" id="jumlahProduk" name="jumlahProduk" min="1" defaultValue="1"></input><br />
                  <button className="beli-keranjang btn btn-danger my-2 my-sm-0">Tambah Ke Keranjang</button>
                  <Link to="/keranjang">
                    <button className="beli-keranjang btn btn-danger my-2 my-sm-0">Beli Sekarang</button>
                  </Link>
                </form><hr />
                <p>Deskripsi Produk:</p>
                <p>{value.deskripsi}</p>
              </div>
            </div>
            <h1><Link to="/toko">Nama Toko</Link></h1>
            <h2>Lokasi Toko</h2>
          </section>
        ))}
        <Footer />
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  dataUser: state.user,
  dataProduk: state.produk,
  dataKategori: state.produk.allKategori
})

const mapDispatchToProps = {
  doLogout,
  semuaProduk,
  kategori
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailProduk);