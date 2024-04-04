import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawCodeSnippetComponent } from './raw-code-snippet.component';

describe('RawCodeSnippetComponent', () => {
  let component: RawCodeSnippetComponent;
  let fixture: ComponentFixture<RawCodeSnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RawCodeSnippetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RawCodeSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
