import React, { Component, Fragment } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { splitData, tampilkanHasilSplit } from "../function/function"
import { doLogout } from "../store/action/user"
import { connect } from "react-redux"
import { kategori, getSemuaProduk } from "../store/action/produk"
import { Link } from "react-router-dom"

class Toko extends Component {
  componentDidMount = async () => {
    await this.props.kategori()
    await this.props.getSemuaProduk()
  }

  changeRouterKategori = (namaKategori) => {
    namaKategori = namaKategori.replace(/ /gi, "-")
    // this.props.history.replace(`${this.props.location.pathname}/` + namaKategori)
    console.warn("cek toko", this.props.location.pathname)
  }

  render() {
    let namaToko = this.props.location.pathname
    namaToko = namaToko.replace("/toko/", '')
    namaToko = namaToko.replace(/-/gi, ' ')
    const filterProduk = this.props.dataProduk.filter((item) => (item.seller.nama === namaToko))
    const splitList = splitData(filterProduk, 3)

    const filterKategori = this.props.dataKategori.filter((item) => {
      const filterKategoriID = filterProduk.filter((value) => (
        item.id === value.product_type_id
      ))
      if (filterKategoriID[0]) return item
    })

    return (
      <Fragment>
        <Header {...this.props} />
        <section className="container">
          <h1>{namaToko}</h1>
          <h4>Lokasi</h4>
          <div className="row">
            <div className="col-md-4">
              <h4>Etalase Toko</h4>
              <div className="list-group">
                <Link className="list-group-item list-group-item-action active">Semua Kategori</Link>
                {filterKategori.map((value) => (
                  <Link onClick={() => this.changeRouterKategori(value.tipe_produk)} className="list-group-item list-group-item-action">{value.tipe_produk}</Link>
                ))}
              </div>
            </div>
            <div className="col-md-8">
              <h4>Produk</h4>
              {tampilkanHasilSplit("produk", splitList, this.props)}
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
  dataProduk: state.produk.allProduk,
  dataKategori: state.produk.allKategori
})

const mapDispatchToProps = {
  doLogout,
  kategori,
  getSemuaProduk
}

export default connect(mapStateToProps, mapDispatchToProps)(Toko);