import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCapturedDataComponent } from './confirm-captured-data.component';

describe('ConfirmCapturedDataComponent', () => {
  let component: ConfirmCapturedDataComponent;
  let fixture: ComponentFixture<ConfirmCapturedDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmCapturedDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmCapturedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
