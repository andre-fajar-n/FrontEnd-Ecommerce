import React from "react"

var currencyFormatter = require('currency-formatter');

const IsiKeranjang = (props) => {
  console.warn("cek keranjang", props)
  return (
    <tr>
      <th>{props.index}</th>
      <th>{props.nama}</th>
      <th>{currencyFormatter.format(props.harga, { code: 'IDR' })}</th>
      <th>{props.jumlah}</th>
      <th>{currencyFormatter.format(props.total, { code: 'IDR' })}</th>
      <th><button className="btn btn-danger my-2 my-sm-0">Hapus</button></th>
    </tr>
  )
}

export default IsiKeranjang;