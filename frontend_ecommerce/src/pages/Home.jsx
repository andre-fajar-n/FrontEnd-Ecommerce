import React, { Component, Fragment } from "react"
import Header from "../components/Header"
import { splitData, tampilkanHasilSplit } from "../function/function"
import Footer from "../components/Footer"
import ListKategori from "../components/KategoriDiHome"
import { connect } from "react-redux"
import { doLogout } from "../store/action/user"
import { getSemuaProduk, kategori } from "../store/action/produk"

class Home extends Component {
  componentDidMount = async () => {
    await this.props.getSemuaProduk()
    await this.props.kategori()
  }

  render() {
    const listKategori = this.props.dataKategori
    const split4 = this.props.dataProduk.slice(0, 4)
    const splitProduk = splitData(split4, 4)
    return (
      <Fragment>
        <Header {...this.props} />
        <section className="container">
          {/* start carousel */}
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              {/* <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> */}
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={require("../images/frank-wang-ogxlyCA1BQc-unsplash.jpg")} className="d-block logo" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={require("../images/harrison-broadbent-VOz0gV9HC0I-unsplash.jpg")} className="d-block logo" alt="..." />
              </div>
              {/* <div className="carousel-item">
                <img src={require("../logo.svg")} className="d-block w-100 logo3" alt="..." />
              </div> */}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          {/* end carousel */}
          <div>
            <h3>Kategori</h3>
            <div className="row">
              {listKategori.map((value) => (
                <div style={{ padding: "0 10px" }}>
                  <ListKategori namaKategori={value.tipe_produk} id={value.id} {...this.props} />
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: "30px" }}>
            <h3>Produk Terbaru</h3>
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
  kategori,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);