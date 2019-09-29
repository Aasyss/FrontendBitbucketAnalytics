import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { AuthGuard } from './shared';

const routes: Routes = [
  {path:'login',
    component: LoginComponent
  },
  { path: 'dashboard', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule), canActivate:[AuthGuard]},
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
