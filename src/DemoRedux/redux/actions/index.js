import { TANG } from "../constants";

export const tangNum = (payload) => {
  return {
    type: TANG,
    payload,
  };
};
