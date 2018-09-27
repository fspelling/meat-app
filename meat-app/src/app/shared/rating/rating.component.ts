import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {
  @Output() rated = new EventEmitter<number>();

  rates: number[] = [1, 2, 3, 4, 5];
  rate: number = 0;
  previosRate: number = undefined;

  constructor() { }

  ngOnInit() {
  }

  setRate(rt: number) {
    this.rate = rt;
  }

  setTemp(rt: number) {
    if (this.previosRate == undefined)
      this.previosRate = rt;

    this.rate = rt;
    this.previosRate = undefined;
    this.rated.emit(rt);
  }

  clearTemp() {
    if (this.previosRate != undefined) {
      this.rate = this.previosRate;
      this.previosRate = undefined;
    }
  }
}
