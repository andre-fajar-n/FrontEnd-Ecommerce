import React, { Component, Fragment } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"

class DetailProduk extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <section className="container">
          <div className="row">
            <div className="col-md-5">
              <img src={require("../logo.svg")} alt="" />
            </div>
            <div className="col-md-7">
              <h1>Nama Produk</h1><hr />
              <span>Harga</span><hr />
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

export default DetailProduk;