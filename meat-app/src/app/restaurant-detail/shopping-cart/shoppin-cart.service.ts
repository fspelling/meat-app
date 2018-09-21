import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';

export class ShoppinCartService {
    itens: CartItem[] = [];

    constructor() { }

    clear() {
    }

    addItem(menuItem: MenuItem) {
        let findItens = this.itens.find((item) => item.menuItem.id === menuItem.id);

        if (findItens)
            findItens.quantity = findItens.quantity + 1;
        else
            this.itens.push(new CartItem(menuItem));
    }

    removeItem(item: CartItem) {
        this.itens.splice(this.itens.indexOf(item), 1);
    }

    Total(): number {
        return this.itens
            .map(item => item.value())
            .reduce((prev, value) => prev + value, 0);
    }
}
