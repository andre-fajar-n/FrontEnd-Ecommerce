import React from "react"

const currencyFormatter = require('currency-formatter');

const ProdukDiTokoPenjual = (props) => {
  // const deskripsiNew = props.value.deskripsi.split("\n")
  return (
    <div className="card mb-3 product-seller" style={{ padding: "0 10px" }}>
      <div className="row no-gutters">
        <div className="col-md-2">
          <img src={process.env.REACT_APP_BASE_URL + "img/" + props.value.gambar} className="card-img" alt="..." />
        </div>
        <div className="col-md-9">
          <div className="card-body" style={{ borderLeft: "2px solid #f0f0f0" }}>
            <h5 className="card-title">{props.value.nama}</h5>
            <p className="card-text">Harga : {currencyFormatter.format(props.value.harga, { code: 'IDR' })}</p>
            <p>Stok : {props.value.stok}</p>
            <p>Berat : {props.value.berat}</p>
            <p>Deskripsi :
              {props.value.deskripsi}
              {/* {deskripsiNew.map((value) => (
              <p className="m-0">{value}</p>
            ))} */}
            </p>
          </div>
        </div>
        <div className="col-md-1 align-items-center" style={{ display: "grid", borderLeft: "2px solid #f0f0f0" }}>
          <button style={{ textAlign: "center" }} type="button" className="btn btn-danger">Edit</button>
          <button onClick={() => props.deleteProduct(props.value.id)} style={{ textAlign: "center" }} type="button" className="btn btn-danger">Hapus</button>
        </div>
      </div>
    </div>
  )
}

export default ProdukDiTokoPenjual;