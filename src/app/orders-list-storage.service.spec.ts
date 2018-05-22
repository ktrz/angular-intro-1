import { TestBed, inject } from '@angular/core/testing';

import { OrdersListStorageService } from './orders-list-storage.service';

describe('OrdersListStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrdersListStorageService]
    });
  });

  it('should be created', inject([OrdersListStorageService], (service: OrdersListStorageService) => {
    expect(service).toBeTruthy();
  }));
});
