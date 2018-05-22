import {Component} from '@angular/core';
import {OrderListService} from './order-list.service';

export type Statuses = 'CREATED' | 'STARTED' | 'DONE';

export interface Order {
  name: string;
  coffee: string;
  status: any;
}

@Component({
  selector: 'app-root',
  template: `
    <div class="cafe-app">
      <h1>
        Welcome to {{ title | uppercase}}!
      </h1>

      <app-coffee-input (submit)="addOrder($event)"></app-coffee-input>
      <app-orders-list [orders]="myOrders" (remove)="removeOrder($event)" (update)="updateOrder($event)"></app-orders-list>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Scalac\'s Cafe';

  myOrders: Order[] = this.ordersListService.getOrders();

  constructor(private ordersListService: OrderListService) {
  }

  addOrder({name, coffee}) {
    console.log(`${coffee} ordered by ${name}`);
    this.myOrders = this.ordersListService.addOrder({name, coffee, status: 'CREATED'});
  }

  removeOrder(o: Order) {
    console.log('removing order: ', JSON.stringify(o));
    this.myOrders = this.ordersListService.removeOrder(o);
  }

  updateOrder({order, changes}) {
    this.myOrders = this.ordersListService.updateOrder(order, changes);
  }
}
