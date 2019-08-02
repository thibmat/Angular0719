import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /**
   * Definition d'une propriété URL
   */
  public url: string;

  /**
   * Definition d'une propriété isAdmin
   */
  public isAdmin: boolean;
  /**
   * Definition des classes CSS a appliquer
   */
  public classesCss: object;

  constructor() {
    this.url = 'https://www.ecosia.org';
    this.isAdmin = true;
    this.changeCssClasses();
  }

  ngOnInit() {
  }
  public changeAdmin(){
    this.isAdmin = !this.isAdmin;
    this.changeCssClasses();
  }
  private changeCssClasses() {
    this.classesCss = {
      'blue-bg' : this.isAdmin,
      'teal-text': !this.isAdmin
    };
  }
}
