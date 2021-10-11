import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OrderComponent } from './order/order.component';



@NgModule({
  declarations: [
    OrdersComponent,
    OrderComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule
  ]
})
export class OrdersModule { }
