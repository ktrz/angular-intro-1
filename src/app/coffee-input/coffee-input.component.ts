import {Component, EventEmitter, OnInit, Output} from '@angular/core';

interface CoffeeOutput {
  name: string;
  coffee: string;
}

@Component({
  selector: 'app-coffee-input',
  template: `
    <input class="name-input" [(ngModel)]="name">
    <label *ngFor="let c of coffeesAvailable">
      <input type="radio" [value]="c" [(ngModel)]="coffee">
      {{c}}
    </label>
    <button (click)="order()" class="btn">order coffee</button>
  `,
  styleUrls: ['./coffee-input.component.css']
})
export class CoffeeInputComponent implements OnInit {

  @Output() submit: EventEmitter<CoffeeOutput> = new EventEmitter();
  name = '';
  coffee: string;
  coffeesAvailable = ['cappuccino', 'latte', 'caramel latte machiato', 'my custom hipster coffee'];

  constructor() {
  }

  ngOnInit() {
  }

  order() {
    const {name, coffee} = this;
    this.submit.emit({
      name,
      coffee
    });
  }
}
