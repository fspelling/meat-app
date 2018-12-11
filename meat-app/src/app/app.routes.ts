import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { Routes } from '@angular/router';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './security/login/login.component';
import { LoggedInGuard } from './security/loggedin.guard';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'Login/:to', component: LoginComponent},
    {path: 'Login', component: LoginComponent},
    {path: 'About', loadChildren: './about/about.module#AboutModule', canLoad: [LoggedInGuard]},
    {path: 'order', loadChildren: './order/order.module#OrderModule'},
    {path: 'Restaurants', component: RestaurantsComponent},
    {path: 'order-summary', component: OrderSummaryComponent},
    {path: 'Restaurants/:id', component: RestaurantDetailComponent, children: [
        {path: '', redirectTo: 'menu', pathMatch: 'full'},
        {path: 'reviews', component: ReviewsComponent},
        {path: 'menu', component: MenuComponent }
    ]},
    {path: '**', component: NotFoundComponent},
];
