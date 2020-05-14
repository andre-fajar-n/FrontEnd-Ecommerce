import React, { Component, Fragment } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { doLogout } from "../store/action/user"
import { semuaProduk } from "../store/action/produk"

class DetailProduk extends Component {
  componentDidMount = () => {
    this.props.semuaProduk()
  }

  render() {
    let namaProduk = this.props.location.pathname
    namaProduk = namaProduk.replace("/produk/", '')
    namaProduk = namaProduk.replace(/-/gi, ' ')
    const detailProduk = this.props.dataProduk.list.filter((item) => {
      if (item.nama === namaProduk) {
        return item.nama
      }
      return false
    })
    const produk = detailProduk.map((value) => ({
      nama: value.nama,
      gambar: value.gambar
    }))
    console.warn("cek nama produk", detailProduk)

    return (
      <Fragment>
        <Header {...this.props} />
        <section className="container">
          <div className="row">
            <div className="col-md-5">
              <img src={require("../logo.svg")} alt="" />
            </div>
            <div className="col-md-7">
              <h1>
                {detailProduk.map((value) => (
                  <span>{value.nama}</span>
                ))}
              </h1><hr />
              <span>Harga:
                {detailProduk.map((value) => (
                <span> {value.harga}</span>
              ))}
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
              <p>Deskripsi Produk</p>
            </div>
          </div>
          <h1><Link to="/toko">Nama Toko</Link></h1>
          <h2>Lokasi Toko</h2>
        </section>
        <Footer />
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  dataUser: state.user,
  dataProduk: state.produk
})

const mapDispatchToProps = {
  doLogout,
  semuaProduk
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailProduk);