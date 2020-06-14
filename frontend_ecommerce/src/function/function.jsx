import React from "react"
import ListKategori from "../components/KategoriDiHome"
import Produk from "../components/Produk"

export const splitData = (array, size) => {
  if (array.length < 1) return []
  const isiBaris = array.slice(0, size)
  const sisaData = array.slice(size)
  return [isiBaris, ...splitData(sisaData, size)]
}

export const tampilkanHasilSplit = (komponen, array, props) => {
  return (
    array.map((baris) => (
      <div className="row justify-content-center">
        {baris.map((value) => (
          <div className={`col-md-${Math.floor(12 / baris.length)} d-flex justify-content-center p-0`}>
            {pilihKomponen(komponen, value, props)}
          </div>
        ))}
      </div>
    ))
  )
}

function pilihKomponen(komponen, value, props) {
  switch (komponen) {
    case "list_di_home":
      return (
        <ListKategori value={value} />
      )
    case "produk":
      return (
        <Produk value={value} {...props} />
      )
    default:
      return "kosong"
  }
}