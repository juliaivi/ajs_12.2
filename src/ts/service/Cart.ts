import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    totalCost(): number {
        return this._items.reduce((sum, item) => sum + item.price, 0);
    }

    discountPrice (discount: number): number {
        return this.totalCost() - (this.totalCost() * discount /100);
    }

    deleteItem(id: number): void {
        const index = this._items.findIndex(item => item.id === id);
        this._items.splice(index, 1);
    }
}