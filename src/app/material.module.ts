import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  imports: [MatButtonModule,
  	MatToolbarModule, 
  	MatIconModule, 
  	MatFormFieldModule, 
  	MatInputModule, 
  	MatGridListModule, 
  	MatSelectModule,
  	MatCardModule],
  exports: [
  	MatButtonModule,
  	MatToolbarModule,
  	MatIconModule,
  	MatFormFieldModule,
  	MatInputModule,
  	MatGridListModule,
  	MatSelectModule,
  	MatCardModule],
})
export class MaterialModule { }