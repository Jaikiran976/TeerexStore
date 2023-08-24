import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { product } from 'src/app/product/product.module';
import { GetproductsService } from 'src/app/services/getproducts.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  products:product[]=[];
  showproducts:product[]=[];
  cartitems:product[]=[];

  constructor(private productservice:GetproductsService) { }

  ngOnInit(): void {
    this.productservice.getallproducts()
      .subscribe({
        next:(products)=>{
          this.products=products;
          this.showproducts=products;
        },
        error:(response)=>{
          console.log(response);
        }
      })
      ;
  }
  search(value:any)
  {
    this.showproducts=[];
    let productname,producttype,productcolour;
    let valuename=value.split(" ").join("").toUpperCase();
    for (let i = 0; i < this.products.length; i++) {

      productname =this.products[i].name.split(" ").join("").toUpperCase();
      producttype =this.products[i].type.split(" ").join("").toUpperCase();
      productcolour =this.products[i].color.split(" ").join("").toUpperCase();

      if ((productname.indexOf(valuename.toUpperCase()) > -1)
       || (producttype.indexOf(valuename.toUpperCase()) > -1)
       || (productcolour.indexOf(valuename.toUpperCase()) > -1)) 
       {
        this.showproducts.push(this.products[i]);
      }
      
    }
  }

  addtocart(product:any)
  {
    this.productservice.addtocart(product);
  }
}
