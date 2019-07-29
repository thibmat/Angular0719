import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-liste',
  templateUrl: './product-liste.component.html',
  styleUrls: ['./product-liste.component.css']
})
export class ProductListeComponent implements OnInit {
  private PRODUCTS = [
    {
      name: 'Hamac',
      description: 'pour se reposer'
    },
    {
      name: 'Parasol',
      description: 'Pour se mettre a l\'ombre'
    },
    {
      name: 'Ballon',
      description: 'Pour faire un volley'
    }
  ];
  /**
   * Definition d'une propriété URL
   */
  private url: string;

  /**
   * Definition d'une propriété isAdmin
   */
  private isAdmin: boolean;
  /**
   * Initialisation des propriétés
   */
  constructor() {
    this.url = 'https://www.ecosia.org';
    this.isAdmin = true;
  }
  private changeAdmin(){
    this.isAdmin = !this.isAdmin;
  }
  ngOnInit() {
  }
}
