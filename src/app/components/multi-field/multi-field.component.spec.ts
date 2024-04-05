import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiFieldComponent } from './multi-field.component';

describe('MultiFieldComponent', () => {
  let component: MultiFieldComponent;
  let fixture: ComponentFixture<MultiFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
