import React from "react"
import { Link } from "react-router-dom"


const Header = (props) => {
  const postSignout = async () => {
    props.history.replace("/");
    await props.doLogout()
  };

  const changeRouter = (kategori, id) => {
    kategori = kategori.replace(/ /gi, "-")
    props.history.push("/kategori/" + id + "&" + kategori)
  }

  console.warn("cek header", props)
  return (
    < header >
      <nav className="navbar navbar-expand-lg navbar-light p-0">
        <Link to="/" className="navbar-brand p-0">
          <img src={require("../logos/logo+name.png")} alt="logo andreino" height="100" className="d-inline-block align-top" />
        </Link>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav m-auto">
            <li className="nav-item dropdown">
              <div className="btn-group">
                <button type="button" id="dropdownMenuButton" className="btn btn-danger dropdown-toggle button-category" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Kategori
              </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  {props.dataKategori.map((value) => (
                    <div key={value.id} onClick={() => changeRouter(value.tipe_produk, value.id)} className="dropdown-item" >{value.tipe_produk}</div>
                  ))}
                </div>
              </div>
            </li>
            <li className="li-in-navbar">
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-danger my-2 my-sm-0" style={{ marginLeft: "10px" }} type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="li-in-navbar d-flex align-items-center">
              <Link to="/keranjang">
                <i className="fas fa-shopping-cart ikon"></i>
              </Link>
            </li>
            <li className="li-in-navbar d-flex align-items-center">
              <Link to="/toko">
                <i className="fas fa-store ikon"></i>
              </Link>
            </li>
            <li className="li-in-navbar">
              {localStorage.getItem("status_internal") ? (
                <Link to="/profil">
                  <button className="masuk-daftar btn btn-danger my-2 my-sm-0">Profil</button>
                </Link>
              ) : (
                  <Link to="/masuk">
                    <button className="masuk-daftar btn btn-danger my-2 my-sm-0">Masuk</button>
                  </Link>
                )}
            </li>
            <li className="li-in-navbar">
              {localStorage.getItem("status_internal") ? (
                <div onClick={() => postSignout()}>
                  <button className="masuk-daftar btn btn-danger my-2 my-sm-0">Keluar</button>
                </div>
              ) : (
                  <Link to="/daftar">
                    <button className="masuk-daftar btn btn-danger my-2 my-sm-0">Daftar</button>
                  </Link>
                )}
            </li>
          </ul>
        </div>
      </nav>
    </header >
  )

}

export default Header;