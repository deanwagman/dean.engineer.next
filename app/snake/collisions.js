import { width, height } from "./grid";
import { getFoodVector } from "./food";

export const checkCollisionWall = (snake) => {
  const [{ x, y }] = snake;

  return x < 0 || x >= width || y < 0 || y >= height;
};

export const checkCollisionFood = ({ snake, foodVector }) => {
  const head = snake[0];
  const { x, y } = foodVector;
  const isEatin = head.x === x && head.y === y;

  return isEatin;
};

export const checkCollisionSelf = (snake) => {
  const [head, ...body] = snake;
  const isCollision = body.some(
    (part) => part.x === head.x && part.y === head.y
  );

  return isCollision;
};
