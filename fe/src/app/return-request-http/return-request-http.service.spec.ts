import { ReturnRequestHttpService } from './return-request-http.service';
import { TestBed } from '@angular/core/testing';

describe('ReturnRequestHttpService', () => {
  let service: ReturnRequestHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReturnRequestHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
