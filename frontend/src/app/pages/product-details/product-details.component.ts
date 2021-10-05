import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { products } from 'src/app/products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  loading: boolean = true;
  error: string = '';
  product: Product = {
    _id: '',
    name: '',
    slug: '',
    price: 0,
    image: '',
    brand: '',
    category: '',
    description: '',
    countInStock: 0,
    rating: 0,
    numReviews: 0,
    reviews: [],
  };

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const slug = routeParams.get('slug');
    this.loading = true;
    const foundProduct = products.find((x) => x.slug === slug);
    this.loading = false;
    if (foundProduct) {
      this.product = foundProduct;
    } else {
      this.error = 'Product Not Found';
    }
  }
}
