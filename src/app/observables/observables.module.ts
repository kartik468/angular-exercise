import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservablesRoutingModule } from './observables-routing.module';
import { ObservablesComponent } from './observables.component';
import { SimpleObservableComponent } from './simple-observable/simple-observable.component';
import { SubjectsComponent } from './subjects/subjects.component';


@NgModule({
  declarations: [ObservablesComponent, SimpleObservableComponent, SubjectsComponent],
  imports: [
    CommonModule,
    ObservablesRoutingModule
  ]
})
export class ObservablesModule { }
