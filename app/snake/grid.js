export const width = 600;
export const height = 600;
export const grid = {
  width,
  height,
};
export const gridUnit = 10;
export const getVector = (x, y) => ({ x, y });
export const getVectorOnGrid = ({ x, y }) => ({
  x: Math.floor(x / gridUnit) * gridUnit,
  y: Math.floor(y / gridUnit) * gridUnit,
});
