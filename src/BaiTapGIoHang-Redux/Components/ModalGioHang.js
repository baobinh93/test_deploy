import React, { Component } from "react";
import { connect } from "react-redux";
class ModalGioHang extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="exampleModal2"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" style={{ width: "50%" }}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng của bạn</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Ảnh</th>
                    <th scope="col">Sản Phẩm</th>
                    <th scope="col">Gía Tiền</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.gioHang?.map((dienThoai) => {
                    return (
                      <tr key={dienThoai.id}>
                        <td>
                          <img
                            src={dienThoai.thumbnail_url}
                            className=""
                            alt="..."
                            style={{ width: "50%" }}
                          />
                        </td>
                        <td>{dienThoai.name}</td>
                        <td>{dienThoai.price.toLocaleString()}</td>
                        <td className="row">
                          <button
                            type="button"
                            className="btn btn-primary btn-sm mr-1"
                            onClick={() => {
                              this.props.giamSl(dienThoai.id);
                              // this.props.handleSoLuong();
                            }}
                          >
                            -
                          </button>
                          {dienThoai.sl}
                          <button
                            type="button"
                            className="btn btn-primary btn-sm ml-1"
                            onClick={() => {
                              this.props.tangSl(dienThoai.id);
                              //this.props.handleSoLuong();
                            }}
                          >
                            +
                          </button>
                        </td>
                        <td>
                          {(dienThoai.price * dienThoai.sl).toLocaleString()}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    gioHang: state.gioHang,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    tangSl: (_id) => {
      dispatch({
        type: "tangSoLuong",
        idDt: _id,
      });
    },
    giamSl: (_id) => {
      dispatch({
        type: "giamSoLuong",
        idDt: _id,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalGioHang);
