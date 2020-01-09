import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap, last, delay } from 'rxjs/operators';

@Component({
  selector: 'kar-simple-observable',
  templateUrl: './simple-observable.component.html',
  styleUrls: ['./simple-observable.component.scss']
})
export class SimpleObservableComponent implements OnInit {
  emittedValue: number;
  emittedValuePromise: string;

  constructor() {}

  ngOnInit() {
    this.simpleObservable();
    this.toPromiseExample();
  }

  simpleObservable() {
    const observable = new Observable<number>(subscriber => {
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

    observable.subscribe(val => {
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
}
