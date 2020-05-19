import React, { Component, Fragment } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { doLogout, getUser } from "../store/action/user"
import { connect } from "react-redux"
import { kategori } from "../store/action/produk"
import { Link, Redirect } from "react-router-dom"

class Profil extends Component {
  componentDidMount = () => {
    this.props.kategori()
    this.props.getUser()
  }

  render() {
    return (
      <Fragment>
        {this.props.status_internal ? (
          <Fragment>
            <Header {...this.props} />
            <div>
              <span>Nama: </span><span>{this.props.dataUser.biodata.nama}</span><br />
              <span>Alamat: <span>{this.props.dataUser.biodata.alamat}</span></span><br />
              <span>Email: <span>{this.props.dataUser.biodata.email}</span></span><br />
              <span>No HP: <span>{this.props.dataUser.biodata.no_hp}</span></span>
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
  getUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Profil);