import {Component, OnInit} from '@angular/core';
import {  Observable} from 'rxjs';
import {  BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {  map, share} from 'rxjs/operators';
import {  ProductService} from './product.service';
import {Product} from './model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      share()
    );
  public categories: object[] = [];
  public menu = [];

  constructor(private breakpointObserver: BreakpointObserver, private productservice: ProductService) {

  }
  ngOnInit() {
    this.getCategories();
  }
  public getCategories(){
    this.productservice.getCategories().subscribe(elem => {
      this.categories = elem;
      for (let i = 0; i < elem.length ; i++ ){
        this.getProductsByCategories(elem[i].id);
      }
      console.log(this.menu);
    });
  }
  public getProductsByCategories(catId){
      this.productservice.getProductsByCat(catId).subscribe((productcat) => this.menu[catId] =  productcat);
  }
}
