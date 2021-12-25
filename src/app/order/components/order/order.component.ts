import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/service/cart.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products$:Observable<Product[]>;
  cant$:Observable<number>;
  constructor( private cartService:CartService) {
    this.products$=this.cartService.cart$;
    // this.cant$=this.cartService.cart$
    // .pipe(
      
      //map(products=>{products.length})
    // );
   }
 
  
  ngOnInit(): void {
  }

}
