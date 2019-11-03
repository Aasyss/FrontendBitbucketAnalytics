import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule) },
            { path: 'repository', loadChildren: () => import('./repository/repository.module').then(m => m.RepositoryModule) },
            {path: 'commits', loadChildren: () => import('./commits/commits.module').then(m => m.CommitsModule)},
            {path: 'files', loadChildren: () => import('./files/files.module').then(m => m.FilesModule)},
            {path: 'file-history', loadChildren: () => import('./file-history/file-history.module').then(m => m.FileHistoryModule)},


        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
