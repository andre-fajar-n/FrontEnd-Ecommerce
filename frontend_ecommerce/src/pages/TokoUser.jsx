import React, { Component, Fragment } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { doLogout } from "../store/action/user"
import { connect } from "react-redux"
import { kategori, inputProduk, tambahProduk, fileSelectedHandler } from "../store/action/produk"
import { Redirect } from "react-router-dom"
import TambahProduk from "../components/TambahProduk"
import BiodataSeller from "../components/BiodataPenjual"
import { getDataSeller, changeInputDataSeller, editDataSeller, postDataSeller } from "../store/action/seller"
import TambahDataPenjual from "../components/TambahDataPenjual"

class TokoUser extends Component {
  componentDidMount = async () => {
    await this.props.kategori()
    await this.props.getDataSeller()
  }

  state = {
    showFormNama: false,
    showFormAlamat: false,
    showFormEmail: false,
    showFormNoHP: false
  }

  editData = (value) => {
    if (value === "nama") this.setState({ showFormNama: true });
    else if (value === "alamat") this.setState({ showFormAlamat: true })
    else if (value === "email") this.setState({ showFormEmail: true })
    else if (value === "nohp") this.setState({ showFormNoHP: true })
  }

  saveData = async (value) => {
    if (value === "nama") this.setState({ showFormNama: false });
    else if (value === "alamat") this.setState({ showFormAlamat: false })
    else if (value === "email") this.setState({ showFormEmail: false })
    else if (value === "nohp") this.setState({ showFormNoHP: false })

    await this.props.editDataSeller()
    await this.props.history.replace("/toko")
    await this.props.getDataSeller()
  }

  postData = async () => {
    await this.props.postDataSeller();
    await this.props.history.replace("/toko")
    await this.props.getDataSeller()
  }

  render() {
    return (
      <Fragment>
        {localStorage.getItem("status_internal") === "true" ? (
          <Fragment>
            <Header {...this.props} />
            <div className="container toko-user">
              {localStorage.getItem("status_penjual") === "true" ? (
                <Fragment>
                  <ul className="nav nav-pills mb-3 tab-header" id="pills-tab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active"
                        id="pills-biodata-tab"
                        data-toggle="pill"
                        href="#pills-biodata"
                        role="tab"
                        aria-controls="pills-biodata"
                        aria-selected="false">Biodata</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link"
                        id="pills-add-produk-tab"
                        data-toggle="pill"
                        href="#pills-add-produk"
                        role="tab"
                        aria-controls="pills-add-produk"
                        aria-selected="true">Tambah Produk</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link"
                        id="pills-list-produk-tab"
                        data-toggle="pill"
                        href="#pills-list-produk"
                        role="tab"
                        aria-controls="pills-list-produk"
                        aria-selected="false">List Produk</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link"
                        id="pills-riwayat-penjualan-tab"
                        data-toggle="pill"
                        href="#pills-riwayat-penjualan"
                        role="tab"
                        aria-controls="pills-riwayat-penjualan"
                        aria-selected="false">Riwayat Penjualan</a>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent" style={{ padding: "0 20px" }}>
                    {/* BIODATA */}
                    <div className="tab-pane fade show active" id="pills-biodata" role="tabpanel" aria-labelledby="pills-biodata-tab">
                      <BiodataSeller
                        state={this.state}
                        saveData={this.saveData}
                        changeInputDataSeller={this.props.changeInputDataSeller}
                        dataSeller={this.props.dataSeller}
                        editData={this.editData}
                        saveData={this.saveData} />
                    </div>

                    {/* TAMBAH PRODUK */}
                    <div className="tab-pane fade" id="pills-add-produk" role="tabpanel" aria-labelledby="pills-add-produk-tab">
                      <TambahProduk
                        dataKategori={this.props.dataKategori}
                        inputProduk={this.props.inputProduk}
                        fileSelectedHandler={this.props.fileSelectedHandler}
                        tambahProduk={this.props.tambahProduk} />
                    </div>

                    {/* LIST PRODUK */}
                    <div className="tab-pane fade" id="pills-list-produk" role="tabpanel" aria-labelledby="pills-list-produk-tab">
                      2
                    </div>

                    {/* RIWAYAT PENJUALAN */}
                    <div className="tab-pane fade" id="pills-riwayat-penjualan" role="tabpanel" aria-labelledby="pills-riwayat-penjualan-tab">
                      riwayat
                    </div>
                  </div>

                </Fragment>
              ) : (
                  <Fragment>
                    {alert("Anda belum terdaftar sebagai penjual\nSilahkan daftar terlebih dahulu!")}
                    {/* MENDAFTARKAN TOKO BARU */}
                    <TambahDataPenjual
                      changeInputDataSeller={this.props.changeInputDataSeller}
                      postData={this.postData} />
                  </Fragment>
                )}
            </div>
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
  dataSeller: state.seller.dataSeller,
  dataKategori: state.produk.allKategori,
})

const mapDispatchToProps = {
  doLogout,
  kategori,
  getDataSeller,
  inputProduk,
  tambahProduk,
  fileSelectedHandler,
  changeInputDataSeller,
  editDataSeller,
  postDataSeller
}

export default connect(mapStateToProps, mapDispatchToProps)(TokoUser);