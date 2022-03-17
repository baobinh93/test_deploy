import React, { Component } from "react";
import { connect } from "react-redux";
import { tangNum } from "./redux/actions";
import { GIAM, TANG } from "./redux/constants";

class DemoRedux extends Component {
  render() {
    return (
      <div className=" container">
        <button
          className="btn btn-primary"
          onClick={() => {
            let num = window.prompt("Nhap so") * 1;
            console.log(num);
            this.props.tangSoLuong(num);
          }}
        >
          Tang
        </button>
        <span>{this.props.number}</span>
        <button
          className="btn btn-primary"
          onClick={() => {
            this.props.giamSoLuong();
          }}
        >
          Giam
        </button>
        <span>{this.props.random}</span>
        <button
          className="btn btn-primary"
          onClick={() => {
            //let num = window.prompt("Nhap so") * 1;
            //console.log(num);
            this.props.soNgauNhien();
          }}
        >
          So Ngau Nhien
        </button>
      </div>
    );
  }
}

let mapStateToProps = (store) => {
  return {
    number: store.numberReducer.number,
    random: store.randomNumber,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    tangSoLuong: (_num) => {
      dispatch(tangNum(_num));
    },
    giamSoLuong: () => {
      dispatch({
        type: GIAM,
        payload: 5,
      });
    },
    soNgauNhien: () => {
      dispatch({
        type: "soNgauNhien",
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DemoRedux);
