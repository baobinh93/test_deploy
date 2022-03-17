import { dataProps } from "../../Data/data";

export let chonDt = (state = dataProps[0], action) => {
  switch (action.type) {
    case "showDt": {
      return (state = action.dt);
    }
    default: {
      return state;
    }
  }
};
