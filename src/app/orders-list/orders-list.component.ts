import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Order} from '../app.component';

@Component({
  selector: 'app-orders-list',
  template: `
    <app-order *ngFor="let o of orders" [order]="o" (remove)="remove.emit($event)" (update)="update.emit($event)"></app-order>
  `,
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  @Input() orders: Order[] = [];
  @Output() remove: EventEmitter<Order> = new EventEmitter();
  @Output() update: EventEmitter<{order: Order, changes: Partial<Order>}> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
