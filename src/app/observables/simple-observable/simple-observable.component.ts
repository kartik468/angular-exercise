import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { map, tap, last, delay } from 'rxjs/operators';

@Component({
  selector: 'kar-simple-observable',
  templateUrl: './simple-observable.component.html',
  styleUrls: ['./simple-observable.component.scss']
})
export class SimpleObservableComponent implements OnInit, OnDestroy {
  emittedValue: number;
  emittedValuePromise: string;

  subscription1: Subscription;
  subscription2: Subscription;

  constructor() {}

  ngOnInit() {
    this.simpleObservable();
    this.toPromiseExample();
  }

  simpleObservable() {
    const observable = new Observable<number>(subscriber => {
      console.log('inside observable');
      subscriber.next(10);

      setTimeout(() => {
        subscriber.next(20);
      }, 1000);

      setTimeout(() => {
        subscriber.next(30);
        subscriber.complete();
      }, 3000);
    }).pipe(
      tap(val => console.log(val)),
      map(val => val * 2),
      last()
    );

    this.subscription1 = observable.subscribe(val => {
      console.log('only last value emitted because of last pipe function', val);
      this.emittedValue = val;
    });
    this.subscription2 = observable.subscribe(val => {
      console.log('only last value emitted because of last pipe function', val);
      this.emittedValue = val;
    });
  }

  toPromiseExample() {
    // return basic observable
    const sample = val => of(val).pipe(delay(5000));
    // convert basic observable to promise
    const example = sample('First Example')
      .toPromise()
      // output: 'First Example'
      .then(result => {
        console.log('From Promise:', result);
        this.emittedValuePromise = result;
      });
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
