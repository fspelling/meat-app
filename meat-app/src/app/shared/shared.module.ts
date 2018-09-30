import { NgModule, ModuleWithProviders } from '../../../node_modules/@angular/core';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';
import { CommonModule } from '../../../node_modules/@angular/common';
import { FormsModule, ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { OrderService } from '../order/order.service';
import { ShoppinCartService } from '../restaurant-detail/shopping-cart/shoppin-cart.service';
import { RestaurantsService } from '../restaurants/restaurants.service';

@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, RatingComponent,
        CommonModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [RestaurantsService, ShoppinCartService, OrderService]
        }
    }
}