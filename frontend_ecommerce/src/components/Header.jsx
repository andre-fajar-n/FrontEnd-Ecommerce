import React from "react"
import { Link } from "react-router-dom"


const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">Navbar</Link>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav m-auto">
            <li className="nav-item dropdown li-in-navbar">
              <div className="btn-group">
                <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Action
              </button>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" href="#">Action</Link>
                  <Link className="dropdown-item" href="#">Another action</Link>
                  <Link className="dropdown-item" href="#">Something else here</Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" href="#">Separated link</Link>
                </div>
              </div>
            </li>
            <li className="li-in-navbar">
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-danger my-2 my-sm-0" type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="li-in-navbar d-flex align-items-center">
              <i className="fas fa-shopping-cart" style={{ fontSize: "25px" }}></i>
            </li>
            <li className="li-in-navbar">
              <Link to="/masuk">
                <button className="masuk-daftar btn btn-danger my-2 my-sm-0">Masuk</button>
              </Link>
            </li>
            <li className="li-in-navbar">
              <Link to="/daftar">
                <button className="masuk-daftar btn btn-danger my-2 my-sm-0">Daftar</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )

}

export default Header;