import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params}from '@angular/router';
import {ProductsService}from '../../../core/service/products/products.service';
import {Product} from '../../../core/models/product.model';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product ;
  constructor(
    private route:ActivatedRoute,
    private productsService:ProductsService ) 
    {
     }

  ngOnInit(){
    //Se recoge los parametros de la ruta 
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.fetchProduct(id);
      // this.product = this.productsService.getProduct(id);
    });
  }
  
  fetchProduct(id: string) {
    this.productsService.getProduct(id)
    .subscribe(product => {
      this.product = product;
    });
  }
  createProduct(){
    const newProduct:Product={
      id:'222',
      title:'Nuevo producto ',
      image:'assets/images/compu.jpg',
      price:3000,
      description:'nuevo producto'
    };
    this.productsService.createProduct(newProduct)
    .subscribe(product => {
      console.log(product)
    });
  }
  updateProduct(){
    const updateProduct:Partial<Product>={
      price:3500,
      description:'edicion precio'
    };
    this.productsService.updateProduct('2',updateProduct)
    .subscribe(product => {
      console.log(product)
    });
  }
  deleteProduct(){
    this.productsService.deleteProduct('222')
    .subscribe(rpta => {
      console.log(rpta)
    });
  }
}
