import React from "react"

const TambahProduk = (props) => {
  return (
    <form style={{ display: "grid" }} onSubmit={(e) => e.preventDefault()}>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Nama Produk</label>
        <div className="col-sm-10">
          <input onChange={(e) => props.inputProduk(e)} name="namaProduk" type="text" className="form-control" placeholder="Nama Produk" />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Kategori</label>
        <div className="col-sm-10">
          <select onChange={(e) => props.inputProduk(e)} name="kategori" className="form-control" >
            <option>Pilih kategori:</option>
            {props.dataKategori.map((value) => (
              <option key={value.id} value={value.tipe_produk}>{value.tipe_produk}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Harga</label>
        <div className="col-sm-10">
          <input name="harga"
            onChange={(e) => props.inputProduk(e)}
            type="number"
            className="form-control"
            defaultValue="0"
            step="100" />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Stok</label>
        <div className="col-sm-10">
          <input name="stok"
            onChange={(e) => props.inputProduk(e)}
            type="number"
            className="form-control"
            defaultValue="1" />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Berat</label>
        <div className="col-sm-10">
          <input name="berat"
            onChange={(e) => props.inputProduk(e)}
            type="number"
            className="form-control"
            defaultValue="1" />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Deskripsi</label>
        <div className="col-sm-10">
          <textarea onChange={(e) => props.inputProduk(e)} name="deskripsi" type="text" className="form-control" placeholder="Deskripsi" />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Gambar</label>
        <div className="col-sm-10 d-flex justify-content-between align-items-center">
          <input name="gambar"
            onChange={(e) => props.fileSelectedHandler(e)}
            type="file"
            placeholder="Gambar" />
        </div>
      </div>
      <button className="btn btn-lg btn-danger" type="submit" onClick={() => props.tambahProduk()}>Submit</button><br />
    </form>
  )
}

export default TambahProduk;