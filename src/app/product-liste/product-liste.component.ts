import { Component, OnInit } from '@angular/core';
import {CONST_PRODUCTS, Product} from '../model/product';

@Component({
  selector: 'app-product-liste',
  templateUrl: './product-liste.component.html',
  styleUrls: ['./product-liste.component.css']
})
export class ProductListeComponent implements OnInit {
  public products: Array<Product> = CONST_PRODUCTS;
  /**
   * Definition d'une propriété URL
   */
  public url: string;

  /**
   * Definition d'une propriété isAdmin
   */
  public isAdmin: boolean;
  /**
   * Definition des classes CSS a appliquer
   */
  public classesCss: object;
  public choosedProduct: ProductListeComponent;
  /**
   * Initialisation des propriétés
   */
  constructor() {
    this.url = 'https://www.ecosia.org';
    this.isAdmin = true;
    this.changeCssClasses();
  }
  public changeAdmin(){
    this.isAdmin = !this.isAdmin;
    this.changeCssClasses();
  }
  private changeCssClasses() {
    this.classesCss = {
      'blue-bg' : this.isAdmin,
      'teal-text': !this.isAdmin
    };
  }
  public chooseProduct(product: ProductListeComponent): void
  {
    this.choosedProduct = product;
  }
  ngOnInit() {
  }
}
