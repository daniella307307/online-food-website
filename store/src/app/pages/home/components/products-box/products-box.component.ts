import { Component,Input,OnInit,Output,EventEmitter} from '@angular/core';
import { Product } from 'src/app/models/product.model'
@Component({
  selector: 'app-products-box',
  templateUrl:`products-box.components.html`
})
export class ProductsBoxComponent implements OnInit {

@Input() fullWidthMode=false;
product: Product | undefined= {
  id:1,
  title:'sweater',
  price:150,
  category:"clothes",
  description:'Descrption',
  image:'https://via.placeholder.com/150',
};
@Output() addToCart =new EventEmitter();
constructor(){};
onAddToCart():void{
 this.addToCart.emit(this.product)
}
ngOnInit(): void {
  
}
}
