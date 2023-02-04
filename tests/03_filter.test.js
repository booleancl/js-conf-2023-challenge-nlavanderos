const { filter } = require('../array_functions/03_filter')
const speakers = require('./fake_response')

describe('Handle Arrays with callbacks', () => {
  
  it('03 - filter should return new list with the names', () => {
    const mappedList = filter(speakers, (speaker) => speaker.type == 'national')
    const realMappedList = speakers.filter(speaker => speaker.type == 'national')

    expect(mappedList).toEqual(realMappedList)
  })
})
