import { Restaurant } from './restaurant/restaurant.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MEAT_API } from '../app.api';
import '../../../node_modules/rxjs/add/operator/map';
import '../../../node_modules/rxjs/add/operator/catch';
import { ErrorHandler } from '../app.error-handler';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RestaurantsService {
    constructor(private http: Http) { }

    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError);
    }

    restaurantById(id: string): Observable<Restaurant> {
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError);
    }
}
