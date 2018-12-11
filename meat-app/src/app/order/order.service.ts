import { Injectable } from '../../../node_modules/@angular/core';
import { ShoppinCartService } from '../restaurant-detail/shopping-cart/shoppin-cart.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { Order } from './order.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MEAT_API } from '../app.api';
import { LoginService } from 'app/security/login/login.service';

@Injectable()
export class OrderService {
    constructor(private shoppinCartService: ShoppinCartService, private http: HttpClient, private loginService: LoginService) { }

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
        let headers: HttpHeaders = new HttpHeaders();

        if (this.loginService.isLoggedIn()) {
            headers = headers.set('Authorization', `Bearer ${this.loginService.user.accessToken}`)
        }

        return this.http.post<Order>(`${MEAT_API}/orders`, order, { headers: headers })
            .map(order => order.id);
    }

    clear() {
        this.shoppinCartService.clear();
    }
}
