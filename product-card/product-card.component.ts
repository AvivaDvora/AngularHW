import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { product } from '../product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
  imports: [NgIf]
})
export class ProductCardComponent {
  @Input() product: product = {} as product;
}
