import Reader from './reader'
import Record from './record'

describe('with getReaders', () => {
  it('returns one from the one method', () => {
    expect(Reader.getReaders()[0].one()).toEqual(1)
  })

  it('returns the id of the associated records', () => {
    expect(Reader.getReaders()[0].getRecordId()).toEqual('foo')
  })
})

describe('creating the instances', () => {
  it('returns the id of the associated records', () => {
    const record = new Record('baz')
    const reader = new Reader(record)
    expect(reader.getRecordId()).toEqual('baz')
  })
})
