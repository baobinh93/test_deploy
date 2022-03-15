import React, { Component } from "react";
import BoxDt from "./BoxDt";
export default class TableListDt extends Component {
  render() {
    return this.props.dsDt?.map((item) => {
      return (
        <BoxDt
          dt={item}
          handleDtShow={this.props.handleDtShow}
          handleGioHang={this.props.handleGioHang}
        />
      );
    });
  }
}
