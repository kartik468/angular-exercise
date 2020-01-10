import { Component, OnInit } from '@angular/core';

import { of, interval } from 'rxjs';
import { mergeMap, switchMap, map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'kar-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {
  constructor() {}

  mergeMapMessages = [];
  switchMapMessages = [];

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
    result.subscribe(finalValue => {
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
    result.subscribe(finalValue => {
      this.switchMapMessages.push(finalValue);
      console.log(finalValue);
    });
  }
}
