import React from "react"

const Footer = () => {
  return (
    <footer>
      <div className="row m-0 pt-5 text-center">
        <div className="col-md-4 pl-5 pr-5">
          <strong>Andreino</strong>
          <p>Tentang Kami</p>
          <p>Karir</p>
          <p>Hubungi Kami</p>
        </div>
        <div className="col-md-4 pl-5 pr-5">
          <strong>Informasi Layanan</strong>
          <p>Syarat Penjual</p>
          <p>Syarat Pembeli</p>
        </div>
        <div className="col-md-4 pl-5 pr-5">
          <strong>Ikuti Kami</strong>
          <p><i class="fab fa-twitter-square"></i>&nbsp; Twitter</p>
          <p><i class="fab fa-facebook-square"></i>&nbsp; Facebook</p>
          <p><i class="fab fa-instagram-square"></i>&nbsp; Instagram</p>
          <p><i class="fab fa-line"></i>&nbsp; Line</p>
          <p><i class="fab fa-linkedin"></i>&nbsp; LinkedIn</p>
        </div>
      </div>
      <div className="text-center">
        <img src={require("../logos/logo_transparent.png")} alt="" width="100" height="100" />
        <p className="text-center">Copyright</p>
      </div>
    </footer>
  )
}
export default Footer