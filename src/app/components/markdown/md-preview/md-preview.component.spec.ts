import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdPreviewComponent } from './md-preview.component';

describe('MdPreviewComponent', () => {
  let component: MdPreviewComponent;
  let fixture: ComponentFixture<MdPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
