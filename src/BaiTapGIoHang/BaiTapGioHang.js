import React, { Component } from "react";
import DanhSachDienThoai from "./Components/DanhSachDienThoai";
import ModalChiTietDt from "./Components/ModalChiTietDt";
import ModalGioHang from "./Components/ModalGioHang";
import { dataProps } from "./Data/data";
export default class BaiTapGioHang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dsDt: dataProps,
      dtShow: dataProps[0],
      gioHang: [],
      tongSoLuong: 0,
    };
  }

  changeDtShow = (_dtShow) => {
    this.setState({
      dtShow: _dtShow,
    });
    // console.log(_dtShow);
  };
  changeGioHang = (_dtDuocChonMua) => {
    let cloneGioHang = [...this.state.gioHang];
    let listIdDt = cloneGioHang.map((dt) => dt.id);
    if (listIdDt.includes(_dtDuocChonMua.id)) {
      _dtDuocChonMua.sl++;
    } else {
      _dtDuocChonMua.sl = 1;
      cloneGioHang.push(_dtDuocChonMua);
    }
    this.setState({
      gioHang: cloneGioHang,
    });
    this.tinhSoLuong(cloneGioHang);
  };
  tinhSoLuong = (_gioHang) => {
    let cloneGioHang = [..._gioHang];
    let mangSoLuong = [...cloneGioHang.map((item) => item.sl)];
    let tongSanPham = 0;
    mangSoLuong.forEach((item) => (tongSanPham += item));

    this.setState({
      tongSoLuong: tongSanPham,
    });

    console.log(tongSanPham);
  };
  changeSoLuong = (_id, _chance) => {
    let cloneGioHang = [...this.state.gioHang];
    let viTriDt = cloneGioHang.findIndex((dt) => dt.id === _id);

    if (_chance == "giam" && viTriDt !== -1) {
      if (cloneGioHang[viTriDt].sl === 1) {
        if (window.confirm("Bạn có muốn xoá sản phẩm")) {
          cloneGioHang.splice(viTriDt, 1);
        }
      } else {
        cloneGioHang[viTriDt].sl--;
      }
    }
    _chance == "tang" && viTriDt !== -1 && cloneGioHang[viTriDt].sl++;

    this.setState({
      gioHang: cloneGioHang,
    });
    this.tinhSoLuong(cloneGioHang);
  };
  render() {
    return (
      <>
        <div className="container">
          <button
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal2"
          >
            Giỏ hàng: <span className="px-2"> {this.state.tongSoLuong}</span>{" "}
            sản phẩm
          </button>
        </div>
        <DanhSachDienThoai
          dsdt={this.state.dsDt}
          handleDtShow={this.changeDtShow}
          handelGioHang={this.changeGioHang}
          handleSoLuong={this.tinhSoLuong}
        />
        <ModalChiTietDt dtShow={this.state.dtShow} />
        <ModalGioHang
          gioHang={this.state.gioHang}
          changeSoLuong={this.changeSoLuong}
          handleSoLuong={this.tinhSoLuong}
        />
      </>
    );
  }
}
