import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdCodeSnippetComponent } from './md-code-snippet.component';

describe('MdCodeSnippetComponent', () => {
  let component: MdCodeSnippetComponent;
  let fixture: ComponentFixture<MdCodeSnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdCodeSnippetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdCodeSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
