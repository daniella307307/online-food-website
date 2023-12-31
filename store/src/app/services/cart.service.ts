import { Injectable } from '@angular/core';
import {BehaviorSubject } from 'rxjs';
import {Cart, CartItem } from '../models/cart.model'
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {
   cart=new BehaviorSubject<Cart>({items:[]});

  constructor(private _snackBar:MatSnackBar) { }

  addToCart(item:CartItem):void{
    const items=[...this.cart.value.items];

    const itemInCart=items.find((_item)=>_item.id=== item.id);
    if(itemInCart){
      itemInCart.quantity+=1;
    }else{
      items.push(item);
    }
    this.cart.next({items});
    this._snackBar.open('1 item added to cart','Ok',{duration:3000})
    
  }
  getTotal(items:Array<CartItem>): number {
    return items.map((item)=>item.price * item.quantity)
         .reduce((prev,current)=>prev+current,0)
  }
  clearCart():void{
    this.cart.next({items:[]});
    this._snackBar.open('Cart is clear','Ok',{duration:3000})
  }
  removeFromCart(item:CartItem):void{
   const filteredItem=  this.cart.value.items.filter((_item)=>{
      item.id !==item.id
   });
   this.cart.next({items:filteredItem});
   this._snackBar.open('Item was removed from cart','Ok',{duration:3000});
  }
  removeQuantity(item:CartItem) {
    const items=[...this.cart.value.items];
    const itemToRemove=items.find((_item)=>_item.id === item.id);
    if(itemToRemove){
      itemToRemove.quantity-=1;
    }
    this.cart.next({items});
    this._snackBar.open('1 item added to cart','Ok',{duration:3000})
  }
}
