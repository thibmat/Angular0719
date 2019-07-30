export class Product {
  // tslint:disable-next-line:variable-name
  constructor(private _name?: string, private _description?: string, private _photo?){
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

  get photo() {
    return this._photo;
  }

  set photo(value) {
    this._photo = value;
  }
}

export const CONST_PRODUCTS = [
  new Product('hamac', 'Pour se reposer', '1.jpg'),
  new Product('Parasol', 'Pour se protéger du soleil', '2.jpg'),
  new Product('Ballon de Volley', 'Pour jouer au volley', '3.jpg')
];
