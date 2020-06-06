import React, { Component, Fragment } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { doLogout, getDataBuyer, changeInputData, postDataUser } from "../store/action/user"
import { connect } from "react-redux"
import { kategori } from "../store/action/produk"
import { Redirect } from "react-router-dom"

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

  saveData = (value) => {
    if (value === "nama") this.setState({ showFormNama: false });
    else if (value === "alamat") this.setState({ showFormAlamat: false })
    else if (value === "email") this.setState({ showFormEmail: false })
    else if (value === "nohp") this.setState({ showFormNoHP: false })
  }

  postData = async () => {
    await this.props.postDataUser();
    await this.props.history.replace("/profil")
    await this.props.getDataBuyer()
  }

  render() {
    console.warn("cek input data", typeof (this.props.dataUser.dataBuyer.nama))
    return (
      <Fragment>
        {localStorage.getItem("status_internal") ? (
          <Fragment>
            <Header {...this.props} />

            <div className="container profile" style={{ height: "500px" }}>
              {typeof (this.props.dataUser.dataBuyer.nama) === "undefined" ? (
                // isi biodata ketika biodata belum diisi
                <Fragment>
                  <h1>Isi Biodata</h1>
                  <form style={{ display: "grid" }}>
                    <div class="form-group row">
                      <label for="postNama" class="col-sm-2 col-form-label">Nama</label>
                      <div class="col-sm-10">
                        <input onChange={(e) => this.props.changeInputData(e)} name="postNama" type="text" class="form-control" placeholder="Nama Lengkap" />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="postAlamat" class="col-sm-2 col-form-label">Alamat</label>
                      <div class="col-sm-10">
                        <input onChange={(e) => this.props.changeInputData(e)} name="postAlamat" type="text" class="form-control" placeholder="Alamat Lengkap" />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="postEmail" class="col-sm-2 col-form-label">Email</label>
                      <div class="col-sm-10">
                        <input onChange={(e) => this.props.changeInputData(e)} name="postEmail" type="email" class="form-control" placeholder="Email" />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="postNoHP" class="col-sm-2 col-form-label">No. Handphone</label>
                      <div class="col-sm-10">
                        <input onChange={(e) => this.props.changeInputData(e)} name="postNoHP" type="text" class="form-control" placeholder="Nomor Handphone" />
                      </div>
                    </div>
                    <button onClick={() => this.postData()} style={{ textAlign: "center" }} type="button" class="btn btn-danger">Tambah</button>
                  </form>
                </Fragment>
              ) : (
                  <Fragment>
                    <ul className="nav nav-tabs" id="nav-tab" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="biodata-tab" data-toggle="tab" href="#biodata" role="tab" aria-controls="biodata" aria-selected="true">Biodata</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="history-tab" data-toggle="tab" href="#history" role="tab" aria-controls="history" aria-selected="false">Riwayat Belanja</a>
                      </li>
                    </ul>
                    <div className="tab-content" id="nav-tabContent">
                      <div className="tab-pane fade show active" id="biodata" role="tabpanel" aria-labelledby="biodata-tab">
                        <div>
                          <span>Nama: </span><span>{this.props.dataUser.dataBuyer.nama}</span><br />
                          <span>Alamat: <span>{this.props.dataUser.dataBuyer.alamat}</span></span><br />
                          <span>Email: <span>{this.props.dataUser.dataBuyer.email}</span></span><br />
                          <span>No HP: <span>{this.props.dataUser.dataBuyer.no_hp}</span></span>
                        </div>
                        <form>
                          <div class="form-group row">
                            <label for="inputNama" class="col-sm-2 col-form-label">Nama</label>
                            <div class="col-sm-6">
                              {this.state.showFormNama ? (
                                <div className="d-flex justify-content-between">
                                  <input
                                    name="nama"
                                    onChange={(e) => this.props.changeInputData(e)}
                                    type="text" class="form-control"
                                    defaultValue={this.props.dataUser.dataBuyer.nama} />
                                  <button onClick={() => this.saveData("nama")} type="button" class="btn btn-danger">Save</button>
                                </div>
                              ) : (
                                  <div className="d-flex justify-content-between">
                                    <div>{this.props.dataUser.dataBuyer.nama}</div>
                                    <button onClick={() => this.editData("nama")} type="button" class="btn btn-danger">Edit</button>
                                  </div>
                                )}
                            </div>
                          </div>
                        </form>
                        <form>
                          <div class="form-group row">
                            <label for="inputAlamat" class="col-sm-2 col-form-label">Alamat</label>
                            <div class="col-sm-6">
                              {this.state.showFormAlamat ? (
                                <div className="d-flex justify-content-between">
                                  <input
                                    name="alamat"
                                    onChange={(e) => this.props.changeInputData(e)}
                                    type="text" class="form-control"
                                    defaultValue={this.props.dataUser.dataBuyer.alamat} />
                                  <button onClick={() => this.saveData("alamat")} type="button" class="btn btn-danger">Save</button>
                                </div>
                              ) : (
                                  <div className="d-flex justify-content-between">
                                    <div>{this.props.dataUser.dataBuyer.alamat}</div>
                                    <button onClick={() => this.editData("alamat")} type="button" class="btn btn-danger">Edit</button>
                                  </div>
                                )}
                            </div>
                          </div>
                        </form>
                        <form>
                          <div class="form-group row">
                            <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-6">
                              {this.state.showFormEmail ? (
                                <div className="d-flex justify-content-between">
                                  <input
                                    name="email"
                                    onChange={(e) => this.props.changeInputData(e)}
                                    type="email" class="form-control"
                                    defaultValue={this.props.dataUser.dataBuyer.email} />
                                  <button onClick={() => this.saveData("email")} type="button" class="btn btn-danger">Save</button>
                                </div>
                              ) : (
                                  <div className="d-flex justify-content-between">
                                    <div>{this.props.dataUser.dataBuyer.email}</div>
                                    <button onClick={() => this.editData("email")} type="button" class="btn btn-danger">Edit</button>
                                  </div>
                                )}
                            </div>
                          </div>
                        </form>
                        <form>
                          <div class="form-group row">
                            <label for="inputNoHP" class="col-sm-2 col-form-label">Nomor HP</label>
                            <div class="col-sm-6">
                              {this.state.showFormNoHP ? (
                                <div className="d-flex justify-content-between">
                                  <input
                                    name="noHP"
                                    onChange={(e) => this.props.changeInputData(e)}
                                    type="text" class="form-control"
                                    defaultValue={this.props.dataUser.dataBuyer.no_hp} />
                                  <button onClick={() => this.saveData("nohp")} type="button" class="btn btn-danger">Save</button>
                                </div>
                              ) : (
                                  <div className="d-flex justify-content-between">
                                    <div>{this.props.dataUser.dataBuyer.no_hp}</div>
                                    <button onClick={() => this.editData("nohp")} type="button" class="btn btn-danger">Edit</button>
                                  </div>
                                )}
                            </div>
                          </div>
                        </form>
                      </div>

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
  dataUser: state.user,
  status_internal: state.user.status_internal,
  status_admin: state.user.status_admin,
  status_penjual: state.user.status_penjual,
  dataKategori: state.produk.allKategori,
})

const mapDispatchToProps = {
  doLogout,
  kategori,
  getDataBuyer,
  changeInputData,
  postDataUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Profil);