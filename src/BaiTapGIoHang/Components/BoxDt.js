import React, { Component } from "react";

export default class BoxDt extends Component {
  handleShowMobile(_dt) {
    this.props.handleDtShow(_dt);
  }
  handleChonMua(_dt) {
    this.props.handleGioHang(_dt);
  }
  renderMobile() {
    return (
      <div className="card col-3 p-1 " key={this.props.dt.id}>
        <img
          src={this.props.dt.thumbnail_url}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.dt.name}</h5>

          <p className="text-danger">
            Giá: {this.props.dt.price.toLocaleString()} đồng
          </p>
        </div>
        <div className="">
          <button
            className="btn btn-success  "
            onClick={() => this.handleShowMobile(this.props.dt)}
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Xem Chi Tiết
          </button>
          <button
            className="btn btn-danger "
            onClick={() => this.handleChonMua(this.props.dt)}
          >
            Chọn mua
          </button>
        </div>
      </div>
    );
  }
  render() {
    return this.renderMobile();
  }
}
