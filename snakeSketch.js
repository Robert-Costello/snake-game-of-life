/* eslint-disable complexity */

//========SNAKE BOARD===============
let s
let scl
let food

function setup() {
  createCanvas(600, 600)

  s = new snake()

  frameRate(10)

  pickLoc()
}

function pickLoc() {
  let cols = floor(width / scl)
  let rows = floor(height / scl)
  food = createVector(floor(random(cols)), floor(random(rows)))
  food.mult(scl)
}

function draw() {
  scl = 10
  background(45)

  if (s.eat(food)) {
    pickLoc()
  }
  s.death()
  s.update()
  s.show()

  fill(255, 25, 100)
  rect(food.x, food.y, scl, scl)
}

function keyPressed() {
  if (keyCode === UP_ARROW && s.ySpeed !== 1) {
    s.dir(0, -1)
  }
  if (keyCode === DOWN_ARROW && s.ySpeed !== -1) {
    s.dir(0, 1)
  }
  if (keyCode === LEFT_ARROW && s.xSpeed !== 1) {
    s.dir(-1, 0)
  }
  if (keyCode === RIGHT_ARROW && s.xSpeed !== -1) {
    s.dir(1, 0)
  }
}
