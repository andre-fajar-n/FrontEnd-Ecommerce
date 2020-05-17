import React from "react"
import { Link, Redirect } from "react-router-dom";

var currencyFormatter = require('currency-formatter');

const IsiKeranjang = (props) => {
  console.warn("cek keranjang", props)
  return (
    <tr>
      <td>{props.index}</td>
      <td>{props.nama}</td>
      <td>{currencyFormatter.format(props.harga, { code: 'IDR' })}</td>
      <td>{props.jumlah}</td>
      <td>{currencyFormatter.format(props.total, { code: 'IDR' })}</td>
      <td>
        <Link to="/keranjang">
          <button
            onClick={() => props.deleteKeranjang(props.id)}
            className="btn btn-danger my-2 my-sm-0">
            Hapus
          </button>
        </Link>
      </td>
    </tr>
  )
}

export default IsiKeranjang;