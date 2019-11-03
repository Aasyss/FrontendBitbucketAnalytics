import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilesComponent} from './files.component';
import {FilesRoutingModule} from './files-routing.module';
import {TranslateModule} from '@ngx-translate/core';




@NgModule({
  declarations: [FilesComponent],
  imports: [
    CommonModule,
    FilesRoutingModule,
    TranslateModule
  ]
})
export class FilesModule { }
