import React, { Component, Fragment } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { doLogout, getUser } from "../store/action/user"
import { connect } from "react-redux"
import { kategori, inputProduk, tambahProduk } from "../store/action/produk"
import { Link } from "react-router-dom"

class TambahProduk extends Component {
  componentDidMount = () => {
    this.props.kategori()
    this.props.getUser()
  }

  render() {
    console.warn("cek profil", this.props.dataUser)
    return (
      <Fragment>
        <Header {...this.props} />
        <div className="container">
          <div class="card text-center">
            <div class="card-header">
              <ul class="nav nav-pills card-header-pills">
                <li class="nav-item">
                  <a class="nav-link active" href="#">Tambah Produk</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
              </ul>
            </div>
            <div class="card-body">
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
    )
  }
}

const mapStateToProps = (state) => ({
  dataUser: state.user,
  dataKategori: state.produk.allKategori,
})

const mapDispatchToProps = {
  doLogout,
  kategori,
  getUser,
  inputProduk,
  tambahProduk
}

export default connect(mapStateToProps, mapDispatchToProps)(TambahProduk);