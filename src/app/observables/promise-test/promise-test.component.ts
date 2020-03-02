import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'kar-promise-test',
  templateUrl: './promise-test.component.html',
  styleUrls: ['./promise-test.component.scss']
})
export class PromiseTestComponent implements OnInit {
  constructor(public messageService: MessageService) {}

  ngOnInit() {
    // promise calls eagerly. even there are no subscribers it is got executed.
    const p1 = new Promise((resolve, reject) => {
      console.log('promise calls eagerly. even there are no subscribers it is got executed.');
      console.log('this block get executed only once.. even though we have multiple subs.');
      setTimeout(() => {
        resolve('kartik');
      }, 2000);
    });

    setTimeout(() => {
      p1.then(val => {
        console.log(val);
      });
      p1.then(val => {
        console.log(val);
      });
      p1.then(val => {
        console.log(val);
      });
      p1.catch(err => {
        console.log(err);
      });
    }, 1000);

    this.asyncTest();
  }

  asyncTest() {
    // promises are asynchronous and they get executed before timeouts.
    this.messageService.pushMessage('start async test call function');
    // console.log('1');
    setTimeout(() => {
      this.messageService.pushMessage('first setTimeout');
      // console.log('2');
    }, 0);
    const p1 = new Promise((resolve, reject) => {
      resolve('val1');
    });
    p1.then(val => {
      this.messageService.pushMessage('first subscriber to promise 1, resolved value- ' + val);
      // console.log('p1', val);
    });
    p1.then(val => {
      this.messageService.pushMessage('second subscriber to promise 1, resolved value- ' + val);
      // console.log('p1', val);
    });
    const p2 = Promise.resolve('val2');
    p2.then(val => {
      this.messageService.pushMessage('first subscriber to promise 2, resolved value- ' + val);
      // console.log(val);
    });

    this.messageService.pushMessage('end async test call function');
    // console.log('5');
  }
}
