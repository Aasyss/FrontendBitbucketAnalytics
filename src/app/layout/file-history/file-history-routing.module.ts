import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FileHistoryComponent} from './file-history.component';


const routes: Routes = [
  {
    path: ':slug/:name',
    component: FileHistoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileHistoryRoutingModule { }
