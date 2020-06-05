import React, { Component } from "react"
import { Link } from "react-router-dom"
import { changeInputUsername, changeInputPassword, register } from "../store/action/user";
import { connect } from "react-redux";

class Daftar extends Component {
  postRegister = async () => {
    await this.props.register()
    if (this.props.dataUser.status_internal) {
      this.props.history.replace("/profil")
    }
  }

  render() {
    return (
      <form className="form-signin text-center" onSubmit={(e) => e.preventDefault()}>
        <Link to="/">
          <img src={require("../logo.svg")} alt="" className="mb-4" width="72" height="72" />
        </Link>
        <h1 className="h3 mb3 font-weight-normal">Daftar</h1>
        <div className="form-daftar">
          <span>Username</span><br />
          <input type="text" name="" id="inputUsername" placeholder="username" onChange={(e) => this.props.changeInputUsername(e)} />
        </div>
        <div className="form-daftar">
          <span>Password</span><br />
          <input type="password" name="" id="inputPassword" placeholder="password" onChange={(e) => this.props.changeInputPassword(e)} />
        </div>
        <div className="form-daftar">
          <button className="btn btn-lg btn-danger" type="submit" onClick={() => this.postRegister()}>Daftar</button><br />
          <span>Sudah punya akun? <Link to="/masuk">Silahkan Masuk</Link></span>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  dataUser: state.user
})

const mapDispatchToProps = {
  changeInputUsername,
  changeInputPassword,
  register
}

export default connect(mapStateToProps, mapDispatchToProps)(Daftar);