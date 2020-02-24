import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadParentComponent } from './lazy-load-parent.component';

describe('LazyLoadParentComponent', () => {
  let component: LazyLoadParentComponent;
  let fixture: ComponentFixture<LazyLoadParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyLoadParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
