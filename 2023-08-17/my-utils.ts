export class Product {
  private _id!: number;
  private _name!: string;
  private _price!: number;

  // writable/assignable property
  // if p1 is an object of this class, then the following is the way to call this:
  // p1.id = 123
  set id(id: number) {
    this._id = id;
  }
  set name(name: string) {
    this._name = name;
  }
  set price(price: number) {
    this._price = price;
  }
  get id(): number {
    return this._id;
  }
  get name(): string {
    return this._name;
  }
  get price(): number {
    return this._price;
  }
  toString(): string {
    return `Product(id=${this._id}, name="${this._name}", price=${this._price})`;
  }
}
