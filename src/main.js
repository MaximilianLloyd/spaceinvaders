import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import { Player } from "./entities/player";
import { World } from "./world";
import { loadImage } from "./utils";
import constants from "./constants";

// setupCounter(document.querySelector('#counter'))

const canvas = document.querySelector("canvas");

canvas.width = constants.width;
canvas.height = constants.height;

const ctx = canvas.getContext("2d");

const assets$ = [loadImage("sprites/player.png")];

const assetsArray = await Promise.all(assets$);

const assets = {
  playerSprite: assetsArray[0],
};

const world = new World(assets, ctx);

world.setup();

world.draw();

let lastTimestamp = 0;

function gameLoop(timestamp) {
  const dt = (timestamp - lastTimestamp) / 1000;
  lastTimestamp = timestamp;

  world.update(dt);

  ctx.clearRect(0, 0, constants.width, constants.height);

  world.draw();

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

// const playerSprite = new Image();
//
// playerSprite.src = "sprites/player.png";
//
// playerSprite.onload = () => {
//   const player = new Player(
//     width / 2 - ORIGINAL_WIDTH / 8,
//     height - ORIGINAL_HEIGHT / 4,
//     ORIGINAL_WIDTH / 4,
//     ORIGINAL_HEIGHT / 4,
//     playerSprite,
//   );
//
//   // draw the background
//   ctx.fillStyle = "#000000";
//   ctx.fillRect(0, 0, width, height);
//
//   player.draw(ctx);
// };
