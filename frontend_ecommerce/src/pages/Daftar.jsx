import React, { Component } from "react"
import { Link } from "react-router-dom"

class Daftar extends Component {
  render() {
    return (
      <form className="form-signin text-center" onSubmit={(e) => e.preventDefault()}>
        <Link to="/">
          <img src={require("../logo.svg")} alt="" className="mb-4" width="72" height="72" />
        </Link>
        <h1 className="h3 mb3 font-weight-normal">Daftar</h1>
        <div className="form-daftar">
          <span>Username</span><br />
          <input type="text" name="" id="inputUsername" placeholder="username" onChange={(e) => this.props.changeInput(e)} />
        </div>
        <div className="form-daftar">
          <span>Email</span><br />
          <input type="email" name="" id="inputEmail" placeholder="email" onChange={(e) => this.props.changeInput(e)} />
        </div>
        <div className="form-daftar">
          <span>Password</span><br />
          <input type="password" name="" id="inputPassword" placeholder="password" onChange={(e) => this.props.changeInput(e)} />
        </div>
        <div className="form-daftar">
          <span>Confirm Password</span><br />
          <input type="password" name="" id="inputConfirmPassword" placeholder="confirm password" onChange={(e) => this.props.changeInput(e)} />
        </div>
        <div className="form-daftar">
          <button className="btn btn-lg btn-danger" type="submit" onClick={() => this.postLogin()}>Daftar</button><br />
          <span>Sudah punya akun? <Link to="/masuk">Silahkan Masuk</Link></span>
        </div>
      </form>
    )
  }
}

export default Daftar;