import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Order} from '../app.component';

@Component({
  selector: 'app-order',
  template: `
    <p>
      {{order.coffee}} for {{order.name}} with status {{order.status}}
    </p>

    <button class="btn btn-red" (click)="cancel.emit(order)">cancel</button>
  `,
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input() order: Order;
  @Output() cancel: EventEmitter<Order> = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
  }

}
