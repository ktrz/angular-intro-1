import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoffeeInputComponent } from './coffee-input/coffee-input.component';
import {FormsModule} from '@angular/forms';
import { OrdersListComponent } from './orders-list/orders-list.component';
import {OrderListService} from './order-list.service';
import { OrderComponent } from './order/order.component';
import { NextActionNamePipe } from './next-action-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeInputComponent,
    OrdersListComponent,
    OrderComponent,
    NextActionNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [OrderListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
