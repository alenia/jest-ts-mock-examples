export default class Record {
  id: string;

  constructor(id : string) {
    this.id = id;
  }

  getId() : string {
    return this.id;
  }

  static getRecords() : Array<Record> {
    return [new Record('foo'), new Record('bar')]
  }
}
