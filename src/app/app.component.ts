import { Component, OnInit } from '@angular/core';
import { WithoutInjectableService } from './services/without-injectable.service';

@Component({
  selector: 'kar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kartik-site';

  constructor(private withoutInjectableService: WithoutInjectableService) {}

  ngOnInit() {
    console.log(this.withoutInjectableService.getData());
  }
}
