import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { AddCursoPageComponent } from './pages/add-curso-page/add-curso-page.component';


@NgModule({
  declarations: [AddCursoPageComponent, AddCursoPageComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
