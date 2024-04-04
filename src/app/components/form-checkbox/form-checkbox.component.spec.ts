import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCheckboxComponent } from './form-checkbox.component';

describe('FormCheckboxComponent', () => {
  let component: FormCheckboxComponent;
  let fixture: ComponentFixture<FormCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
