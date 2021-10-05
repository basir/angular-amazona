import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { products } from 'src/app/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  products: Product[] = [];

  ngOnInit() {
    this.products = products;
  }
}
