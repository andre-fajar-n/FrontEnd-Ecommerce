import React, { Component, Fragment } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { doLogout } from "../store/action/user"
import { getSemuaProduk, kategori } from "../store/action/produk"
import { changeInputQty, postKeranjang } from "../store/action/keranjang"

var currencyFormatter = require('currency-formatter');

class DetailProduk extends Component {
  componentDidMount = async () => {
    await this.props.kategori()
    await this.props.getSemuaProduk()
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
    const detailProduk = this.props.dataProduk.filter((item) => (parseInt(item.id) === parseInt(produkID)))

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
                {/* <form action=""> */}
                <span>Jumlah: </span>
                {/* <div className="center">
                    <div className="input-group">
                      <span className="input-group-btn">
                        <button type="button" className="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                          <span className="glyphicon glyphicon-minus"></span>
                        </button>
                      </span>
                      <input type="text" name="quant[1]" className="form-control input-number" value="1" min="1" max="10" />
                      <span className="input-group-btn">
                        <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                          <span className="glyphicon glyphicon-plus"></span>
                        </button>
                      </span>
                    </div>
                  </div> */}
                {/* <div className="container">
                  <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4 col-sm-offset-4">
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <button className="btn btn-dark btn-sm" id="minus-btn"><i className="fa fa-minus"></i></button>
                        </div>
                        <input type="number" id="qty_input" className="form-control form-control-sm" value="1" min="1" />
                        <div className="input-group-prepend">
                          <button className="btn btn-dark btn-sm" id="plus-btn"><i className="fa fa-plus"></i></button>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4"></div>
                  </div>
                </div> */}
                <input onChange={(event) => this.props.changeInputQty(event)}
                  type="number" id="jumlahProduk"
                  name="jumlahProduk"
                  min="1"
                  defaultValue="1">
                </input><br />
                <button onClick={() => this.props.postKeranjang(value.id)} className="beli-keranjang btn btn-danger my-2 my-sm-0">Tambah Ke Keranjang</button>
                <Link to="/keranjang">
                  <button onClick={() => this.props.postKeranjang(value.id)} className="beli-keranjang btn btn-danger my-2 my-sm-0">Beli Sekarang</button>
                </Link>
                {/* </form><hr /> */}
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
  getSemuaProduk,
  kategori,
  changeInputQty,
  postKeranjang
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailProduk);