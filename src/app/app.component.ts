import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kartik-site';

  ngOnInit() {
    // console.log('promise and set timeout start');
    console.log('1');
    setTimeout(() => {
      console.log('2');
    }, 0);
    const p1 = new Promise((resolve, reject) => {
      resolve('3');
    });
    p1.then((val) => {
      console.log('p1', val);
    });
    p1.then((val) => {
      console.log('p1', val);
    });
    const p2 = Promise.resolve('4');
    p2.then((val) => {
      console.log(val);
    });

    console.log('5');
    // console.log('promise and set timeout end');
  }
}
