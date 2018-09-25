import { Injectable } from '../../../node_modules/@angular/core';
import { ShoppinCartService } from '../restaurant-detail/shopping-cart/shoppin-cart.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';

@Injectable()
export class OrderService {
    constructor(private shoppinCartService: ShoppinCartService) { }

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
}
