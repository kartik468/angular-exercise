import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObservablesComponent } from './observables.component';
import { SimpleObservableComponent } from './simple-observable/simple-observable.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { OperatorsComponent } from './operators/operators.component';
import { PromiseTestComponent } from './promise-test/promise-test.component';

const routes: Routes = [
  {
    path: '',
    component: ObservablesComponent,
    children: [
      { path: 'observable', component: SimpleObservableComponent },
      { path: 'subjects', component: SubjectsComponent },
      { path: 'operators', component: OperatorsComponent },
      { path: 'promise', component: PromiseTestComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservablesRoutingModule {}
