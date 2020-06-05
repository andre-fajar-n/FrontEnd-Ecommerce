import React, { Component } from "react"
import { Link } from "react-router-dom";
import { changeInputUsername, changeInputPassword, doLogin } from "../store/action/user";
import { connect } from "react-redux";

class Masuk extends Component {
  postLogin = async () => {
    await this.props.doLogin();
    if (this.props.dataUser.status_internal) {
      this.props.history.replace("/");
    }
  };
  render() {
    return (
      <div className="content signin m-0">
        <form className="form-signin text-center" onSubmit={(e) => e.preventDefault()}>
          <Link to="/">
            <img src={require("../logo.svg")} alt="" className="mb-4" width="72" height="72" />
          </Link>
          <h1 className="h3 mb3 font-weight-normal">Masuk</h1>
          <span>Username</span><br />
          <input type="text"
            name="" id="inputUsername"
            placeholder="username"
            onChange={(e) => this.props.changeInputUsername(e)}
          /><br /><br />
          <span>Password</span><br />
          <input type="password"
            name=""
            id="inputPassword"
            placeholder="password"
            onChange={(e) => this.props.changeInputPassword(e)}
          /><br /><br />
          <button className="btn btn-lg btn-danger" type="submit" onClick={() => this.postLogin()}>Masuk</button><br />
          <span>Belum punya akun?<Link to="/daftar"> Daftar </Link>disini!</span>
          <div><br />
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  dataUser: state.user
})

const mapDispatchToProps = {
  changeInputUsername,
  changeInputPassword,
  doLogin,
}

export default connect(mapStateToProps, mapDispatchToProps)(Masuk);