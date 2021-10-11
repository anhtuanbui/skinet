import { IAddress } from "./address";

export interface IOrderToCreate {
    basketId: string;
    deliveryMethodId: number;
    shipToAddress: IAddress;
}

export interface IOrderItem {
    productId: number;
    productName: string;
    pictureUrl: string;
    price: number;
    quantity: number;
}

export interface IOrder {
    id: number;
    buyerEmail: string;
    orderDate: string;
    shipToAddress: IAddress;
    deliveryMethod: string;
    shipping: number;
    items: IOrderItem[];
    subtotal: number;
    total: number;
    status: string;
}
export class Order {
    id: number;
    buyerEmail: string;
    orderDate: string;
    shipToAddress: IAddress;
    deliveryMethod: string;
    shipping: number;
    items: IOrderItem[];
    subtotal: number;
    total: number;
    status: string;
}
