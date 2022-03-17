import { GIAM, TANG } from "../constants";

let initialState = {
  number: 125,
};

export let numberReducer = (state = initialState, action) => {
  switch (action.type) {
    case TANG: {
      state.number += action.payload;
      return { ...state };
    }
    case GIAM: {
      state.number -= action.payload;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
