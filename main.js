const canvas = document.querySelector("canvas")
canvas.style.border = "1px solid black"
const game = canvas.getContext('2d')
const gravity = 1
let isJumping = false

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
        this.position.x += this.velocity.x
        // if no collision with bottom border, add gravity
        if (this.position.y + this.velocity.y + this.dimensions.h <= canvas.height) {
            this.velocity.y += gravity
        // else halt sprite
        } else {
            this.velocity.y = 0
            isJumping = false
        }
    }
}


addEventListener("keydown", (event) => {
    switch (event.code) {
        case "KeyW":
            sprite.velocity.y -= 10
            break;
        case "KeyD":
            sprite.velocity.x += 3
            console.log("move right")
            break;
        case "KeyA": 
            sprite.velocity.x -= 3
            console.log("move left")
            break;
        case "KeyS":
            console.log("move down")
            break;
    }
})

addEventListener("keyup", (event) => {
    switch (event.code) {
        case "KeyD": 
            sprite.velocity.x = 0
            break;
        case "KeyA": 
            sprite.velocity.x = 0
            break;
    }
})


const sprite = new Sprite ()
sprite.draw()

function animate () {
    requestAnimationFrame(animate)
    game.clearRect(0, 0, canvas.width, canvas.height)
    sprite.update()
}
animate()