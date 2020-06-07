import React, { Component, Fragment } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { doLogout } from "../store/action/user"
import { connect } from "react-redux"
import { kategori, inputProduk, tambahProduk, fileSelectedHandler } from "../store/action/produk"
import { Redirect } from "react-router-dom"
import TambahProduk from "../components/TambahProduk"

class TokoUser extends Component {
  componentDidMount = async () => {
    await this.props.kategori()
  }

  render() {
    return (
      <Fragment>
        {localStorage.getItem("status_internal") === "true" ? (
          <Fragment>
            <Header {...this.props} />
            {localStorage.getItem("status_penjual") === "true" ? (
              <Fragment>
                <div className="container toko-user">
                  <ul class="nav nav-pills mb-3 tab-header" id="pills-tab" role="tablist">
                    <li class="nav-item">
                      <a class="nav-link active" id="pills-add-produk-tab" data-toggle="pill" href="#pills-add-produk" role="tab" aria-controls="pills-add-produk" aria-selected="true">Tambah Produk</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="pills-list-produk-tab" data-toggle="pill" href="#pills-list-produk" role="tab" aria-controls="pills-list-produk" aria-selected="false">List Produk</a>
                    </li>
                  </ul>
                  <div class="tab-content" id="pills-tabContent" style={{ padding: "0 20px" }}>
                    {/* TAMBAH PRODUK */}
                    <div class="tab-pane fade show active" id="pills-add-produk" role="tabpanel" aria-labelledby="pills-add-produk-tab">
                      <TambahProduk
                        dataKategori={this.props.dataKategori}
                        inputProduk={this.props.inputProduk}
                        fileSelectedHandler={this.props.fileSelectedHandler}
                        tambahProduk={this.props.tambahProduk} />
                    </div>

                    {/* LIST PRODUK */}
                    <div class="tab-pane fade" id="pills-list-produk" role="tabpanel" aria-labelledby="pills-list-produk-tab">
                      2
                    </div>
                  </div>

                </div>
              </Fragment>
            ) : (
                <Fragment>

                </Fragment>
              )}
            <Footer />
          </Fragment>
        ) : (
            <Fragment>
              {alert("Anda belum masuk\nSilahkan masuk terlebih dahulu")}
              < Redirect to={{ pathname: "/masuk" }} />
            </Fragment>
          )}
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
  inputProduk,
  tambahProduk,
  fileSelectedHandler
}

export default connect(mapStateToProps, mapDispatchToProps)(TokoUser);