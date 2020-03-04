import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClaimsComponent } from './claims.component';
import { CustomerClaimsModule } from 'customer-claims';

@NgModule({
  declarations: [ClaimsComponent],
  imports: [CommonModule, CustomerClaimsModule]
})
export class ClaimsModule {}
