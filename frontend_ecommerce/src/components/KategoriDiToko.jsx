import React from "react"
import { Link } from "react-router-dom";

const KategoriDiToko = (props) => {
  return (
    <div className="list-group">
      <Link className="list-group-item list-group-item-action active">Cras justo odio</Link>
      <Link className="list-group-item list-group-item-action">Dapibus ac facilisis in</Link>
      <Link className="list-group-item list-group-item-action">Morbi leo risus</Link>
      <Link className="list-group-item list-group-item-action">Porta ac consectetur ac</Link>
    </div>
  )
}

export default KategoriDiToko;