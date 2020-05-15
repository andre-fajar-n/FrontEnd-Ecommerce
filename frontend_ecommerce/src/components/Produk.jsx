import React from "react"
import { Link } from "react-router-dom";

var currencyFormatter = require('currency-formatter');

const Produk = (props) => {
  let width = 0
  if (props.match.path === "/toko") { width = "350px" }
  else if (props.match.path === "/") { width = "250px" }
  else { width = "300px" }

  const changeRouter = (namaProduk, id) => {
    namaProduk = namaProduk.replace(/ /gi, "-")
    props.history.replace("/produk/" + id + "&" + namaProduk)
    console.warn("cek route", props)
  }

  return (
    <div className="card-deck" style={{ margin: "5px 0", width: `${width}` }}>
      <div className="card">
        <img src={"http://0.0.0.0:9090/img/" + props.value.gambar} className="card-img-top" alt="..." />
        <div className="card-body">
          <Link onClick={() => changeRouter(`${props.value.nama}`, `${props.value.id}`)}>
            <h5 className="card-title">{props.value.nama}</h5>
          </Link>
          <Link to="/toko">
            <p className="card-text">ID Toko: {props.value.seller_id}</p>
          </Link>
          <p className="card-text">Lokasi</p>
          <p className="card-text">{currencyFormatter.format(props.value.harga, { code: 'IDR' })}</p>
        </div>
      </div>
    </div>
  )
}

export default Produk;