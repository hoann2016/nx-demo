import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-product-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-catalog.component.html',
  styleUrl: './product-catalog.component.css',
})
export class ProductCatalogComponent {}
