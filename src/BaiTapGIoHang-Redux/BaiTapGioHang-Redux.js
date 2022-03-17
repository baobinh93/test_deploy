import React, { Component } from "react";
import DanhSachDienThoai from "./Components/DanhSachDienThoai";
import ModalChiTietDt from "./Components/ModalChiTietDt";
import ModalGioHang from "./Components/ModalGioHang";
import { dataProps } from "./Data/data";
import { connect } from "react-redux";
class BaiTapGioHangRedux extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="container">
          <button
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal2"
          >
            Giỏ hàng: <span className="px-2"> {this.props.soLuong}</span> sản
            phẩm
          </button>
        </div>
        <DanhSachDienThoai />
        <ModalChiTietDt />
        <ModalGioHang />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    soLuong: state.soLuong,
  };
};

export default connect(mapStateToProps, null)(BaiTapGioHangRedux);
