import Record from './record';

export default class Reader {
  record: Record;
  constructor(record : Record) {
    this.record = record;
  }

  getRecordId() : string {
    return this.record.getId();
  }

  one() : number {
    return 1;
  }

  static getReaders() : Array<Reader> {
    return Record.getRecords().map((record) => new Reader(record))
  }
}
