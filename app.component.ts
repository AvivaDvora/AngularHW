import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { product } from './product.interface';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductCardComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hw4';
  productList: product[] = [
    {
      name: 'comuter',
      firma: 'dell',
      description: '',
      price: 200,
      fatPercentages: 0
    },
    {
      name: 'laptop',
      firma: 'hp',
      description: 'Gaming laptop',
      price: 3500,
      fatPercentages: 15
    },
    {
      name: 'tablet',
      firma: 'apple',
      description: 'iPad',
      price: 2500,
      fatPercentages: 8
    },
    {
      name: 'monitor',
      firma: 'samsung',
      description: '4K display',
      price: 1800,
      fatPercentages: 5
    },
    {
      name: 'keyboard',
      firma: 'logitech',
      description: 'Mechanical keyboard',
      price: 450,
      fatPercentages: 10
    }
  ];

}
