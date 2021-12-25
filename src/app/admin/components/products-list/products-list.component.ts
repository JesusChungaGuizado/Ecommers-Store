import {Component, OnInit } from '@angular/core';

import { Product } from 'src/app/core/models/product.model';
import { ProductsService } from 'src/app/core/service/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products:Product[];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];
  
  constructor(
    private productsService:ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }
 
  fetchProducts(){
    this.productsService.getAllProducts().subscribe(products=>{
      this.products=products;
    })
  }
  
  deleteProduct(id:string){
    this.productsService.deleteProduct(id).subscribe(rpta=>{
      console.log(rpta)
      this.fetchProducts();
    })
  }
}
