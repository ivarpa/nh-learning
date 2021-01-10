import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './components/course/course.component';
import { CursoContainerComponent } from './components/curso-container/curso-container.component';
import { CursoShortDetailComponent } from './components/curso-short-detail/curso-short-detail.component';



@NgModule({
  declarations: [CourseComponent, CursoContainerComponent, CursoShortDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CourseComponent,
    CursoContainerComponent,
    CursoShortDetailComponent
  ]
})
export class SharedModule { }
