export default class Record {
  id: string;

  constructor(id : string) {
    this.id = id;
  }

  async getId() : Promise<string> {
    return Promise.resolve(this.id);
  }

  static getRecords() : Array<Record> {
    return [new Record('foo'), new Record('bar')]
  }
}
