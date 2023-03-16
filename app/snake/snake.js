import { getVector } from "./grid";

export const moveSnake = ({ snake, direction }) => {
  const [head] = snake;
  const newHead = getVector(head.x + direction.x, head.y + direction.y);

  return [newHead, ...snake.slice(0, snake.length - 1)];
};
