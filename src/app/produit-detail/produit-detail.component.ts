import { Component, Input, OnInit } from '@angular/core';
import {ProductListeComponent} from "../product-liste/product-liste.component";

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css']
})
export class ProduitDetailComponent implements OnInit {

  @Input() product: ProductListeComponent;
  constructor(product: ProductListeComponent) {
    this.product = product;
  }

  ngOnInit() {
  }

}
