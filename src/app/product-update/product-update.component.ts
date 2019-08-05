import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {Product} from '../model/product';
import {MatSlideToggleChange} from '@angular/material';
import * as slug from 'slug';


@Component({
  selector: 'app-product-update',
  templateUrl: '../product-create/product-create.component.html',
  styleUrls: ['../product-create/product-create.component.css']
})
export class ProductUpdateComponent implements OnInit {

  public product: Product;
  public action = {
    value: 'Mettre à jour',
    value2: 'Mise à jour',
    isUpdate: true
  };

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {
  }

  ngOnInit() {
    this.getProduct();
  }
  /**
   * Fonction permettant de récupérer le produit par rapport à l'id de l'URL
   */
  private getProduct(): void {
    // On récupère l'id de la route
    const data = this.route.snapshot.paramMap.get('slug');
    // On récupère le produit grâce au service
    this.productService.getProduct(data).subscribe(product => {
      // On stocke le produit pour l'affichage
      this.product = product;
      // On redirige vers la page 404 si le produit n'a pas été trouvé
      if (!this.product) {
        this.router.navigate(['/not-found']);
      }
    });
  }
  changeIsPublished($event: MatSlideToggleChange) {
    this.product.isPublished = $event.checked;
  }
  /**
   * Envoi du produit à l'API pour le sauvegarder
   */
  public sendProduct(): void {
    this.product.slug = slug(this.product.name, {lower: true});
    this.product.updatedAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
    this.productService.update(this.product).subscribe(datas => {
      if (datas.message === 'Produit bien mis à jour !') {
        console.log(datas.message);
        this.router.navigate(['/produits/' + this.product.slug]);
      }
    });
  }
}
