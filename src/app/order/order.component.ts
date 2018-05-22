import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Order, Statuses} from '../app.component';

@Component({
  selector: 'app-order',
  template: `
    <p>
      {{order.coffee}} for {{order.name}} with status {{order.status}}
    </p>

    <button class="btn" (click)="nextStatus()">{{order.status | nextActionName | lowercase}}</button>
    <button class="btn btn-red" (click)="remove.emit(order)">cancel</button>
  `,
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input() order: Order;
  @Output() remove: EventEmitter<Order> = new EventEmitter();
  @Output() update: EventEmitter<{ order: Order, changes: Partial<Order> }> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  nextStatus() {
    const next = this.getNextStatus();
    if (next !== null) {
      this.update.emit({order: this.order, changes: {status: next}});
    } else {
      this.remove.emit(this.order);
    }
  }

  getNextStatus(): Statuses {
    switch (this.order.status) {
      case 'CREATED':
        return 'STARTED';
      case 'STARTED':
        return 'DONE';
      case 'DONE':
        return null;
    }
  }
}
