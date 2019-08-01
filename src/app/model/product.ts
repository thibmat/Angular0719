import * as slug from 'slug';

export class Product {

  public id: number;
  private _name: string;
  public slug: string;
  public description: string;
  private _price: number;
  public createdAt: Date;
  public updatedAt: Date;
  public nbViews: number;
  public isPublished: boolean;
  public imageName: string;

  constructor(name?: string, description?: string, id?: number) {
    this.name = name;
    this.description = description;
    this.id = id;

    // Valeurs par défaut
    this.nbViews = 0;
    this.isPublished = true;
  }

  public get name() {
    return this._name;
  }

  public set name(value: string) {
    if (value) {
      this._name = value;
      this.slug = slug(this._name, {lower: true});
    }
  }


  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = (value >= 0) ? value : 0;
  }
}

/**
 * Données de tests (à remplacer par l'appel de l'API ASAP)
 */
export const CONST_PRODUCTS: Product[] = [
  new Product('Hamac', 'Pour se reposer', 1),
  new Product('Parasol', 'Pour se mettre à l\'ombre', 2),
  new Product('Ballon', 'Pour jouer au volley', 3)
];
