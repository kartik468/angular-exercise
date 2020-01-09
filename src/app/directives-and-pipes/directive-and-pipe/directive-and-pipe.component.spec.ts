import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveAndPipeComponent } from './directive-and-pipe.component';

describe('DirectiveAndPipeComponent', () => {
  let component: DirectiveAndPipeComponent;
  let fixture: ComponentFixture<DirectiveAndPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveAndPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveAndPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
