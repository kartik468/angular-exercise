import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservablesRoutingModule } from './observables-routing.module';
import { ObservablesComponent } from './observables.component';
import { SimpleObservableComponent } from './simple-observable/simple-observable.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { OperatorsComponent } from './operators/operators.component';
import { PromiseTestComponent } from './promise-test/promise-test.component';

@NgModule({
  declarations: [ObservablesComponent, SimpleObservableComponent, SubjectsComponent, OperatorsComponent, PromiseTestComponent],
  imports: [CommonModule, ObservablesRoutingModule]
})
export class ObservablesModule {}
