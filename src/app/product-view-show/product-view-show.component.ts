import { Component, OnInit, DoCheck } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import {CONST_PRODUCTS, Product} from '../model/product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-view-show',
  templateUrl: './product-view-show.component.html',
  styleUrls: ['./product-view-show.component.css']
})
export class ProductViewShowComponent implements OnInit, DoCheck {

  public products: Array<Product> = CONST_PRODUCTS;
  public product: Product;
  public slug: string;
  constructor(private route: ActivatedRoute, private router: Router, private productservice: ProductService) {
    this.slug = this.route.snapshot.paramMap.get('slug');
  }
  ngOnInit() {
    this.getProduct();
  }
  ngDoCheck(): void {
    const newSlug = this.route.snapshot.paramMap.get('slug');
    if (this.slug !== newSlug) {
      this.slug = newSlug;
      this.getProduct();
      if (!this.product) {
        this.router.navigate(['not-found']);
      }
    }
  }
  public getProduct() {
    this.productservice.getProduct(this.slug).subscribe(elem => this.product = elem);
  }
}
