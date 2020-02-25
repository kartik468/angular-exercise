import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, BehaviorSubject } from 'rxjs';
import { MissionService } from './mission.service';

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

  missionAnnouncedSubscription: Subscription;
  missionConfirmedSubscription: Subscription;

  constructor(private missionService: MissionService) {}

  ngOnInit() {
    this.createSubject();
    this.createBehavioralSubject();
    this.testAsObservable();
  }

  createSubject() {
    const sub = new Subject<string>();
    sub.next('first value');
    this.subjectValueSubscription = sub.subscribe(val => {
      this.subjectValue = val;
    });
    sub.next('second value');
    setTimeout(() => {
      sub.next('third value');
    }, 1000);
  }

  createBehavioralSubject() {
    const sub = new BehaviorSubject<string>('initial value');
    this.bSubjectValueSubscription = sub.subscribe(val => {
      this.bSubjectValue = val;
    });
    setTimeout(() => {
      sub.next('b second value');
    }, 1000);
  }

  testAsObservable() {
    this.missionService.missionAnnounced$.subscribe(mission => {
      console.log('mission announced', mission);
    });
    this.missionService.missionConfirmed$.subscribe(astronaut => {
      console.log('mission confirmed by', astronaut);
    });
    this.missionService.announceMission('mission1');
    this.missionService.confirmMission('kartik');

    setTimeout(() => {
      this.missionService.announceMission('mission2');
      this.missionService.confirmMission('kartik1');
    }, 3000);
  }

  ngOnDestroy() {
    this.subjectValueSubscription.unsubscribe();
    this.bSubjectValueSubscription.unsubscribe();
  }
}
