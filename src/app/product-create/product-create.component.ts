import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';
import {MatSlideToggleChange} from '@angular/material';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  /**
   * Produit à sauvegarder en BDD
   */
  public product: Product;

  constructor() {
    this.product = new Product();
  }

  ngOnInit() {
  }

  /**
   * Envoi du produit à l'API pour le sauvegarder
   */
  public sendProduct(): void {
    this.product.createdAt = new Date();
  }

  changeIsPublished($event: MatSlideToggleChange) {
    this.product.isPublished = $event.checked;
  }
}
