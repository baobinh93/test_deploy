let randomNumber = (state = 1, action) => {
  switch (action.type) {
    case "soNgauNhien": {
      state = Math.random();
      return state;
    }
    default: {
      return state;
    }
  }
};
export default randomNumber;
