import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private productservice: ProductService) {
    this.slug = this.route.snapshot.paramMap.get('slug');
  }

  ngOnInit() {
  }
  public getProduct() {
    this.productservice.getProduct(this.slug).subscribe(elem => this.product = elem);
  }
}
