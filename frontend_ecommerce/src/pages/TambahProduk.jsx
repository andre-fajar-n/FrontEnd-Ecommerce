import React, { Component, Fragment } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { doLogout, getDataBuyer } from "../store/action/user"
import { connect } from "react-redux"
import { kategori, inputProduk, tambahProduk } from "../store/action/produk"
import { Link, Redirect } from "react-router-dom"

class TambahProduk extends Component {
  componentDidMount = async () => {
    await this.props.kategori()
    await this.props.getDataBuyer()
  }

  render() {
    return (
      <Fragment>
        {this.props.status_penjual ? (
          <Fragment>
            <Header {...this.props} />
            <div className="container">
              <div className="card text-center">
                <div className="card-header">
                  <ul className="nav nav-pills card-header-pills">
                    <li className="nav-item">
                      <a className="nav-link active" href="#">Tambah Produk</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <form className="form-signin text-center" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <span>Nama Produk</span><br />
                      <input type="text"
                        name="namaProduk" id="namaProduk"
                        placeholder="namaProduk"
                        autoFocus
                        onChange={(e) => this.props.inputProduk(e)}
                      />
                    </div>
                    <div>
                      <span>Kategori</span><br />
                      <input type="text"
                        name="kategori" id="kategori"
                        placeholder="kategori"
                        onChange={(e) => this.props.inputProduk(e)}
                      />
                    </div>
                    <div>
                      <span>Harga</span><br />
                      <input type="number"
                        name="harga"
                        id="harga"
                        placeholder="harga"
                        onChange={(e) => this.props.inputProduk(e)}
                        defaultValue="0"
                        step="100"
                      />
                    </div>
                    <div>
                      <span>Stok</span><br />
                      <input type="number"
                        name="stok"
                        id="stok"
                        placeholder="stok"
                        onChange={(e) => this.props.inputProduk(e)}
                        defaultValue="1"
                      />
                    </div>
                    <div>
                      <span>Berat</span><br />
                      <input type="number"
                        name="berat"
                        id="berat"
                        placeholder="berat (dalam gram)"
                        onChange={(e) => this.props.inputProduk(e)}
                        defaultValue="1"
                      />
                    </div>
                    <div>
                      <span>Deskripsi</span><br />
                      <textarea type="text"
                        name="deskripsi" id="deskripsi"
                        placeholder="deskripsi"
                        onChange={(e) => this.props.inputProduk(e)}
                      />
                    </div>
                    <div>
                      <span>Gambar</span><br />
                      <input type="file"
                        name="gambar" id="gambar"
                        placeholder="gambar"
                        onChange={(e) => this.props.inputProduk(e)}
                      />
                    </div>
                    <button className="btn btn-lg btn-danger" type="submit" onClick={() => this.props.tambahProduk()}>Submit</button><br />
                  </form>
                </div>
              </div>
            </div>
            <Footer />
          </Fragment>
        ) : (
            <div>
              {alert("Hanya untuk Penjual\nSilahkan masuk terlebih dahulu")}
              < Redirect to={{ pathname: "/masuk" }} />
            </div>
          )}
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  dataUser: state.user,
  status_admin: state.user.status_admin,
  status_penjual: state.user.status_penjual,
  dataKategori: state.produk.allKategori,
})

const mapDispatchToProps = {
  doLogout,
  kategori,
  getDataBuyer,
  inputProduk,
  tambahProduk
}

export default connect(mapStateToProps, mapDispatchToProps)(TambahProduk);