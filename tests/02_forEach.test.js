const { forEach } = require('../array_functions/02_forEach')

describe('Handle Arrays with callbacks', () => {
  
  it('02 - forEach invokes the callback fn', () => {
    const array = [1, 2, 3]
    const spy = jest.fn()

    forEach(array, spy)

    expect(spy).toHaveBeenNthCalledWith(1, 1, 0, array)
    expect(spy).toHaveBeenNthCalledWith(2, 2, 1, array)
    expect(spy).toHaveBeenNthCalledWith(3, 3, 2, array)
    expect(spy).toHaveBeenCalledTimes(3)
  })
})
