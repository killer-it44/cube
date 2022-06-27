'use strict'

const Cube = require('./Cube')
const { B, G, R, O, W, Y } = Cube.Colors

describe('cube', () => {
    //     WWW
    //     WWW
    //     WWW
    // RRR BBB OOO GGG
    // RRR BBB OOO GGG
    // RRR BBB OOO GGG
    //     YYY
    //     YYY
    //     YYY

    it('rotates left', () => {
        const cube = new Cube()
        cube.rotate('left')
        expect(cube.front).toEqual([
            [W, B, B],
            [W, B, B],
            [W, B, B]
        ])
        expect(cube.top).toEqual([
            [G, W, W],
            [G, W, W],
            [G, W, W]
        ])
        expect(cube.back).toEqual([
            [G, G, Y],
            [G, G, Y],
            [G, G, Y]
        ])
        expect(cube.bottom).toEqual([
            [B, Y, Y],
            [B, Y, Y],
            [B, Y, Y]
        ])
    })

    it('rotates right', () => {
        const cube = new Cube()
        cube.rotate('right')
        expect(cube.front).toEqual([
            [B, B, W],
            [B, B, W],
            [B, B, W]
        ])
        expect(cube.top).toEqual([
            [W, W, G],
            [W, W, G],
            [W, W, G]
        ])
        expect(cube.back).toEqual([
            [Y, G, G],
            [Y, G, G],
            [Y, G, G]
        ])
        expect(cube.bottom).toEqual([
            [Y, Y, B],
            [Y, Y, B],
            [Y, Y, B]
        ])
    })

    it('rotates top', () => {
        const cube = new Cube()
        cube.rotate('top')
        expect(cube.front).toEqual([
            [R, R, R],
            [B, B, B],
            [B, B, B]
        ])
        expect(cube.right).toEqual([
            [B, B, B],
            [O, O, O],
            [O, O, O]
        ])
        expect(cube.back).toEqual([
            [O, O, O],
            [G, G, G],
            [G, G, G]
        ])
        expect(cube.left).toEqual([
            [G, G, G],
            [R, R, R],
            [R, R, R]
        ])
    })

    it('rotates bottom', () => {
        const cube = new Cube()
        cube.rotate('bottom')
        expect(cube.front).toEqual([
            [B, B, B],
            [B, B, B],
            [R, R, R]
        ])
        expect(cube.right).toEqual([
            [O, O, O],
            [O, O, O],
            [B, B, B]
        ])
        expect(cube.back).toEqual([
            [G, G, G],
            [G, G, G],
            [O, O, O]
        ])
        expect(cube.left).toEqual([
            [R, R, R],
            [R, R, R],
            [G, G, G]
        ])
    })

    it('rotates front', () => {
        const cube = new Cube()
        cube.rotate('front')
        expect(cube.top).toEqual([
            [W, W, W],
            [W, W, W],
            [R, R, R]
        ])
        expect(cube.right).toEqual([
            [W, O, O],
            [W, O, O],
            [W, O, O]
        ])
        expect(cube.bottom).toEqual([
            [O, O, O],
            [Y, Y, Y],
            [Y, Y, Y]
        ])
        expect(cube.left).toEqual([
            [R, R, Y],
            [R, R, Y],
            [R, R, Y]
        ])
    })

    it('rotates back', () => {
        const cube = new Cube()
        cube.rotate('back')
        expect(cube.top).toEqual([
            [R, R, R],
            [W, W, W],
            [W, W, W]
        ])
        expect(cube.right).toEqual([
            [O, O, W],
            [O, O, W],
            [O, O, W]
        ])
        expect(cube.bottom).toEqual([
            [Y, Y, Y],
            [Y, Y, Y],
            [O, O, O]
        ])
        expect(cube.left).toEqual([
            [Y, R, R],
            [Y, R, R],
            [Y, R, R]
        ])

        console.log(cube.asString())
    })
})
