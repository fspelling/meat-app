import { Injectable } from '../../../node_modules/@angular/core';
import { ShoppinCartService } from '../restaurant-detail/shopping-cart/shoppin-cart.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { Order } from './order.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MEAT_API } from '../app.api';

@Injectable()
export class OrderService {
    constructor(private shoppinCartService: ShoppinCartService, private http: HttpClient) { }

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
        const headers = new HttpHeaders()
        headers.append('Content-Type', 'application/json');

        return this.http.post<string>(`${MEAT_API}/orders`, JSON.stringify(order), { headers: headers })
            .map<any, string>(response => response.id);
    }

    clear() {
        this.shoppinCartService.clear();
    }
}
