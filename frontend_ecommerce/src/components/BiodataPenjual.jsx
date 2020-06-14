import React, { Fragment } from "react"

const BiodataSeller = (props) => {
  return (
    <Fragment>
      <form style={{ marginTop: "15px" }}>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Nama Toko</label>
          <div className="col-sm-10">
            {props.state.showFormNama ? (
              <div className="d-flex justify-content-between align-items-center">
                <input
                  name="editNama"
                  onChange={(e) => props.changeInputDataSeller(e)}
                  type="text" className="form-control"
                  defaultValue={props.dataSeller.nama} />
                <button onClick={() => props.saveData("nama")} type="button" className="btn btn-danger button-category">Save</button>
              </div>
            ) : (
                <div className="d-flex justify-content-between align-items-center">
                  <div>{props.dataSeller.nama}</div>
                  <button onClick={() => props.editData("nama")} type="button" className="btn btn-danger button-category">Edit</button>
                </div>
              )}
          </div>
        </div>
        <hr />
      </form>
      <form>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Alamat Toko</label>
          <div className="col-sm-10">
            {props.state.showFormAlamat ? (
              <div className="d-flex justify-content-between align-items-center">
                <input
                  name="editAlamat"
                  onChange={(e) => props.changeInputDataSeller(e)}
                  type="text" className="form-control"
                  defaultValue={props.dataSeller.alamat} />
                <button onClick={() => props.saveData("alamat")} type="button" className="btn btn-danger button-category">Save</button>
              </div>
            ) : (
                <div className="d-flex justify-content-between align-items-center">
                  <div>{props.dataSeller.alamat}</div>
                  <button onClick={() => props.editData("alamat")} type="button" className="btn btn-danger button-category">Edit</button>
                </div>
              )}
          </div>
        </div>
        <hr />
      </form>
      <form>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            {props.state.showFormEmail ? (
              <div className="d-flex justify-content-between align-items-center">
                <input
                  name="editEmail"
                  onChange={(e) => props.changeInputDataSeller(e)}
                  type="email" className="form-control"
                  defaultValue={props.dataSeller.email} />
                <button onClick={() => props.saveData("email")} type="button" className="btn btn-danger button-category">Save</button>
              </div>
            ) : (
                <div className="d-flex justify-content-between align-items-center">
                  <div>{props.dataSeller.email}</div>
                  <button onClick={() => props.editData("email")} type="button" className="btn btn-danger button-category">Edit</button>
                </div>
              )}
          </div>
        </div>
        <hr />
      </form>
      <form>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Nomor HP</label>
          <div className="col-sm-10">
            {props.state.showFormNoHP ? (
              <div className="d-flex justify-content-between align-items-center">
                <input
                  name="editNoHP"
                  onChange={(e) => props.changeInputDataSeller(e)}
                  type="text" className="form-control"
                  defaultValue={props.dataSeller.no_hp} />
                <button onClick={() => props.saveData("nohp")} type="button" className="btn btn-danger button-category">Save</button>
              </div>
            ) : (
                <div className="d-flex justify-content-between align-items-center">
                  <div>{props.dataSeller.no_hp}</div>
                  <button onClick={() => props.editData("nohp")} type="button" className="btn btn-danger button-category">Edit</button>
                </div>
              )}
          </div>
        </div>
        <hr />
      </form>
    </Fragment>
  )
}

export default BiodataSeller;