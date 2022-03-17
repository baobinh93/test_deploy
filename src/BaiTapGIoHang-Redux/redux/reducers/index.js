import { combineReducers } from "redux";

import { chonDt } from "./chonDt";
import { gioHang } from "./gioHang";
import { danhSachDt } from "./danhSachDt";
import { soLuong } from "./soLuong";
export let rootReducer = combineReducers({
  chonDt,
  gioHang,
  danhSachDt,
  soLuong,
});
