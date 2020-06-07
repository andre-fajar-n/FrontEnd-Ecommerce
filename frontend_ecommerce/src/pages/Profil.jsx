import React, { Component, Fragment } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { doLogout } from "../store/action/user"
import { connect } from "react-redux"
import { kategori } from "../store/action/produk"
import { Redirect } from "react-router-dom"
import { getDataBuyer, changeInputDataBuyer, postDataBuyer, editDataBuyer } from "../store/action/buyer"

class Profil extends Component {
  componentDidMount = async () => {
    await this.props.kategori()
    await this.props.getDataBuyer()
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

    await this.props.editDataBuyer()
    await this.props.history.replace("/profil")
    await this.props.getDataBuyer()
  }

  postData = async () => {
    await this.props.postDataBuyer();
    await this.props.history.replace("/profil")
    await this.props.getDataBuyer()
  }

  render() {
    return (
      <Fragment>
        {localStorage.getItem("status_internal") === "true" ? (
          <Fragment>
            <Header {...this.props} />

            <div className="container profile">
              {typeof (this.props.dataBuyer.nama) === "undefined" ? (
                // isi biodata ketika biodata belum diisi
                <Fragment>
                  <h1>Isi Biodata</h1>
                  <form style={{ display: "grid" }}>
                    <div class="form-group row">
                      <label for="postNama" class="col-sm-2 col-form-label">Nama</label>
                      <div class="col-sm-10">
                        <input onChange={(e) => this.props.changeInputDataBuyer(e)} name="postNama" type="text" class="form-control" placeholder="Nama Lengkap" />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="postAlamat" class="col-sm-2 col-form-label">Alamat</label>
                      <div class="col-sm-10">
                        <input onChange={(e) => this.props.changeInputDataBuyer(e)} name="postAlamat" type="text" class="form-control" placeholder="Alamat Lengkap" />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="postEmail" class="col-sm-2 col-form-label">Email</label>
                      <div class="col-sm-10">
                        <input onChange={(e) => this.props.changeInputDataBuyer(e)} name="postEmail" type="email" class="form-control" placeholder="Email" />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="postNoHP" class="col-sm-2 col-form-label">No. Handphone</label>
                      <div class="col-sm-10">
                        <input onChange={(e) => this.props.changeInputDataBuyer(e)} name="postNoHP" type="text" class="form-control" placeholder="Nomor Handphone" />
                      </div>
                    </div>
                    <button onClick={() => this.postData()} style={{ textAlign: "center" }} type="button" class="btn btn-danger">Tambah</button>
                  </form>
                </Fragment>
              ) : (
                  <Fragment>
                    <ul className="nav nav-pills mb-3 tab-header" id="nav-tab" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="biodata-tab" data-toggle="tab" href="#biodata" role="tab" aria-controls="biodata" aria-selected="true">Biodata</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="history-tab" data-toggle="tab" href="#history" role="tab" aria-controls="history" aria-selected="false">Riwayat Belanja</a>
                      </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent" style={{ padding: "0 20px" }}>
                      {/* TAB BIODATA */}
                      <div className="tab-pane fade show active" id="biodata" role="tabpanel" aria-labelledby="biodata-tab">
                        <form style={{ marginTop: "15px" }}>
                          <div class="form-group row">
                            <label for="inputNama" class="col-sm-2 col-form-label">Nama</label>
                            <div class="col-sm-10">
                              {this.state.showFormNama ? (
                                <div className="d-flex justify-content-between align-items-center">
                                  <input
                                    name="editNama"
                                    onChange={(e) => this.props.changeInputDataBuyer(e)}
                                    type="text" class="form-control"
                                    defaultValue={this.props.dataBuyer.nama} />
                                  <button onClick={() => this.saveData("nama")} type="button" class="btn btn-danger">Save</button>
                                </div>
                              ) : (
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div>{this.props.dataBuyer.nama}</div>
                                    <button onClick={() => this.editData("nama")} type="button" class="btn btn-danger">Edit</button>
                                  </div>
                                )}
                            </div>
                          </div>
                          <hr />
                        </form>
                        <form>
                          <div class="form-group row">
                            <label for="inputAlamat" class="col-sm-2 col-form-label">Alamat</label>
                            <div class="col-sm-10">
                              {this.state.showFormAlamat ? (
                                <div className="d-flex justify-content-between align-items-center">
                                  <input
                                    name="editAlamat"
                                    onChange={(e) => this.props.changeInputDataBuyer(e)}
                                    type="text" class="form-control"
                                    defaultValue={this.props.dataBuyer.alamat} />
                                  <button onClick={() => this.saveData("alamat")} type="button" class="btn btn-danger">Save</button>
                                </div>
                              ) : (
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div>{this.props.dataBuyer.alamat}</div>
                                    <button onClick={() => this.editData("alamat")} type="button" class="btn btn-danger">Edit</button>
                                  </div>
                                )}
                            </div>
                          </div>
                          <hr />
                        </form>
                        <form>
                          <div class="form-group row">
                            <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                              {this.state.showFormEmail ? (
                                <div className="d-flex justify-content-between align-items-center">
                                  <input
                                    name="editEmail"
                                    onChange={(e) => this.props.changeInputDataBuyer(e)}
                                    type="email" class="form-control"
                                    defaultValue={this.props.dataBuyer.email} />
                                  <button onClick={() => this.saveData("email")} type="button" class="btn btn-danger">Save</button>
                                </div>
                              ) : (
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div>{this.props.dataBuyer.email}</div>
                                    <button onClick={() => this.editData("email")} type="button" class="btn btn-danger">Edit</button>
                                  </div>
                                )}
                            </div>
                          </div>
                          <hr />
                        </form>
                        <form>
                          <div class="form-group row">
                            <label for="inputNoHP" class="col-sm-2 col-form-label">Nomor HP</label>
                            <div class="col-sm-10">
                              {this.state.showFormNoHP ? (
                                <div className="d-flex justify-content-between align-items-center">
                                  <input
                                    name="editNoHP"
                                    onChange={(e) => this.props.changeInputDataBuyer(e)}
                                    type="text" class="form-control"
                                    defaultValue={this.props.dataBuyer.no_hp} />
                                  <button onClick={() => this.saveData("nohp")} type="button" class="btn btn-danger">Save</button>
                                </div>
                              ) : (
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div>{this.props.dataBuyer.no_hp}</div>
                                    <button onClick={() => this.editData("nohp")} type="button" class="btn btn-danger">Edit</button>
                                  </div>
                                )}
                            </div>
                          </div>
                          <hr />
                        </form>
                      </div>

                      {/* TAB HISTORY BELANJA */}
                      <div className="tab-pane fade" id="history" role="tabpanel" aria-labelledby="history-tab">2</div>
                    </div>
                  </Fragment>

                )}
            </div>

            <Footer />
          </Fragment>
        ) : (
            <Redirect to={{ pathname: "/masuk" }} />
          )}
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  dataBuyer: state.buyer.dataBuyer,
  dataKategori: state.produk.allKategori,
})

const mapDispatchToProps = {
  doLogout,
  kategori,
  getDataBuyer,
  changeInputDataBuyer,
  postDataBuyer,
  editDataBuyer,
}

export default connect(mapStateToProps, mapDispatchToProps)(Profil);