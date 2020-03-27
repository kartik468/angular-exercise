import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kar-ng-template-outlet-example',
  templateUrl: './ng-template-outlet-example.component.html',
  styleUrls: ['./ng-template-outlet-example.component.scss']
})
export class NgTemplateOutletExampleComponent implements OnInit {
  myContext = { $implicit: 'World', localSk: 'Svet' };

  constructor() {}

  ngOnInit(): void {}
}
