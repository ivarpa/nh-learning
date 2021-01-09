import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCursoPageComponent } from './pages/add-curso-page/add-curso-page.component';

const routes: Routes = [
  {
    path: 'add-book',
    component: AddCursoPageComponent
  }
 ];
 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
