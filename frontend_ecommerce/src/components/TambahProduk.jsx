import React from "react"

const TambahProduk = (props) => {
  console.warn("cek kategori", props)
  return (
    <form style={{ display: "grid" }} onSubmit={(e) => e.preventDefault()}>
      <div class="form-group row">
        <label for="namaProduk" class="col-sm-2 col-form-label">Nama Produk</label>
        <div class="col-sm-10">
          <input onChange={(e) => props.inputProduk(e)} name="namaProduk" type="text" class="form-control" placeholder="Nama Produk" />
        </div>
      </div>
      <div class="form-group row">
        <label for="kategori" class="col-sm-2 col-form-label">Kategori</label>
        <div class="col-sm-10">
          <select onChange={(e) => props.inputProduk(e)} name="kategori" class="form-control" >
            <option>Pilih kategori:</option>
            {props.dataKategori.map((value) => (
              <option key={value.id} value={value.tipe_produk}>{value.tipe_produk}</option>
            ))}
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label for="harga" class="col-sm-2 col-form-label">Harga</label>
        <div class="col-sm-10">
          <input name="harga"
            onChange={(e) => props.inputProduk(e)}
            type="number"
            class="form-control"
            defaultValue="0"
            step="100" />
        </div>
      </div>
      <div class="form-group row">
        <label for="stok" class="col-sm-2 col-form-label">Stok</label>
        <div class="col-sm-10">
          <input name="stok"
            onChange={(e) => props.inputProduk(e)}
            type="number"
            class="form-control"
            defaultValue="1" />
        </div>
      </div>
      <div class="form-group row">
        <label for="berat" class="col-sm-2 col-form-label">Berat</label>
        <div class="col-sm-10">
          <input name="berat"
            onChange={(e) => props.inputProduk(e)}
            type="number"
            class="form-control"
            defaultValue="1" />
        </div>
      </div>
      <div class="form-group row">
        <label for="deskripsi" class="col-sm-2 col-form-label">Deskripsi</label>
        <div class="col-sm-10">
          <textarea onChange={(e) => props.inputProduk(e)} name="deskripsi" type="text" class="form-control" placeholder="Deskripsi" />
        </div>
      </div>
      <div class="form-group row">
        <label for="gambar" class="col-sm-2 col-form-label">Gambar</label>
        <div class="col-sm-10 d-flex justify-content-between align-items-center">
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