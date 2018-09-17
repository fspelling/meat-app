import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[] = [
    {
      Category: 'Bakery',
      DeliveryEstimate: '40-65m',
      Id: '1',
      ImagePath: 'assets/img/restaurants/tasty.png',
      Name: 'Tasty Treats',
      Rating: 4.5
    },
    {
      Category: 'Ice Creams',
      DeliveryEstimate: '40-65m',
      Id: '1',
      ImagePath: 'assets/img/restaurants/icy.png',
      Name: 'Ice Cream',
      Rating: 4.5
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}