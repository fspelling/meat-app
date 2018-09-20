import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { Restaurant } from '../restaurants/restaurant/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: Restaurant;

  constructor(private restaurantsService: RestaurantsService, private routeActive: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantsService.restaurantById(this.routeActive.snapshot.params['id'])
      .subscribe(response => this.restaurant = response);
  }
}
