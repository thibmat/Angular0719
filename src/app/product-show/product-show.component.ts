import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {Product} from '../model/product';


@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {
  @Input() product: Product;
  @Output () note = new EventEmitter<number>();
  constructor() {
  }
  ngOnInit() {
  }
  public recupNote(value: number): void {
    this.note.emit(value);
  }
}
