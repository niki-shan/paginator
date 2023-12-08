import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';





const routes = [
  MatCardModule,
  MatButtonModule,
  MatPaginatorModule

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...routes

  ],
  exports : [
    ...routes
  
  ]
})
export class MaterialModule { }
