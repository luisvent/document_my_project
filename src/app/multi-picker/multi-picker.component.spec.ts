import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiPickerComponent } from './multi-picker.component';

describe('MultiPickerComponent', () => {
  let component: MultiPickerComponent;
  let fixture: ComponentFixture<MultiPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
