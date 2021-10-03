import { Component } from '@angular/core';
import { Product } from './models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'amazona';
  products: Product[] = [];

  ngOnInit() {
    this.products = [
      {
        _id: '1',
        name: 'Nike Slim Shirt',
        slug: 'nike-slim-shirt',
        category: 'Shirts',
        image: '../assets/images/p1.jpg',
        price: 120,
        countInStock: 10,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
        reviews: [],
      },
      {
        _id: '2',
        name: 'Adidas Fit Shirt',
        slug: 'adidas-fit-shirt',
        category: 'Shirts',
        image: '../assets/images/p2.jpg',
        price: 100,
        countInStock: 20,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
        reviews: [],
      },
      {
        _id: '3',
        name: 'Lacoste Free Shirt',
        slug: 'lacoste-free-shirt',
        category: 'Shirts',
        image: '../assets/images/p3.jpg',
        price: 220,
        countInStock: 0,
        brand: 'Lacoste',
        rating: 4.8,
        numReviews: 17,
        description: 'high quality product',
        reviews: [],
      },
      {
        _id: '4',
        name: 'Nike Slim Pant',
        slug: 'nike-slim-pant',
        category: 'Pants',
        image: '../assets/images/p4.jpg',
        price: 78,
        countInStock: 15,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
        reviews: [],
      },
      {
        _id: '5',
        name: 'Puma Slim Pant',
        slug: 'puma-slim-pant',
        category: 'Pants',
        image: '../assets/images/p5.jpg',
        price: 65,
        countInStock: 5,
        brand: 'Puma',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
        reviews: [],
      },
      {
        _id: '6',
        name: 'Adidas Fit Pant',
        slug: 'adidas-fit-pant',
        category: 'Pants',
        image: '../assets/images/p6.jpg',
        price: 139,
        countInStock: 12,
        brand: 'Adidas',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
        reviews: [],
      },
    ];
  }
}
