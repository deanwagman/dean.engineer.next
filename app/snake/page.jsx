"use client";

import { useEffect, useState } from "react";
import { useDrag } from "@use-gesture/react";
import {
  checkCollisionWall,
  checkCollisionFood,
  checkCollisionSelf,
} from "./collisions";
import { getVector, getVectorOnGrid, width, height, gridUnit } from "./grid";
import { getFoodVector } from "./food";
import {
  drawCanvas,
  drawFood,
  drawSnake,
  drawScore,
  drawHighScore,
  drawGameOver,
} from "./draw";
import { moveSnake } from "./snake";

let gameOver = false;
let score = 0;
let highScore = 0;

const id = "snake-canvas";

const startVector = getVectorOnGrid(
  getVector(Math.floor(width / 2), Math.floor(height / 2))
);
let snake = [startVector];

const speed = 100;
let direction = getVector(gridUnit, 0);
let pointerOffset = getVector(0, 0);
let isPointerDown = false;

let foodVector = getFoodVector();

const containerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  minHeight: "95vh",
  flexDirection: "column",
};

const reset = () => {
  gameOver = false;
  highScore = Math.max(score, highScore);
  score = 0;
  snake = [startVector];
  isPointerDown = false;
};

const render = () => {
  if (typeof window == "undefined") {
    return null;
  }

  const canvas = document.getElementById(id);

  if (!canvas) return setTimeout(render, 1000);
  const context = canvas.getContext("2d");

  snake = moveSnake({ snake, direction });

  if (checkCollisionWall(snake)) {
    gameOver = true;
  }
  if (checkCollisionSelf(snake)) {
    gameOver = true;
  }
  if (checkCollisionFood({ snake, foodVector })) {
    snake = [...snake, foodVector];
    foodVector = getFoodVector();
    score += 1;
  }

  if (gameOver) {
    drawCanvas(context);
    drawGameOver({ context });
    return;
  }

  drawCanvas(context);
  drawSnake({ context, snake });
  drawFood({ context, foodVector });
  drawScore({ context, score });
  drawHighScore({ context, highScore });
};

const renderLoop = () => {
  render();

  setTimeout(renderLoop, speed);
};

const Page = () => {
  useEffect(() => renderLoop(), []);
  useEffect(() => {
    window.addEventListener("keydown", ({ key }) => {
      if (gameOver) {
        reset();
        return;
      }

      const { x, y } = direction;
      let newDirection = { x, y };

      if (key === "ArrowUp" && y === 0) {
        newDirection = { x: 0, y: -gridUnit };
      } else if (key === "ArrowDown" && y === 0) {
        newDirection = { x: 0, y: gridUnit };
      } else if (key === "ArrowLeft" && x === 0) {
        newDirection = { x: -gridUnit, y: 0 };
      } else if (key === "ArrowRight" && x === 0) {
        newDirection = { x: gridUnit, y: 0 };
      }

      direction = newDirection;
    });
  }, []);

  const bind = useDrag(({ swipe: [swipeX, swipeY] }) => {
    if (gameOver) {
      reset();
      return;
    }

    const { x, y } = direction;
    let newDirection = { x, y };

    if (swipeX === -1) {
      newDirection = { x: -gridUnit, y: 0 };
    } else if (swipeX === 1) {
      newDirection = { x: gridUnit, y: 0 };
    } else if (swipeY === -1) {
      newDirection = { x: 0, y: -gridUnit };
    } else if (swipeY === 1) {
      newDirection = { x: 0, y: gridUnit };
    }

    direction = newDirection;
  });

  return (
    <div {...bind()} style={containerStyles}>
      <canvas
        id={id}
        width="600"
        height="600"
        onMouseMove={(event) => {
          const { offsetX, offsetY } = event.nativeEvent;
          if (isPointerDown) {
            const { x: lastX, y: lastY } = pointerOffset;
            // If this is the first mouse coordinate, store it and return
            if (lastX === null || lastY === null) {
              pointerOffset = getVector(offsetX, offsetY);
              return null;
            }

            // Calculate the distance between the last click and the current click
            const deltaX = offsetX - lastX;
            const deltaY = offsetY - lastY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            // If the distance is less than a certain threshold, the user did not move their mouse
            if (distance < gridUnit) {
              return null;
            }

            // Determine the angle of the vector between the last click and the current click
            let angle = Math.atan2(deltaY, deltaX);
            if (angle < 0) {
              angle += 2 * Math.PI;
            }

            // Convert the angle to a quadrant
            const index = Math.round(angle / (Math.PI / 2)) % 4;

            switch (index) {
              case 0:
                direction = getVector(gridUnit, 0);
                break;
              case 1:
                direction = getVector(0, gridUnit);
                break;
              case 2:
                direction = getVector(-gridUnit, 0);
                break;
              case 3:
                direction = getVector(0, -gridUnit);
                break;
            }

            // Update the last click coordinates

            pointerOffset = getVector(offsetX, offsetY);
          }
        }}
        onMouseDown={() => {
          isPointerDown = true;
          gameOver = false;
        }}
        onMouseUp={() => {
          isPointerDown = false;
        }}
      />
    </div>
  );
};

export default Page;
