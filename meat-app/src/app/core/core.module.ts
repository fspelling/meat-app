import { NgModule } from '../../../node_modules/@angular/core';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { ShoppinCartService } from '../restaurant-detail/shopping-cart/shoppin-cart.service';
import { OrderService } from '../order/order.service';

@NgModule({
    providers: [RestaurantsService, ShoppinCartService, OrderService,]
})
export class CoreModule { }
