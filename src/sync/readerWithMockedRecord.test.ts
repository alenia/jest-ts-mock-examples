import Reader from './reader'
import Record from './record'

jest.mock('./record')
const MockedRecord = Record as jest.Mocked<typeof Record>;
const mockRecord = new MockedRecord('bax');
MockedRecord.getRecords.mockImplementation(() => [mockRecord]);

describe('with getReaders', () => {
  it('returns one from the one method', () => {
    expect(Reader.getReaders()[0].one()).toEqual(1)
  })

  xit('returns the id of the associated records', () => {
    //
    //mockRecord.getId.mockImplementation(() => 'baz');
    expect(Reader.getReaders()[0].getRecordId()).toEqual('baz')
  })
})

/*
describe('creating the instances', () => {
  it('returns the id of the associated records', () => {
    const record = new Record('baz')
    const reader = new Reader(record)
    expect(reader.getRecordId()).toEqual('baz')
  })
})
*/
