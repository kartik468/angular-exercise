import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'kar-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit, OnDestroy {

  subjectValue: string;
  subjectValueSubscription: Subscription;


  bSubjectValue: string;
  bSubjectValueSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.createSubject();
    this.createBehavioralSubject();
  }

  createSubject() {
    const sub = new Subject<string>();
    sub.next('first value');
    this.subjectValueSubscription = sub.subscribe((val) => {
      this.subjectValue = val;
    });
    sub.next('second value');
    setTimeout(() => {
      sub.next('third value');
    }, 1000);
  }

  createBehavioralSubject() {
    const sub = new BehaviorSubject<string>('initial value');
    this.bSubjectValueSubscription = sub.subscribe((val) => {
      this.bSubjectValue = val;
    });
    setTimeout(() => {
      sub.next('b second value');
    }, 1000);
  }

  ngOnDestroy() {
    this.subjectValueSubscription.unsubscribe();
    this.bSubjectValueSubscription.unsubscribe();
  }

}
