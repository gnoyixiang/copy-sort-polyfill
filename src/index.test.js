require('./index')

describe('Array sort function polyfill', () => {
  it('should allow sorting, where original array is being mutated', () => {
    const arr = [1, 4, 3]
    const sorted = arr.sort(function (a, b) {
      return a - b
    })
    expect(arr).toEqual([1, 3, 4])
    expect(sorted).toEqual([1, 3, 4])
  })

  it('should allow sorting without mutating the original array', () => {
    const arr = [1, 4, 3]
    const sorted = arr.sort(function (a, b) {
      return a - b
    }, false)
    expect(arr).toEqual([1, 4, 3])
    expect(sorted).toEqual([1, 3, 4])
  })
})
