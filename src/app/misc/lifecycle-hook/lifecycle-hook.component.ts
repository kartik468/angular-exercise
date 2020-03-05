import { Component, OnInit, OnChanges, Input, SimpleChanges, DoCheck } from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'kar-lifecycle-hook',
  templateUrl: './lifecycle-hook.component.html',
  styleUrls: ['./lifecycle-hook.component.scss']
})
export class LifecycleHookComponent implements OnInit, OnChanges, DoCheck {
  @Input()
  inputString1: string;

  @Input()
  inputString2: string;

  @Input()
  inputObj: { name: string };

  constructor() {}

  ngOnInit(): void {
    console.log('life cycle hook component ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('life cycle hook component ngOnChanges');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('life cycle hook component ngDoCheck');
  }
}
