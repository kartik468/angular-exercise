import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveAndPipeComponent } from './directive-and-pipe.component';
import { FormsModule } from '@angular/forms';
import { UsPhone1Pipe } from '../us-phone1.pipe';

describe('DirectiveAndPipeComponent', () => {
  let component: DirectiveAndPipeComponent;
  let fixture: ComponentFixture<DirectiveAndPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [DirectiveAndPipeComponent, UsPhone1Pipe]
    }).compileComponents();
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
