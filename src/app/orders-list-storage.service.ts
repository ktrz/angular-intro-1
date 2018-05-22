import {Injectable} from '@angular/core';
import {Order} from "./app.component";

const ordersKey = 'orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersListStorageService {
  private orders: Order[];

  constructor() {
    this.orders = JSON.parse(localStorage.getItem(ordersKey)) || [];
  }

  get() {
    return [...this.orders];
  }

  post(o: Order) {
    this.orders.push(o);
    return this.update();
  }

  remove(order: Order) {
    this.orders = this.orders.filter(o => o !== order);
    return this.update();
  }

  private update() {
    localStorage.setItem(ordersKey, JSON.stringify(this.orders));
    return this.get();
  }
 }
