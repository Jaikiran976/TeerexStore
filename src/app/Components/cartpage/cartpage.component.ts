import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/product/product.module';
import { GetproductsService } from 'src/app/services/getproducts.service';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit {

  cartitems:product[]=[];
  constructor(private productservice:GetproductsService) { }

  ngOnInit(): void {
    this.cartitems=this.productservice.cartlist;
  }
}
