import { Component, OnInit, DoCheck } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import {CONST_PRODUCTS, Product} from '../model/product';

@Component({
  selector: 'app-product-view-show',
  templateUrl: './product-view-show.component.html',
  styleUrls: ['./product-view-show.component.css']
})
export class ProductViewShowComponent implements OnInit, DoCheck {

  private products: Array<Product> = CONST_PRODUCTS;
  private product: Product;
  constructor(private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.getProduct(slug);
  }
  ngDoCheck() {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (this.product.slug !== slug ){
      this.getProduct(slug);
    }
  }
  private getProduct(slug: string): void {
   this.products.forEach(product => {
    if (product.slug === slug) {
      this.product = product;
    }
    });
    if (!this.product){
      this.router.navigate(['/not-found']);
    }
  }
}
