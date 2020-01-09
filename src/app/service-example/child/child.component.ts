import { Component, OnInit } from '@angular/core';
import { CountService } from 'src/app/count.service';

@Component({
  selector: 'kar-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor(
    public service: CountService
  ) { }

  ngOnInit() {
  }

}
