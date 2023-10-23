import { Component,OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  cols = 3;
  category: string | null = null; 
  rowHeight: number = ROWS_HEIGHT[this.cols];

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[colsNum];
  }

  constructor(private cartService:CartService){}
  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }
  onAddToCart(product:Product):void{
   this.cartService.addToCart({
    product:product.image,
    name:product.title,
    price:product.price,
    quantity:1,
    id:product.id
   })  
  }
  ngOnInit(): void {
    
  }
}