import { Component, Injectable, Input, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { GetproductsService } from 'src/app/services/getproducts.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})

export class NavigationComponent implements OnInit {

  constructor(public productservice:GetproductsService) {
   }
   ngOnInit(): void {
   }
}
