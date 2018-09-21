import { Component, OnInit } from '@angular/core';
import { ShoppinCartService } from './shoppin-cart.service';
import { CartItem } from './cart-item.model';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shopCartService: ShoppinCartService) { }

  ngOnInit() {
  }

  itens(): CartItem[] {
    return this.shopCartService.itens;
  }

  total(): number {
    return this.shopCartService.Total();
  }
}
