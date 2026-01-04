import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

interface Product {
  id: number;
  title: string;
  description: string;
  brand: string;
  rating: number;
  width: number;
}

@Component({
  selector: 'app-api',
  imports: [],
  templateUrl: './api.html',
  styleUrl: './api.css',
})
export class Api {
  private http = inject(HttpClient);
  public products: Product[] = [];
  ngOnInit() {
    this.http.get('https://dummyjson.com/products').subscribe((data: any) => {
      this.products = data.products as Product[];
    });
  }
}
