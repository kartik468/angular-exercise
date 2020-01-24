import { Component, OnInit, OnDestroy } from '@angular/core';

import { of, interval, Subscription } from 'rxjs';
import { mergeMap, switchMap, map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'kar-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit, OnDestroy {
  constructor() {}

  mergeMapMessages = [];
  switchMapMessages = [];

  subscription1: Subscription;
  subscription2: Subscription;

  ngOnInit() {
    this.switchMapExample();
    this.mergeMapExample();
  }

  mergeMapExample() {
    const letters = interval(2000).pipe(
      take(2),
      map(val => 'first obs val ' + val + ' '),
      tap(val => {
        this.mergeMapMessages.push(val);
        console.log(val);
      })
    );
    const result = letters.pipe(
      mergeMap(firstObsVal =>
        interval(1000).pipe(
          take(4),
          map(val => 'second obs val ' + val),
          map(secondObsVal => firstObsVal + secondObsVal)
        )
      )
    );
    this.subscription1 = result.subscribe(finalValue => {
      this.mergeMapMessages.push(finalValue);
      console.log(finalValue);
    });
  }

  switchMapExample() {
    const letters = interval(2000).pipe(
      take(2),
      map(val => 'first obs val ' + val + ' '),
      tap(val => {
        this.switchMapMessages.push(val);
        console.log(val);
      })
    );
    const result = letters.pipe(
      switchMap(firstObsVal =>
        interval(1000).pipe(
          take(4),
          map(val => 'second obs val ' + val),
          map(secondObsVal => firstObsVal + secondObsVal)
        )
      )
    );
    this.subscription2 = result.subscribe(finalValue => {
      this.switchMapMessages.push(finalValue);
      console.log(finalValue);
    });
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
