import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kar-directive-and-pipe',
  templateUrl: './directive-and-pipe.component.html',
  styleUrls: ['./directive-and-pipe.component.scss']
})
export class DirectiveAndPipeComponent implements OnInit {
  phone = '12345';

  firstName = 'asdfdsfasdfdsfasdfdsf';

  hero = {
    name: 'hero1'
  };

  constructor() {}

  ngOnInit() {}
}
