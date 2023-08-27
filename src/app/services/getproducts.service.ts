import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../product/product.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetproductsService {
  cartlist:product[]=[];
  cartcount:number=0;
  constructor(private http:HttpClient) { }

  getallproducts():Observable<product[]>
  {
     return this.http.get<product[]>('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json');
  }
  
  addtocart(product:any)
  {
    this.cartlist.push(product);
    this.cartcount+=1;
  }
  removerfromcart(product:any)
  {
    var index = this.cartlist.findIndex((item: { id: any; }) => item.id == product.id);
    this.cartlist.splice(index,1);
    this.cartcount-=1;
  }
}
