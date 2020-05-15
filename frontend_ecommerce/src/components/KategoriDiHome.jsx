import React from "react"
import { Link } from "react-router-dom";

const ListKategori = (props) => {
  const diameter = "120px"

  const changeRouter = (kategori, id) => {
    kategori = kategori.replace(/ /gi, "-")
    props.history.replace("/kategori/" + id + "&" + kategori)
  }

  return (
    <div className="card bg-dark text-white" style={{ margin: "5px 0", width: `${diameter}`, height: `${diameter}` }}>
      <Link onClick={() => changeRouter(props.namaKategori, props.id)}>
        <img src={require("../logo.svg")} className="card-img-top m-auto" alt="..." />
        <div className="card-body text-center p-0">
          <p className="card-text">{props.namaKategori}</p>
        </div>
      </Link>
    </div>
  )
}

export default ListKategori;