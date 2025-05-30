import { createBullet } from "./entities/bullet.js";
import { Player } from "./entities/player.js";
import { createVector, Vector } from "./objects/vector.js";

export class World {
  player = null;
  ctx = null;
  movingLeft = false;
  movingRight = false;
  bullets = [];

  constructor(assets, ctx) {
    this.player = new Player(assets.playerSprite);
    this.ctx = ctx;
    this.bullets.push(createBullet());
  }

  setup() {
    this.drawBground();
    this.listenToInput();
  }

  drawBground() {
    // Draw the background
    this.ctx.fillStyle = "#000000";
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  listenToInput() {
    window.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        this.movingLeft = true;
      }
      if (event.key === "ArrowRight") {
        this.movingRight = true;
      }
      if (event.key === " ") {
        // Spacebar to shoot
        const bullet = createBullet();
        bullet.pos.x =
          this.player.pos.x + this.player.width / 2 - bullet.width / 2;
        bullet.pos.y = this.player.pos.y - bullet.height; // Position above the player
        this.bullets.push(bullet);
      }
    });

    window.addEventListener("keyup", (event) => {
      console.log("keyup", event.key);
      if (event.key === "ArrowLeft") {
        this.movingLeft = false;
      }
      if (event.key === "ArrowRight") {
        this.movingRight = false;
      }
    });
  }

  draw() {
    this.drawBground();

    if (this.player) {
      this.player.draw(this.ctx);
    }

    this.bullets.forEach((bullet) => {
      bullet.draw(this.ctx);
    });
  }

  update(dt) {
    if (this.movingLeft) {
      this.player.pos.x -= 2; // Move left by 2 pixels per frame
    }
    if (this.movingRight) {
      this.player.pos.x += 2; // Move right by 2 pixels per frame
    }
    if (this.player) {
      this.player.update(dt);
    }
    this.bullets.forEach((bullet) => {
      bullet.update(dt);
    });
  }
}
