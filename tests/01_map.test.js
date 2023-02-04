const { map } = require('../array_functions/01_map')
const speakers = require('./fake_response')

describe('Handle Arrays with callbacks', () => {
  
  it('01 - map should return new list with the names', () => {
    const mappedList = map(speakers, (speaker) => speaker.name)
    const realMappedList = speakers.map(speaker => speaker.name)

    expect(mappedList).toEqual(realMappedList)
  })
})
