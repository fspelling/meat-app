import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  menu: any[];
  
  constructor(private restaurantService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantService.menuOfRestaurant(this.route.parent.snapshot.params['id'])
      .subscribe(response => this.menu = response);
  }

  addMenuItem(menuItem: MenuItem) {
    console.log(menuItem);
  }
}
