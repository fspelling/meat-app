import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { Routes } from '@angular/router';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { OrderComponent } from './order/order.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'About', component: AboutComponent},
    {path: 'Restaurants', component: RestaurantsComponent},
    {path: 'order', component: OrderComponent},
    {path: 'Restaurants/:id', component: RestaurantDetailComponent, children: [
        {path: '', redirectTo: 'menu', pathMatch: 'full'},
        {path: 'reviews', component: ReviewsComponent},
        {path: 'menu', component: MenuComponent }
    ]}
];