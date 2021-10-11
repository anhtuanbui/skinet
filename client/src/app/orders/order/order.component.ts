import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private bcService: BreadcrumbService, private activatedRoute: ActivatedRoute, private ordersService: OrdersService) { 
    this.bcService.set('@orderSummaries', '')
  }

  ngOnInit(): void {
    this.ordersService.getOrderByIdForUser(+this.activatedRoute.snapshot.paramMap.get('id')!).subscribe(order => {
      this.bcService.set('@orderSummaries', 'Oder#'+ order.id + ' - ' + order.status);
    }, error => {
      console.log(error);
    })
  }


}
