import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeInputComponent } from './coffee-input.component';

describe('CoffeeInputComponent', () => {
  let component: CoffeeInputComponent;
  let fixture: ComponentFixture<CoffeeInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
