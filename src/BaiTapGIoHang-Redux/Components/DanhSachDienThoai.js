import React, { Component } from "react";
import TableListDt from "./TableListDt";
export default class DanhSachDienThoai extends Component {
  renderDsDt() {
    return (
      <div className="row container mx-auto">
        <TableListDt
        //dsDt={this.props.dsdt}
        //  handleDtShow={this.props.handleDtShow}
        // handleGioHang={this.props.handelGioHang}
        // handleSoLuong={this.props.handleSoLuong}
        />
      </div>
    );
  }
  render() {
    //console.log(this.props.dsdt);
    return this.renderDsDt();
  }
}
