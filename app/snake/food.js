import { getVector, getVectorOnGrid, width, height } from "./grid";

export const getFoodVector = () => {
  const foodVector = getVectorOnGrid(
    getVector(Math.random() * width, Math.random() * height)
  );

  return foodVector;
};
