import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleenquiryComponent } from './singleenquiry.component';

describe('SingleenquiryComponent', () => {
  let component: SingleenquiryComponent;
  let fixture: ComponentFixture<SingleenquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleenquiryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleenquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
