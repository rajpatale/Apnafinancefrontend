import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApllicationFormComponent } from './apllication-form.component';

describe('ApllicationFormComponent', () => {
  let component: ApllicationFormComponent;
  let fixture: ComponentFixture<ApllicationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApllicationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApllicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
