import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {FileHistoryComponent} from './file-history.component';
import {FileHistoryRoutingModule} from './file-history-routing.module';




@NgModule({
  declarations: [FileHistoryComponent],
  imports: [
    CommonModule,
    FileHistoryRoutingModule,
    TranslateModule
  ]
})
export class FileHistoryModule { }
