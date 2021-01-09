import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddBookPageComponent } from './pages/add-book-page/add-book-page.component';
import { AddCursoPageComponent } from './pages/add-curso-page/add-curso-page.component';


@NgModule({
  declarations: [AddBookPageComponent, AddCursoPageComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
