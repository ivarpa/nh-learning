import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CursoDetailPageComponent } from './pages/curso-detail-page/curso-detail-page.component';



@NgModule({
  declarations: [HomePageComponent, CursoDetailPageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
