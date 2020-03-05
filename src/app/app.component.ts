import { Component, OnInit } from '@angular/core';
import { WithoutInjectableService } from './services/without-injectable.service';

@Component({
  selector: 'kar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kartik-site';

  inputString1 = '1';
  inputString2 = '2';
  inputObj: { name: string } = { name: '3' };

  constructor(private withoutInjectableService: WithoutInjectableService) {}

  ngOnInit() {
    console.log(this.withoutInjectableService.getData());
    setTimeout(() => {
      this.updateLifeCycleHooksProps();
    }, 6000);
  }

  updateLifeCycleHooksProps() {
    // ngOnChanges only called when there are pure changes
    // you will find these two references in ngOnChanges of lifecycle comp
    this.inputString1 = 'inputString1';
    this.inputString2 = 'inputString2';

    // you will not see the reference for inputObj in ngOnChanges of lifecycle comp
    // because it is not a pure change
    this.inputObj.name = '2';
  }
}
