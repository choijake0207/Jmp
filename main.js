const canvas = document.querySelector("canvas")
canvas.style.border = "1px solid black"
const game = canvas.getContext('2d')

function Sprite () {
    this.position = {
        x: 100,
        y: 100
    },
    this.dimensions = {
        w: 20,
        h: 20
    }
    this.velocity = {
        x: 0,
        y: 1,
    }
    this.draw = function draw() {
        game.fillRect(this.position.x, this.position.y, this.dimensions.w, this.dimensions.h)
    }
    this.update = function update() {
        this.draw()
        this.position.y += this.velocity.y
    }
}

const sprite = new Sprite ()
sprite.draw()

function animate () {
    requestAnimationFrame(animate)
    game.clearRect(0, 0, canvas.width, canvas.height)
    sprite.update()
}
animate()