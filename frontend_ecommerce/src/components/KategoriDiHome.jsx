import React from "react"

const ListKategori = (props) => {
  const diameter = "120px"
  return (
    // <div className="card bg-dark text-white kategori-home" style={{ margin: "5px 0", width: `${diameter}`, height: `${diameter}` }}>
    //   <img src={require("../logo.svg")} className="card-img m-auto" alt="..." />
    //   <div className="card-img-overlay text-center">
    //     <h5 className="card-title">{props.value}</h5>
    //     <p className="card-text">Last updated 3 mins ago</p>
    //   </div>
    // </div>
    <div className="card bg-dark text-white" style={{ margin: "5px 0", width: `${diameter}`, height: `${diameter}` }}>
      <img src={require("../logo.svg")} className="card-img-top m-auto" alt="..." />
      <div className="card-body text-center p-0">
        <p className="card-text">Kategori</p>
      </div>
    </div>
  )
}

export default ListKategori;