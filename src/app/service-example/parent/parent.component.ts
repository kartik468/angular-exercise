import { Component, OnInit } from '@angular/core';
import { CountService } from './../../../app/count.service';

@Component({
  selector: 'kar-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  // providers: [CountService],
  viewProviders: [CountService]
})
export class ParentComponent implements OnInit {

  constructor(
    public service: CountService
  ) { }

  ngOnInit() {
  }

}
