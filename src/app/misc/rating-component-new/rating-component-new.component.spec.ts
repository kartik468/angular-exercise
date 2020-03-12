import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingComponentNewComponent } from './rating-component-new.component';

describe('RatingComponentNewComponent', () => {
  let component: RatingComponentNewComponent;
  let fixture: ComponentFixture<RatingComponentNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingComponentNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingComponentNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
