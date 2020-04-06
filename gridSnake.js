//========SNAKE BOARD===============

function snake() {
  this.x = 0
  this.y = 0
  this.xSpeed = 1
  this.ySpeed = 0
  this.total = 0
  this.tail = []

  this.death = function () {
    for (let i = 0; i < this.tail.length; i++) {
      let pos = this.tail[i]

      let d = dist(this.x, this.y, pos.x, pos.y)
      if (d < 1) {
        this.total = 0
        this.tail = []
        console.log('death')
        setTimeout(() => {
          setup()
        }, 3000)
      }
    }
  }

  this.cut = function (lifeX, lifeY) {
    for (let k = 0; k < this.tail.length; k++) {
      let pos = this.tail[k]
      let d = dist(pos.x, pos.y, lifeX, lifeY)

      if (d < 1) {
        return k
      } else {
        return false
      }
    }
  }

  this.update = function () {
    if (this.total === this.tail.length) {
      for (let i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1]
      }
    }
    this.tail[this.total - 1] = createVector(this.x, this.y)

    this.x = this.x + this.xSpeed * res
    this.y = this.y + this.ySpeed * res

    this.x = constrain(this.x, 0, width - res)
    this.y = constrain(this.y, 0, height - res)
  }

  this.show = function () {
    fill(77, 195, 15)
    for (let i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, res - 1, res - 1)
    }
    rect(this.x, this.y, res - 1, res - 1)
  }

  this.dir = function (x, y) {
    this.xSpeed = x
    this.ySpeed = y
  }

  this.eat = function (lifeX, lifeY) {
    let d = dist(this.x, this.y, lifeX, lifeY)
    if (d < 1) {
      return true
    } else {
      return false
    }
  }
}
