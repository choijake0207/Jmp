const canvas = document.querySelector("canvas")
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

    
    this.draw = function draw() {
        game.fillRect(this.position.x, this.position.y, this.dimensions.w, this.dimensions.h)
    }
}

const sprite = new Sprite ()
sprite.draw()