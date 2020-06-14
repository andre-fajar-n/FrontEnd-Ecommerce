import React from "react"
import { Link } from "react-router-dom";

const ListKategori = (props) => {
  const diameter = "100px"

  const changeRouter = (kategori, id) => {
    kategori = kategori.replace(/ /gi, "-")
    props.history.replace("/kategori/" + id + "&" + kategori)
  }

  return (
    <div className="card text-white" style={{ margin: "0", width: `${diameter}`, height: `${diameter}`, border: "none" }}>
      <Link onClick={() => changeRouter(props.namaKategori, props.id)} className="kategori">
        <img src={require("../logos/just_logo.png")} className="card-img-top m-auto" alt="..." />
        <div className="card-body text-center p-0">
          <p className="card-text">{props.namaKategori}</p>
        </div>
      </Link>
    </div>
  )
}

export default ListKategori;