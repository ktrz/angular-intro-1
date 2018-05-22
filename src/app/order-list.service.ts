import {Injectable} from '@angular/core';
import {Order} from './app.component';
import {OrdersListStorageService} from './orders-list-storage.service';

@Injectable()
export class OrderListService {

  constructor(private storage: OrdersListStorageService) {
  }

  getOrders() {
    return this.storage.get();
  }

  addOrder(order: Order) {
    return this.storage.post(order);
  }

  removeOrder(order: Order) {
    return this.storage.remove(order);
  }

  updateOrder(order: Order, changes: Partial<Order>) {
    return this.storage.put(order, changes);
  }
}
