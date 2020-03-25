import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WithoutInjectableService } from './services/without-injectable.service';

@Component({
  selector: 'kar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'App Component';

  inputString1 = 'initial value 1';
  inputString2 = 'initial value 2';
  inputObj: { name: string } = { name: '3' };

  constructor(private withoutInjectableService: WithoutInjectableService) {}

  ngOnInit() {
    console.log(this.withoutInjectableService.getData());
    setTimeout(() => {
      this.updateLifeCycleHooksProps();
    }, 2000);
  }

  ngAfterViewInit() {
    // if we don't wrap it around setTimeout it will throw error saying

    // ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked.
    // Previous value: '1'. Current value: '1 new'

    // this happen because inputString1 value '1' was passed to the child comp (lifecycle comp)
    // and we are setting a new value after child view is initialized

    // this error occurs only in development mode because in development mode.
    // it runs the second digest cycle performing verification operations.
    setTimeout(() => {
      this.inputString1 = 'input string 1 new value';
    }, 0);
  }

  updateLifeCycleHooksProps() {
    // ngOnChanges only called when there are pure changes
    // you will find these two references in ngOnChanges of lifecycle comp
    this.inputString1 = 'inputString1 after timeout';
    this.inputString2 = 'inputString2 after timeout';

    // you will not see the reference for inputObj in ngOnChanges of lifecycle comp
    // because it is not a pure change
    this.inputObj.name = '2';
  }
}
