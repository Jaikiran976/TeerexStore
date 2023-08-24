import { Component, OnInit } from '@angular/core';
import { GetproductsService } from 'src/app/services/getproducts.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  noofitems:number=0;
  constructor(private productservice:GetproductsService) {
   }

  ngOnInit(){
    this.noofitems=this.productservice.cartlist.length;
  }
  function1(){
    this.noofitems=this.productservice.cartlist.length;
  }
}
