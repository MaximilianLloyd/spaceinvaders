import { createVector } from "../objects/vector";
import { Entity } from "./entity";
import constants from "../constants";

export class Player extends Entity {
  constructor(sprite) {
    super(createVector(0, 0), 26, 16);

    this.pos.x = constants.width / 2 - this.width / 2;
    this.pos.y = constants.height - this.height;
    this.health = 100;
    this.score = 0;
    this.level = 1;
    this.sprite = sprite;
  }

  gainScore(points) {
    this.score += points;
  }

  levelUp() {}

  draw(ctx) {
    ctx.drawImage(this.sprite, this.pos.x, this.pos.y, this.width, this.height);
  }

  update(dt) {
    // this.pos.x += 100 * dt; // Example movement logic, move right at 100 pixels per second
    // this.pos.y -= 100 * dt; // Example movement logic, move right at 100 pixels per second
    // Update player state based on dt
    // For example, move the player or handle input
  }
}
