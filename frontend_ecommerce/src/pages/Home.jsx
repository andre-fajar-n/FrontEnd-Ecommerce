import React, { Component, Fragment } from "react"
import Header from "../components/Header"
import { splitData, tampilkanHasilSplit } from "../function/function"
import Footer from "../components/Footer"
import ListKategori from "../components/KategoriDiHome"
import { connect } from "react-redux"
import { doLogout } from "../store/action/user"
import { semuaProduk } from "../store/action/produk"

class Home extends Component {
  componentDidMount = () => {
    this.props.semuaProduk()
  }
  render() {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    const splitList = splitData(this.props.dataProduk.list, 4)
    return (
      <Fragment>
        <Header {...this.props} />
        <section className="container">
          {/* start carousel */}
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={require("../logo.svg")} className="d-block w-100 logo1" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={require("../logo.svg")} className="d-block w-100 logo2" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={require("../logo.svg")} className="d-block w-100 logo3" alt="..." />
              </div>
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
              {list.map((value) => {
                const isiData = []
                const lainnya = []
                if (isiData.length < 10) { isiData.push(value) }
                else { lainnya.push(value) }
                return (
                  <div className="col">
                    <ListKategori value={value} />
                  </div>
                )
              })}
            </div>
            {/* {tampilkanHasilSplit("list_di_home", splitList)} */}
          </div>
          <div>
            <h3>Produk</h3>
            {tampilkanHasilSplit("produk", splitList, this.props)}
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);