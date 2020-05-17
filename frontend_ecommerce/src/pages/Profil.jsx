import React, { Component, Fragment } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { doLogout, getUser } from "../store/action/user"
import { connect } from "react-redux"
import { kategori } from "../store/action/produk"
import { Link } from "react-router-dom"

class Profil extends Component {
  componentDidMount = () => {
    this.props.kategori()
    this.props.getUser()
  }

  render() {
    console.warn("cek profil", typeof (this.props.dataUser.biodata.nama))
    return (
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
  getUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Profil);