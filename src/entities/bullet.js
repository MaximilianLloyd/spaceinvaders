import { createVector } from "../objects/vector";
import { Entity } from "./entity";
import constants from "../constants";

export class Bullet extends Entity {
  constructor() {
    super(createVector(0, 0), 4, 16);

    this.pos.x = constants.width / 2 - this.width / 2;
    this.pos.y = constants.height / 2;
  }

  // gainScore(points) {
  //   this.score += points;
  // }

  levelUp() {}

  draw(ctx) {
    // draw rectangle
    ctx.fillStyle = "#00FF00"; // Red color for the bullet
    ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
  }

  update(dt) {
    this.pos.y -= 300 * dt; // Move the bullet upwards at 200 pixels per second
  }
}

export const createBullet = () => {
  return new Bullet();
};
