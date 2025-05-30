export class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
  }

  multiply(vec) {
    this.x *= vec.x;
    this.y *= vec.y;
  }
}

export const createVector = (x, y) => {
  return new Vector(x, y);
};
