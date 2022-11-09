import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';


@NgModule({
  declarations: [
    DetailsComponent,
    EditDialogComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    MatButtonModule,

  ]
})
export class DetailsModule { }
