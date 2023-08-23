import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillLoanFormComponent } from './fill-loan-form.component';

describe('FillLoanFormComponent', () => {
  let component: FillLoanFormComponent;
  let fixture: ComponentFixture<FillLoanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillLoanFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillLoanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
