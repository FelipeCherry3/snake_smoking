const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const size = 30

const snake = [
    {x:200,y:200},
    {x:230,y:200}
]
let direcao = "right"
const drawSnake = () => {

    ctx.fillStyle = "#ddd"

    snake.forEach((pos, index) => {
        if (index == snake.length - 1) {
            ctx.fillStyle = "white"
        }

        ctx.fillRect(pos.x, pos.y,size,size)
    })
}

const moveSnake = () => {
    const head = snake[snake.length - 1]

    snake.shift()

    if (direcao == "right") {
        snake.push({ x: head.x + 30, y: head.y})
    }
}

setInterval(() => {
    ctx.clearRect(0,0,800,800)
    moveSnake()
    drawSnake()
},100000)