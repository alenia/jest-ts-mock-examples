import Record from './record';

export default class Reader {
  record: Record;
  constructor(record : Record) {
    this.record = record;
  }

  getRecordId() {
    return this.record.getId();
  }

  one() {
    return 1;
  }

  static getReaders() {
    return Record.getRecords().map((record) => new Reader(record))
  }
}
