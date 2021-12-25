import { Component, Input,Output,EventEmitter } from '@angular/core';
import{ Product }from '../../../core/models/product.model';
import { CartService } from 'src/app/core/service/cart.service';
@Component({
    selector: 'app-product',//nombre del selector
    templateUrl: './product.component.html',//pagina del componente
    styleUrls: ['./product.component.scss']
  })
export class ProductComponent{
    
   @Input() product:Product;
   @Output() productClicked:EventEmitter<any>=new EventEmitter();
   today=new Date();
   constructor(private cartService:CartService){

   }
    addCart(){
        console.log("Anadir al carrito");
       // this.productClicked.emit(this.product.id)
       this.cartService.addCart(this.product);
    }
}
