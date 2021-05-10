import React, { useEffect, useRef } from "react";
import {
  Engine,
  Render,
  Runner,
  World,
  Bodies,
  MouseConstraint,
  Mouse,
  Body,
  Events
} from "matter-js";

const Box: React.FC = props => {
  const box = useRef();
  const engine = useRef(Engine.create());
  
  const cellsHorizontal = 5;
  const cellsVertical = 5;
  engine.current.world.gravity.y = 0;

  const { world } = engine.current;
  const shuffle = arr => {
    let counter = arr.length;

    while (counter > 0) {
      const index = Math.floor(Math.random() * counter);
      counter--;

      const temp = arr[counter];
      arr[counter] = arr[index];
      arr[index] = temp;
    }
    return arr;
  };

  useEffect(() => {
    
    const cw = window.innerWidth;
    const ch = window.innerHeight-300;
    const unitLengthX = cw / cellsHorizontal;
    const unitLengthY = ch / cellsVertical;
    const render = Render.create({
      element: box.current,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        wireframes: false
        //background: 'transparent'
      }
    });

    Render.run(render);
    Runner.run(Runner.create(), engine.current);
    World.add(
      world,
      MouseConstraint.create(engine.current, {
        mouse: Mouse.create(render.canvas)
      })
    );

    const walls = [
      Bodies.rectangle(cw / 2, 0, cw, 2, { isStatic: true }),
      Bodies.rectangle(cw / 2, ch, cw, 2, { isStatic: true }),
      Bodies.rectangle(0, ch / 2, 2, ch, { isStatic: true }),
      Bodies.rectangle(cw, ch / 2, 2, ch, { isStatic: true })
    ];
    World.add(world, walls);
    
    const grid = Array(cellsVertical)
      .fill(null)
      .map(() => Array(cellsHorizontal).fill(false));

    const verticals = Array(cellsVertical)
      .fill(null)
      .map(() => Array(cellsHorizontal - 1).fill(false));

    const horizontals = Array(cellsVertical - 1)
      .fill(null)
      .map(() => Array(cellsHorizontal).fill(false));

    const startRow = Math.floor(Math.random() * cellsVertical);
    const startColumn = Math.floor(Math.random() * cellsHorizontal);

    const stepThroughCell = (row, col) => {
      if (grid[row][col]) {
        return;
      }
      grid[row][col] = true;
      const neighbors = shuffle([
        [row - 1, col, "up"],
        [row, col + 1, "right"],
        [row + 1, col, "down"],
        [row, col - 1, "left"]
      ]);

      for (let neighbor of neighbors) {
        const [nextRow, nextCol, direction] = neighbor;
        if (
          nextRow < 0 ||
          nextRow >= cellsVertical ||
          nextCol < 0 ||
          nextCol >= cellsHorizontal
        ) {
          continue;
        }
        if (grid[nextRow][nextCol]) {
          continue;
        }
        if (direction === "left") {
          verticals[row][col - 1] = true;
        } else if (direction === "right") {
          verticals[row][col] = true;
        } else if (direction === "up") {
          horizontals[row - 1][col] = true;
        } else if (direction === "down") {
          horizontals[row][col] = true;
        }
        stepThroughCell(nextRow, nextCol);
      }
    };

    stepThroughCell(startRow, startColumn);
    horizontals.forEach((row, rowIndex) => {
      row.forEach((open, columnIndex) => {
        if (open) {
          return;
        }
        const wall = Bodies.rectangle(
          columnIndex * unitLengthX + unitLengthX / 2,
          rowIndex * unitLengthY + unitLengthY,
          unitLengthX,
          10,
          {
            label: "wall",
            isStatic: true,
            render: {
              fillStyle: "blue"
            }
          }
        );
        World.add(world, wall);
      });
    });
    verticals.forEach((row, rowIndex) => {
      row.forEach((open, columnIndex) => {
        if (open) {
          return;
        }
        const wall = Bodies.rectangle(
          columnIndex * unitLengthX + unitLengthX,
          rowIndex * unitLengthY + unitLengthY / 2,
          10,
          unitLengthY,
          {
            label: "wall",
            isStatic: true,
            render: {
              fillStyle: "blue"
            }
          }
        );
        World.add(world, wall);
      });
    });

    const goal = Bodies.rectangle(
      cw - unitLengthX / 2,
      ch - unitLengthY / 2,
      unitLengthX * 0.7,
      unitLengthY * 0.7,
      {
        label: "goal",
        isStatic: true,
        render: {
          fillStyle: "yellow"
        }
      }
    );
    World.add(world, goal);

    const ballRadius = Math.min(unitLengthX, unitLengthY) / 4;
    const ball = Bodies.circle(unitLengthX / 2, unitLengthY / 2, ballRadius, {
      label: "ball",
      render: {
        fillStyle: "indigo"
      }
    });
    World.add(world, ball);
    document.addEventListener("keydown", e => {
      const { x, y } = ball.velocity;

      if (e.keyCode === 38) {
        Body.setVelocity(ball, { x, y: y - 5 });
      }
      if (e.keyCode === 39) {
        Body.setVelocity(ball, { x: x + 5, y });
      }
      if (e.keyCode === 40) {
        Body.setVelocity(ball, { x, y: y + 5 });
      }
      if (e.keyCode === 37) {
        Body.setVelocity(ball, { x: x - 5, y });
      }
    });

    Events.on(engine.current, "collisionStart", e => {
      e.pairs.forEach(collision => {
        const labels = ["ball", "goal"];
        if (
          labels.includes(collision.bodyA.label) &&
          labels.includes(collision.bodyB.label)
        ) {
          //밑에 말고 모달작업 해주기
          document.querySelector(".winner").classList.remove("hidden");

          world.gravity.y = 1;
          world.bodies.forEach(body => {
            if (body.label === "wall") {
              Body.setStatic(body, false);
            }
          });
        }
      });
    });

    // unmount
    return () => {
      // destroy Matter
      Render.stop(render);
      World.clear(engine.current.world);
      Engine.clear(engine.current);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
    };
  }, []);

  return (
    <>
    <div className='flex items-stretch'>
      <div ref={box} />
      <div className="winner hidden">
        <h1></h1>
      </div>
      </div>
    </>
  );
};

export default Box;
