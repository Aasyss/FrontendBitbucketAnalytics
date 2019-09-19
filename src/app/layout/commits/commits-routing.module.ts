import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommitsComponent} from './commits.component';


const routes: Routes = [
  {
    path: ':slug',
    component: CommitsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommitsRoutingModule { }
