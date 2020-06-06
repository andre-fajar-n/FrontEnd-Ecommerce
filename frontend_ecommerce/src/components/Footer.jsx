import React from "react"

const Footer = () => {
  return (
    <footer>
      <div className="row m-0">
        <div className="col-md-3">
          <h1>Nama Perusahaan</h1>
        </div>
        <div className="col-md-3">
          <h1>Pembeli</h1>
        </div>
        <div className="col-md-3">
          <h1>Penjual</h1>
        </div>
        <div className="col-md-3">
          <h1>Ikuti Kami</h1>
        </div>
      </div>
      <div className="text-center">
        <img src={require("../logos/logo_transparent.png")} alt="" width="100" height="100" />
      </div>
      <h1 className="text-center">Copyright</h1>
    </footer>
  )
}
export default Footer