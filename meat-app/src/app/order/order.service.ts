import { Injectable } from '../../../node_modules/@angular/core';
import { ShoppinCartService } from '../restaurant-detail/shopping-cart/shoppin-cart.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { Order } from './order.model';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Headers } from '@angular/http';
import { MEAT_API } from '../app.api';

@Injectable()
export class OrderService {
    constructor(private shoppinCartService: ShoppinCartService, private http: Http) { }

    cartItens(): CartItem[] {
        return this.shoppinCartService.itens;
    }

    increasyQty(item: CartItem) {
        this.shoppinCartService.increasyQty(item);
    }

    decreasyQty(item: CartItem) {
        this.shoppinCartService.decreasyQty(item);
    }

    removeItem(item: CartItem) {
        this.shoppinCartService.removeItem(item);
    }

    removeTotalItem(item: CartItem) {
        this.shoppinCartService.removeTotalItem(item);
    }

    itensValues(): number {
        return this.shoppinCartService.Total();
    }

    checkOrder(order: Order): Observable<string> {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json');

        return this.http.post(`${MEAT_API}/orders`, JSON.stringify(order), new RequestOptions({ headers: headers }))
            .map(response => response.json())
            .map(response => response.id);
    }

    clear() {
        this.shoppinCartService.clear();
    }
}
