import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {
  reviews: any[];

  constructor(private restaurantService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantService.reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
      .subscribe(response => this.reviews = response);
  }
}
