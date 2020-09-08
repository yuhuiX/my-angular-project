import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ReturnRequestFormComponent } from './return-request-form.component';

describe('ReturnRequestFormComponent', () => {
  let component: ReturnRequestFormComponent;
  let fixture: ComponentFixture<ReturnRequestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnRequestFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
