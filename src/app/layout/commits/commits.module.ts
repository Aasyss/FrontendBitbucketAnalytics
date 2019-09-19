import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommitsRoutingModule } from './commits-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import {CommitsComponent} from './commits.component';


@NgModule({
  declarations: [CommitsComponent],
  imports: [
    CommonModule,
    CommitsRoutingModule,
    TranslateModule
  ]
})
export class CommitsModule { }
