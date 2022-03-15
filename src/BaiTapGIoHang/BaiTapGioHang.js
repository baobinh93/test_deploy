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
      //console.log("co roi");
      _dtDuocChonMua.sl++;
      this.setState({
        gioHang: cloneGioHang,
      });
      // console.log(cloneGioHang);
    } else {
      _dtDuocChonMua.sl = 1;
      cloneGioHang.push(_dtDuocChonMua);
      this.setState({
        gioHang: cloneGioHang,
      });
      // console.log(cloneGioHang);
    }
  };
  changeSoLuong = (_id, _chance) => {
    let cloneGioHang = [...this.state.gioHang];
    let viTriDt = cloneGioHang.findIndex((dt) => dt.id === _id);
    if (_chance == "tang") {
      cloneGioHang[viTriDt].sl++;
      this.setState({
        gioHang: cloneGioHang,
      });
    } else {
      if (cloneGioHang[viTriDt].sl === 1) {
        if (window.confirm("Bạn có muốn xoá sản phẩm")) {
          cloneGioHang.splice(viTriDt, 1);
          this.setState({
            gioHang: cloneGioHang,
          });
        }
      } else {
        cloneGioHang[viTriDt].sl--;
        this.setState({
          gioHang: cloneGioHang,
        });
      }
    }

    //console.log(viTriDt);
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
            Giỏ hàng: <span className="px-2"> {this.state.gioHang.length}</span>{" "}
            sản phẩm
          </button>
        </div>
        <DanhSachDienThoai
          dsdt={this.state.dsDt}
          handleDtShow={this.changeDtShow}
          handelGioHang={this.changeGioHang}
        />
        <ModalChiTietDt dtShow={this.state.dtShow} />
        <ModalGioHang
          gioHang={this.state.gioHang}
          changeSoLuong={this.changeSoLuong}
        />
      </>
    );
  }
}
