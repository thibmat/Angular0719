export class Product {
  // tslint:disable-next-line:variable-name
  constructor(private _name?: string, private _description?: string) {
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}

export const CONST_PRODUCTS = [
  new Product('hamac', 'Pour se reposer'),
  new Product('Parasol', 'Pour se protéger du soleil'),
  new Product('Ballon de Volley', 'Pour jouer au volley')
];
