import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {
  pagamentoOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartao de debito', value: 'DEB' },
    { label: 'Cartao de credito', value: 'CRE' }
  ];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  cartItens(): CartItem[] {
    return this.orderService.cartItens();
  }

  increasyQty(item: CartItem) {
    this.orderService.increasyQty(item);
  }

  decreasyQty(item: CartItem) {
    this.orderService.decreasyQty(item);
  }

  remove(item: CartItem) {
    this.orderService.removeItem(item);
  }
}
