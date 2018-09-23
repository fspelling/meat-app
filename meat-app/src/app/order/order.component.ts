import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model';

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

  constructor() { }

  ngOnInit() {
  }

}