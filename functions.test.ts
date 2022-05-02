const {shuffleArray} = require('./utils')

let arr = []
describe('shuffleArray should', () => {
    it('should return array', () => {
        expect(Array.isArray(shuffleArray(arr))).toBeTruthy()
    })

    test ('check array length', () => {
        expect(shuffleArray(arr)).toHaveLength(arr.length)
    })
})