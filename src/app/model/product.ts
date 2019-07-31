import * as slug from 'slug';

export class Product {
  public id: number;
  // tslint:disable-next-line:variable-name
  private _name: string;
  public slug: string;
  public description: string;
  public price: number;
  public createdAt: Date;
  public updatedAt: Date;
  public nbViews: number;
  public isPublished: boolean;
  public imageName: string;
  constructor(name?: string, description?: string) {
    this._name = name;
    this.description = description;

  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
    this.slug = slug(value, {lower: true});
  }
}

export const CONST_PRODUCTS = [
  new Product('hamac', 'Pour se reposer'),
  new Product('Parasol', 'Pour se protéger du soleil'),
  new Product('Ballon de Volley', 'Pour jouer au volley')
];
