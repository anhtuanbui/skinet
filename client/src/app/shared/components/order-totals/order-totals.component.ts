import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BasketService } from 'src/app/basket/basket.service';
import { OrdersService } from 'src/app/orders/orders.service';
import { IBasketTotals } from '../../models/basket';
import { IOrder } from '../../models/order';

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.scss']
})
export class OrderTotalsComponent implements OnInit {
  basketTotal$: Observable<IBasketTotals>;
  @Input() isOrderSummary = false;

  constructor(private basketService: BasketService, private ordersService: OrdersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.isOrderSummary){
      this.basketTotal$ = this.ordersService.getOrderByIdForUser(+this.activatedRoute.snapshot.paramMap.get('id')!);
    }else{
      this.basketTotal$ = this.basketService.basketTotal$;
    }
  }

}
