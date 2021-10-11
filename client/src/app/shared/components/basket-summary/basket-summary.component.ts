import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BasketService } from 'src/app/basket/basket.service';
import { OrdersService } from 'src/app/orders/orders.service';
import { IBasketItem } from '../../models/basket';

@Component({
  selector: 'app-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss']
})
export class BasketSummaryComponent implements OnInit {
  object$: Observable<any>
  @Output() decrement: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Output() increment: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Output() remove: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Input() isBasket = true;
  @Input() isOrderSummary = false;
  @Input() isReview = false;

  constructor(private basketService: BasketService, private ordersService: OrdersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.isBasket || this.isReview) this.object$ = this.basketService.basket$;
    if (this.isOrderSummary) {
      this.object$ = this.ordersService.getOrderByIdForUser(+this.activatedRoute.snapshot.paramMap.get('id')!);
    }
  }

  decrementItemQuantity(item: IBasketItem) {
    this.decrement.emit(item);
  }

  incrementItemQuantity(item: IBasketItem) {
    this.increment.emit(item);
  }

  removeBasketItem(item: IBasketItem) {
    this.remove.emit(item);
  }
}
