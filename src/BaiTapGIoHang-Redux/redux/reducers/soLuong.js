export const soLuong = (state = 0, action) => {
  switch (action.type) {
    case "thayDoi": {
      return (state = action.sum);
    }
    default: {
      return state;
    }
  }
};
