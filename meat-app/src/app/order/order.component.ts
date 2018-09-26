import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { ThrowStmt } from '@angular/compiler/src/output/output_ast';
import { Order, OrderItem } from './order.model';

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

  delivery: number = 2;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  itensValues(): number {
    return this.orderService.itensValues();
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
    this.orderService.removeTotalItem(item);
  }

  checkOrder(order: Order) {
    order.orderItens = this.cartItens().map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id));
    this.orderService.checkOrder(order).subscribe((orderId: string) => {
      console.log('compra concluida');
      this.orderService.clear();
    });
  }
}
