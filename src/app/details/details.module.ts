import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DetailsRoutingModule } from './details-routing.module';
import { MatInputModule } from '@angular/material/input';
import { DetailsComponent } from './details.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DetailsComponent,
    EditDialogComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule



  ]
})
export class DetailsModule { }
