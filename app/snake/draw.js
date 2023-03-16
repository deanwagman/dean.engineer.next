import { getVectorOnGrid, gridUnit, width, height } from "./grid";

export const drawCanvas = (context) => {
  context.fillStyle = "black";
  context.fillRect(0, 0, width, height);
};

export const drawSnake = ({ context, snake }) => {
  context.fillStyle = "white";
  snake.forEach(({ x, y }) => {
    context.fillRect(x, y, gridUnit, gridUnit);
  });
};

export const drawFood = ({ context, foodVector }) => {
  const { x, y } = getVectorOnGrid(foodVector);
  context.fillStyle = "red";
  context.fillRect(x, y, gridUnit, gridUnit);
};

export const drawScore = ({ context, score }) => {
  context.fillStyle = "white";
  context.font = "16px Helvetica";
  context.fillText(`Score: ${score}`, 10, 20);
};

export const drawHighScore = ({ context, highScore }) => {
  context.fillStyle = "white";
  context.font = "16px Helvetica";
  context.fillText(`High Score: ${highScore}`, 10, 40);
};

export const drawGameOver = ({ context }) => {
  context.shadowColor = "red";
  context.shadowBlur = 20;
  context.shadowOffsetX = 10;
  context.shadowOffsetY = 10;

  context.fillStyle = "white";
  context.font = "48px Helvetica";
  context.fillText(`Game Over`, width / 2 - 100, height / 2);
  context.filter = "none";

  context.shadowColor = "transparent";
  context.shadowBlur = 0;
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
};
