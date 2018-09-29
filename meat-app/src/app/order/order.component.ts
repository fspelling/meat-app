import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';
import { Router } from '../../../node_modules/@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup;
  paternNumber = /^[0-9]*$/;

  pagamentoOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartao de debito', value: 'DEB' },
    { label: 'Cartao de credito', value: 'CRE' }
  ];

  delivery: number = 2;

  constructor(private orderService: OrderService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.email]),
      address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      number: this.formBuilder.control('', [Validators.required, Validators.pattern(this.paternNumber)]),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('', [Validators.required])
    }, { Validator: OrderComponent.equalsTo });
  }

  static equalsTo(group: AbstractControl): { [key: string]: boolean } {
    let email = group.get('email');
    let emailConfirmation = group.get('emailConfirmation');

    if (!email || !emailConfirmation)
      return undefined;

    if (email.value != emailConfirmation.value)
      return { emailNotMath: true }

    return undefined;
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
      console.log('compra concluida: ', orderId);
      this.orderService.clear();
      this.router.navigate(['/order-summary']);
    });
  }
}
