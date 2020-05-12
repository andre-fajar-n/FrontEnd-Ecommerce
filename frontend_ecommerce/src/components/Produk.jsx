import React from "react"
import { Link } from "react-router-dom";

const Produk = (props) => {
  let width = 0
  if (props.match.path === "/toko") { width = "350px" }
  else if (props.match.path === "/") { width = "300px" }
  return (
    <div className="card-deck" style={{ margin: "5px 0", width: `${width}` }}>
      <div className="card">
        <img src={require("../logo.svg")} className="card-img-top" alt="..." />
        <div className="card-body">
          <Link to="/detailproduk">
            <h5 className="card-title">{props.value}. Nama Produk</h5>
          </Link>
          <Link to="/toko">
            <p className="card-text">Nama Toko</p>
          </Link>
          <p className="card-text">Lokasi</p>
          <p className="card-text">Harga</p>
        </div>
      </div>
    </div>
  )
}

export default Produk;