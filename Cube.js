'use strict'

const B = 'b'
const G = 'g'
const R = 'r'
const O = 'o'
const W = 'w'
const Y = 'y'

//     WWW
//     WWW
//     WWW
// RRR BBB OOO GGG
// RRR BBB OOO GGG
// RRR BBB OOO GGG
//     YYY
//     YYY
//     YYY

const Cube = function () {
    this.front = [
        [B, B, B],
        [B, B, B],
        [B, B, B]
    ]

    this.back = [
        [G, G, G],
        [G, G, G],
        [G, G, G]
    ]

    this.left = [
        [R, R, R],
        [R, R, R],
        [R, R, R]
    ]

    this.right = [
        [O, O, O],
        [O, O, O],
        [O, O, O]
    ]

    this.top = [
        [W, W, W],
        [W, W, W],
        [W, W, W]
    ]

    this.bottom = [
        [Y, Y, Y],
        [Y, Y, Y],
        [Y, Y, Y]
    ]

    this.asString = () =>
        `\n   ${this.top[0][0]}${this.top[0][1]}${this.top[0][2]}
   ${this.top[1][0]}${this.top[1][1]}${this.top[1][2]}
   ${this.top[2][0]}${this.top[2][1]}${this.top[2][2]}
${this.left[0][0]}${this.left[0][1]}${this.left[0][2]}${this.front[0][0]}${this.front[0][1]}${this.front[0][2]}${this.right[0][0]}${this.right[0][1]}${this.right[0][2]}${this.back[0][0]}${this.back[0][1]}${this.back[0][2]}
${this.left[1][0]}${this.left[1][1]}${this.left[1][2]}${this.front[1][0]}${this.front[1][1]}${this.front[1][2]}${this.right[1][0]}${this.right[1][1]}${this.right[1][2]}${this.back[1][0]}${this.back[1][1]}${this.back[1][2]}
${this.left[2][0]}${this.left[2][1]}${this.left[2][2]}${this.front[2][0]}${this.front[2][1]}${this.front[2][2]}${this.right[2][0]}${this.right[2][1]}${this.right[2][2]}${this.back[2][0]}${this.back[2][1]}${this.back[2][2]}
   ${this.bottom[0][0]}${this.bottom[0][1]}${this.bottom[0][2]}
   ${this.bottom[1][0]}${this.bottom[1][1]}${this.bottom[1][2]}
   ${this.bottom[2][0]}${this.bottom[2][1]}${this.bottom[2][2]}
   `
    this.rotate = (side, direction = 1) => {
        let tmp
        switch (side) {
            case 'left':
                tmp = [this.front[0][0], this.front[1][0], this.front[2][0]]
                this.front[0][0] = this.top[0][0]
                this.front[1][0] = this.top[1][0]
                this.front[2][0] = this.top[2][0]
                this.top[0][0] = this.back[2][2]
                this.top[1][0] = this.back[1][2]
                this.top[2][0] = this.back[0][2]
                this.back[2][2] = this.bottom[0][0]
                this.back[1][2] = this.bottom[1][0]
                this.back[0][2] = this.bottom[2][0]
                this.bottom[0][0] = tmp[0]
                this.bottom[1][0] = tmp[1]
                this.bottom[2][0] = tmp[2]
                break
            case 'right':
                tmp = [this.front[0][2], this.front[1][2], this.front[2][2]]
                this.front[0][2] = this.top[0][2]
                this.front[1][2] = this.top[1][2]
                this.front[2][2] = this.top[2][2]
                this.top[0][2] = this.back[2][0]
                this.top[1][2] = this.back[1][0]
                this.top[2][2] = this.back[0][0]
                this.back[2][0] = this.bottom[0][2]
                this.back[1][0] = this.bottom[1][2]
                this.back[0][0] = this.bottom[2][2]
                this.bottom[0][2] = tmp[0]
                this.bottom[1][2] = tmp[1]
                this.bottom[2][2] = tmp[2]
                break
            case 'top':
                tmp = [this.front[0][0], this.front[0][1], this.front[0][2]]
                this.front[0][0] = this.left[0][0]
                this.front[0][1] = this.left[0][1]
                this.front[0][2] = this.left[0][2]
                this.left[0][0] = this.back[0][0]
                this.left[0][1] = this.back[0][1]
                this.left[0][2] = this.back[0][2]
                this.back[0][0] = this.right[0][0]
                this.back[0][1] = this.right[0][1]
                this.back[0][2] = this.right[0][2]
                this.right[0][0] = tmp[0]
                this.right[0][1] = tmp[1]
                this.right[0][2] = tmp[2]
                break
            case 'bottom':
                tmp = [this.front[2][0], this.front[2][1], this.front[2][2]]
                this.front[2][0] = this.left[2][0]
                this.front[2][1] = this.left[2][1]
                this.front[2][2] = this.left[2][2]
                this.left[2][0] = this.back[2][0]
                this.left[2][1] = this.back[2][1]
                this.left[2][2] = this.back[2][2]
                this.back[2][0] = this.right[2][0]
                this.back[2][1] = this.right[2][1]
                this.back[2][2] = this.right[2][2]
                this.right[2][0] = tmp[0]
                this.right[2][1] = tmp[1]
                this.right[2][2] = tmp[2]
                break
            case 'front':
                tmp = [this.top[2][0], this.top[2][1], this.top[2][2]]
                this.top[2][0] = this.left[2][2]
                this.top[2][1] = this.left[1][2]
                this.top[2][2] = this.left[0][2]
                this.left[2][2] = this.bottom[0][2]
                this.left[1][2] = this.bottom[0][1]
                this.left[0][2] = this.bottom[0][0]
                this.bottom[0][2] = this.right[0][0]
                this.bottom[0][1] = this.right[1][0]
                this.bottom[0][0] = this.right[2][0]
                this.right[0][0] = tmp[0]
                this.right[1][0] = tmp[1]
                this.right[2][0] = tmp[2]
                break
            case 'back':
                tmp = [this.top[0][0], this.top[0][1], this.top[0][2]]
                this.top[0][0] = this.left[2][0]
                this.top[0][1] = this.left[1][0]
                this.top[0][2] = this.left[0][0]
                this.left[2][0] = this.bottom[2][2]
                this.left[1][0] = this.bottom[2][1]
                this.left[0][0] = this.bottom[2][0]
                this.bottom[2][2] = this.right[0][2]
                this.bottom[2][1] = this.right[1][2]
                this.bottom[2][0] = this.right[2][2]
                this.right[0][2] = tmp[0]
                this.right[1][2] = tmp[1]
                this.right[2][2] = tmp[2]
                break
        }
    }
}

Cube.Colors = { B, G, R, O, W, Y }

module.exports = Cube
