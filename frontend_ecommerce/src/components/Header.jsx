import React from "react"
import { Link } from "react-router-dom"


const Header = (props) => {
  const postSignout = async () => {
    await props.doLogout()
    if (!props.is_login) {
      props.history.push("/");
    }
  };

  const changeRouter = (kategori, id) => {
    kategori = kategori.replace(/ /gi, "-")
    props.history.push("/kategori/" + id + "&" + kategori)
    console.warn("cek kategori in header")
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          <img src={require("../logos/logo.png")} alt="logo andreino" width="100" height="100" className="d-inline-block align-top" />
        </Link>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav m-auto">
            <li className="nav-item dropdown">
              {/* <div className="btn-group"> */}
              <button type="button" id="dropdownMenuButton" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Kategori
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {props.dataKategori.map((value) => (
                  <Link key={value.id} onClick={() => changeRouter(value.tipe_produk, value.id)} className="dropdown-item" >{value.tipe_produk}</Link>
                ))}
              </div>
              {/* </div> */}
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
              <Link to="/keranjang">
                <i className="fas fa-shopping-cart" style={{ fontSize: "25px" }}></i>
              </Link>
            </li>
            <li className="li-in-navbar d-flex align-items-center">
              <Link to="/toko">
                <i className="fas fa-store" style={{ fontSize: "25px" }}></i>
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
                <Link onClick={() => postSignout()}>
                  <button className="masuk-daftar btn btn-danger my-2 my-sm-0">Keluar</button>
                </Link>
              ) : (
                  <Link to="/daftar">
                    <button className="masuk-daftar btn btn-danger my-2 my-sm-0">Daftar</button>
                  </Link>
                )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )

}

export default Header;