import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kar-promise-test',
  templateUrl: './promise-test.component.html',
  styleUrls: ['./promise-test.component.scss']
})
export class PromiseTestComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const p1 = new Promise((resolve, reject) => {
      console.log('inside promise..');
      resolve('kartik');
    });
  }
}
