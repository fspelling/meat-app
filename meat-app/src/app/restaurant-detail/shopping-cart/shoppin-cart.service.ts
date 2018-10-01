import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';
import { Injectable } from '@angular/core';
import { NotificationService } from '../../shared/messages/snackbar/notification.service';

@Injectable()
export class ShoppinCartService {
    itens: CartItem[] = [];

    constructor(private notificationService: NotificationService) { }

    clear() {
        this.itens = [];
    }

    addItem(menuItem: MenuItem) {
        let findItens = this.itens.find((item) => item.menuItem.id === menuItem.id);

        if (findItens)
            this.increasyQty(findItens);
        else
            this.itens.push(new CartItem(menuItem));

        this.notificationService.notify(`Voce adicionou item: ${menuItem.name}`);
    }

    removeItem(item: CartItem) {
        let findCart = this.itens.find(cart => cart == item);

        if (findCart.quantity > 1)
            findCart.quantity = findCart.quantity - 1;
        else
            this.itens.splice(this.itens.indexOf(item), 1);

        this.notificationService.notify(`Voce removeu item: ${item.menuItem.name}`);
    }

    removeTotalItem(item: CartItem) {
        this.itens.splice(this.itens.indexOf(item), 1);
    }

    Total(): number {
        return this.itens
            .map(item => item.value())
            .reduce((prev, value) => prev + value, 0);
    }

    increasyQty(item: CartItem) {
        item.quantity = item.quantity + 1;
    }

    decreasyQty(item: CartItem) {
        item.quantity = item.quantity - 1;
        if (item.quantity == 0)
            this.removeItem(item);
    }
}
