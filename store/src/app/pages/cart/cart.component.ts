import { Component,OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: `./cart.components.html`,
})
export class CartComponent implements OnInit {

  cart: Cart = { items : [
    {
      product:'https://via.placeholder.com/150',
      name:'sneckers',
      price:150,
      quantity:1,
      id:1
    },
  ]};
  dataSource:Array<CartItem>=[];
  displayedColumns:Array<string>=[
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]
  constructor(private cartService: CartService){

  }
  ngOnInit():void{
     this.cartService.cart.subscribe((_cart:Cart)=>{
      this.dataSource=this.cart.items;
      this.cart=_cart;
     })
  }
  getTotal(items:Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }
  onClearCart():void{
    this.cartService.clearCart();
  }
  onRemoveFromCart(item:CartItem):void{
    this.cartService.removeFromCart(item);
  }
  onAddQuantity(item:CartItem){
    this.cartService.addToCart(item);
  }
  onRemoveQuantity(item:CartItem){
    this.cartService.removeQuantity(item);
  }
}
