import React from "react"

const IsiKeranjang = (props) => {
  return (
    <tr>
      <th>{props.value}</th>
      <th>Nama Produk</th>
      <th>Harga</th>
      <th>Jumlah</th>
      <th>Total</th>
      <th><button className="btn btn-danger my-2 my-sm-0">Hapus</button></th>
    </tr>
  )
}

export default IsiKeranjang;