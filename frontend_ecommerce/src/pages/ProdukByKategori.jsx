import React, { Component, Fragment } from "react"
import Header from "../components/Header"
import { splitData, tampilkanHasilSplit } from "../function/function"
import Footer from "../components/Footer"
import { connect } from "react-redux"
import { doLogout } from "../store/action/user"
import { getSemuaProduk, kategori } from "../store/action/produk"

class ProdukByKategori extends Component {
  componentDidMount = async () => {
    await this.props.kategori()
    await this.props.getSemuaProduk()
  }

  render() {
    let namaKategori = this.props.location.pathname
    namaKategori = namaKategori.replace("/kategori/", '')
    namaKategori = namaKategori.split('&')
    const kategoriID = namaKategori[0]
    namaKategori = namaKategori[1].replace(/-/gi, " ")
    const produkFilter = this.props.dataProduk.filter((value) => (
      value.product_type_id == kategoriID
    ))

    const splitProduk = splitData(produkFilter, 4)
    return (
      <Fragment>
        <Header {...this.props} />
        <section className="container">
          <div>
            <h3>Kategori: {namaKategori}</h3>
            {tampilkanHasilSplit("produk", splitProduk, this.props)}
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
  getSemuaProduk,
  kategori
}

export default connect(mapStateToProps, mapDispatchToProps)(ProdukByKategori);