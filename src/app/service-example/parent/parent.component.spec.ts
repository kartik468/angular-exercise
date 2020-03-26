import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CountService } from 'src/app/count.service';

import { ParentComponent } from './parent.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from '../child/child.component';

class CountServiceSpy {
  value: string;

  constructor() {
    this.value = Math.random() + '';
  }
}

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;
  // const countServiceSpy = jasmine.createSpyObj('CountService', ['abc']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ParentComponent, ChildComponent],
      providers: [
        {
          provide: CountService,
          useClass: CountServiceSpy
        }
      ]
    })
      .overrideComponent(ParentComponent, {
        set: {
          viewProviders: [
            {
              provide: CountService,
              useClass: CountServiceSpy
            }
          ]
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should inject count service in view providers', () => {
    const countService = fixture.debugElement.injector.get(CountService);
    expect(countService).toBeTruthy();
  });

  it('should have different count service instance', () => {
    const countServiceInViewProvider = fixture.debugElement.injector.get(CountService);
    const countServiceInTestBedProvider = TestBed.inject(CountService);
    expect(countServiceInViewProvider).not.toBe(countServiceInTestBedProvider);
  });
});
