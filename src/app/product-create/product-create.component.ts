import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';
import {MatSlideToggleChange} from '@angular/material';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';

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
  public action = {
      value: 'Creer',
      value2: 'Création',
      isUpdate: false
    };
  constructor(private productservice: ProductService, private router: Router) {
    this.product = new Product();
  }

  ngOnInit() {
  }

  /**
   * Envoi du produit à l'API pour le sauvegarder
   */
  public sendProduct(): void {
    this.product.updateSlug();
    this.productservice.create(this.product).subscribe(datas => {
      if (datas.message === 'Produit bien créé !') {
        console.log(datas.message);
        this.router.navigate(['/produits/' + this.product.slug]);
      }
    });
  }

  changeIsPublished($event: MatSlideToggleChange) {
    this.product.isPublished = $event.checked;
  }
}
