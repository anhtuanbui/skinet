import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IOrder } from '../shared/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getOrdersForUser() {
    return this.http.get<IOrder[]>(this.baseUrl + 'orders').pipe(
      map((orders: IOrder[]) => {
        return orders.sort((a, b) => +b.orderDate - +a.orderDate);
      })
    )
  }

  getOrderByIdForUser(id:number) {
    return this.http.get<IOrder>(this.baseUrl + 'orders/' + id);
  }
}
