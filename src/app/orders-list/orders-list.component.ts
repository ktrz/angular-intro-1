import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Order} from "../app.component";

@Component({
  selector: 'app-orders-list',
  template: `
    <app-order *ngFor="let o of orders" [order]="o" (cancel)="cancel.emit($event)"></app-order>
  `,
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  @Input() orders: Order[] = [];
  @Output() cancel: EventEmitter<Order> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
