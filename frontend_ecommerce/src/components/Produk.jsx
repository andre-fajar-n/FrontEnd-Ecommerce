import React from "react"
import { Link } from "react-router-dom";

import currencyFormatter from "currency-formatter"
import TextTruncate from 'react-text-truncate';

const Produk = (props) => {
  let width = 0
  if (props.match.path === "/toko") { width = "350px" }
  else if (props.match.path === "/") { width = "300px" }
  else { width = "300px" }

  const changeRouterProduk = (namaProduk, id) => {
    namaProduk = namaProduk.replace(/ /gi, "-")
    props.history.replace("/produk/" + id + "&" + namaProduk)
  }

  return (
    <div className="card-deck" style={{ margin: "5px 0", width: `${width}` }}>
      <Link className="card product" onClick={() => changeRouterProduk(`${props.value.nama}`, `${props.value.id}`)}>
        <div className=" " style={{ padding: "5px" }}>
          <div className="d-flex align-items-center" style={{ height: "250px" }}>
            <img src={process.env.REACT_APP_BASE_URL + "img/" + props.value.gambar} className="card-img-top" alt={props.value.nama} />
          </div>
          <div className="card-body">
            <TextTruncate
              line={2}
              element="h5"
              truncateText="..."
              text={props.value.nama}
            />
            <p className="card-text nama-toko">{props.value.seller.nama}</p>
            <p className="card-text alamat-toko">{props.value.seller.alamat}</p>
            <p className="card-text">{currencyFormatter.format(props.value.harga, { code: 'IDR' })}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Produk;