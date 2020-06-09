import React, { Fragment } from "react"
import moment from "moment"
import currencyFormatter from "currency-formatter"

const HistoryPenjual = (props) => {
  return (
    <Fragment>
      <div className="product mb-3">
        <span className="history">{moment.utc(props.value.cart.updated_at).format("dddd, D MMMM YYYY")}</span>
        <div className="history row">
          <div className="col-md-6 p-0">
            <span>{props.value.cart.buyer_id.nama}</span>
          </div>
          <div className="col-md-6" style={{ borderLeft: "2px solid #f0f0f0" }}>
            <span>Total Belanja : {currencyFormatter.format(props.value.cart.total_harga, { code: 'IDR' })}</span>
          </div>
        </div>
        {props.value.transaction_detail.map((item) => (
          <div className="row history2">
            <div className="col-md-6">
              <div className="row m-0">
                <div className="col-md-2 p-0">
                  <img src={process.env.REACT_APP_BASE_URL + "img/" + item.product_id.gambar} className="card-img" alt={item.product_id.nama} />
                </div>
                <div className="col-md-9 p-0">
                  <div className="card-body">
                    <p>{item.product_id.nama}</p>
                    <p>{currencyFormatter.format(item.product_id.harga, { code: 'IDR' })}</p>
                    <p>{item.kuantitas} produk ({item.product_id.berat} gr)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6" style={{ borderLeft: "2px solid #f0f0f0" }}>
              <p>Total harga produk</p>
              <span>{currencyFormatter.format(item.harga, { code: 'IDR' })}</span>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  )
}

export default HistoryPenjual;