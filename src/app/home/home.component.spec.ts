import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import { RatingComponentNewComponent } from '../misc/rating-component-new/rating-component-new.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [HomeComponent, RatingComponentNewComponent],
      providers: [ChangeDetectorRef]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should validate rating form control', () => {
    fixture.detectChanges();
    const ratingControlForm = component.ratingControlForm;
    expect(ratingControlForm.valid).toBe(true, 'should be valid initially');

    const ratingControl = ratingControlForm.get('rating');
    ratingControl.setValue(0);
    expect(ratingControlForm.valid).toBe(false, 'should be invalid when invalid value is set');
  });
});
