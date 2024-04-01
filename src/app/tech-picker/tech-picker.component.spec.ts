import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechPickerComponent } from './tech-picker.component';

describe('TechPickerComponent', () => {
  let component: TechPickerComponent;
  let fixture: ComponentFixture<TechPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
