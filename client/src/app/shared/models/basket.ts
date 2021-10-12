import { v4 as uuidv4 } from 'uuid';

export interface IBasketItem {
    id: number;
    productName: string;
    price: number;
    quantity: number;
    pictureUrl: string;
    brand: string;
    type: string;
}

export interface IBasket {
    id: string;
    items: IBasketItem[];
    clientSecret? : string;
    paymentIntentId?: string;
    deliveryMethodId?: number;
}

export class Basket implements IBasket {
    id = uuidv4();
    items: IBasketItem[] = [];

}

export interface IBasketTotals {
    shipping: number;
    subtotal: number;
    total: number;
}

export class BasketTotals implements BasketTotals {
    shipping = 0;
    subtotal = 0;
    total = 0;
}