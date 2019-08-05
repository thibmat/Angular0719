import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-liste',
  templateUrl: './product-liste.component.html',
  styleUrls: ['./product-liste.component.css']
})
export class ProductListeComponent implements OnInit {
  public products: Array<Product> = [];
  public choosedProduct: Product;
  public averages: Array<Array<number>>;
  /**
   * Initialisation des propriétés
   */
  constructor(private productservice: ProductService) {

  }
  public chooseProduct(product: Product): void {
    this.choosedProduct = product;
  }
  public onVoted(note: number){
    let index;
    const lgth = this.products.length;
    for (let i = 0; i < lgth ; i++) {
      if(this.choosedProduct.name === this.products[i].name){
        index = i;
        break;
      }
    }
    this.averages[index][0] += note;
    this.averages[index][1] ++;
    console.dir( this.averages[index]);
  }
  public getAverage(index: number){
    if (this.averages[index][1] !== 0){
      return this.averages[index][0] / this.averages[index][1];
    } else {
      return 0;
    }
  }
  ngOnInit() {
    this.productservice.getProducts().subscribe(products => {
      this.products = products;
      // On initialise le tableau des notes
      this.averages = [];
      // 1. On crée autant d'index qu'il y a de produits
      // 2. Dans chaque index on aura :
      //    - L'ancienne somme des notes (par défaut 0)
      //    - Le nombre de votes (par défaut 0)
      this.products.forEach(elem => this.averages.push([0, 0]));
    });
  }
  deleteProduct(product: Product) {
    this.productservice.delete(product.id).subscribe(
      datas=>{
        console.log(datas.message);
        //On supprime le product dans le tableau local
        const index = this.products.findIndex(elem => elem.id === product.id);
        console.log(index);
        this.products.splice(index, 1);
      }
    );
  }
}
