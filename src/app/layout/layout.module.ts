import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {MyInterceptor} from '../shared/interceptor';
import { FileHistoryComponent } from './file-history/file-history.component';



@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule,
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent],
    // providers:[{provide:HTTP_INTERCEPTORS,useClass:MyInterceptor,multi:true}]
})
export class LayoutModule {}
