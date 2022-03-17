import React, { Component } from "react";
import { connect } from "react-redux";
import BoxDt from "./BoxDt";
class TableListDt extends Component {
  render() {
    return this.props.dsDt?.map((item) => {
      return <BoxDt dt={item} />;
    });
  }
}
let mapStateToProps = (state) => {
  return {
    dsDt: state.danhSachDt,
  };
};
export default connect(mapStateToProps, null)(TableListDt);
