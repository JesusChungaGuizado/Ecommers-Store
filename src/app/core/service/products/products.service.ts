import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from '../../../core/models/product.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(
    private http: HttpClient
  ) { }
  //Metodo para retornar todos los productos
  getAllProducts(){
    return this.http.get<Product[]>(`${environment.url_api}/products/`);
  }
  getProduct(id:string){
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }
  createProduct(product:Product ){
    return this.http.post(`${environment.url_api}/products/`,product)
  }
  updateProduct(id:String,changes:Partial<Product>){
    return this.http.put(`${environment.url_api}/products/${id}`,changes);
  }
  deleteProduct(id:string){
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }
}