//========SNAKE BOARD===============

function snake() {
  this.x = 0
  this.y = 0
  this.xSpeed = 1
  this.ySpeed = 0
  this.total = 0
  this.tail = []

  this.death = function() {
    for (let i = 0; i < this.tail.length; i++) {
      let pos = this.tail[i]
      console.log('pos:', pos.x)
      let d = dist(this.x, this.y, pos.x, pos.y)
      if (d < 1) {
        this.total = 0
        this.tail = []
      }
    }
  }

  this.update = function() {
    if (this.total === this.tail.length) {
      for (let i = 0; i < this.total - 1; i++) {
        this.tail[i] = this.tail[i + 1]
      }
    }
    // this.tail[this.total - 1] = rect(this.x, this.y, res, res)

    this.x = this.x + this.xSpeed * res
    this.y = this.y + this.ySpeed * res

    this.x = constrain(this.x, 0, width - res)
    this.y = constrain(this.y, 0, height - res)
  }

  this.show = function() {
    fill(77, 195, 15)
    for (let i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, res - 1, res - 1)
    }
    rect(this.x, this.y, res - 1, res - 1, 2, 2, 2, 2)
  }

  this.dir = function(x, y) {
    this.xSpeed = x
    this.ySpeed = y
  }

  this.eat = function(lifeX, lifeY) {
    if (this.x === lifeX && this.y === lifeY) {
      this.total++

      return true
    } else return false
  }
}
