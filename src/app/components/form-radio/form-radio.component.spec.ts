import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRadioComponent } from './form-radio.component';

describe('FormRadioComponent', () => {
  let component: FormRadioComponent;
  let fixture: ComponentFixture<FormRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRadioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
