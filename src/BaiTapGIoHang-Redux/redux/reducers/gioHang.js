export const gioHang = (state = [], action) => {
  switch (action.type) {
    case "themSanPham": {
      let cloneGioHang = [...state];
      let listIdDt = cloneGioHang.map((dt) => dt.id);
      if (listIdDt.includes(action.newDt.id)) {
        action.newDt.sl++;
      } else {
        action.newDt.sl = 1;
        cloneGioHang.push(action.newDt);
      }

      return (state = [...cloneGioHang]);
    }
    case "tangSoLuong": {
      let cloneGioHang = [...state];
      let viTriDt = cloneGioHang.findIndex((dt) => dt.id === action.idDt);
      cloneGioHang[viTriDt].sl++;
      return (state = [...cloneGioHang]);
    }
    case "giamSoLuong": {
      let cloneGioHang = [...state];
      let viTriDt = cloneGioHang.findIndex((dt) => dt.id === action.idDt);
      if (cloneGioHang[viTriDt].sl === 1) {
        if (window.confirm("Bạn có muốn xoá sản phẩm")) {
          cloneGioHang.splice(viTriDt, 1);
        }
      } else {
        cloneGioHang[viTriDt].sl--;
      }
      return (state = [...cloneGioHang]);
    }
    default: {
      return state;
    }
  }
};
