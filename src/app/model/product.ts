import * as slug from 'slug';
import {JsonFormatter} from "tslint/lib/formatters";

export class Product {

  public id: number;
  public name: string;
  public slug: string;
  public description: string;
  private _price: number;
  public createdAt: string;
  public updatedAt: string;
  public nbViews: number;
  public isPublished: boolean;
  public categoryId: number;
  public publisherId: number;
  public imageName: string;

  constructor(name?: string, description?: string, id?: number) {
    this.name = name;
    this.description = description;
    this.id = id;
    // Valeurs par défaut
    this.nbViews = 0;
    this.isPublished = false;
    this.createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
    this.categoryId = 1;
    this.publisherId = 1;
  }
  public updateSlug() {
    this.slug = slug(this.name, {lower: true});
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
