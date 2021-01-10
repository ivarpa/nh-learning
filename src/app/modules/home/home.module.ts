import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CursoDetailPageComponent } from './pages/curso-detail-page/curso-detail-page.component';
import { CourseContainerComponent } from './components/course-container/course-container.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [HomePageComponent, CursoDetailPageComponent, CourseContainerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
