import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-itens',
  templateUrl: './order-itens.component.html'
})
export class OrderItensComponent implements OnInit {
  @Input() itens: CartItem[];

  @Output() removeItem = new EventEmitter();
  @Output() increasyQty = new EventEmitter();
  @Output() decreasyQty = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitIncreasyQty(item: CartItem) {
    this.increasyQty.emit(item);
  }

  emitDecreasyQty(item: CartItem) {
    this.decreasyQty.emit(item);
  }

  emitRemoveItem(item: CartItem) {
    this.removeItem.emit(item);
  }
}