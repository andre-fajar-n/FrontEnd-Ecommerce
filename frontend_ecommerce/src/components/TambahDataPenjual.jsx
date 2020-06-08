import React, { Fragment } from "react"

const TambahDataPenjual = (props) => {
  return (
    // isi biodata ketika biodata belum diisi
    <Fragment>
      <h1>Isi Biodata Penjual</h1>
      <form style={{ display: "grid" }}>
        <div className="form-group row">
          <label for="postNama" className="col-sm-2 col-form-label">Nama Toko</label>
          <div className="col-sm-10">
            <input onChange={(e) => props.changeInputDataSeller(e)} name="postNama" type="text" className="form-control" placeholder="Nama Toko" />
          </div>
        </div>
        <div className="form-group row">
          <label for="postAlamat" className="col-sm-2 col-form-label">Alamat Toko</label>
          <div className="col-sm-10">
            <input onChange={(e) => props.changeInputDataSeller(e)} name="postAlamat" type="text" className="form-control" placeholder="Alamat Toko" />
          </div>
        </div>
        <div className="form-group row">
          <label for="postEmail" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input onChange={(e) => props.changeInputDataSeller(e)} name="postEmail" type="email" className="form-control" placeholder="Email" />
          </div>
        </div>
        <div className="form-group row">
          <label for="postNoHP" className="col-sm-2 col-form-label">No. Handphone</label>
          <div className="col-sm-10">
            <input onChange={(e) => props.changeInputDataSeller(e)} name="postNoHP" type="text" className="form-control" placeholder="Nomor Handphone" />
          </div>
        </div>
        <button onClick={() => props.postData()} style={{ textAlign: "center" }} type="button" className="btn btn-danger">Tambah</button>
      </form>
    </Fragment>
  )
}

export default TambahDataPenjual;